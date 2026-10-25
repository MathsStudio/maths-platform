const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:430,height:1000}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v6.html');
await p.click('[data-level="medium"]');
for(const y of ['P5','P6','P7']){await p.click('[data-year="'+y+'"]');
 console.log(y,await p.$$eval('.topics .card.topic:not(.soon)',e=>e.length),await p.$$eval('.topics .card:first-child .stg',e=>e.map(x=>x.textContent).join('|')),await p.$eval('.topics .card:first-child .btn',e=>e.dataset.open),'tabs',await p.$$eval('#tabs .tab',e=>e.length));}
await p.click('[data-year="P5"]');await p.screenshot({path:'h6.png'});
await p.click('.topics .card:first-child .btn');
console.log(await p.$eval('.eyebrow',e=>e.textContent), await p.$$eval('.stg',e=>e.map(x=>x.textContent+(x.classList.contains('on')?'*':'')).join('|')));
await p.click('[data-stage="1"]');console.log(await p.$eval('.eyebrow',e=>e.textContent));
console.log('cur tab',await p.$eval('#tabs .tab.cur',e=>e.textContent));
await p.screenshot({path:'l6.png'});
await p.click('#tabs .tab[data-tab="2"]');console.log(await p.$eval('.eyebrow',e=>e.textContent));
console.log('errs',errs);await b.close();})();
