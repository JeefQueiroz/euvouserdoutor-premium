import React, { useEffect, useRef, useState } from 'react';
import { cards, decks } from '../study/cards.mjs';
import { STORAGE_KEY, sanitizeProgress, availableCards, gradeCard } from '../study/review.mjs';

const ids = cards.map(card => card.id);
const ratings = [['again','Rever','Em 10 minutos'],['good','Lembrei','Intervalo normal'],['easy','Fácil','Intervalo maior']];

export function FlashcardStudy() {
  const [progress,setProgress]=useState({});
  const [ready,setReady]=useState(false);
  const [persistent,setPersistent]=useState(true);
  const [deck,setDeck]=useState('Todos');
  const [mode,setMode]=useState('due');
  const [session,setSession]=useState(null);
  const [position,setPosition]=useState(0);
  const [revealed,setRevealed]=useState(false);
  const [now,setNow]=useState(0);
  const [confirmReset,setConfirmReset]=useState(false);
  const focus=useRef(null);
  useEffect(()=>{
    try {
      const value=window.localStorage.getItem(STORAGE_KEY);
      setProgress(sanitizeProgress(value ? JSON.parse(value) : {},ids));
    } catch { setPersistent(false); }
    setNow(Date.now());
    setReady(true);
    const timer=window.setInterval(()=>setNow(Date.now()),30000);
    return ()=>window.clearInterval(timer);
  },[]);
  const eligible=availableCards(cards,progress,deck,mode,now);
  const due=availableCards(cards,progress,deck,'due',now).length;
  const current=session ? cards.find(card=>card.id===session[position]) : null;
  const start=()=>{
    const stamp=Date.now();
    setNow(stamp);
    setSession(availableCards(cards,progress,deck,mode,stamp).map(card=>card.id));
    setPosition(0);
    setRevealed(false);
  };
  const save=next=>{
    setProgress(next);
    try {window.localStorage.setItem(STORAGE_KEY,JSON.stringify(next));setPersistent(true);}
    catch {setPersistent(false);}
  };
  const rate=rating=>{
    if(!current || !revealed) return;
    const stamp=Date.now();
    save({...progress,[current.id]:gradeCard(progress[current.id],rating,stamp)});
    setNow(stamp);setRevealed(false);setPosition(p=>p+1);
  };
  useEffect(()=>{if(session!==null) focus.current?.focus();},[session,position,revealed]);
  const stop=()=>{setSession(null);setRevealed(false);setPosition(0);};
  const reset=()=>{
    try {window.localStorage.removeItem(STORAGE_KEY);setPersistent(true);}
    catch {setPersistent(false);}
    setProgress({});setConfirmReset(false);stop();setNow(Date.now());
  };
  return <section className="evd-study" aria-labelledby="evd-study-title" data-flashcards>
    <header className="evd-study-head"><div><p className="evd-study-kicker">REVISÃO ATIVA</p><h2 id="evd-study-title">Pratique agora</h2><p>Responda mentalmente, revele a carta e avalie sua lembrança.</p></div><span className="evd-study-count">{cards.length} cartas · 3 temas</span></header>
    {!persistent && <p role="status" className="evd-study-notice">O armazenamento local não está disponível. O progresso desta sessão pode ser perdido ao fechar a página.</p>}
    {session===null ? <>
      <div className="evd-study-controls">
        <label>Tema<select value={deck} onChange={e=>setDeck(e.target.value)}>{['Todos',...decks].map(d=><option key={d}>{d}</option>)}</select></label>
        <label>Modo<select value={mode} onChange={e=>setMode(e.target.value)}><option value="due">Novas e pendentes</option><option value="all">Todas as cartas</option></select></label>
      </div>
      <p role="status" data-study-due>{ready ? due+' cartas novas ou pendentes neste tema' : 'Carregando progresso local...'}</p>
      <button className="evd-study-primary" type="button" data-study-start onClick={start} disabled={!ready||eligible.length===0}>Iniciar revisão</button>
      {ready&&eligible.length===0&&<p>Não há cartas pendentes neste tema. Selecione Todas as cartas para praticar novamente.</p>}
    </> : current ? <>
      <div className="evd-study-progress"><span>Carta {position+1} de {session.length}</span><progress max={session.length} value={position} aria-label="Progresso da sessão"/></div>
      <article className="evd-study-card">
        <p className="evd-study-kicker">{current.deck}</p>
        <h3 tabIndex="-1" ref={!revealed?focus:null} data-study-question>{current.question}</h3>
        {revealed&&<div className="evd-study-answer" tabIndex="-1" ref={focus} data-study-answer><strong>Resposta</strong><p>{current.answer}</p></div>}
      </article>
      {!revealed ? <button className="evd-study-primary" type="button" onClick={()=>setRevealed(true)} data-study-reveal>Revelar resposta</button> : <div className="evd-study-ratings" aria-label="Avalie sua lembrança">{ratings.map(([value,label,hint])=><button key={value} type="button" data-study-rate={value} onClick={()=>rate(value)}><strong>{label}</strong><small>{hint}</small></button>)}</div>}
      <button className="evd-study-secondary" type="button" onClick={stop}>Encerrar sessão</button>
    </> : <div className="evd-study-finish"><h3 ref={focus} tabIndex="-1" data-study-finished>Revisão concluída</h3><p>{session.length} cartas avaliadas nesta sessão. As próximas datas seguem sua avaliação.</p><button type="button" className="evd-study-primary" onClick={stop}>Voltar à biblioteca</button></div>}
    <footer className="evd-study-footer"><p>Progresso salvo somente neste navegador, sem cadastro ou sincronização. Os intervalos são uma heurística de estudo, não uma avaliação de domínio.</p>{confirmReset ? <div><p>Apagar o progresso de todos os temas neste navegador?</p><button type="button" onClick={reset}>Apagar progresso</button> <button type="button" onClick={()=>setConfirmReset(false)}>Cancelar</button></div> : <button type="button" onClick={()=>setConfirmReset(true)} disabled={session!==null||!Object.keys(progress).length}>Limpar progresso local</button>}</footer>
  </section>;
}
