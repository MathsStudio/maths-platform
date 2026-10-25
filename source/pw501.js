const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:430,height:1000}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v5.html');
await p.click('[data-level="medium"]');
for(const y of ['P5','P6','P7','all']){await p.click('[data-year="'+y+'"]');
 console.log(y,await p.$$eval('.topics .card h3',e=>e.map(x=>x.textContent).join('; ')), '| tabs:',await p.$$eval('#tabs .tab',e=>e.map(x=>x.textContent).join(',')));}
await p.click('[data-year="P5"]');
await p.click('[data-open="501"]');
console.log(await p.$eval('.eyebrow',e=>e.textContent));
// warm-up: skip via next step? go through stepper
for(let i=0;i<12;i++){const t=await p.$eval('#pane',e=>e.innerText.slice(0,90).replace(/\n/g,' '));console.log(i,t);
 const nx=await p.$('#sNext'); if(nx){await nx.click();continue;}
 await p.screenshot({path:'p5_'+i+'.png'}); break;}
console.log('errs',errs);await b.close();})();
