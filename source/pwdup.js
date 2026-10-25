const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const lv of ['low','medium','high']){const p=await b.newPage();
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v5.html');
await p.click('[data-level="'+lv+'"]');await p.click('[data-year="P5"]');await p.click('[data-open="501"]');
const r=await p.evaluate(()=>{const st=Studio.topics[501].steps.find(s=>s.id==='practise');const qs=st.make();const tags={};qs.forEach(q=>{const k=q.tag;tags[k]=(tags[k]||0)+1});return {n:qs.length,uniq:new Set(qs.map(q=>q.text)).size,tags}});
console.log(lv,r.n,r.uniq,JSON.stringify(r.tags));await p.close();}
await b.close();})();
