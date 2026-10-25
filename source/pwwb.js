const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const errs=[];
for(const [w,h,name] of [[1366,800,'desk'],[820,1100,'tab'],[390,800,'phone']]){
 const p=await b.newPage({viewport:{width:w,height:h},hasTouch:name!=='desk'});p.on('pageerror',e=>errs.push(name+' '+e.message));
 await p.goto('file://'+process.cwd()+'/v20.html');await p.click('[data-level="medium"]');
 console.log(name,'gate: button visible?',await p.$eval('#wbBtn',x=>getComputedStyle(x).display!=='none'));
 await p.click('[data-pickyear="P6"]');
 await p.evaluate(()=>{const c=[...document.querySelectorAll('.card.topic')].find(c=>c.querySelector('.tn').textContent.trim()==='Topic 3');c.querySelector('button.btn').click()});
 console.log(name,'lesson: button visible?',await p.$eval('#wbBtn',x=>getComputedStyle(x).display!=='none'));
 await p.click('#wbBtn');await p.waitForTimeout(200);
 const box=await p.$eval('.wb-stage canvas',c=>{const r=c.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}});
 // draw a stroke with mouse
 await p.mouse.move(box.x+40,box.y+40);await p.mouse.down();for(let i=0;i<20;i++)await p.mouse.move(box.x+40+i*8,box.y+40+Math.sin(i/2)*20);await p.mouse.up();
 // type text
 await p.click('[data-wb="text"]');await p.mouse.click(box.x+60,box.y+130);await p.waitForTimeout(150);await p.keyboard.type('3/4 of 24 = 18');await p.click('[data-wb="pen"]');
 const px=await p.$eval('.wb-stage canvas',c=>{const d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;let n=0;for(let i=3;i<d.length;i+=4)if(d[i]>0)n++;return n});
 console.log(name,'inked pixels',px,'panel',JSON.stringify(await p.$eval('#wbPanel',x=>{const r=x.getBoundingClientRect();return [Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)]})));
 await p.screenshot({path:'wb_'+name+'.png'});
 await p.click('[data-wb="undo"]');console.log(name,'undo ok',!(await p.$eval('[data-wb="clear"]',x=>x.disabled)));await p.click('[data-wb="clear"]');await p.click('[data-wb="clear"]');
 console.log(name,'after clear undo disabled',await p.$eval('[data-wb="undo"]',x=>x.disabled));
 await p.click('[data-wb="close"]');console.log(name,'closed',await p.$eval('#wbPanel',x=>x.hidden));
 await p.close();}
console.log('errs',errs);await b.close()})();
