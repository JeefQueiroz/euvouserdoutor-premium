import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';

const MAX_BYTES=40*1024*1024;
const nonempty=v=>typeof v==='string'&&v.trim().length>0;
export const fileDigest=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
export function validateEpisode(entry,root){
 if(!entry||!/^([a-z0-9]+-)*[a-z0-9]+$/.test(entry.slug||''))throw Error('Slug inválido');
 const {slug}=entry;
 const fail=reason=>{throw Error(slug+': '+reason);};
 for(const key of ['title','description','transcript','reviewedBy','reviewedAt','rights','source'])if(!nonempty(entry[key]))fail('Campo obrigatório: '+key);
 if(entry.status!=='approved')fail('Revisão editorial pendente');
 if(!/^\d{4}-\d{2}-\d{2}$/.test(entry.reviewedAt)||Number.isNaN(Date.parse(entry.reviewedAt)))fail('Data inválida');
 if(!Number.isFinite(entry.duration)||entry.duration<=0||entry.duration>180)fail('Duração deve estar entre 0 e 180 segundos');
 if(!Array.isArray(entry.references)||!entry.references.length||entry.references.some(x=>!nonempty(x)))fail('Referências obrigatórias');
 for(const [key,ext,max] of [['video','mp4',MAX_BYTES],['poster','webp',500*1024],['captions','vtt',128*1024]]){
  const expected='assets/videos/'+slug+'.'+ext;
  if(entry[key]!==expected)fail('Caminho inválido: '+key);
  const file=path.join(root,expected);
  if(!fs.existsSync(file)||!fs.lstatSync(file).isFile())fail('Arquivo ausente ou inválido: '+key);
  const size=fs.statSync(file).size;
  if(!size||size>max)fail('Tamanho inválido: '+key);
  if(entry.sha256?.[key]!==fileDigest(file))fail('Hash divergente: '+key);
  if(key==='captions'){
   const body=fs.readFileSync(file,'utf8').replace(/^\uFEFF/,'');
   if(!/^WEBVTT(?:\s|$)/.test(body)||!body.includes('-->'))fail('Legendas WebVTT inválidas');
  }
 }
 return entry;
}
export function readCatalog(root){
 const catalog=JSON.parse(fs.readFileSync(path.join(root,'src/videos.json'),'utf8'));
 if(!Array.isArray(catalog))throw Error('Catálogo deve ser uma lista');
 const seen=new Set();
 return catalog.map(item=>{validateEpisode(item,root);if(seen.has(item.slug))throw Error('Slug duplicado: '+item.slug);seen.add(item.slug);return item;});
}
