(function () {
  function post(url, data) {
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .catch(function () { return { ok: false, j: { error: 'No connection. Please check your internet and try again.' } }; });
  }
  function wire(form, url, build, done) {
    if (!form) return;
    var msg = form.querySelector('.msg'), btn = form.querySelector('button[type=submit]');
    form.addEventListener('submit', function (e) {
      e.preventDefault(); msg.className = 'msg'; msg.hidden = true; btn.disabled = true;
      var data; try { data = build(form); } catch (err) { btn.disabled = false; msg.className = 'msg err'; msg.textContent = 'Something went wrong on this page. Please refresh it (Ctrl+Shift+R) and try again.'; msg.hidden = false; return; }
      post(url, data).then(function (res) {
        btn.disabled = false;
        if (res.ok) { done(form, msg, res); }
        else { msg.className = 'msg err'; msg.textContent = res.j.error || 'Something went wrong. Please try again.'; msg.hidden = false; }
      });
    });
  }
  var s = document.getElementById('signup');
  if (s) {
    var q = new URLSearchParams(location.search), y = q.get('year'), em = q.get('email'); if (em) s.email.value = em;
    if (y && s.year.querySelector('option[value="' + y + '"]')) s.year.value = y;
    wire(s, '/api/signup', function (f) { return { email: f.email.value, role: f.role.value, year: f.year.value, marketing: f.marketing.checked, website: f.website.value }; },
      function (f) { f.innerHTML = '<h2>Check your email</h2><p>We sent a link to <b></b>. Open it to confirm your address and choose your password. It can take a minute, so check your junk folder too.</p>'; f.querySelector('b').textContent = f.dataset.email || ''; });
    s.addEventListener('submit', function () { s.dataset.email = s.email ? s.email.value : ''; }, true);
  }
  function go(f, msg, res) { location.href = (res && res.j && res.j.next) || '/account/'; }
  var l = document.getElementById('login');
  if (l) wire(l, '/api/login', function (f) { return { email: f.email.value, password: f.password.value }; }, go);
  var fg = document.getElementById('forgot');
  if (fg) wire(fg, '/api/forgot', function (f) { return { email: f.email.value }; },
    function (f) { f.innerHTML = '<h2>Check your email</h2><p>If that address has an account, we sent a link to choose a new password. It works once and lasts 30 minutes. Check your junk folder too.</p>'; });
  var rs = document.getElementById('reset');
  if (rs) {
    var tk = new URLSearchParams(location.search).get('t') || '';
    rs.addEventListener('submit', function (e) { if (rs.password.value !== rs.password2.value) { e.stopImmediatePropagation(); e.preventDefault(); var m = rs.querySelector('.msg'); m.className = 'msg err'; m.textContent = 'The two passwords do not match. Please type them again.'; m.hidden = false; } }, true);
    wire(rs, '/api/reset', function (f) { return { t: tk, password: f.password.value }; }, go);
  }
})();
