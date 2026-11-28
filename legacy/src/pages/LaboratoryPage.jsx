import React,{useState,useId} from 'react';
import {labs,stepIndex} from '../study/labs.mjs';
import '../study/study.css';

const vessels=[
 {d:'M102 159 V93 H172',color:'#83b8ff',label:'Artérias pulmonares',x:99,y:77},
 {d:'M348 93 H418 V159',color:'#ff9f9e',label:'Veias pulmonares',x:421,y:77},
 {d:'M418 231 V298 H348',color:'#ff9f9e',label:'Aorta / artérias',x:420,y:325},
 {d:'M172 298 H102 V231',color:'#83b8ff',label:'Veias cavas',x:101,y:325}
];
function Circulation({step}){
 const id=useId();
 return <svg viewBox="0 0 520 380" role="img" aria-labelledby={id+'-title'} className="evd-lab-diagram">
  <title id={id+'-title'}>Esquema do circuito sanguíneo. Etapa {step+1}: {labs[0].steps[step].key}.</title>
  <defs>{vessels.map((v,i)=><marker key={i} id={id+'-arrow-'+i} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5 0 10Z" fill={v.color}/></marker>)}</defs>
  <g fill="#142d50" stroke="#476487" strokeWidth="1.5">
   <rect x="172" y="58" width="176" height="70" rx="14"/><rect x="36" y="159" width="132" height="72" rx="14"/><rect x="352" y="159" width="132" height="72" rx="14"/><rect x="172" y="263" width="176" height="70" rx="14"/>
  </g>
  <g fill="#e8f0ff" fontSize="16" fontWeight="700" textAnchor="middle">
   <text x="260" y="90">Pulmões</text><text x="260" y="110" fontSize="12" fontWeight="400">Trocas gasosas</text>
   <text x="102" y="189">Coração</text><text x="102" y="209">direito</text>
   <text x="418" y="189">Coração</text><text x="418" y="209">esquerdo</text>
   <text x="260" y="295">Tecidos</text><text x="260" y="315" fontSize="12" fontWeight="400">Trocas sistêmicas</text>
  </g>
  {vessels.map((v,i)=><g key={i}><path d={v.d} fill="none" stroke={v.color} strokeWidth={i===step?5:2.5} opacity={i===step?1:.42} strokeLinecap="round" strokeLinejoin="round" markerEnd={'url(#'+id+'-arrow-'+i+')'}/>{i===step&&<path key={step} className="evd-lab-trace" d={v.d} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" pathLength="100"/>}</g>)}
 </svg>
}
function Alveolus({step}){
 const id=useId();
 const flow=[{d:'M260 32 V109',color:'#c4d8ef'},{d:'M210 191 V275',color:'#ff9f9e'},{d:'M310 275 V191',color:'#83b8ff'}];
 return <svg viewBox="0 0 520 380" role="img" aria-labelledby={id+'-title'} className="evd-lab-diagram">
 <title id={id+'-title'}>Esquema de trocas alveolocapilares. {labs[1].steps[step].key}.</title>
 <defs>{flow.map((v,i)=><marker key={i} id={id+'-gas-'+i} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5 0 10Z" fill={v.color}/></marker>)}</defs>
 <path d="M236 24V103C176 108 147 138 147 181S192 241 260 241 373 221 373 181 344 108 284 103V24" fill="#193653" stroke="#8ab1d5" strokeWidth="2"/>
 <path d="M80 285H440" stroke="#3d587d" strokeWidth="44" strokeLinecap="round"/>
 <path d="M80 285H440" stroke="#b9c3d7" strokeWidth="2" strokeDasharray="4 8"/>
 <path d="M90 285H175" stroke="#83b8ff" strokeWidth="9" strokeLinecap="round"/><path d="M345 285H430" stroke="#ff9f9e" strokeWidth="9" strokeLinecap="round"/>
 <g fill="#e8f0ff" textAnchor="middle" fontWeight="700"><text x="260" y="156" fontSize="18">Ar alveolar</text><text x="260" y="340" fontSize="15">Capilar pulmonar</text><text x="210" y="180" fontSize="14">O₂</text><text x="310" y="180" fontSize="14">CO₂</text></g>
 {flow.map((v,i)=><g key={i}><path d={v.d} fill="none" stroke={v.color} strokeWidth={i===step?5:2.5} opacity={i===step?1:.42} strokeLinecap="round" markerEnd={'url(#'+id+'-gas-'+i+')'}/>{i===step&&<path key={step} className="evd-lab-trace" d={v.d} fill="none" stroke="#fff" strokeWidth="2" pathLength="100"/>}</g>)}
 </svg>
}
export function LaboratoryPage(){
 const [labId,setLabId]=useState(labs[0].id);
 const [step,setStep]=useState(0);
 const lab=labs.find(x=>x.id===labId);
 const active=lab.steps[step];
 return <div className="evd-questions-page evd-lab-page">
  <header className="evd-questions-heading"><div><a href="/materiais">← Materiais de estudo</a><p>FISIOLOGIA VISUAL</p><h1>Laboratório científico</h1><p>Explore mecanismos fisiológicos em esquemas interativos, no seu ritmo.</p></div></header>
  <div className="evd-questions-shell">
   <section className="evd-study" data-laboratory aria-labelledby="lab-title">
    <div className="evd-study-head"><div><p className="evd-study-kicker">EXPLORAÇÃO GUIADA</p><h2 id="lab-title">Escolha um mecanismo</h2></div></div>
    <div className="evd-study-controls"><label>Diagrama<select data-lab-topic value={labId} onChange={e=>{setLabId(e.target.value);setStep(0)}}>{labs.map(item=><option key={item.id} value={item.id}>{item.title}</option>)}</select></label></div>
    <p>{lab.intro}</p>
    <figure className="evd-lab-figure">
     {labId==='circulacao'?<Circulation step={step}/>:<Alveolus step={step}/>}
     <figcaption>{labId==='circulacao'?<><span><i className="evd-lab-blue"/> Sangue relativamente pobre em O₂</span><span><i className="evd-lab-red"/> Sangue relativamente rico em O₂</span></>:<><span><i className="evd-lab-red"/> Difusão de O₂</span><span><i className="evd-lab-blue"/> Difusão de CO₂</span></>}<span>Representação esquemática, sem escala.</span></figcaption>
    </figure>
    <div className="evd-lab-steps" role="group" aria-label="Etapas do mecanismo">{lab.steps.map((s,i)=><button key={s.key} type="button" aria-pressed={step===i} data-lab-step={i} onClick={()=>setStep(i)}>{i+1}<span>{s.title}</span></button>)}</div>
    <article className="evd-study-card" aria-live="polite" data-lab-description><p className="evd-study-kicker">ETAPA {step+1} DE {lab.steps.length}</p><h3>{active.title}</h3><p>{active.description}</p><p className="evd-lab-key"><strong>{active.key}</strong></p></article>
    <div className="evd-lab-actions"><button type="button" data-lab-prev disabled={step===0} onClick={()=>setStep(s=>stepIndex(s,-1,lab.steps.length))}>Anterior</button><button className="evd-study-primary" type="button" data-lab-next disabled={step===lab.steps.length-1} onClick={()=>setStep(s=>stepIndex(s,1,lab.steps.length))}>Próxima etapa</button></div>
    <footer className="evd-study-footer"><p>Material introdutório para estudo de fisiologia; as figuras simplificam estruturas e não representam modelos anatômicos de precisão, exames ou dados individuais. Nenhum dado é coletado pelo laboratório.</p><a href="/flashcards">Revisar com flashcards →</a><a href="/questoes">Resolver questões →</a></footer>
   </section>
  </div>
 </div>;
}
