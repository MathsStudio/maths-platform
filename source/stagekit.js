(function () { 'use strict';
var S = Studio, H = S.h, $ = H.$, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, fmtInt = H.fmtInt, V = S.viz;
var K = S.kit = {};
K.Q = function (o) { o.type = o.type || 'input'; if (o.options) o.options = o.options.map(String); if (o.answer !== undefined) o.answer = String(o.answer); return o; };
K.ex = function (q, steps, final, render) { return { q: q, steps: steps, final: final, render: render }; };
K.table = function (rows, head) {
  return '<table class="tbl">' + (head ? '<tr>' + head.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>' : '') + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
};
K.cap = function (t) { return '<div class="caption">' + t + '</div>'; };
/* axis titles for a bar chart: explicit opts.x / opts.y, else worked out from the chart's label and its categories */
K.axisTitles = function (labels, opts) {
  var lab = String(opts.label || ''), x = opts.x, y = opts.y, l0 = labels.map(String).join(' ');
  var T = [[/Fraction of the whole/, 'Fraction', 'Percentage of the whole (%)'], [/Balance/, 'Account', 'Balance (£)'], [/walk to school/, 'Day of the week', 'Number of pupils'], [/five values/, 'Value number', 'Value'], [/Chance of each colour/, 'Colour', 'Chance (%)'], [/Distance travelled/, 'Journey', 'Distance (km)'], [/^Terms of/, 'Term number', 'Value of the term'], [/^Value after/, 'Type of interest', 'Value (£)'], [/^Shares of/, 'Share', 'Amount (£)'], [/new coordinates/, 'Coordinate', 'Size (units)'], [/P\(both red\)/, 'Way of picking', 'Probability (%)'], [/Volume \(cm/, 'Solid', 'Volume (cm³)'], [/Percent heads/, 'Coin', 'Heads (%)'], [/v = u \+ at/, 'Part of the formula', 'Speed (m/s)'], [/^Value \(£\)/, 'Time', 'Value (£)'], [/Books borrowed/, 'Day of the week', 'Number of books'], [/Temperature/, 'Time of day', 'Temperature (°C)'], [/monthly temperature/, 'Month', 'Temperature (°C)'], [/Misleading/, 'Chart', 'Amount'], [/Savings growing/, 'Year', 'Savings (£)']];
  for (var i = 0; i < T.length; i++) if (T[i][0].test(lab)) { x = x || T[i][1]; y = y || T[i][2]; break; }
  if (!x) x = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/.test(l0) ? 'Day of the week' : /(am|pm)\b/.test(l0) ? 'Time of day' : /^(J|F|M|A|S|O|N|D|Jan)\b/.test(l0) ? 'Month' : /^\d+( \d+)*$/.test(l0) ? 'Number' : 'Category';
  if (!y) y = /£/.test(lab) ? 'Amount (£)' : /%|percent|chance/i.test(lab) ? 'Percentage (%)' : /cm/.test(lab) ? 'Length (cm)' : 'Number';
  return { x: x, y: y, title: opts.title || lab || '' };
};
K.barChart = function (labels, vals, opts) {
  opts = opts || {}; var ax = K.axisTitles(labels, opts), W = 340, H2 = 150, top = ax.title ? 22 : 0, max = opts.max || Math.max.apply(null, vals), n = vals.length, bw = (W - 62) / n, s = '<svg viewBox="0 0 ' + W + ' ' + (H2 + 56 + top) + '" role="img" aria-label="' + (opts.label || 'A bar chart') + '" style="width:100%;max-width:' + W + 'px;height:auto">';
  if (ax.title) s += '<text x="' + (W / 2) + '" y="15" text-anchor="middle" class="pv-b" style="font-size:13px;font-weight:800">' + ax.title + '</text>';
  s += '<g transform="translate(0 ' + top + ')"><line x1="46" y1="8" x2="46" y2="' + H2 + '" style="stroke:var(--fg);stroke-width:2"/><line x1="46" y1="' + H2 + '" x2="' + (W - 6) + '" y2="' + H2 + '" style="stroke:var(--fg);stroke-width:2"/>';
  var step = opts.step || (max <= 10 ? 2 : max <= 20 ? 5 : max <= 50 ? 10 : max <= 100 ? 20 : Math.ceil(max / 5));
  for (var g = 0; g <= max; g += step) { var y = H2 - (H2 - 12) * g / max; s += '<line x1="42" y1="' + y + '" x2="' + (W - 6) + '" y2="' + y + '" style="stroke:var(--line);stroke-width:1"/><text x="38" y="' + (y + 4) + '" text-anchor="end" class="pv-b" style="font-size:11px">' + g + '</text>'; }
  vals.forEach(function (v, i) { var h = (H2 - 12) * v / max, x = 52 + i * bw; s += '<rect x="' + (x + 4) + '" y="' + (H2 - h) + '" width="' + (bw - 8) + '" height="' + h + '" rx="3" style="fill:' + V.hsl(opts.hue || 215) + ';stroke:var(--fg);stroke-width:1.5"/><text x="' + (x + bw / 2) + '" y="' + (H2 + 16) + '" text-anchor="middle" class="pv-b" style="font-size:11px">' + labels[i] + '</text>'; });
  s += '<text x="' + (46 + (W - 52) / 2) + '" y="' + (H2 + 36) + '" text-anchor="middle" class="pv-b" style="font-size:12px;font-weight:700">' + ax.x + '</text><text transform="translate(11 ' + (H2 / 2) + ') rotate(-90)" text-anchor="middle" class="pv-b" style="font-size:12px;font-weight:700">' + ax.y + '</text></g>';
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
/* the live value shown beside a slider, with its unit (from p.unit, or the unit in the label such as (cm), (£), (°), (%)) */
K.fmtVal = function (p, v) {
  if (p.options) return '';
  var lab = String(p.label || ''), u = p.unit, m = lab.match(/\(([^)]*)\)/), n = (Math.round(v * 100) / 100).toString().replace('-', '−');
  if (u === undefined && m) { var t = m[1]; if (/^£$/.test(t)) u = '£'; else if (/^°$|degrees/.test(t)) u = '°'; else if (/%/.test(t)) u = '%'; else if (/^(cm|m|km|mm|kg|g|l|ml|m\/s|km\/h|hours?|minutes?|seconds?|years?|days?|weeks?|months?|miles?)$/.test(t.trim())) u = ' ' + t.trim(); }
  if (u === undefined) { if (/angle/i.test(lab)) u = '°'; else if (/percent|percentage/i.test(lab)) u = '%'; else if (/£|amount|price|cost|pay|wage|saved|deposit|balance/i.test(lab) && !/number|how many/i.test(lab)) u = '£'; else u = ''; }
  return u === '£' ? '£' + n : n + u;
};
/* generic explorer lab: params sliders and a render function */
K.explore = function (cfg) {
  return function (host, ctx) {
    var vals = {}, seen = {}, need = cfg.need || 6;
    cfg.params.forEach(function (p) { vals[p.id] = p.val; });
    host.innerHTML = '<div class="visual" id="xVis" style="text-align:center;overflow-x:auto"></div><div class="lab-out say" id="xOut" aria-live="polite"></div>' + cfg.params.map(function (p) { if (p.options) return '<label class="eyebrow" for="x_' + p.id + '">' + p.label + '</label><select class="slider" id="x_' + p.id + '" style="min-height:44px">' + p.options.map(function (o) { return '<option value="' + o.v + '"' + (o.v === p.val ? ' selected' : '') + '>' + o.label + '</option>'; }).join('') + '</select>'; return '<label class="eyebrow" for="x_' + p.id + '">' + p.label + ' <b id="xv_' + p.id + '" class="xv">' + K.fmtVal(p, p.val) + '</b></label><input class="slider" id="x_' + p.id + '" type="range" min="' + p.min + '" max="' + p.max + '" step="' + (p.step || 1) + '" value="' + p.val + '" style="width:100%">'; }).join('') + '<div class="explain" id="xExp"></div><p class="note" id="xNote"></p>';
    function draw() { var r = cfg.render(vals); $('xVis').innerHTML = r.vis || ''; $('xOut').textContent = r.out || ''; $('xExp').innerHTML = r.explain || ''; seen[JSON.stringify(vals)] = 1; var c = Object.keys(seen).length; $('xNote').textContent = 'Different settings tried: ' + Math.min(c, need) + ' of ' + need; if (c >= need) ctx.complete(); }
    cfg.params.forEach(function (p) { $('x_' + p.id).addEventListener('input', function (e) { vals[p.id] = p.options ? e.target.value : Number(e.target.value); var xv = $('xv_' + p.id); if (xv) xv.textContent = K.fmtVal(p, vals[p.id]); draw(); }); if (p.options) $('x_' + p.id).addEventListener('change', function (e) { vals[p.id] = e.target.value; draw(); }); });
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
  var practise = function () { return H.buildPracticeSet(sp.gens, 100); };
  S.addTopic({ n: sp.n, base: sp.base, year: sp.year, short: sp.short, title: sp.title, blurb: sp.blurb, practiceCount: 100, gens: {}, steps: [
    { id: 'warm', label: 'Warm-up', type: 'quiz', tag: 'Step 1 · Warm-up', title: 'Mental maths warm-up', lead: 'Four quick questions.', make: sp.warm, doneLabel: 'On to the lesson' },
    { id: 'learn1', label: sp.l1label || 'Learn', type: 'slides', tag: sp.l1tag || 'Learn it', slides: sp.learn1 },
    { id: 'lab1', label: 'Explore', type: 'lab', tag: 'Step 3 · We do it together', title: sp.lab.title, lead: sp.lab.lead, mount: K.explore(sp.lab) },
    { id: 'learn2', label: sp.l2label || 'Learn more', type: 'slides', tag: sp.l2tag || 'Learn more', slides: sp.learn2 },
    { id: 'practise', label: 'Practise', type: 'quiz', best: true, tag: 'Step 5 · Your turn', title: 'Practise', lead: 'Plenty of questions for this stage. Use the hints one at a time.', make: practise }
  ] });
};
})();

/* every slider shows its live value (with the unit when its label names one) */
(function () {
  function add(sl) {
    if (sl.dataset.lv) return; sl.dataset.lv = 1;
    var lab = sl.id && document.querySelector('label[for="' + sl.id + '"]');
    if (!lab || lab.querySelector('.xv')) return;
    if (!document.getElementById('xvCss')) { var st = document.createElement('style'); st.id = 'xvCss'; st.textContent = '.xv{margin-left:.4em;padding:1px 8px;border-radius:99px;background:var(--accent,#2b6cd9);color:#fff;font-size:.82rem;letter-spacing:0;text-transform:none}'; document.head.appendChild(st); }
    var b = document.createElement('b'); b.className = 'xv'; lab.appendChild(document.createTextNode(' ')); lab.appendChild(b);
    function up() { var v = Number(sl.value), p = { label: lab.textContent.replace(/\s+$/, '') }; b.textContent = K.fmtVal(p, v); sl.setAttribute('aria-valuetext', b.textContent); }
    sl.addEventListener('input', up); sl.addEventListener('lvsync', up); up();
  }
  function scan() { var l = document.querySelectorAll('input.slider'); for (var i = 0; i < l.length; i++) add(l[i]); }
  if (typeof MutationObserver !== 'undefined') new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
})();
