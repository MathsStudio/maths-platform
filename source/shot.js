const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('file://'+process.cwd()+'/v28.html');await p.click('[data-level="medium"]');await p.click('[data-pickyear="P6"]');await p.click('[data-open] >> nth=1');
await p.screenshot({path:'w1.png'});
await p.click('[data-part="learn"]');await p.waitForTimeout(300);await p.screenshot({path:'w2.png',fullPage:true});
await p.click('#backMenu');await p.click('[data-part="practice"]');await p.waitForTimeout(300);await p.screenshot({path:'w3.png',fullPage:true});
await b.close()})();
