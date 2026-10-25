const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:1100}});
await p.goto('file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/p6-v3.html');
await p.click('[data-level="medium"]');await (await p.$$('#tabs .tab'))[3].click();
await p.waitForSelector('.more');await p.waitForTimeout(300);await p.screenshot({path:'a1.png'});
await p.waitForTimeout(4000);await p.screenshot({path:'a2.png'});await b.close();})();
