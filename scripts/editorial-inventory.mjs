import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {articles} from '../src/content.mjs';

export function mainDigest(html){
 const main=html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0];
 if(!main)throw Error('Documento sem conteúdo principal');
 return createHash('sha256').update(main).digest('hex');
}
// Interactive learning data is not completely represented in the first HTML render.
const interactiveSources = Object.freeze({
 '/flashcards':['legacy/src/study/cards.mjs','legacy/src/study/review.mjs','legacy/src/components/FlashcardStudy.jsx'],
 '/questoes':['legacy/src/study/questions.mjs','legacy/src/study/quiz.mjs','legacy/src/pages/QuestionsPage.jsx'],
 '/laboratorio':['legacy/src/study/labs.mjs','legacy/src/pages/LaboratoryPage.jsx']
});
export function contentDigest(root,route,html){
 const hash=createHash('sha256');
 hash.update(JSON.stringify({main:mainDigest(html),sources:(interactiveSources[route]||[]).map(file=>({file,sha256:createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex')}))}));
 return hash.digest('hex');
}
export function reviewStatus(record,digest){
 if(!record)return 'pending';
 if(record.sha256!==digest)return 'stale';
 if(record.status!=='approved'||record.sourcesReviewed!==true||record.mediaReviewed!==true||typeof record.reviewedBy!=='string'||!record.reviewedBy.trim()||typeof record.note!=='string'||!record.note.trim()||!/^\d{4}-\d{2}-\d{2}$/.test(record.reviewedAt||''))return 'pending';
 const date=new Date(record.reviewedAt+'T00:00:00Z');
 if(Number.isNaN(date.getTime())||date.toISOString().slice(0,10)!==record.reviewedAt||date.getTime()>Date.now())return 'pending';
 return 'approved';
}
export function collectInventory(root,{skipLegacy=false}={}){
 const dist=path.join(root,'dist');
 const imported=skipLegacy?[]:JSON.parse(fs.readFileSync(path.join(dist,'legacy-parity.json'),'utf8')).imported;
 const routes=[...articles.map(a=>({route:'/artigos/'+a.slug,group:'premium'})),...imported.filter(x=>x.startsWith('/noticias/')).map(route=>({route,group:'historical'})),...['/flashcards','/questoes','/laboratorio','/materiais','/mentoria'].filter(x=>imported.includes(x)).map(route=>({route,group:'study'}))];
 const approvals=JSON.parse(fs.readFileSync(path.join(root,'src/editorial-approvals.json'),'utf8'));
 if(!approvals||typeof approvals!=='object'||Array.isArray(approvals))throw Error('Registro de revisão inválido');
 const entries=routes.map(({route,group})=>{
  const file=path.join(dist,route.slice(1)+(group==='premium'?'.html':'/index.html'));
  const html=fs.readFileSync(file,'utf8');
  const digest=contentDigest(root,route,html);
  const main=html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)[0];
  // Inventory links, not verified citations. No external requests.
  const externalLinks=[...new Set([...main.matchAll(/\bhref="(https?:\/\/[^"]+)"/gi)].map(x=>x[1].replaceAll('&amp;','&')))].sort();
  const title=html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]||route;
  // Prioritization is heuristic, not a determination of medical accuracy.
  const flags=[];
  if(/\b(câncer|cancer|leucemia|tratamento|terapia|vacina|medicamento|diagnóstico|diagnostico|ensaio clínico|imunoterapia|barrett|cirurgia)\b/i.test(title))flags.push('clinical-claims');
  if(!externalLinks.length)flags.push('no-external-links-in-initial-html');
  if(interactiveSources[route])flags.push('interactive-content');
  if(main.includes('tilapia-imagem-em-migracao.svg'))flags.push('media-placeholder');
  return {route,group,title,sha256:digest,status:reviewStatus(Object.hasOwn(approvals,route)?approvals[route]:null,digest),priority:flags.includes('clinical-claims')?'high':group==='study'?'medium':'standard',flags,externalLinks};
 });
 const counts={total:entries.length,approved:entries.filter(x=>x.status==='approved').length,pending:entries.filter(x=>x.status==='pending').length,stale:entries.filter(x=>x.status==='stale').length};
 return {scope:skipLegacy?'diagnostic-premium-only':'full',counts,entries};
}
export function assertReleaseReady(inventory){
 if(inventory.scope!=='full'||!inventory.counts.total||inventory.counts.approved!==inventory.counts.total)throw Error('Indexação bloqueada: revisão editorial incompleta ou desatualizada. Consulte audit-reports/editorial-review.json.');
}
