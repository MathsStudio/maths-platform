/* lessons_new_px.js: compact lesson helper for P5-P7. BT.px = {X, tbl, bar, nl, rect, grid, h} */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.fxh) return;
  var H = BT.fxh, E = H.E, M = H.M, T = H.T, LS = H.LS;
  var h = function (x) { return 'h|' + x; };
  var tbl = function (rows) { return h('<table style="border-collapse:collapse;margin:4px auto;font-size:15px">' + rows.map(function (r, i) { return '<tr>' + r.map(function (c) { return '<' + (i === 0 ? 'th' : 'td') + ' style="border:1.5px solid currentColor;padding:3px 10px;text-align:center">' + c + '</' + (i === 0 ? 'th' : 'td') + '>'; }).join('') + '</tr>'; }).join('') + '</table>'); };
  var bar = function (n, d, w) { w = w || 240; var s = '<svg viewBox="0 0 ' + (w + 4) + ' 40" style="width:100%;max-width:' + (w + 4) + 'px"><title>' + n + ' out of ' + d + ' parts shaded</title>'; for (var i = 0; i < d; i++) s += '<rect x="' + (2 + i * w / d) + '" y="4" width="' + (w / d) + '" height="30" style="fill:' + (i < n ? '#2b62d9' : 'none') + ';stroke:currentColor;stroke-width:2"/>'; return h(s + '</svg>'); };
  /* number line: nl(lo, hi, step, marks[{v,l}]) */
  var nl = function (lo, hi, step, marks, title) { var W = 300, x0 = 20, x1 = W - 10, f = function (v) { return x0 + (x1 - x0) * (v - lo) / (hi - lo); }; var s = '<svg viewBox="0 0 ' + W + ' 70" style="width:100%;max-width:' + W + 'px"><title>' + (title || 'Number line from ' + lo + ' to ' + hi) + '</title><line x1="' + x0 + '" y1="30" x2="' + x1 + '" y2="30" style="stroke:currentColor;stroke-width:2"/>'; for (var v = lo; v <= hi + 1e-9; v += step) { s += '<line x1="' + f(v) + '" y1="24" x2="' + f(v) + '" y2="36" style="stroke:currentColor;stroke-width:2"/><text x="' + f(v) + '" y="52" text-anchor="middle" font-size="11" fill="currentColor">' + (Math.round(v * 1000) / 1000) + '</text>'; } (marks || []).forEach(function (m) { s += '<circle cx="' + f(m.v) + '" cy="30" r="6" fill="#d9362b"/><text x="' + f(m.v) + '" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">' + (m.l || '') + '</text>'; }); return h(s + '</svg>'); };
  var rect = function (w, hh, lw, lh) { var s = 24, W = w * s, Hh = hh * s; return h('<svg viewBox="0 0 ' + (W + 60) + ' ' + (Hh + 40) + '" style="width:100%;max-width:' + (W + 60) + 'px"><title>Rectangle ' + lw + ' by ' + lh + '</title><rect x="30" y="8" width="' + W + '" height="' + Hh + '" style="fill:none;stroke:currentColor;stroke-width:2.5"/><text x="' + (30 + W / 2) + '" y="' + (Hh + 28) + '" text-anchor="middle" font-size="14" fill="currentColor">' + lw + '</text><text x="12" y="' + (8 + Hh / 2) + '" text-anchor="middle" font-size="14" fill="currentColor">' + lh + '</text></svg>'); };
  var grid = function (cols, rows, pts, title) { var s = 30, o = 28, svg = '<svg viewBox="0 0 ' + (cols * s + 50) + ' ' + (rows * s + 58) + '" style="width:100%;max-width:' + (cols * s + 50) + 'px"><title>' + (title || 'Grid with labelled points') + '</title>'; for (var i = 0; i <= cols; i++) svg += '<line x1="' + (o + i * s) + '" y1="10" x2="' + (o + i * s) + '" y2="' + (10 + rows * s) + '" style="stroke:currentColor;stroke-width:1;opacity:.5"/><text x="' + (o + i * s) + '" y="' + (rows * s + 28) + '" text-anchor="middle" font-size="12" fill="currentColor">' + i + '</text>'; for (var j = 0; j <= rows; j++) svg += '<line x1="' + o + '" y1="' + (10 + j * s) + '" x2="' + (o + cols * s) + '" y2="' + (10 + j * s) + '" style="stroke:currentColor;stroke-width:1;opacity:.5"/><text x="' + (o - 12) + '" y="' + (14 + (rows - j) * s) + '" text-anchor="middle" font-size="12" fill="currentColor">' + j + '</text>'; (pts || []).forEach(function (p) { svg += '<circle cx="' + (o + p[0] * s) + '" cy="' + (10 + (rows - p[1]) * s) + '" r="5" fill="#d9362b"/><text x="' + (o + p[0] * s + 8) + '" y="' + (10 + (rows - p[1]) * s - 6) + '" font-size="13" font-weight="bold" fill="currentColor">' + p[2] + '</text>'; }); svg += '<text x="' + (o + cols * s / 2) + '" y="' + (rows * s + 50) + '" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">x (across)</text><text transform="translate(8 ' + (10 + rows * s / 2) + ') rotate(-90)" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">y (up)</text>'; return h(svg + '</svg>'); };
  /* X(title, goal, head, [sub, say, lines], [[sub, say, lines]...], [[sub, say, wrong, right]...], [say, lines], [[q, say, work, ans, fig]...], [say, points]) */
  var X = function (title, goal, head, rule, exs, mist, real, turns, rec) {
    return LS(title, goal, head, E(rule[0], [rule[1], rule[2]]),
      exs.map(function (e) { return E(e[0], [e[1], e[2]]); }),
      mist.map(function (m) { return M(m[0], m[1], m[2], m[3]); }),
      [real[0], real[1]],
      turns.map(function (t) { return T(t[0], t[1], t[2], t[3], t[4]); }),
      [rec[0], rec[1]]);
  };
  var shape = function (pts, labels, title) {
    var n = pts.length, s = '<svg viewBox="0 0 200 130" style="width:100%;max-width:220px"><title>' + title + '</title><polygon points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '" style="fill:none;stroke:currentColor;stroke-width:2.5"/>';
    (labels || []).forEach(function (l) {
      var x = l[0], y = l[1], t = String(l[2]), best = -1, bd = 1e9, i;
      if (/°|^\?$/.test(t)) {
        for (i = 0; i < n; i++) { var d = Math.hypot(pts[i][0] - x, pts[i][1] - y); if (d < bd) { bd = d; best = i; } }
        if (bd < 45) {
          var v = pts[best], a = pts[(best + n - 1) % n], b = pts[(best + 1) % n];
          var ua = [a[0] - v[0], a[1] - v[1]], ub = [b[0] - v[0], b[1] - v[1]], la = Math.hypot(ua[0], ua[1]), lb = Math.hypot(ub[0], ub[1]);
          ua = [ua[0] / la, ua[1] / la]; ub = [ub[0] / lb, ub[1] / lb];
          var bx = ua[0] + ub[0], by = ua[1] + ub[1], bl = Math.hypot(bx, by) || 1; bx /= bl; by /= bl;
          var half = Math.acos(Math.max(-1, Math.min(1, ua[0] * ub[0] + ua[1] * ub[1]))) / 2;
          var dist = Math.min(Math.max(24, 15 / Math.max(Math.sin(half), 0.2)), 0.8 * Math.min(la, lb));
          x = v[0] + bx * dist; y = v[1] + by * dist;
        }
      }
      s += '<text x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" dy=".35em" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">' + t + '</text>';
    });
    return h(s + '</svg>');
  };
  var pie = function (parts, title) { var cx = 70, cy = 70, r = 60, a0 = -Math.PI / 2, s = '<svg viewBox="0 0 280 164" style="width:100%;max-width:280px"><title>' + title + '</title><text x="140" y="14" text-anchor="middle" font-size="13" font-weight="bold" fill="currentColor">' + title + '</text><g transform="translate(0 24)">', cols = ['#2b62d9', '#d9362b', '#1f9d55', '#e0a800']; parts.forEach(function (p, i) { var a1 = a0 + 2 * Math.PI * p[1]; var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1); s += '<path d="M' + cx + ',' + cy + ' L' + x0 + ',' + y0 + ' A' + r + ',' + r + ' 0 ' + (p[1] > 0.5 ? 1 : 0) + ',1 ' + x1 + ',' + y1 + ' Z" fill="' + cols[i] + '" stroke="#fff" stroke-width="2"/><rect x="160" y="' + (20 + i * 26) + '" width="14" height="14" fill="' + cols[i] + '"/><text x="182" y="' + (32 + i * 26) + '" font-size="14" fill="currentColor">' + p[0] + '</text>'; a0 = a1; }); return h(s + '</g></svg>'); };
  var barm = function (parts, total, title) { var w = 280, s = '<svg viewBox="0 0 300 70" style="width:100%;max-width:300px"><title>' + title + '</title>', x = 10; parts.forEach(function (p, i) { var pw = w * p[1] / total; s += '<rect x="' + x + '" y="20" width="' + pw + '" height="28" style="fill:' + (i % 2 ? '#d6e4ff' : '#bfe3cc') + ';stroke:currentColor;stroke-width:2"/><text x="' + (x + pw / 2) + '" y="39" text-anchor="middle" font-size="13" fill="currentColor">' + p[0] + '</text>'; x += pw; }); s += '<text x="150" y="12" text-anchor="middle" font-size="12" fill="currentColor">Total ' + total + '</text>'; return h(s + '</svg>'); };
  BT.px = {  shape: shape, pie: pie, barm: barm, X: X, tbl: tbl, bar: bar, nl: nl, rect: rect, grid: grid, h: h };
})();
