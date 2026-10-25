const fs=require('fs');global.window=global;
function mk(){return {innerHTML:'',textContent:'',value:'',style:{setProperty(){}},classList:{add(){},remove(){},toggle(){},contains(){return false}},dataset:{},addEventListener(){},querySelectorAll(){return []},appendChild(){},setAttribute(){},getAttribute(){return null}}}
global.document={getElementById(){return mk()},createElement(){return mk()},querySelectorAll(){return []},addEventListener(){},body:mk(),documentElement:mk()};
let LS={};global.localStorage={getItem(k){return LS[k]||null},setItem(k,v){LS[k]=v}};global.speechSynthesis=undefined;
const html=fs.readFileSync(process.argv[2],'utf8');
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)){const s=m[1];if(/^Studio\.start\(\);\s*$/.test(s.trim()))continue;try{(0,eval)(s)}catch(e){}}
const S=Studio;
const ids=[];for(let i=1;i<=10;i++){ids.push(i,500+i,700+i)}
for(const id of ids){const t=S.topics[id];const p=t.steps.find(s=>s.id==='practise'||s.best);
 const out={};
 for(const d of ['low','medium','high']){ S.store?(S.store.settings.difficulty=d):0; try{window.__d=d}catch(e){}
  const qs=p.make(); out[d]=qs.map(q=>q.tag).reduce((a,t)=>(a[t]=(a[t]||0)+1,a),{}); out[d+'n']=qs.length; out[d+'t']=new Set(qs.map(q=>q.text)).size; out[d+'s']=qs.slice(0,3).map(q=>q.text.replace(/<[^>]+>/g,'').slice(0,50));}
 console.log(id,'n',out.lown,out.mediumn,out.highn,'uniq',out.lowt,out.mediumt,out.hight,'|',Object.keys(out.low).length,Object.keys(out.medium).length,Object.keys(out.high).length); }
