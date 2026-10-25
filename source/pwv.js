const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const f='file://'+process.cwd()+'/'+process.argv[2];
for(const lv of ['low','medium','high']){const p=await b.newPage();await p.goto(f);await p.click('[data-level="'+lv+'"]');await p.click('[data-pickyear="P7"]');
 const out=[];for(const n of [1,5,11]){await p.evaluate(()=>{});const ok=await p.evaluate(n=>{const c=[...document.querySelectorAll('.card.topic')].find(c=>c.querySelector('.tn').textContent.trim()==='Topic '+n);c.querySelector('button.btn').click();return 1},n);
  out.push(await p.evaluate(()=>{const t=Object.values(Studio.topics).find(t=>document.querySelector('#view .eyebrow').textContent.indexOf(t.title)>-1&&document.querySelector('#view .eyebrow').textContent.indexOf(t.year||'P6')>-1);const qs=t.steps.find(s=>s.id==='practise').make();return qs.filter(q=>q.tag==='Verbal reasoning').length}));
  await p.click('#tbHome');}
 console.log(lv,out);await p.close();}await b.close()})();
