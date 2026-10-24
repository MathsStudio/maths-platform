(function () { 'use strict';
var S = Studio, H = S.h, $ = H.$, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, fmtInt = H.fmtInt, V = S.viz;
var K = S.kit = {};
K.Q = function (o) { o.type = o.type || 'input'; if (o.options) o.options = o.options.map(String); if (o.answer !== undefined) o.answer = String(o.answer); return o; };
K.ex = function (q, steps, final, render) { return { q: q, steps: steps, final: final, render: render }; };
K.table = function (rows, head) {
  return '<table class="tbl">' + (head ? '<tr>' + head.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>' : '') + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
};
K.cap = function (t) { return '<div class="caption">' + t + '</div>'; };
K.barChart = function (labels, vals, opts) {
  opts = opts || {}; var W = 340, H2 = 150, max = opts.max || Math.max.apply(null, vals), n = vals.length, bw = (W - 50) / n, s = '<svg viewBox="0 0 ' + W + ' ' + (H2 + 34) + '" role="img" aria-label="' + (opts.label || 'A bar chart') + '" style="width:100%;max-width:' + W + 'px;height:auto"><line x1="34" y1="8" x2="34" y2="' + H2 + '" style="stroke:var(--fg);stroke-width:2"/><line x1="34" y1="' + H2 + '" x2="' + (W - 6) + '" y2="' + H2 + '" style="stroke:var(--fg);stroke-width:2"/>';
  var step = opts.step || (max <= 10 ? 2 : max <= 20 ? 5 : max <= 50 ? 10 : max <= 100 ? 20 : Math.ceil(max / 5));
  for (var g = 0; g <= max; g += step) { var y = H2 - (H2 - 12) * g / max; s += '<line x1="30" y1="' + y + '" x2="' + (W - 6) + '" y2="' + y + '" style="stroke:var(--line);stroke-width:1"/><text x="26" y="' + (y + 4) + '" text-anchor="end" class="pv-b" style="font-size:11px">' + g + '</text>'; }
  vals.forEach(function (v, i) { var h = (H2 - 12) * v / max, x = 40 + i * bw; s += '<rect x="' + (x + 4) + '" y="' + (H2 - h) + '" width="' + (bw - 8) + '" height="' + h + '" rx="3" style="fill:' + V.hsl(opts.hue || 215) + ';stroke:var(--fg);stroke-width:1.5"/><text x="' + (x + bw / 2) + '" y="' + (H2 + 16) + '" text-anchor="middle" class="pv-b" style="font-size:11px">' + labels[i] + '</text>'; });
  return s + '</svg>';
};
K.numberLine = function (lo, hi, val, label, ticks) {
  var W = 340, x0 = 20, x1 = W - 20, n = ticks || 10, s = '<svg viewBox="0 0 ' + W + ' 86" role="img" aria-label="' + (label || 'A number line') + '" style="width:100%;max-width:' + W + 'px;height:auto"><line x1="' + x0 + '" y1="46" x2="' + x1 + '" y2="46" style="stroke:var(--fg);stroke-width:3"/>';
  for (var i = 0; i <= n; i++) { var x = x0 + (x1 - x0) * i / n, big = i === 0 || i === n; s += '<line x1="' + x + '" y1="' + (big ? 36 : 40) + '" x2="' + x + '" y2="' + (big ? 56 : 52) + '" style="stroke:var(--fg);stroke-width:' + (big ? 3 : 2) + '"/>'; }
  s += '<text x="' + x0 + '" y="76" text-anchor="middle" class="pv-b" style="font-size:13px">' + H.trimNum(lo) + '</text><text x="' + x1 + '" y="76" text-anchor="middle" class="pv-b" style="font-size:13px">' + H.trimNum(hi) + '</text>';
  if (val !== null && val !== undefined) { var vx = x0 + (x1 - x0) * (val - lo) / (hi - lo); s += '<polygon points="' + vx + ',42 ' + (vx - 8) + ',22 ' + (vx + 8) + ',22" style="fill:' + V.hsl(22) + '"/><text x="' + vx + '" y="16" text-anchor="middle" class="pv-b" style="font-size:13px">' + H.trimNum(val) + '</text>'; }
  return s + '</svg>';
};
K.verbal = function (list) {
  var f = function () { var v = pick(list); return K.Q({ tag: 'Verbal reasoning', type: 'mc', text: v.text, options: shuffle(v.options.slice()), answer: v.answer, hints: v.hints, explain: v.explain }); };
  Object.defineProperty(f, 'name', { value: 'genVerbal' }); return f;
};
K.warmFrom = function (makers) { return function () { return shuffle(makers.map(function (m) { return m(); })).slice(0, 4); }; };
/* generic explorer lab: params sliders and a render function */
K.explore = function (cfg) {
  return function (host, ctx) {
    var vals = {}, seen = {}, need = cfg.need || 6;
    cfg.params.forEach(function (p) { vals[p.id] = p.val; });
    host.innerHTML = '<div class="visual" id="xVis" style="text-align:center;overflow-x:auto"></div><div class="lab-out say" id="xOut" aria-live="polite"></div>' + cfg.params.map(function (p) { return '<label class="eyebrow" for="x_' + p.id + '">' + p.label + '</label><input class="slider" id="x_' + p.id + '" type="range" min="' + p.min + '" max="' + p.max + '" step="' + (p.step || 1) + '" value="' + p.val + '" style="width:100%">'; }).join('') + '<div class="explain" id="xExp"></div><p class="note" id="xNote"></p>';
    function draw() { var r = cfg.render(vals); $('xVis').innerHTML = r.vis || ''; $('xOut').textContent = r.out || ''; $('xExp').innerHTML = r.explain || ''; seen[JSON.stringify(vals)] = 1; var c = Object.keys(seen).length; $('xNote').textContent = 'Different settings tried: ' + Math.min(c, need) + ' of ' + need; if (c >= need) ctx.complete(); }
    cfg.params.forEach(function (p) { $('x_' + p.id).addEventListener('input', function (e) { vals[p.id] = Number(e.target.value); draw(); }); });
    draw();
  };
};
/* register a stage topic */
K.stage = function (sp) {
  var X = window.STAGE_EXTRA && window.STAGE_EXTRA[sp.n];
  if (X) { sp.learn1 = sp.learn1.concat(X.learn1 || []); sp.learn2 = sp.learn2.concat(X.learn2 || []); }
  ['learn1', 'learn2'].forEach(function (id) {
    var sl = sp[id]; if (!sl) return;
    window.SLIDE_GOALS[sp.n + '.' + id] = sl.map(function (s) { return s.goal; });
    window.SLIDE_MORE[sp.n + '.' + id] = sl.map(function (s) { return { more: s.more, eg: s.eg }; });
  });
  var nm = function (f) { return f.name; };
  var verb = (sp.gens || []).filter(function (g) { return g.name === 'genVerbal'; });
  S.pools(sp.n, sp.year && sp.year.charAt(0) === 'S' ? -1 : sp.base, (sp.easy || []).concat(verb).map(nm), (sp.hard || []).concat(verb).map(nm));
  var practise = function () { return H.buildPracticeSet(sp.gens, 50); };
  S.addTopic({ n: sp.n, base: sp.base, year: sp.year, short: sp.short, title: sp.title, blurb: sp.blurb, practiceCount: 50, gens: {}, steps: [
    { id: 'warm', label: 'Warm-up', type: 'quiz', tag: 'Step 1 · Warm-up', title: 'Mental maths warm-up', lead: 'Four quick questions.', make: sp.warm, doneLabel: 'On to the lesson' },
    { id: 'learn1', label: sp.l1label || 'Learn', type: 'slides', tag: sp.l1tag || 'Learn it', slides: sp.learn1 },
    { id: 'lab1', label: 'Explore', type: 'lab', tag: 'Step 3 · We do it together', title: sp.lab.title, lead: sp.lab.lead, mount: K.explore(sp.lab) },
    { id: 'learn2', label: sp.l2label || 'Learn more', type: 'slides', tag: sp.l2tag || 'Learn more', slides: sp.learn2 },
    { id: 'practise', label: 'Practise', type: 'quiz', best: true, tag: 'Step 5 · Your turn', title: 'Practise', lead: '50 questions for this stage. Use the hints one at a time.', make: practise }
  ] });
};
})();
