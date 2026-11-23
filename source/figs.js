/* figs.js: small drawn figures for the written working: the value being used is highlighted in orange */
(function () {
  var BT = window.BT; if (!BT) return;
  var HI = '#e8590c', FG = 'var(--fg)', SOFT = 'rgba(232,89,12,.16)', R = Math.PI / 180;
  function ln(x1, y1, x2, y2, hi, dash, w) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" style="stroke:' + (hi ? HI : FG) + ';stroke-width:' + (w || (hi ? 5 : 3)) + ';stroke-linecap:round' + (dash ? ';stroke-dasharray:6 5' : '') + '"/>'; }
  function tx(x, y, t, hi, anchor, size) { return '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || 'middle') + '" style="fill:' + (hi ? HI : FG) + ';font-size:' + (size || 22) + 'px;font-weight:800">' + t + '</text>'; }
  function pg(pts, fill, hi) { return '<polygon points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '" style="fill:' + (fill || 'none') + ';stroke:' + (hi ? HI : FG) + ';stroke-width:3;stroke-linejoin:round"/>'; }
  function ci(cx, cy, r, fill, hi) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="fill:' + (fill || 'none') + ';stroke:' + (hi ? HI : FG) + ';stroke-width:3"/>'; }
  function dot(x, y, hi) { return '<circle cx="' + x + '" cy="' + y + '" r="4" style="fill:' + (hi ? HI : FG) + '"/>'; }
  /* arc at (cx,cy) from math angle a0 to a1 (degrees, anticlockwise on screen) */
  function ar(cx, cy, r, a0, a1, hi) {
    var x0 = cx + r * Math.cos(a0 * R), y0 = cy - r * Math.sin(a0 * R), x1 = cx + r * Math.cos(a1 * R), y1 = cy - r * Math.sin(a1 * R), big = Math.abs(a1 - a0) > 180 ? 1 : 0;
    return '<path d="M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + big + ' 0 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + '" style="fill:none;stroke:' + (hi ? HI : FG) + ';stroke-width:' + (hi ? 4 : 2.5) + '"/>';
  }
  function rm(x, y, ux, uy, vx, vy, hi) { var s = 13; return '<polyline points="' + (x + ux * s) + ',' + (y + uy * s) + ' ' + (x + ux * s + vx * s) + ',' + (y + uy * s + vy * s) + ' ' + (x + vx * s) + ',' + (y + vy * s) + '" style="fill:none;stroke:' + (hi ? HI : FG) + ';stroke-width:2.5"/>'; }
  function svg(w, h, inner, alt, max) { return '<div class="sv-fig" style="display:flex;justify-content:center;margin:4px 0"><svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" style="max-width:' + (max || w) + 'px;height:auto" role="img" aria-label="' + (alt || 'A figure') + '">' + inner + '</svg></div>'; }
  function ang(a) { return a; }
  /* the angle at vertex V between the directions to P and Q */
  function vang(V, P, Q) { var a = Math.atan2(-(P[1] - V[1]), P[0] - V[0]) / R, b = Math.atan2(-(Q[1] - V[1]), Q[0] - V[0]) / R; while (a < 0) a += 360; while (b < 0) b += 360; var d = b - a; if (d > 180) d -= 360; if (d < -180) d += 360; return d >= 0 ? [a, a + d] : [b, b - d]; }
  /* any polygon: o.ang = {index: [label, hi]}, o.side = {index: [label, hi]} (side i runs from point i to i+1), o.right = [indices], o.fill */
  function poly(pts, o) {
    o = o || {}; var s = pg(pts, o.fill || 'none'), n = pts.length, cx = 0, cy = 0; pts.forEach(function (p) { cx += p[0] / n; cy += p[1] / n; });
    Object.keys(o.side || {}).forEach(function (k) { k = +k; var a = pts[k], b = pts[(k + 1) % n], v = o.side[k], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = mx - cx, dy = my - cy, d = Math.sqrt(dx * dx + dy * dy) || 1;
      if (v[1]) s += ln(a[0], a[1], b[0], b[1], true); s += tx(mx + dx / d * 17, my + dy / d * 17 + 5, v[0], v[1]); });
    (o.right || []).forEach(function (i) { var V = pts[i], P = pts[(i + n - 1) % n], Q = pts[(i + 1) % n], l1 = Math.hypot(P[0] - V[0], P[1] - V[1]), l2 = Math.hypot(Q[0] - V[0], Q[1] - V[1]); s += rm(V[0], V[1], (P[0] - V[0]) / l1, (P[1] - V[1]) / l1, (Q[0] - V[0]) / l2, (Q[1] - V[1]) / l2, o.rhi && o.rhi.indexOf(i) >= 0); });
    Object.keys(o.ang || {}).forEach(function (k) { k = +k; var V = pts[k], P = pts[(k + n - 1) % n], Q = pts[(k + 1) % n], v = o.ang[k], r = v[2] || 24, aa = vang(V, P, Q), mid = (aa[0] + aa[1]) / 2;
      s += ar(V[0], V[1], r, aa[0], aa[1], v[1]); var tw = String(v[0]).length * 11, hf = Math.max(Math.abs(aa[1] - aa[0]) / 2, 8), dd = Math.min(85, Math.max(r + 16 + tw / 2, (tw / 2 + 4) / Math.sin(hf * R))); s += tx(V[0] + dd * Math.cos(mid * R), V[1] - dd * Math.sin(mid * R) + 6, v[0], v[1], 'middle', 20); });
    (o.pts || []).forEach(function (p) { s += tx(p[1], p[2], p[0], false, 'middle', 20); });
    return s;
  }
  var F = BT.F = { ln: ln, tx: tx, pg: pg, ci: ci, dot: dot, ar: ar, svg: svg, poly: poly };
  /* a right-angled triangle: legs a (up) and b (across), hypotenuse c. o: {a,b,c labels, hi: 'a'|'b'|'c'|angle, ratio, angle label} */
  F.rt = function (o) {
    var rr = o.ratio || 0.75, H = rr > 0.62 ? 105 : Math.round(170 * rr), W = rr > 0.62 ? Math.round(105 / rr) : 170, P = [30, 128], Q = [30 + W, 128], T = [30 + W, 128 - H], hi = o.hi || '', s = pg([P, Q, T], 'none');
    s += rm(Q[0], Q[1], -1, 0, 0, -1, false);
    if (hi === 'a') s += ln(Q[0], Q[1], T[0], T[1], true); if (hi === 'b') s += ln(P[0], P[1], Q[0], Q[1], true); if (hi === 'c') s += ln(P[0], P[1], T[0], T[1], true);
    if (o.a) s += tx(Q[0] + 12, 128 - H / 2 + 5, o.a, hi === 'a', 'start'); if (o.b) s += tx(P[0] + W / 2, 128 + 24, o.b, hi === 'b'); if (o.c) s += tx(P[0] + W / 2 - 16, 128 - H / 2 - 12, o.c, hi === 'c');
    if (o.angle) { var th = Math.atan(H / W) / R; s += ar(P[0], P[1], 34, 0, th, hi === 'angle'); s += tx(P[0] + 60 * Math.cos(th / 2 * R), P[1] - 60 * Math.sin(th / 2 * R) + 6, o.angle, hi === 'angle', 'middle'); }
    if (o.angleT) { var th2 = Math.atan(H / W) / R; s += ar(T[0], T[1], 30, 180 + th2, 270, hi === 'angleT'); s += tx(T[0] - 44, T[1] + 30, o.angleT, hi === 'angleT', 'end'); }
    return svg(260, 160, s, 'A right-angled triangle');
  };
  /* an angle in a triangle drawn with its three angles: labels a, b, c; hi = array of indices */
  F.tri = function (la, hi, sides, o) {
    var pts = (o && o.pts) || [[28, 128], [232, 128], [130, 28]], ang2 = {}; hi = hi || [];
    la.forEach(function (t, i) { if (t !== null && t !== undefined && t !== '') ang2[i] = [t, hi.indexOf(i) >= 0, 24]; });
    var sd = {}; (sides || []).forEach(function (t, i) { if (t) sd[i] = [t, false]; });
    return svg(260, 160, poly(pts, { ang: ang2, side: sd, fill: o && o.fill }), 'A triangle');
  };
  F.quad = function (kind, la, hi) {
    var pts = kind === 'kite' ? [[130, 14], [200, 70], [130, 146], [60, 70]] : kind === 'para' ? [[60, 130], [190, 130], [230, 36], [100, 36]] : kind === 'trap' ? [[30, 130], [230, 130], [190, 36], [80, 36]] : [[40, 130], [220, 130], [220, 30], [40, 30]], a = {}; hi = hi || [];
    la.forEach(function (t, i) { if (t) a[i] = [t, hi.indexOf(i) >= 0, 22]; });
    return svg(260, 160, poly(pts, { ang: a }), 'A quadrilateral');
  };
  /* circle pictures */
  F.circle = function (k, o) {
    o = o || {}; var c = [130, 80], r = 62, s = '';
    if (k === 'sector') { var a = o.deg || 90, x1 = c[0] + r * Math.cos(a * R), y1 = c[1] - r * Math.sin(a * R);
      s += ci(c[0], c[1], r, 'none') + '<path d="M' + c[0] + ' ' + c[1] + ' L' + (c[0] + r) + ' ' + c[1] + ' A' + r + ' ' + r + ' 0 ' + (a > 180 ? 1 : 0) + ' 0 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' Z" style="fill:' + SOFT + ';stroke:' + HI + ';stroke-width:4"/>' + dot(c[0], c[1]);
      var lb = String(o.label || (a + '°')), tw2 = lb.length * 12, dl = a < 75 ? r + 24 : Math.min(r - 16, Math.max(34, (tw2 / 2 + 4) / Math.sin(a / 2 * R))); s += tx(c[0] + dl * Math.cos(a / 2 * R), c[1] - dl * Math.sin(a / 2 * R) + 6, lb, true); if (o.r) s += tx(c[0] + r / 2, c[1] + 28, o.r, false); }
    if (k === 'semi') { s += '<path d="M' + (c[0] - r) + ' ' + c[1] + ' A' + r + ' ' + r + ' 0 0 1 ' + (c[0] + r) + ' ' + c[1] + ' Z" style="fill:' + (o.hiArc ? SOFT : 'none') + ';stroke:' + FG + ';stroke-width:3"/>';
      if (o.hiArc) s += '<path d="M' + (c[0] - r) + ' ' + c[1] + ' A' + r + ' ' + r + ' 0 0 1 ' + (c[0] + r) + ' ' + c[1] + '" style="fill:none;stroke:' + HI + ';stroke-width:5"/>'; s += tx(c[0], c[1] + 24, o.d || 'd', !!o.hiD); s += ln(c[0] - r, c[1], c[0] + r, c[1], !!o.hiD); }
    if (k === 'chord') { var d = 40, hl = Math.sqrt(r * r - d * d); s += ci(c[0], c[1], r) + ln(c[0] - hl, c[1] + d, c[0] + hl, c[1] + d, true) + ln(c[0], c[1], c[0], c[1] + d, false, true) + ln(c[0], c[1], c[0] + hl, c[1] + d, false) + dot(c[0], c[1]) + rm(c[0], c[1] + d, 0, -1, 1, 0) + tx(c[0] - 14, c[1] + d / 2 + 5, o.d || '6', false, 'end') + tx(c[0] + 38, c[1] + d / 2 - 4, o.r || '10', false) + tx(c[0], c[1] + d + 20, o.chord || '?', true); }
    if (k === 'tangent') { var c2 = [60, 90], r2 = 54, D = 90, ph = Math.acos(r2 / D), Tx = c2[0] + r2 * Math.cos(ph), Ty = c2[1] - r2 * Math.sin(ph), Px = c2[0] + D, ux = (c2[0] - Tx) / r2, uy = (c2[1] - Ty) / r2, tl = Math.hypot(Px - Tx, c2[1] - Ty), vx = (Px - Tx) / tl, vy = (c2[1] - Ty) / tl;
      s = ci(c2[0], c2[1], r2) + ln(c2[0], c2[1], Tx, Ty) + ln(Tx, Ty, Px, c2[1], true) + ln(c2[0], c2[1], Px, c2[1], false, true) + dot(c2[0], c2[1]) + dot(Tx, Ty) + dot(Px, c2[1]) + rm(Tx, Ty, ux, uy, vx, vy) +
        tx(c2[0] + 34, c2[1] + 24, o.d || '10', false) + tx(c2[0] + r2 / 2 - 12, c2[1] - r2 / 2 - 4, o.r || '6', false, 'end') + tx((Tx + Px) / 2 + 14, (Ty + c2[1]) / 2 - 8, o.t || '?', true, 'start'); }
    if (k === 'edge') { var A = [c[0] - r, c[1]], B = [c[0] + r * Math.cos(-60 * R), c[1] - r * Math.sin(-60 * R)], P = [c[0] + r * Math.cos(100 * R), c[1] - r * Math.sin(100 * R)];
      s += ci(c[0], c[1], r) + ln(c[0], c[1], A[0], A[1]) + ln(c[0], c[1], B[0], B[1]) + ln(P[0], P[1], A[0], A[1]) + ln(P[0], P[1], B[0], B[1]) + dot(c[0], c[1]) + tx(c[0] - 20, c[1] + 40, o.centre || '120°', o.hiCentre !== false, 'middle', 18) + tx(P[0], P[1] - 8, o.edge || '?', true); }
    if (k === 'semitri') { var Pa = [c[0] - r, c[1]], Pb = [c[0] + r, c[1]], Pc = [c[0] + r * Math.cos(55 * R), c[1] - r * Math.sin(55 * R)];
      s += ci(c[0], c[1], r) + ln(Pa[0], Pa[1], Pb[0], Pb[1], true) + ln(Pa[0], Pa[1], Pc[0], Pc[1]) + ln(Pb[0], Pb[1], Pc[0], Pc[1]) + rm(Pc[0], Pc[1], (Pa[0] - Pc[0]) / 115, (Pa[1] - Pc[1]) / 115, (Pb[0] - Pc[0]) / 71, (Pb[1] - Pc[1]) / 71, true) + tx(Pc[0], Pc[1] - 9, o.top || '90°', true) + tx(Pa[0] + 40, Pa[1] - 6, o.a || '', false) + tx(Pb[0] - 36, Pb[1] - 6, o.b || '35°', false) + tx(c[0], c[1] + 22, 'diameter', true, 'middle', 17); }
    return svg(260, 160, s, 'A circle');
  };
  /* bearings: north line, the walk, the angle measured clockwise from north */
  F.bearing = function (deg, o) {
    o = o || {}; var c = [130, 85], L = 62, a = (90 - deg) * R, ex = c[0] + L * Math.cos(a), ey = c[1] - L * Math.sin(a);
    return svg(260, 170, ln(c[0], c[1], c[0], c[1] - 70, false, true) + '<polygon points="' + c[0] + ',' + (c[1] - 80) + ' ' + (c[0] - 6) + ',' + (c[1] - 68) + ' ' + (c[0] + 6) + ',' + (c[1] - 68) + '" style="fill:' + FG + '"/>' + tx(c[0], c[1] - 86, 'N', false) +
      ln(c[0], c[1], ex, ey, true) + ar(c[0], c[1], 26, 90, 90 - deg, true).replace(' 0 0 0 ', ' 0 ' + (deg > 180 ? 1 : 0) + ' 1 ') + dot(c[0], c[1]) + tx(c[0] + 50 * Math.sin(deg / 2 * R), c[1] - 50 * Math.cos(deg / 2 * R) + 6, o.label || (deg + '°'), true, 'middle', 20) + (o.end ? tx(ex + 8, ey, o.end, false, 'start') : ''), 'A bearing');
  };
  /* solids */
  F.solid = function (kind, o) {
    o = o || {}; var s = '';
    if (kind === 'cyl') { var rx = 46, ry = 14, cx = 130, t = 40, b = 130;
      s = '<ellipse cx="' + cx + '" cy="' + b + '" rx="' + rx + '" ry="' + ry + '" style="fill:none;stroke:' + FG + ';stroke-width:3"/>' + ln(cx - rx, t, cx - rx, b) + ln(cx + rx, t, cx + rx, b, !!o.hiH) +
        '<ellipse cx="' + cx + '" cy="' + t + '" rx="' + rx + '" ry="' + ry + '" style="fill:' + (o.top ? SOFT : 'none') + ';stroke:' + (o.top ? HI : FG) + ';stroke-width:3"/>' + (o.r ? ln(cx, t, cx + rx, t, true, false, 4) + tx(cx + rx / 2, t - 18, o.r, true, 'middle', 18) : '') + (o.h ? tx(cx + rx + 14, (t + b) / 2 + 5, o.h, !!o.hiH, 'start') : ''); }
    if (kind === 'cone') { var cx2 = 130, apx = 130, apy = 24, by = 114, rx2 = 52, ry2 = 15;
      s = '<ellipse cx="' + cx2 + '" cy="' + by + '" rx="' + rx2 + '" ry="' + ry2 + '" style="fill:none;stroke:' + FG + ';stroke-width:3"/>' + ln(cx2 - rx2, by, apx, apy) + ln(cx2 + rx2, by, apx, apy, !!o.hiL) + ln(apx, apy, apx, by, false, true) + (o.r ? ln(cx2, by, cx2 + rx2, by, true, false, 4) + tx(cx2 + rx2 / 2, by + ry2 + 18, o.r, true) : '') + (o.h ? tx(apx + 8, 92, o.h, !!o.hiH, 'start', 18) : '') + (o.l ? tx(cx2 + rx2 / 2 + 22, (apy + by) / 2 - 4, o.l, !!o.hiL, 'start') : ''); }
    if (kind === 'sphere') { var cx3 = 130, cy3 = 80, r3 = 58;
      s = ci(cx3, cy3, r3) + '<ellipse cx="' + cx3 + '" cy="' + cy3 + '" rx="' + r3 + '" ry="16" style="fill:none;stroke:' + FG + ';stroke-width:2;stroke-dasharray:5 4"/>' + ln(cx3, cy3, cx3 + r3, cy3, true, false, 4) + dot(cx3, cy3) + tx(cx3 + r3 / 2, cy3 + 34, o.r || 'r', true, 'middle', 20); }
    if (kind === 'cuboid') { var d = 30, x0 = 50, y0 = 36, w = 120, h = 60;
      s = pg([[x0, y0 + d], [x0 + w, y0 + d], [x0 + w, y0 + d + h], [x0, y0 + d + h]], 'none') + ln(x0, y0 + d, x0 + d, y0) + ln(x0 + w, y0 + d, x0 + w + d, y0) + ln(x0 + d, y0, x0 + w + d, y0) + ln(x0 + w + d, y0, x0 + w + d, y0 + h) + ln(x0 + w, y0 + d + h, x0 + w + d, y0 + h) +
        tx(x0 + w / 2, y0 + d + h + 22, o.l || 'length', !!o.hl) + tx(x0 + w + d + 12, y0 + d + h / 2 + 4, o.h || 'height', !!o.hh, 'start') + tx(x0 + w + d / 2 + 14, y0 + 8 - 2, o.w || 'width', !!o.hw, 'start'); }
    if (kind === 'prism') { var xs = [[40, 124], [120, 124], [80, 52]], dx = 70, dy = -22;
      s = pg(xs, o.fill || SOFT, !!o.hiEnd) + ln(120, 124, 120 + dx, 124 + dy) + ln(80, 52, 80 + dx, 52 + dy) + ln(120 + dx, 124 + dy, 80 + dx, 52 + dy) + ln(40, 124, 40 + dx, 124 + dy, false, true) + ln(40 + dx, 124 + dy, 120 + dx, 124 + dy, false, true) + ln(40 + dx, 124 + dy, 80 + dx, 52 + dy, false, true) + tx(40, 62, o.a || 'area', true, 'middle', 16) + tx(155, 146, o.len || 'length', !!o.hiLen); }
    return svg(260, 160, s, 'A solid');
  };
  /* trapezium and compound shapes */
  F.trap = function (a, b, h) { var pts = [[30, 126], [230, 126], [182, 34], [78, 34]];
    return svg(260, 160, poly(pts, { fill: SOFT, side: { 0: [b, true], 2: [a, true] } }) + ln(182, 34, 182, 126, true, true) + tx(172, 84, h, true, 'end') + rm(182, 126, -1, 0, 0, -1), 'A trapezium'); };
  F.lshape = function (A, B) { var pts = [[30, 126], [230, 126], [230, 76], [110, 76], [110, 26], [30, 26]];
    return svg(260, 160, pg(pts, 'none') + ln(30, 76, 110, 76, false, true) + '<rect x="30" y="26" width="80" height="100" style="fill:' + SOFT + '"/><rect x="110" y="76" width="120" height="50" style="fill:rgba(31,157,85,.18)"/>' + pg(pts, 'none') + tx(70, 58, A, true, 'middle', 19) + tx(170, 108, B, true, 'middle', 19), 'An L-shape'); };
  F.semiarea = function (d) { var s = '<path d="M60 112 A70 70 0 0 1 200 112 Z" style="fill:' + SOFT + ';stroke:' + FG + ';stroke-width:3"/>' + ln(60, 112, 200, 112, true) + tx(130, 134, 'diameter = ' + d, true) + ln(130, 112, 130, 42, false, true) + tx(144, 80, 'r', true, 'start');
    return svg(260, 160, s, 'A semicircle'); };
  /* coordinate grid: points [[x,y,label,hi]], segments [[x1,y1,x2,y2,hi]] */
  /* label for a grid point: placed in the direction furthest from every line through the point */
  function gridLab(p, segs, X, Y) {
    var vecs = [[1, 0], [-1, 0], [0, 1], [0, -1]]; /* the two axes count as lines too when the point is on one */
    var px = X(p[0]), py = Y(p[1]), lines = [];
    (segs || []).forEach(function (g) { var a = [X(g[0]), Y(g[1])], b = [X(g[2]), Y(g[3])];
      if (Math.hypot(a[0] - px, a[1] - py) < 1) lines.push([b[0] - px, b[1] - py]); else if (Math.hypot(b[0] - px, b[1] - py) < 1) lines.push([a[0] - px, a[1] - py]);
      else { var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1; if (Math.abs((px - a[0]) * dy - (py - a[1]) * dx) / L < 1) { lines.push([dx, dy]); lines.push([-dx, -dy]); } } });
    if (p[0] === 0) { lines.push([0, 1], [0, -1]); } if (p[1] === 0) { lines.push([1, 0], [-1, 0]); }
    var best = [0.7, -0.7], bs = -1, k;
    for (k = 0; k < 16; k++) { var ang = k * Math.PI / 8, d = [Math.cos(ang), Math.sin(ang)], m = 9;
      lines.forEach(function (v) { var l = Math.hypot(v[0], v[1]) || 1, c = (d[0] * v[0] + d[1] * v[1]) / l; m = Math.min(m, Math.acos(Math.max(-1, Math.min(1, c)))); });
      if (k % 2 === 0) m += 0.15; if (d[1] < 0) m += 0.05;
      var an = d[0] > 0.35 ? 'start' : d[0] < -0.35 ? 'end' : 'middle', lx = px + d[0] * 11, ly = py + d[1] * 11 + (d[1] > 0.35 ? 12 : d[1] < -0.35 ? -2 : 6), tw = String(p[2] || '').length * 9.5,
          xa = an === 'start' ? lx : an === 'end' ? lx - tw : lx - tw / 2, xb = xa + tw;
      if (xa < 2 || xb > 258 || ly - 14 < 0 || ly > 158) m -= 5;
      (segs || []).forEach(function (g) { var hit = 0, q; for (q = 0; q <= 20; q++) { var sx = X(g[0]) + (X(g[2]) - X(g[0])) * q / 20, sy = Y(g[1]) + (Y(g[3]) - Y(g[1])) * q / 20; if (sx > xa - 2 && sx < xb + 2 && sy > ly - 16 && sy < ly + 4) hit = 1; } if (hit) m -= 3; });
      if (xb > X(0) - 20 && xa < X(0) + 2 && ly - 16 < 24) m -= 3;
      if (p[0] !== 0 && (xa < X(0) + 3 && xb > X(0) - 3)) m -= 1.5; if (p[1] !== 0 && ly - 16 < Y(0) + 2 && ly + 4 > Y(0) - 2) m -= 1.5;
      if (m > bs) { bs = m; best = d; } }
    var anc = best[0] > 0.35 ? 'start' : best[0] < -0.35 ? 'end' : 'middle', off = 11;
    return tx(px + best[0] * off, py + best[1] * off + (best[1] > 0.35 ? 12 : best[1] < -0.35 ? -2 : 6), p[2] || '', !!p[3], anc, 17);
  }
  F.grid = function (pts, segs, o) {
    var xs = [0], ys = [0], s = '', i;
    (pts || []).forEach(function (p) { xs.push(p[0]); ys.push(p[1]); }); (segs || []).forEach(function (g) { xs.push(g[0], g[2]); ys.push(g[1], g[3]); });
    var x0 = Math.floor(Math.min.apply(0, xs)) - 1, x1 = Math.ceil(Math.max.apply(0, xs)) + 1, y0 = Math.floor(Math.min.apply(0, ys)) - 1, y1 = Math.ceil(Math.max.apply(0, ys)) + 1,
        sc = Math.min(230 / (x1 - x0), 140 / (y1 - y0)), ox = 15 + (0 - x0) * sc, oy = 10 + y1 * sc;
    function X(v) { return ox + v * sc; } function Y(v) { return oy - v * sc; }
    for (i = x0; i <= x1; i++) s += '<line x1="' + X(i) + '" y1="' + Y(y0) + '" x2="' + X(i) + '" y2="' + Y(y1) + '" style="stroke:rgba(120,120,140,.3)"/>';
    for (i = y0; i <= y1; i++) s += '<line x1="' + X(x0) + '" y1="' + Y(i) + '" x2="' + X(x1) + '" y2="' + Y(i) + '" style="stroke:rgba(120,120,140,.3)"/>';
    s += ln(X(x0), Y(0), X(x1), Y(0), false, false, 2) + ln(X(0), Y(y0), X(0), Y(y1), false, false, 2);
    (segs || []).forEach(function (g) { s += ln(X(g[0]), Y(g[1]), X(g[2]), Y(g[3]), !!g[4], !!g[5]); });
    (pts || []).forEach(function (p) { s += dot(X(p[0]), Y(p[1]), !!p[3]) + gridLab(p, segs, X, Y); });
    o = o || {};
    s += tx(X(x1) - 3, Y(0) + 15, o.xt || 'x', false, 'end', 14) + tx(X(0) - 6, Y(y1) + 11, o.yt || 'y', false, 'end', 14);
    return svg(260, 160, s, o.title || 'A coordinate grid');
  };

  /* two similar triangles side by side: sa, sb = [base, height-side, slanted] labels, hi = which labels to highlight (indices 0..2 of the second triangle) */
  F.simtri = function (sa, sb, hi) {
    hi = hi || []; var A = [[12, 130], [102, 130], [102, 78]], B = [[130, 130], [250, 130], [250, 50]], s = pg(A, 'none') + pg(B, 'none') + rm(102, 130, -1, 0, 0, -1) + rm(250, 130, -1, 0, 0, -1);
    function lab(P, Q, t, h, off) { if (t === '' || t == null) return ''; var mx = (P[0] + Q[0]) / 2, my = (P[1] + Q[1]) / 2; return tx(mx + off[0], my + off[1], t, h, 'middle', 19); }
    s += lab(A[0], A[1], sa[0], false, [0, 22]) + lab(A[1], A[2], sa[1], false, [14, 5]) + lab(A[0], A[2], sa[2], false, [-12, -6]);
    s += lab(B[0], B[1], sb[0], hi.indexOf(0) >= 0, [0, 22]) + lab(B[1], B[2], sb[1], hi.indexOf(1) >= 0, [14, 5]) + lab(B[0], B[2], sb[2], hi.indexOf(2) >= 0, [-12, -6]);
    hi.forEach(function (i) { var P = B[i], Q = B[(i + 1) % 3]; s += ln(P[0], P[1], Q[0], Q[1], true); });
    return svg(260, 160, s, 'Two similar triangles');
  };
  /* a regular polygon with one exterior angle drawn */
  F.regpoly = function (n, label, hiInterior) {
    var cx = 110, cy = 82, r = 58, pts = [], i, ex = 360 / n; for (i = 0; i < n; i++) { var a = (90 + 180 / n + i * ex) * R; pts.push([cx + r * Math.cos(a), cy - r * Math.sin(a)]); }
    var V = pts[0], P = pts[n - 1], Q = pts[1], dx = V[0] - P[0], dy = V[1] - P[1], l = Math.hypot(dx, dy), ux = dx / l, uy = dy / l, ext = [V[0] + ux * 50, V[1] + uy * 50];
    var s = pg(pts, 'none') + ln(V[0], V[1], ext[0], ext[1], false, true), a0 = Math.atan2(-uy, ux) / R, a1 = Math.atan2(-(Q[1] - V[1]), Q[0] - V[0]) / R, d = a1 - a0; while (d < 0) d += 360; while (d > 180) d -= 360;
    var lo = Math.min(a0, a0 + d), hi = Math.max(a0, a0 + d); s += ar(V[0], V[1], 28, lo, hi, true) + tx(ext[0] + 8, ext[1] - 4, label, true, 'start', 20);
    return svg(260, 160, s, 'A regular polygon with an exterior angle');
  };
  /* mirror lines on a regular shape */
  F.sym = function (k) {
    var s = '', cx = 130, cy = 82, r = 56, n = k === 'tri' ? 3 : k === 'pent' ? 5 : k === 'hex' ? 6 : 4, pts = [], i;
    if (k === 'rhomb') pts = [[130, 18], [196, 82], [130, 146], [64, 82]]; else for (i = 0; i < n; i++) { var a = (90 + i * 360 / n) * R; pts.push([cx + r * Math.cos(a), cy - r * Math.sin(a)]); }
    s = pg(pts, SOFT);
    if (k === 'rhomb') s += ln(130, 8, 130, 156, true, true) + ln(54, 82, 206, 82, true, true);
    else for (i = 0; i < n; i++) { var a2 = (90 + i * 360 / n) * R; s += ln(cx + (r + 10) * Math.cos(a2), cy - (r + 10) * Math.sin(a2), cx - (n % 2 ? 0.45 : 1) * (r + 10) * Math.cos(a2), cy + (n % 2 ? 0.45 : 1) * (r + 10) * Math.sin(a2), true, true); }
    return svg(260, 160, s, 'Lines of symmetry');
  };
  /* a cube net (cross) with one face highlighted */
  F.net = function () { var s = '', u = 34, ox = 62, oy = 14, cells = [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]], i; cells.forEach(function (c, j) { s += '<rect x="' + (ox + c[0] * u) + '" y="' + (oy + c[1] * u) + '" width="' + u + '" height="' + u + '" style="fill:' + (j === 2 ? SOFT : 'none') + ';stroke:' + (j === 2 ? HI : FG) + ';stroke-width:3"/>' + tx(ox + c[0] * u + u / 2, oy + c[1] * u + u / 2 + 7, '' + (j + 1), j === 2, 'middle', 20); }); return svg(260, 160, s, 'A cube net with six squares'); };
  /* parallel lines cut by a transversal: known angle and the one to find */
  F.para = function (known, find, kind) {
    var s = ln(20, 52, 240, 52) + ln(20, 112, 240, 112) + ln(70, 150, 170, 14, false, false, 3), x1 = 70 + (150 - 52) / 136 * 100, y1 = 52, x2 = 70 + (150 - 112) / 136 * 100, y2 = 112;
    s += '<polygon points="228,48 240,52 228,56" style="fill:' + FG + '"/><polygon points="228,108 240,112 228,116" style="fill:' + FG + '"/>';
    s += ar(x1, y1, 24, 0, 54, kind !== 'a') + tx(x1 + 34, y1 - 10, known, kind !== 'a', 'start', 20);
    s += ar(x2, y2, 24, 126, 180, false) ; s += ar(x2, y2, 24, 0, 54, kind === 'a') + tx(x2 + 34, y2 - 10, find, true, 'start', 20);
    return svg(260, 160, s, 'Parallel lines cut by a transversal');
  };
  /* a circle with its diameter (and optionally radius) highlighted */
  F.cdia = function (d, r) { var c = [130, 80], rr = 60, s = ci(c[0], c[1], rr, SOFT) + ln(c[0] - rr, c[1], c[0] + rr, c[1], !r, false, 5) + dot(c[0], c[1]); if (r) s = ci(c[0], c[1], rr, SOFT) + ln(c[0], c[1], c[0] + rr, c[1], true, false, 5) + dot(c[0], c[1]) + tx(c[0] + rr / 2, c[1] - 8, r, true); else s += tx(c[0], c[1] + 28, d, true); return svg(260, 160, s, 'A circle'); };
  /* shadows: a pole and a tree with the sun's ray */
  F.shadow = function (hp, sp, ht, st) { var s = ln(10, 140, 250, 140) + ln(40, 140, 40, 100, true, false, 6) + ln(40, 100, 90, 140, false, true) + ln(150, 140, 150, 40, true, false, 6) + ln(150, 40, 250, 140, false, true) + tx(24, 122, hp, false, 'end', 19) + tx(65, 158, sp, false, 'middle', 19) + tx(136, 92, ht, true, 'end', 19) + tx(200, 158, st, true, 'middle', 19); return svg(260, 170, s, 'A pole and a tree with shadows'); };

  /* a number line from lo to hi with a jump from a to b (a, b optional): the start is dark, the arrival orange */
  F.numline = function (lo, hi, a, b) {
    var w = 230, x0 = 15, n = hi - lo, st = w / n, s = ln(x0, 90, x0 + w, 90, false, false, 3), i;
    function X(v) { return x0 + (v - lo) * st; }
    for (i = lo; i <= hi; i++) s += ln(X(i), 82, X(i), 98, false, false, 2) + tx(X(i), 120, '' + i, i === 0, 'middle', n > 10 ? 14 : 17);
    if (a != null && b != null) { var mid = (X(a) + X(b)) / 2, h = Math.min(60, Math.abs(X(b) - X(a)) / 2 + 12);
      s += '<path d="M' + X(a) + ' 84 Q' + mid + ' ' + (84 - h * 1.4) + ' ' + X(b) + ' 84" style="fill:none;stroke:' + HI + ';stroke-width:4"/>' + dot(X(a), 90, false) + dot(X(b), 90, true) + tx(X(a), 62, '' + a, false, 'middle', 19) + tx(X(b), 62, '' + b, true, 'middle', 19); }
    return svg(260, 140, s, 'A number line');
  };
})();
