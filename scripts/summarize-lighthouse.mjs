import fs from 'node:fs';
const output=[];
for(const route of ['home','noticias','flashcards']){
 const r=JSON.parse(fs.readFileSync('audit-reports/lighthouse-'+route+'.json','utf8'));
 if(r.runtimeError||!r.categories?.performance)throw Error('Lighthouse incompleto: '+route);
 const scores=Object.fromEntries(Object.entries(r.categories).map(([k,v])=>[k,typeof v.score==='number'?Math.round(v.score*100):null]));
 const metrics=Object.fromEntries(['largest-contentful-paint','cumulative-layout-shift','total-blocking-time','first-contentful-paint'].map(k=>[k,r.audits[k]?.numericValue??null]));
 output.push({route,version:r.lighthouseVersion,scores,metrics});
 console.log('Lighthouse '+route+': '+JSON.stringify({scores,metrics}));
}
fs.writeFileSync('audit-reports/summary.json',JSON.stringify({environment:'local CI, mobile simulated; not field data',pages:output},null,2));
