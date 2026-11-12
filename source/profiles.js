/* profiles.js: child profiles (first name or nickname + avatar) for one account.
   Each child's progress is saved separately on the server. Avatars are drawn here, so no photos are ever used. */
(function () {
  'use strict';
  var S = Studio;
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  var AV = {
    fox: ['#ffe3b8', '<path d="M14 38L18 10 36 24zM66 38L62 10 44 24z" fill="#f59e0b"/><circle cx="40" cy="44" r="26" fill="#f59e0b"/><path d="M18 50q22 30 44 0q-6 10-22 10t-22-10z" fill="#fff"/><circle cx="31" cy="42" r="4" fill="#14213d"/><circle cx="49" cy="42" r="4" fill="#14213d"/><circle cx="40" cy="52" r="4" fill="#14213d"/>'],
    owl: ['#f0dcc8', '<path d="M18 18l10 8M62 18l-10 8" stroke="#8b5e3c" stroke-width="7" stroke-linecap="round"/><ellipse cx="40" cy="46" rx="26" ry="28" fill="#8b5e3c"/><circle cx="30" cy="40" r="11" fill="#fff"/><circle cx="50" cy="40" r="11" fill="#fff"/><circle cx="30" cy="41" r="5" fill="#14213d"/><circle cx="50" cy="41" r="5" fill="#14213d"/><path d="M36 50l4 8 4-8z" fill="#ffd166"/>'],
    cat: ['#e3e7ef', '<path d="M14 34L16 8 34 22zM66 34L64 8 46 22z" fill="#8d99ae"/><circle cx="40" cy="44" r="26" fill="#8d99ae"/><circle cx="31" cy="42" r="4" fill="#14213d"/><circle cx="49" cy="42" r="4" fill="#14213d"/><path d="M37 50l3 3 3-3z" fill="#ef6f6c"/><path d="M10 48h14M10 54l14-2M70 48H56M70 54l-14-2" stroke="#14213d" stroke-width="2.5" stroke-linecap="round"/>'],
    robot: ['#d6e4ff', '<path d="M40 8v10" stroke="#14213d" stroke-width="4"/><circle cx="40" cy="8" r="5" fill="#ef6f6c"/><rect x="14" y="18" width="52" height="46" rx="12" fill="#2b5fd9"/><circle cx="29" cy="38" r="7" fill="#fff"/><circle cx="51" cy="38" r="7" fill="#fff"/><circle cx="29" cy="38" r="3" fill="#14213d"/><circle cx="51" cy="38" r="3" fill="#14213d"/><path d="M28 54h24" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'],
    penguin: ['#d6e4ff', '<ellipse cx="40" cy="44" rx="26" ry="30" fill="#14213d"/><ellipse cx="40" cy="52" rx="16" ry="20" fill="#fff"/><circle cx="31" cy="36" r="4" fill="#fff"/><circle cx="49" cy="36" r="4" fill="#fff"/><circle cx="31" cy="36" r="2" fill="#14213d"/><circle cx="49" cy="36" r="2" fill="#14213d"/><path d="M34 42l6 8 6-8z" fill="#f59e0b"/>'],
    dino: ['#c9f0dc', '<path d="M22 20l6-10 6 10 6-12 6 12 6-10 6 10z" fill="#1f7a52"/><rect x="14" y="20" width="52" height="46" rx="22" fill="#2f9e6e"/><circle cx="30" cy="40" r="5" fill="#fff"/><circle cx="50" cy="40" r="5" fill="#fff"/><circle cx="31" cy="41" r="2.5" fill="#14213d"/><circle cx="51" cy="41" r="2.5" fill="#14213d"/><path d="M28 54q12 10 24 0" fill="none" stroke="#14213d" stroke-width="3.5" stroke-linecap="round"/>'],
    rocket: ['#ffd9d6', '<path d="M40 6c14 10 18 28 14 44H26C22 34 26 16 40 6z" fill="#fff" stroke="#14213d" stroke-width="3"/><circle cx="40" cy="30" r="7" fill="#2b5fd9" stroke="#14213d" stroke-width="3"/><path d="M26 42l-10 14 12-4zM54 42l10 14-12-4z" fill="#ef6f6c" stroke="#14213d" stroke-width="3"/><path d="M34 54q6 18 12 0z" fill="#f59e0b"/>'],
    star: ['#fff0c2', '<path d="M40 6l10 22 24 3-18 16 5 24-21-12-21 12 5-24L6 31l24-3z" fill="#ffd166" stroke="#14213d" stroke-width="3" stroke-linejoin="round"/><circle cx="33" cy="38" r="3" fill="#14213d"/><circle cx="47" cy="38" r="3" fill="#14213d"/><path d="M33 47q7 6 14 0" fill="none" stroke="#14213d" stroke-width="3" stroke-linecap="round"/>']
  };
  var NAMES = { fox: 'Fox', owl: 'Owl', cat: 'Cat', robot: 'Robot', penguin: 'Penguin', dino: 'Dinosaur', rocket: 'Rocket', star: 'Star' };
  var KEYS = Object.keys(AV);
  function av(k, size) {
    var a = AV[k] || AV.star;
    return '<svg viewBox="0 0 80 80" width="' + size + '" height="' + size + '" role="img" aria-label="' + (NAMES[k] || 'Star') + ' avatar"><circle cx="40" cy="40" r="40" fill="' + a[0] + '"/><g transform="translate(5 6) scale(.86)">' + a[1] + '</g></svg>';
  }
  S.avatarSvg = av;

  var css = document.createElement('style');
  css.textContent = '#whoPop{position:fixed;inset:0;z-index:9998;background:var(--bg);color:var(--fg);display:flex;flex-direction:column;align-items:center;overflow:auto;padding:24px 16px 40px}' +
    '.who-top{display:flex;align-items:center;gap:10px;font-family:var(--font-display,inherit);font-weight:700;font-size:1.3rem;margin:0 0 8px;align-self:flex-start;width:100%;max-width:980px}.who-top .st{color:#2b5fd9}' +
    '#whoPop .card{max-width:760px;width:100%;margin:auto 0;background:transparent!important;border:0!important;box-shadow:none!important;text-align:center;padding:0!important}' +
    '#whoPop h2{font-size:clamp(1.7rem,5vw,2.4rem);margin:0 0 6px!important}#whoPop .note{font-size:1.05rem}' +
    '.who-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:22px;margin:28px 0}.who-grid>div{width:150px}' +
    '.who-card{width:100%;border:3px solid var(--line);border-radius:24px;background:var(--surface);color:var(--fg);padding:16px 8px;text-align:center;font:inherit;cursor:pointer;min-height:44px;box-shadow:0 5px 0 var(--line)}' +
    '.who-card:hover,.who-card:focus-visible{border-color:var(--accent)}' +
    '.who-card b{display:block;margin-top:8px;font-size:1.15rem;overflow-wrap:anywhere}.who-card.on{border-color:var(--accent);background:var(--surface-2)}.who-card.add{border-style:dashed;color:var(--accent);box-shadow:none;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center}' +
    '.who-plus{width:64px;height:64px;border-radius:50%;border:3px dashed var(--accent);display:grid;place-items:center;font-size:2.2rem;margin:0 auto}' +
    '.who-edit{display:block;margin:8px auto 0;background:none;border:0;color:var(--muted);text-decoration:underline;font:inherit;font-size:.9rem;cursor:pointer;min-height:36px}' +
    '#whoX{position:fixed;top:14px;right:14px;z-index:9999}' +
    '.who-av{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:380px;margin:10px auto 16px}.who-av button{border:3px solid var(--line);border-radius:18px;background:var(--surface);padding:4px;cursor:pointer;line-height:0}' +
    '.who-av button[aria-pressed="true"]{border-color:var(--accent);box-shadow:0 0 0 3px #ffd166}.who-av svg{width:100%;height:auto}' +
    '.who-in{margin-top:8px;border:3px solid var(--line);border-radius:14px;padding:12px 14px;font:inherit;font-size:1.2rem;background:var(--surface);color:var(--fg);width:100%;max-width:340px;box-sizing:border-box;text-align:center}' +
    '.who-msg{min-height:1.3em;color:var(--bad);font-weight:700;margin:6px 0}' +
    '#whoBar{display:flex;flex-wrap:wrap;align-items:center;gap:12px;background:var(--surface);border:2px solid var(--line);border-radius:20px;padding:12px 16px;margin:10px 0}#whoBar[hidden]{display:none}' +
    '.wb-av{line-height:0}.wb-t{flex:1 1 140px;min-width:0}.wb-s{color:var(--muted);font-weight:700;font-size:.85rem}.wb-n{font-weight:800;font-size:1.3rem;overflow-wrap:anywhere}.wb-b{display:flex;flex-wrap:wrap;gap:10px}' +
    '.wb-btn{display:inline-flex;align-items:center;border:0;border-radius:16px;font:inherit;font-weight:800;font-size:1.05rem;padding:12px 18px;min-height:48px;cursor:pointer}.wb-soft{background:var(--surface-2);color:var(--fg)}.wb-blue{background:#2b62d9;color:#fff;box-shadow:0 4px 0 #1b3f9a}';
  document.head.appendChild(css);

  var LOGO = '<div class="who-top"><svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#2b5fd9"/><path d="M16 47V21L32 39L48 21V47" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="15" r="4.5" fill="#ffd166"/></svg><span>Maths<span class="st">Studio</span></span></div>';
  var list = [], cur = null, onPick = null, signed = false;
  function api(body) {
    return fetch('/api/learners', body ? { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : { credentials: 'same-origin' })
      .then(function (r) { return r.json().then(function (j) { j.ok = r.ok; return j; }); });
  }
  function remember(l) { try { sessionStorage.setItem('pm-learner', l ? String(l.id) : ''); } catch (e) { } }
  /* A bar of its own under the top buttons: who is learning, switch child, and a big Add a child button. */
  function chip() {
    var b = document.getElementById('whoBar');
    if (!b) {
      var head = document.querySelector('header.top'); if (!head) return;
      b = document.createElement('section'); b.id = 'whoBar'; b.setAttribute('aria-label', 'Child profile'); head.after(b);
    }
    if (!signed) { b.hidden = true; return; }
    b.hidden = false;
    var canAdd = list.length < 4;
    b.innerHTML = (cur ? '<span class="wb-av">' + av(cur.avatar, 56) + '</span><div class="wb-t"><div class="wb-s">Learning as</div><div class="wb-n">' + esc(cur.name) + '</div></div>'
        : '<span class="wb-av">' + av('star', 56) + '</span><div class="wb-t"><div class="wb-n">Add your child</div><div class="wb-s">Each child keeps their own progress and badges.</div></div>') +
      '<div class="wb-b">' + (list.length > 1 ? '<button class="wb-btn wb-soft" type="button" id="whoSwitch">Switch child</button>' : '') +
      (canAdd ? '<button class="wb-btn wb-blue" type="button" id="whoAddBtn">+ Add a child</button>' : '') + '</div>';
    var sw = b.querySelector('#whoSwitch'); if (sw) sw.onclick = function () { open(false); };
    var ad = b.querySelector('#whoAddBtn'); if (ad) ad.onclick = function () { open(false, false, true); };
  }
  function close() { var o = document.getElementById('whoPop'); if (o) o.remove(); }
  function choose(l) { cur = l; remember(l); close(); chip(); if (onPick) onPick(l); }

  function open(force, first, direct) {
    close();
    var o = document.createElement('div'); o.id = 'whoPop'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true'); o.setAttribute('aria-labelledby', 'whoH');
    document.body.appendChild(o);
    function draw() {
      var canClose = !force && (cur || !list.length);
      o.innerHTML = LOGO + (canClose ? '<button class="btn ghost" type="button" id="whoX" aria-label="Close">✕ Close</button>' : '') + '<section class="card">' +
        '<h2 id="whoH" style="margin:0 0 4px">' + (list.length ? 'Who is learning today?' : 'Add a child') + '</h2>' +
        '<p class="note" style="margin:0">' + (list.length ? 'Pick a profile. Each child keeps their own progress.' : 'Give each child a profile so their progress is kept separately.') + '</p>' +
        '<div class="who-grid">' + list.map(function (l) {
          return '<div><button class="who-card' + (cur && cur.id === l.id ? ' on' : '') + '" type="button" data-pick="' + l.id + '">' + av(l.avatar, 80) + '<b>' + esc(l.name) + '</b></button><button class="who-edit" type="button" data-edit="' + l.id + '" aria-label="Edit ' + esc(l.name) + '">Edit</button></div>';
        }).join('') + (list.length < 4 ? '<div><button class="who-card add" type="button" id="whoAdd"><div class="who-plus" aria-hidden="true">+</div><b>Add a child</b></button></div>' : '') + '</div>' +
        '<p class="note" style="margin:0">A first name or a nickname is enough. No photos are used.</p></section>';
      var x = o.querySelector('#whoX'); if (x) x.onclick = close;
      [].forEach.call(o.querySelectorAll('[data-pick]'), function (b) { b.onclick = function () { choose(list.filter(function (l) { return l.id === Number(b.dataset.pick); })[0]); }; });
      [].forEach.call(o.querySelectorAll('[data-edit]'), function (b) { b.onclick = function () { form(list.filter(function (l) { return l.id === Number(b.dataset.edit); })[0]); }; });
      var a = o.querySelector('#whoAdd'); if (a) a.onclick = function () { form(null); };
      var f = o.querySelector('[data-pick]') || a; if (f) f.focus();
      if (!list.length) form(null);
    }
    function form(l) {
      var sel = l ? l.avatar : KEYS[0], card = o.querySelector('.card');
      var welcome = first && !l && !list.length;
      card.innerHTML = '<h2 id="whoH" style="margin:0 0 8px">' + (l ? 'Edit profile' : welcome ? 'Who will be learning?' : 'Add a child') + '</h2>' + (welcome ? '<p class="note" style="margin:0 0 14px">Add a child so each child keeps their own progress, badges and certificates. You can skip this and add a child later.</p>' : '') +
        '<label for="whoName" style="font-weight:800">First name or nickname</label><br><input id="whoName" class="who-in" maxlength="20" autocomplete="off" value="' + (l ? esc(l.name) : '') + '">' +
        '<p style="font-weight:800;margin:14px 0 0">Choose an avatar</p><div class="who-av" role="group" aria-label="Avatars">' + KEYS.map(function (k) { return '<button type="button" data-av="' + k + '" aria-pressed="' + (k === sel) + '" aria-label="' + NAMES[k] + '">' + av(k, 64) + '</button>'; }).join('') + '</div>' +
        '<div class="who-msg" id="whoMsg" role="alert"></div>' +
        '<div class="row" style="gap:10px;flex-wrap:wrap;justify-content:center"><button class="btn" type="button" id="whoSave">Save profile</button><button class="btn ghost" type="button" id="whoCancel">' + (welcome ? 'Skip for now' : 'Cancel') + '</button>' + (l ? '<button class="btn ghost" type="button" id="whoDel">Delete profile</button>' : '') + '</div>' +
        '<p class="note" style="margin:10px 0 0">You can change the name or avatar, or delete a profile, at any time. Deleting a profile also deletes that child\'s progress.</p>';
      var msg = card.querySelector('#whoMsg');
      [].forEach.call(card.querySelectorAll('[data-av]'), function (b) { b.onclick = function () { sel = b.dataset.av; [].forEach.call(card.querySelectorAll('[data-av]'), function (c) { c.setAttribute('aria-pressed', String(c === b)); }); }; });
      card.querySelector('#whoCancel').onclick = function () { if (welcome) { try { sessionStorage.setItem('pm-skip', '1'); } catch (e) { } close(); chip(); if (onPick) onPick(null); } else if (!list.length) close(); else draw(); };
      card.querySelector('#whoName').focus();
      card.querySelector('#whoSave').onclick = function () {
        var name = card.querySelector('#whoName').value; msg.textContent = '';
        api(l ? { action: 'update', id: l.id, name: name, avatar: sel } : { action: 'add', name: name, avatar: sel }).then(function (j) {
          if (!j.ok) { msg.textContent = j.error || 'Could not save. Please try again.'; return; }
          list = j.learners || [];
          if (!l) { var made = list[list.length - 1]; if (made) { choose(made); return; } }
          if (cur) cur = list.filter(function (x) { return x.id === cur.id; })[0] || cur;
          chip(); draw();
        }).catch(function () { msg.textContent = 'Could not save. Check your connection and try again.'; });
      };
      var del = card.querySelector('#whoDel');
      if (del) del.onclick = function () {
        del.textContent = 'Yes, delete ' + l.name; del.onclick = function () {
          api({ action: 'delete', id: l.id }).then(function (j) {
            if (!j.ok) { msg.textContent = j.error || 'Could not delete.'; return; }
            list = j.learners || [];
            if (cur && cur.id === l.id) { cur = null; remember(null); chip(); close(); if (onPick) onPick(null); if (list.length) open(true); return; }
            chip(); draw();
          });
        };
      };
    }
    o.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !force && (cur || !list.length)) close(); });
    draw();
    if (direct && list.length) form(null);
  }

  /* Called once the visitor is known to be signed in. cb(learner or null) says whose progress to load. */
  S.profiles = {
    init: function (cb) {
      onPick = cb; signed = true;
      api().then(function (j) {
        list = (j && j.learners) || [];
        var saved = ''; try { saved = sessionStorage.getItem('pm-learner') || ''; } catch (e) { }
        var m = list.filter(function (l) { return String(l.id) === saved; })[0];
        if (m) { cur = m; chip(); cb(m); return; }
        cur = null; chip();
        var skipped = ''; try { skipped = sessionStorage.getItem('pm-skip') || ''; } catch (e) { }
        if (list.length) open(true); else if (!skipped) open(true, true); else cb(null);
      }).catch(function () { cb(null); });
    },
    open: function () { open(false); }
  };
})();
