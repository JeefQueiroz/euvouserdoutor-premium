import fs from 'node:fs';
const output=[];
for(const route of ['home','noticias','flashcards','questoes','laboratorio','videos']){
 const r=JSON.parse(fs.readFileSync('audit-reports/lighthouse-'+route+'.json','utf8'));
 if(r.runtimeError||!r.categories?.performance)throw Error('Lighthouse incompleto: '+route);
 const scores=Object.fromEntries(Object.entries(r.categories).map(([k,v])=>[k,typeof v.score==='number'?Math.round(v.score*100):null]));
 const metrics=Object.fromEntries(['largest-contentful-paint','cumulative-layout-shift','total-blocking-time','first-contentful-paint'].map(k=>[k,r.audits[k]?.numericValue??null]));
 const targets={performance:(scores.performance??0)>=90,accessibility:(scores.accessibility??0)>=95,lcp:(metrics['largest-contentful-paint']??Infinity)<=2500,cls:(metrics['cumulative-layout-shift']??Infinity)<=.1};
 output.push({route,version:r.lighthouseVersion,scores,metrics,targets});
 console.log('Metas '+route+': '+JSON.stringify(targets));
 const lcp=r.audits['largest-contentful-paint-element']?.details?.items;
 const failed=Object.entries(r.audits).filter(([k,v])=>v.score!==null&&v.score<1&&v.scoreDisplayMode==='binary').map(([k,v])=>({id:k,title:v.title,nodes:(v.details?.items||[]).slice(0,8).map(item=>({selector:item.node?.selector,explanation:item.node?.explanation||item.explanation}))}));
 console.log('Lighthouse '+route+': '+JSON.stringify({scores,metrics}));
 console.log('Lighthouse diagnóstico '+route+': '+JSON.stringify({lcp:lcp??null,failed}).slice(0,8000));
}
fs.writeFileSync('audit-reports/summary.json',JSON.stringify({environment:'local CI, mobile simulated; not field data',pages:output},null,2));
