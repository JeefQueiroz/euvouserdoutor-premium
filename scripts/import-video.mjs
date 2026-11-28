// Local-only acceptance gate. No rendering, uploading, credentials or network calls.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {spawnSync} from 'node:child_process';
import {fileDigest,validateEpisode,readCatalog} from '../src/video-catalog.mjs';
const args=process.argv.slice(2);
const [metadata,mp4,poster,vtt]=args;
if(args.length!==4){console.error('Uso: npm run video:import -- metadados.json video.mp4 capa.webp legenda.vtt');process.exit(2);}
const root=process.cwd();
const catalog=readCatalog(root);
const entry=JSON.parse(fs.readFileSync(metadata,'utf8'));
if(!/^([a-z0-9]+-)*[a-z0-9]+$/.test(entry.slug||''))throw Error('Slug inválido');
if(catalog.some(x=>x.slug===entry.slug))throw Error('Episódio já cadastrado; nenhuma substituição automática');
const files={video:[mp4,'mp4'],poster:[poster,'webp'],captions:[vtt,'vtt']};
const probe=spawnSync('ffprobe',['-v','error','-show_streams','-show_format','-of','json',path.resolve(mp4)],{encoding:'utf8',timeout:30000});
if(probe.error||probe.status!==0)throw Error('FFprobe indisponível ou vídeo inválido');
const info=JSON.parse(probe.stdout);
const visual=info.streams.find(s=>s.codec_type==='video');
const audio=info.streams.find(s=>s.codec_type==='audio');
const fps=visual?.avg_frame_rate?.split('/').map(Number)||[];
if(visual?.width!==1080||visual?.height!==1920||fps.length!==2||!fps[1]||Math.abs(fps[0]/fps[1]-30)>.01||visual.codec_name!=='h264'||visual.pix_fmt!=='yuv420p'||audio?.codec_name!=='aac'||!String(info.format?.format_name||'').split(',').includes('mp4'))throw Error('Esperado MP4 H.264/yuv420p, AAC, 1080x1920, 30 fps');
entry.duration=Number(info.format?.duration);
const stage=fs.mkdtempSync(path.join(os.tmpdir(),'evd-video-'));
const created=[];
try{
 fs.mkdirSync(path.join(stage,'assets/videos'),{recursive:true});
 entry.sha256={};
 for(const [key,[input,ext]] of Object.entries(files)){
  entry[key]='assets/videos/'+entry.slug+'.'+ext;
  const dest=path.join(stage,entry[key]);
  fs.copyFileSync(input,dest);
  entry.sha256[key]=fileDigest(dest);
  if(fs.existsSync(path.join(root,entry[key])))throw Error('Destino existente: '+entry[key]);
 }
 validateEpisode(entry,stage);
 fs.mkdirSync(path.join(root,'assets/videos'),{recursive:true});
 for(const key of Object.keys(files)){
  const dest=path.join(root,entry[key]);
  fs.copyFileSync(path.join(stage,entry[key]),dest,fs.constants.COPYFILE_EXCL);
  created.push(dest);
 }
 const temp=path.join(root,'src/videos.json.pending');
 if(fs.existsSync(temp))throw Error('Importação pendente existente');
 try{fs.writeFileSync(temp,JSON.stringify([...catalog,entry],null,2)+'\n',{flag:'wx'});fs.renameSync(temp,path.join(root,'src/videos.json'));}finally{if(fs.existsSync(temp))fs.unlinkSync(temp);}
 console.log('Importado localmente: '+entry.slug+'. Revise o diff e execute npm run check antes de publicar.');
}catch(error){for(const file of created)fs.unlinkSync(file);throw error;}
finally{fs.rmSync(stage,{recursive:true,force:true});}
