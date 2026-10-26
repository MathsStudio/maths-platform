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
      post(url, build(form)).then(function (res) {
        btn.disabled = false;
        if (res.ok) { done(form, msg); }
        else { msg.className = 'msg err'; msg.textContent = res.j.error || 'Something went wrong. Please try again.'; msg.hidden = false; }
      });
    });
  }
  var s = document.getElementById('signup');
  if (s) {
    var q = new URLSearchParams(location.search), y = q.get('year'), em = q.get('email'); if (em) s.email.value = em;
    if (y && s.year.querySelector('option[value="' + y + '"]')) s.year.value = y;
    wire(s, '/api/signup', function (f) { return { email: f.email.value, role: f.role.value, year: f.year.value, marketing: f.marketing.checked, website: f.website.value }; },
      function (f) { f.innerHTML = '<h2>Check your email</h2><p>We sent a link to <b></b>. Open it to confirm your address and sign in. It can take a minute, so check your junk folder too.</p>'; f.querySelector('b').textContent = f.dataset.email || ''; });
    s.addEventListener('submit', function () { s.dataset.email = s.email ? s.email.value : ''; }, true);
  }
  var l = document.getElementById('login');
  if (l) wire(l, '/api/login', function (f) { return { email: f.email.value }; },
    function (f) { f.innerHTML = '<h2>Check your email</h2><p>If that address has an account, we sent a sign-in link. It works once and lasts 30 minutes.</p>'; });
})();
