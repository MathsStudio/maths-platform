/* lessons_kit.js: shared picture helpers for the question-by-question Watch lessons (BT.lk). */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.sv) return;
  var svg = BT.svg, txt = BT.txt, hs = BT.hs;
  var css = document.createElement('style');
  css.textContent = [
    '.lk-col{display:inline-grid;grid-template-columns:repeat(var(--n),clamp(30px,8vw,52px));gap:2px 4px;font-family:var(--font-display);font-weight:700;font-size:clamp(22px,5.4vw,38px);line-height:1.15;text-align:center}',
    '.lk-col .hd{font-family:inherit;font-size:clamp(11px,2.6vw,15px);color:var(--muted);font-weight:800}',
    '.lk-col .cy{font-size:clamp(12px,3vw,18px);color:var(--bad);height:1.1em}',
    '.lk-col .ln{grid-column:1/-1;border-top:3px solid var(--fg);margin:2px 0}',
    '.lk-col .hi{color:var(--accent)}.lk-col .ok{color:var(--good)}.lk-col .x{text-decoration:line-through;color:var(--muted)}',
    '.lk-pair{display:flex;flex-wrap:wrap;gap:12px 28px;justify-content:center;align-items:flex-start;width:100%}',
    '.lk-pair>div{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0}',
    '.lk-tag{display:inline-block;border-radius:10px;padding:3px 10px;font-weight:800;font-size:clamp(13px,3vw,16px)}',
    '.lk-tag.g{background:var(--good);color:#fff}.lk-tag.r{background:var(--bad);color:#fff}.lk-tag.b{background:var(--accent);color:var(--accent-fg)}',
    '.lk-step{font-weight:700;font-size:clamp(15px,3.4vw,20px);text-align:center}'
  ].join('');
  document.head.appendChild(css);

  var LK = BT.lk = {};
  /* column sum: heads e.g. ['','H','T','O']; rows: arrays of cells; a row {line:true} draws the rule; a row {carry:[...]} small red carries.
     a cell may be 'x:7' (crossed out), 'h:7' (highlight), 'k:7' (good colour) */
  LK.col = function (heads, rows) {
    var n = heads.length, s = '<div class="lk-col" style="--n:' + n + '">';
    heads.forEach(function (h) { s += '<div class="hd">' + h + '</div>'; });
    rows.forEach(function (r) {
      if (r.line) { s += '<div class="ln"></div>'; return; }
      if (r.carry) { r.carry.forEach(function (c) { s += '<div class="cy">' + (c || '') + '</div>'; }); return; }
      r.forEach(function (c) {
        c = c === undefined || c === null ? '' : String(c);
        var cls = '';
        if (/^[xhk]:/.test(c)) { cls = { x: 'x', h: 'hi', k: 'ok' }[c[0]]; c = c.slice(2); }
        s += '<div class="' + cls + '">' + c + '</div>';
      });
    });
    return s + '</div>';
  };
  LK.pair = function (a, b, c) { return '<div class="lk-pair"><div>' + a + '</div><div>' + b + '</div>' + (c ? '<div>' + c + '</div>' : '') + '</div>'; };
  LK.tag = function (t, col) { return '<span class="lk-tag ' + (col || 'b') + '">' + t + '</span>'; };
  LK.step = function (t) { return '<div class="lk-step">' + t + '</div>'; };

  /* squared grid c x r; shade: number of squares shaded row by row, or a function(i,j) */
  LK.grid = function (c, r, shade, o) {
    o = o || {}; var u = o.u || Math.min(34, Math.floor(300 / Math.max(c, r))), s = '', x0 = 22, y0 = 8, k = 0;
    for (var j = 0; j < r; j++) for (var i = 0; i < c; i++) {
      var on = typeof shade === 'function' ? shade(i, j) : k < (shade || 0);
      if (on !== 'skip') s += '<rect x="' + (x0 + i * u) + '" y="' + (y0 + j * u) + '" width="' + u + '" height="' + u + '" style="fill:' + (on ? hs(o.hue || 215, 'band') : 'var(--surface)') + ';stroke:var(--fg);stroke-width:' + (on ? 2 : 1) + '"/>';
      k++;
    }
    if (o.w) s += txt(x0 + c * u / 2, y0 + r * u + 20, o.w, 14);
    if (o.h) s += txt(x0 - 12, y0 + r * u / 2 + 5, o.h, 14, 'end');
    var W = x0 + c * u + 12, Hh = y0 + r * u + (o.w ? 28 : 10);
    return svg(W, Hh, o.alt || 'A squared grid', s, Math.min(W, 340));
  };
  /* tally marks for n */
  LK.tally = function (n) {
    var s = '', x = 6, g = Math.floor(n / 5), rem = n % 5;
    for (var a = 0; a < g; a++) { for (var b = 0; b < 4; b++) s += '<line x1="' + (x + b * 9) + '" y1="6" x2="' + (x + b * 9) + '" y2="36" style="stroke:var(--fg);stroke-width:3;stroke-linecap:round"/>'; s += '<line x1="' + (x - 4) + '" y1="32" x2="' + (x + 31) + '" y2="10" style="stroke:var(--bad);stroke-width:3;stroke-linecap:round"/>'; x += 48; }
    for (var c = 0; c < rem; c++) s += '<line x1="' + (x + c * 9) + '" y1="6" x2="' + (x + c * 9) + '" y2="36" style="stroke:var(--fg);stroke-width:3;stroke-linecap:round"/>';
    var W = Math.max(30, x + rem * 9 + 6);
    return svg(W, 42, 'Tally marks for ' + n, s, W);
  };
  /* map grid with letters along the bottom and numbers up the side; items [[col(0-based), row(0-based from bottom), label, hue]] */
  LK.map = function (cols, rows, items, o) {
    o = o || {}; var u = 52, x0 = 34, y0 = 10, s = '';
    for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++) {
      var hit = o.hl && o.hl[0] === i && o.hl[1] === j;
      s += '<rect x="' + (x0 + i * u) + '" y="' + (y0 + (rows - 1 - j) * u) + '" width="' + u + '" height="' + u + '" style="fill:' + (hit ? hs(50, 'band') : 'var(--surface)') + ';stroke:var(--fg);stroke-width:1.5"/>';
    }
    for (var a = 0; a < cols; a++) s += txt(x0 + a * u + u / 2, y0 + rows * u + 20, String.fromCharCode(65 + a), 16);
    for (var b = 0; b < rows; b++) s += txt(x0 - 14, y0 + (rows - 1 - b) * u + u / 2 + 6, b + 1, 16);
    (items || []).forEach(function (it) {
      var cx = x0 + it[0] * u + u / 2, cy = y0 + (rows - 1 - it[1]) * u + u / 2;
      s += '<circle cx="' + cx + '" cy="' + (cy - 6) + '" r="11" style="fill:' + hs(it[3] || 215) + ';stroke:var(--fg);stroke-width:2"/>' + txt(cx, cy + 20, it[2], 11);
    });
    var W = x0 + cols * u + 8, Hh = y0 + rows * u + 30;
    return svg(W, Hh, o.alt || 'A map grid', s, Math.min(W, 340));
  };
  /* circle cut into d equal parts, n shaded */
  LK.pie = function (n, d, o) {
    o = o || {}; var r = o.r || 54, cx = r + 6, cy = r + 6, s = '';
    if (d === 1) s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="fill:' + (n ? hs(o.hue || 280) : 'var(--surface)') + ';stroke:var(--fg);stroke-width:3"/>';
    else for (var i = 0; i < d; i++) {
      var a0 = (i / d) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / d) * 2 * Math.PI - Math.PI / 2;
      var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      s += '<path d="M' + cx + ' ' + cy + ' L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + (1 / d > 0.5 ? 1 : 0) + ' 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" style="fill:' + (i < n ? hs(o.hue || 280) : 'var(--surface)') + ';stroke:var(--fg);stroke-width:2.5"/>';
    }
    return svg(2 * r + 12, 2 * r + 12, o.alt || n + ' of ' + d + ' equal parts shaded', s, 2 * r + 12);
  };
  /* a fraction bar of d parts, n shaded, at a given pixel width so bars can be compared */
  LK.fbar = function (n, d, w, hue, label) {
    w = w || 300; var u = w / d, s = '';
    for (var i = 0; i < d; i++) s += '<rect x="' + (i * u + 2) + '" y="4" width="' + u + '" height="34" style="fill:' + (i < n ? hs(hue || 280) : 'var(--surface)') + ';stroke:var(--fg);stroke-width:2"/>';
    var W = w + 4 + (label ? 24 + String(label).length * 11 : 0);
    if (label) s += txt(w + 14, 28, label, 17, 'start', ';font-weight:700');
    return svg(W, 42, n + ' of ' + d + ' equal parts shaded', s, W);
  };
  /* hundred square with n shaded */
  LK.hsq = function (n, hue) { return LK.grid(10, 10, n, { u: 18, hue: hue || 215, alt: n + ' out of 100 squares shaded' }); };
  /* a simple pictogram row helper: [label, count of symbols (halves allowed)] */
  LK.picto = function (rows, key) {
    var s = '', y = 6;
    rows.forEach(function (r) {
      s += txt(70, y + 22, r[0], 14, 'end');
      for (var i = 0; i < Math.ceil(r[1]); i++) {
        var half = r[1] - i < 1;
        s += half ? '<path d="M' + (96 + i * 34) + ' ' + (y + 2) + ' A15 15 0 0 0 ' + (96 + i * 34) + ' ' + (y + 32) + ' Z" style="fill:' + hs(40) + ';stroke:var(--fg);stroke-width:2"/>'
          : '<circle cx="' + (96 + i * 34) + '" cy="' + (y + 17) + '" r="15" style="fill:' + hs(40) + ';stroke:var(--fg);stroke-width:2"/>';
      }
      y += 40;
    });
    if (key) s += txt(80, y + 18, key, 13, 'start');
    return svg(340, y + (key ? 28 : 6), 'A pictogram', s, 340);
  };
})();
