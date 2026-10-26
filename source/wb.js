(function () { 'use strict';
var doc = document, items = [], redo = [], tool = 'pen', color = '#1b2a4a', size = 3, cv, cx, stage, ta, drawing = null, lastPen = 0, open = false, clearTimer = 0, saveT = 0;
var COLORS = [['#1b2a4a', 'Dark blue'], ['#d62d2d', 'Red'], ['#1f6fe0', 'Blue'], ['#168a4a', 'Green']], SIZES = [[3, 'Thin'], [6, 'Medium'], [12, 'Thick']];
var css = '.wb-btn{position:fixed;z-index:36;right:12px;top:calc(42% - 66px);min-height:48px;padding:8px 14px;border:2px solid var(--accent,#2b62d9);border-radius:14px;background:var(--surface,#fff);color:var(--fg,#111);font:inherit;font-weight:800;cursor:pointer;box-shadow:0 6px 18px rgba(20,35,70,.18)}' +
 '.wb-btn[aria-expanded="true"]{background:var(--accent,#2b62d9);color:#fff}' +
 '.wb-panel{position:fixed;z-index:60;right:0;bottom:0;display:flex;flex-direction:column;background:var(--surface,#fff);color:var(--fg,#111);border-left:2px solid var(--line,#c9d4ea);box-shadow:-8px 0 28px rgba(20,35,70,.16)}' +
 '.wb-panel[hidden]{display:none}' +
 '.wb-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:8px;border-bottom:1px solid var(--line,#c9d4ea)}' +
 '.wb-bar button{min-width:44px;min-height:44px;padding:4px 10px;border:2px solid var(--line,#c9d4ea);border-radius:10px;background:var(--surface,#fff);color:var(--fg,#111);font:inherit;font-weight:700;font-size:.9rem;cursor:pointer}' +
 '.wb-bar button[aria-pressed="true"]{border-color:var(--accent,#2b62d9);background:var(--accent,#2b62d9);color:#fff}' +
 '.wb-bar button:disabled{opacity:.45;cursor:default}' +
 '.wb-bar .sw{width:44px;padding:0;position:relative}.wb-bar .sw i{display:block;width:24px;height:24px;border-radius:50%;margin:auto;border:2px solid #fff;box-shadow:0 0 0 1px #8896b3}' +
 '.wb-bar .sz i{display:block;border-radius:50%;background:currentColor;margin:auto}' +
 '.wb-sep{width:1px;align-self:stretch;background:var(--line,#c9d4ea);margin:0 2px}' +
 '.wb-stage{position:relative;flex:1;min-height:0;background:#fff;background-image:linear-gradient(#e3e9f6 1px,transparent 1px),linear-gradient(90deg,#e3e9f6 1px,transparent 1px);background-size:24px 24px;overflow:hidden}' +
 '.wb-stage canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;cursor:crosshair}' +
 '.wb-stage.typing canvas{cursor:text}' +
 '.wb-text{position:absolute;min-width:120px;min-height:34px;max-width:90%;padding:2px 4px;border:2px dashed var(--accent,#2b62d9);background:rgba(255,255,255,.92);font:600 20px/1.25 system-ui,sans-serif;resize:both;color:#1b2a4a}' +
 '.wb-note{margin:0;padding:6px 10px;font-size:.8rem;color:var(--muted,#55627f);border-top:1px solid var(--line,#c9d4ea)}' +
 'body[data-view="gate"] .wb-btn,body[data-view="gate"] .wb-panel{display:none}' +
 '@media (min-width:1240px){.wb-panel{top:0;width:clamp(340px,calc(100vw - 810px),560px)}body.wb-open{padding-right:clamp(340px,calc(100vw - 810px),560px)}body.wb-open .reader-dock{right:calc(clamp(340px,calc(100vw - 810px),560px) + 12px)}body.wb-open .wb-btn{right:calc(clamp(340px,calc(100vw - 810px),560px) + 12px)}body.wb-open .player{right:clamp(340px,calc(100vw - 810px),560px)}}' +
 '@media (max-width:1239px){.wb-panel{left:0;height:54vh;border-left:0;border-top:2px solid var(--line,#c9d4ea);box-shadow:0 -8px 28px rgba(20,35,70,.16)}.wb-btn{top:auto;bottom:86px;right:8px;min-height:44px;padding:6px 12px;font-size:.9rem;opacity:.95}body.wb-open{padding-bottom:54vh}body.wb-open .wb-btn{left:auto!important;top:auto!important;right:8px!important;bottom:calc(54vh + 12px)!important}body.wb-open .reader-dock{display:none}}' +
 '@media (min-width:1240px){body.wb-open .wb-btn{left:auto!important}}';
var st = doc.createElement('style'); st.textContent = css; doc.head.appendChild(st);
function el(tag, attrs, html) { var e = doc.createElement(tag); Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); }); if (html !== undefined) e.innerHTML = html; return e; }
var btn = el('button', { id: 'wbBtn', class: 'wb-btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'wbPanel' }, 'Whiteboard');
var panel = el('aside', { id: 'wbPanel', class: 'wb-panel', 'aria-label': 'Whiteboard for working out', hidden: '' });
var bar = el('div', { class: 'wb-bar', role: 'toolbar', 'aria-label': 'Whiteboard tools' });
function tb(id, label, pressed) { var b = el('button', { type: 'button', 'data-wb': id, 'aria-label': label }, label); if (pressed !== undefined) b.setAttribute('aria-pressed', pressed ? 'true' : 'false'); bar.appendChild(b); return b; }
tb('pen', 'Pen', true); tb('eraser', 'Eraser', false); tb('text', 'Type', false); bar.appendChild(el('span', { class: 'wb-sep' }));
COLORS.forEach(function (c, i) { var b = el('button', { type: 'button', class: 'sw', 'data-color': c[0], 'aria-label': c[1] + ' colour', 'aria-pressed': i === 0 ? 'true' : 'false' }, '<i style="background:' + c[0] + '"></i>'); bar.appendChild(b); });
bar.appendChild(el('span', { class: 'wb-sep' }));
SIZES.forEach(function (s, i) { var d = 6 + i * 5; bar.appendChild(el('button', { type: 'button', class: 'sz', 'data-size': s[0], 'aria-label': s[1] + ' line', 'aria-pressed': i === 0 ? 'true' : 'false' }, '<i style="width:' + d + 'px;height:' + d + 'px"></i>')); });
bar.appendChild(el('span', { class: 'wb-sep' }));
var bUndo = tb('undo', 'Undo'), bRedo = tb('redo', 'Redo'), bClear = tb('clear', 'Clear'), bSave = tb('save', 'Save'), bClose = tb('close', 'Close');
stage = el('div', { class: 'wb-stage' }); cv = el('canvas', { 'aria-label': 'Drawing area' }); ta = el('textarea', { class: 'wb-text', hidden: '', 'aria-label': 'Type on the whiteboard', rows: '1' }); stage.appendChild(cv); stage.appendChild(ta);
var note = el('p', { class: 'wb-note' }, 'Write with a pen, finger or mouse. Choose Type, then tap where you want to type. Your working stays here until you press Clear.');
panel.appendChild(bar); panel.appendChild(stage); panel.appendChild(note); doc.body.appendChild(btn); doc.body.appendChild(panel);
cx = cv.getContext('2d');
function fit() { var r = stage.getBoundingClientRect(), d = window.devicePixelRatio || 1, w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height)); if (cv.width !== Math.round(w * d) || cv.height !== Math.round(h * d)) { cv.width = Math.round(w * d); cv.height = Math.round(h * d); } cx.setTransform(d, 0, 0, d, 0, 0); redraw(); }
function strokePath(it) { var p = it.p; cx.beginPath(); if (p.length === 1) { cx.arc(p[0][0], p[0][1], it.w / 2, 0, 6.2832); cx.fill(); return; } cx.moveTo(p[0][0], p[0][1]); for (var i = 1; i < p.length - 1; i++) { var mx = (p[i][0] + p[i + 1][0]) / 2, my = (p[i][1] + p[i + 1][1]) / 2; cx.quadraticCurveTo(p[i][0], p[i][1], mx, my); } cx.lineTo(p[p.length - 1][0], p[p.length - 1][1]); cx.stroke(); }
function drawItem(it) { if (it.t === 's') { cx.save(); cx.globalCompositeOperation = it.e ? 'destination-out' : 'source-over'; cx.strokeStyle = cx.fillStyle = it.c; cx.lineWidth = it.w; cx.lineCap = cx.lineJoin = 'round'; strokePath(it); cx.restore(); } else { cx.save(); cx.fillStyle = it.c; cx.font = '600 ' + it.s + 'px system-ui,sans-serif'; cx.textBaseline = 'top'; it.text.split('\n').forEach(function (ln, i) { cx.fillText(ln, it.x, it.y + i * it.s * 1.25); }); cx.restore(); } }
function redraw() { var r = stage.getBoundingClientRect(); cx.clearRect(0, 0, r.width + 2, r.height + 2); items.forEach(drawItem); if (drawing) drawItem(drawing); bUndo.disabled = !items.length; bRedo.disabled = !redo.length; bClear.disabled = !items.length; }
function persist() { clearTimeout(saveT); saveT = setTimeout(function () { try { localStorage.setItem('pm-wb', JSON.stringify(items.slice(-400))); } catch (e) { /* ignore */ } }, 400); }
function pos(e) { var r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
function commitText() { if (ta.hidden) return; var v = ta.value.replace(/\s+$/, ''); if (v) { items.push({ t: 't', x: parseFloat(ta.style.left) + 6, y: parseFloat(ta.style.top) + 4, c: color, s: size === 3 ? 18 : size === 6 ? 24 : 34, text: v }); redo = []; persist(); } ta.value = ''; ta.hidden = true; redraw(); }
cv.addEventListener('pointerdown', function (e) {
  if (e.pointerType === 'pen') lastPen = Date.now(); else if (e.pointerType === 'touch' && Date.now() - lastPen < 3000) return;
  if (e.button > 0) return; commitText();
  var p = pos(e);
  if (tool === 'text') { var r = stage.getBoundingClientRect(); ta.style.left = Math.min(p[0], r.width - 140) + 'px'; ta.style.top = Math.min(p[1], r.height - 50) + 'px'; ta.style.fontSize = (size === 3 ? 18 : size === 6 ? 24 : 34) + 'px'; ta.style.color = color; ta.hidden = false; setTimeout(function () { ta.focus(); }, 0); e.preventDefault(); return; }
  e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ }
  drawing = { t: 's', c: color, w: tool === 'eraser' ? Math.max(16, size * 4) : size, e: tool === 'eraser', p: [p], id: e.pointerId }; redraw();
});
cv.addEventListener('pointermove', function (e) { if (!drawing || e.pointerId !== drawing.id) return; var evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e]; if (!evs.length) evs = [e]; evs.forEach(function (ev) { drawing.p.push(pos(ev)); }); redraw(); });
function endStroke(e) { if (!drawing || (e && e.pointerId !== drawing.id)) return; delete drawing.id; items.push(drawing); drawing = null; redo = []; redraw(); persist(); }
cv.addEventListener('pointerup', function (e) { if (tool === 'text' && !ta.hidden) setTimeout(function () { ta.focus(); }, 0); endStroke(e); }); cv.addEventListener('click', function () { if (tool === 'text' && !ta.hidden) ta.focus(); });cv.addEventListener('pointerup', function(){}); cv.addEventListener('pointercancel', endStroke); cv.addEventListener('contextmenu', function (e) { e.preventDefault(); });
ta.addEventListener('blur', commitText); ta.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); commitText(); } });
function setTool(t) { commitText(); tool = t; bar.querySelectorAll('[data-wb="pen"],[data-wb="eraser"],[data-wb="text"]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-wb') === t ? 'true' : 'false'); }); stage.classList.toggle('typing', t === 'text'); }
bar.addEventListener('click', function (e) {
  var b = e.target.closest('button'); if (!b) return; var id = b.getAttribute('data-wb');
  if (b.hasAttribute('data-color')) { color = b.getAttribute('data-color'); if (tool === 'eraser') setTool('pen'); bar.querySelectorAll('[data-color]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); return; }
  if (b.hasAttribute('data-size')) { size = Number(b.getAttribute('data-size')); bar.querySelectorAll('[data-size]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); return; }
  if (id === 'pen' || id === 'eraser' || id === 'text') setTool(id);
  else if (id === 'undo') { commitText(); if (items.length) { redo.push(items.pop()); redraw(); persist(); } }
  else if (id === 'redo') { if (redo.length) { items.push(redo.pop()); redraw(); persist(); } }
  else if (id === 'clear') { if (b.getAttribute('data-sure')) { items = []; redo = []; b.removeAttribute('data-sure'); b.textContent = 'Clear'; clearTimeout(clearTimer); redraw(); persist(); } else { b.setAttribute('data-sure', '1'); b.textContent = 'Sure?'; clearTimer = setTimeout(function () { b.removeAttribute('data-sure'); b.textContent = 'Clear'; }, 3000); } }
  else if (id === 'save') { commitText(); var o = doc.createElement('canvas'); o.width = cv.width; o.height = cv.height; var c2 = o.getContext('2d'); c2.fillStyle = '#fff'; c2.fillRect(0, 0, o.width, o.height); c2.drawImage(cv, 0, 0); try { o.toBlob(function (bl) { if (!bl) return; var a = doc.createElement('a'); a.href = URL.createObjectURL(bl); a.download = 'my-working.png'; doc.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500); }); } catch (x) { /* ignore */ } }
  else if (id === 'close') toggle(false);
});
function toggle(on) { open = on === undefined ? !open : on; panel.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false'); btn.textContent = open ? 'Hide whiteboard' : 'Whiteboard'; doc.body.classList.toggle('wb-open', open); if (open) { fit(); setTimeout(fit, 60); } else commitText(); }
btn.addEventListener('click', function () { toggle(); });
doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open && doc.activeElement && !/INPUT|SELECT/.test(doc.activeElement.tagName)) toggle(false); });
window.addEventListener('resize', function () { if (open) fit(); });
if (window.ResizeObserver) new ResizeObserver(function () { if (open) fit(); }).observe(stage);
/* Make the floating buttons movable: drag to move, position is remembered. */
function movable(el, key) {
  if (!el) return;
  var sx, sy, ox, oy, moved = false, down = false;
  function clamp(x, y) { var r = el.getBoundingClientRect(); return [Math.max(4, Math.min(window.innerWidth - r.width - 4, x)), Math.max(4, Math.min(window.innerHeight - r.height - 4, y))]; }
  function place(x, y) { var c = clamp(x, y); el.style.left = c[0] + 'px'; el.style.top = c[1] + 'px'; el.style.right = 'auto'; el.style.bottom = 'auto'; }
  try { var p = JSON.parse(localStorage.getItem(key) || 'null'); if (p && typeof p.x === 'number') place(p.x * window.innerWidth, p.y * window.innerHeight); } catch (e) { /* ignore */ }
  window.addEventListener('resize', function () { if (el.style.left) { var r = el.getBoundingClientRect(); place(r.left, r.top); } });
  el.addEventListener('pointerdown', function (e) { if (e.button) return; var r = el.getBoundingClientRect(); down = true; moved = false; sx = e.clientX; sy = e.clientY; ox = r.left; oy = r.top; });
  window.addEventListener('pointermove', function (e) {
    if (!down) return;
    if (!moved && Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) < 8) return;
    moved = true; e.preventDefault(); place(ox + e.clientX - sx, oy + e.clientY - sy);
  }, { passive: false });
  window.addEventListener('pointerup', function () {
    if (!down) return; down = false;
    if (moved) { var r = el.getBoundingClientRect(); try { localStorage.setItem(key, JSON.stringify({ x: r.left / window.innerWidth, y: r.top / window.innerHeight })); } catch (e) { /* ignore */ } }
  });
  el.addEventListener('click', function (e) { if (moved) { e.stopImmediatePropagation(); e.preventDefault(); moved = false; } }, true);
}
movable(btn, 'pm-pos-wb'); movable(doc.getElementById('readerDock'), 'pm-pos-voice');
try { var sv = JSON.parse(localStorage.getItem('pm-wb') || '[]'); if (Array.isArray(sv)) items = sv.filter(function (x) { return x && (x.t === 's' || x.t === 't'); }); } catch (e) { items = []; }
})();
