const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:430,height:1100}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v4.html');
await p.click('[data-level="medium"]');
for(const y of ['P5','P6','P7','all']){
  await p.click('[data-year="'+y+'"]');
  const t=await p.$$eval('.topics .card h3',els=>els.map(e=>e.textContent));
  const tags=await p.$$eval('.topics .tag',els=>els.map(e=>e.textContent));
  console.log(y,t.length,tags.slice(0,3).join(' | '),'| first:',t[0],'| last:',t[t.length-1]);
}
await p.click('[data-year="P5"]'); await p.screenshot({path:'y5.png'});
console.log('errs',errs);
await b.close();})();
