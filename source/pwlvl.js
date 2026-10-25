const {chromium}=require('playwright');
const f='file:///tmp/claude-0/-home-claude/5b2cf499-68dc-5612-a68c-621fe7f22388/scratchpad/v3/'+process.argv[2];
(async()=>{const b=await chromium.launch();const res={};
for(const yr of ['P7'])for(const lv of ['low','medium','high']){
 const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.goto(f);await p.click('[data-level="'+lv+'"]');await p.click('[data-pickyear="'+yr+'"]');
 for(let n=1;n<=(yr==='P7'?12:10);n++){
  if(await p.$eval('#tabs',x=>!x.classList.contains('hide')))await p.click('#tabs [data-tab="home"]');
  const id=await p.evaluate(n=>{const b=[...document.querySelectorAll('.topic [data-open]')].filter(x=>x.tagName==='BUTTON'&&x.classList.contains('btn'));return null},n);
  // open via card button order: cards sorted by role so find by title attr
  const ok=await p.evaluate(n=>{const cards=[...document.querySelectorAll('.card.topic')];const c=cards.find(c=>c.querySelector('.tn')&&c.querySelector('.tn').textContent.trim()==='Topic '+n);if(!c)return false;c.querySelector('button.btn').click();return true},n);
  if(!ok){res[yr+lv+n]='nocard';continue}
  const r=await p.evaluate(()=>{const tabs=document.querySelector('#view .eyebrow').textContent;const id=[...Object.values(Studio.topics)].find(t=>tabs.indexOf(t.title)>-1&&tabs.indexOf(t.year||'P6')>-1);const st=id.steps.find(s=>s.id==='practise');const qs=st.make();const tags={};qs.forEach(q=>tags[q.tag]=(tags[q.tag]||0)+1);return {id:id.n,n:qs.length,uniq:new Set(qs.map(q=>q.text)).size,tags:Object.keys(tags).length,texts:qs.map(q=>q.text)}});
  res[yr+'|'+lv+'|'+n]=r;
 }
 if(errs.length)console.log('ERR',yr,lv,errs.slice(0,2));
 await p.close();}
for(const yr of ['P7'])for(let n=11;n<=12;n++){const L=res[yr+'|low|'+n],M=res[yr+'|medium|'+n],H=res[yr+'|high|'+n];if(!L||!H||!L.texts){console.log(yr,n,'missing');continue}
 const ls=new Set(L.texts),ov=H.texts.filter(t=>ls.has(t)).length;
 console.log(yr,n,'id',L.id,'tags L/M/H',L.tags,M.tags,H.tags,'uniq',L.uniq,M.uniq,H.uniq,'lowâˆ©high',ov);}
await b.close();})();
