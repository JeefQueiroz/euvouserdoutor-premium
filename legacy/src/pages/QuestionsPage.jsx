import React,{useEffect,useRef,useState} from 'react';
import {questions,topics} from '../study/questions.mjs';
import {questionsFor,evaluate,summarize} from '../study/quiz.mjs';
import '../study/study.css';

export function QuestionsPage(){
 const [topic,setTopic]=useState('Todos');
 const [session,setSession]=useState(null);
 const [position,setPosition]=useState(0);
 const [choice,setChoice]=useState(null);
 const [results,setResults]=useState([]);
 const [feedback,setFeedback]=useState(false);
 const [confirmExit,setConfirmExit]=useState(false);
 const focus=useRef(null);
 const current=session?.[position];
 const summary=summarize(results);
 const available=questionsFor(questions,topic);
 const start=(items)=>{setSession(items);setPosition(0);setChoice(null);setResults([]);setFeedback(false);setConfirmExit(false);};
 const submit=()=>{if(!current||choice===null||feedback)return;setResults(old=>[...old,evaluate(current,choice)]);setFeedback(true);};
 const next=()=>{setPosition(p=>p+1);setChoice(null);setFeedback(false);};
 const exit=()=>{setSession(null);setResults([]);setChoice(null);setFeedback(false);setConfirmExit(false);};
 useEffect(()=>{if(session!==null)focus.current?.focus();},[session,position,feedback]);
 return <div className="evd-questions-page">
  <header className="evd-questions-heading"><div><a href="/materiais">← Materiais de estudo</a><p>PRÁTICA E REVISÃO</p><h1>Questões comentadas</h1><p>Resolva questões originais, entenda cada alternativa e revise os erros no seu ritmo.</p></div></header>
  <div className="evd-questions-shell">
   <section className="evd-study" data-quiz aria-labelledby="quiz-title">
    <div className="evd-study-head"><div><p className="evd-study-kicker">BANCO INICIAL</p><h2 id="quiz-title">Pratique seus conhecimentos</h2></div><span className="evd-study-count">{questions.length} questões · {topics.length} temas</span></div>
    {session===null ? <>
      <div className="evd-study-controls"><label>Tema<select data-quiz-topic value={topic} onChange={e=>setTopic(e.target.value)}>{['Todos',...topics].map(t=><option key={t}>{t}</option>)}</select></label></div>
      <p>{available.length} questões disponíveis. Sem cronômetro, sem cadastro.</p><button type="button" className="evd-study-primary" data-quiz-start onClick={()=>start(available)}>Iniciar questões</button>
    </> : current ? <>
      <div className="evd-study-progress"><span>Questão {position+1} de {session.length}</span><progress max={session.length} value={results.length} aria-label="Questões respondidas"/></div>
      <article className="evd-study-card">
       <p className="evd-study-kicker">{current.topic}</p><h3 tabIndex="-1" ref={!feedback?focus:null} data-quiz-question>{current.question}</h3>
       <fieldset className="evd-quiz-options" disabled={feedback}><legend className="sr-only">Escolha uma alternativa</legend>{current.options.map((option,i)=><label key={i} className={'evd-quiz-option'+(choice===i?' selected':'')+(feedback?(i===current.correct?' correct':choice===i?' wrong':''):'')}><input type="radio" name="quiz-choice" checked={choice===i} onChange={()=>setChoice(i)} value={i}/><span><strong>{String.fromCharCode(65+i)}.</strong> {option}{feedback&&i===current.correct&&<small>Alternativa correta</small>}{feedback&&choice===i&&i!==current.correct&&<small>Sua resposta</small>}</span></label>)}</fieldset>
       {feedback&&<div className="evd-study-answer" data-quiz-feedback tabIndex="-1" ref={focus}><strong>{choice===current.correct?'Resposta correta':'Revise esta questão'}</strong><ol className="evd-quiz-explanations">{current.explanations.map((ex,i)=><li key={i}><strong>{String.fromCharCode(65+i)} — {i===current.correct?'Correta':'Incorreta'}</strong><p>{ex}</p></li>)}</ol></div>}
      </article>
      {feedback?<button className="evd-study-primary" type="button" data-quiz-next onClick={next}>{position+1===session.length?'Ver resultado':'Próxima questão'}</button>:<button className="evd-study-primary" type="button" data-quiz-submit disabled={choice===null} onClick={submit}>Conferir resposta</button>}
      {confirmExit?<div className="evd-study-notice"><p>Encerrar esta sessão? As respostas não serão salvas.</p><button type="button" onClick={exit}>Encerrar</button> <button type="button" onClick={()=>setConfirmExit(false)}>Continuar</button></div>:<button className="evd-study-secondary" type="button" onClick={()=>setConfirmExit(true)}>Encerrar sessão</button>}
    </>:<div className="evd-study-finish"><h3 ref={focus} tabIndex="-1" data-quiz-finished>Resultado da sessão</h3><p data-quiz-score>{summary.correct} de {summary.total} respostas corretas.</p><p>{summary.missed.length} questões para revisar.</p>{summary.missed.length>0&&<button className="evd-study-primary" type="button" data-quiz-retry onClick={()=>start(questionsFor(questions,'Todos',summary.missed))}>Revisar questões erradas</button>}<button type="button" onClick={exit}>Escolher outro tema</button></div>}
    <footer className="evd-study-footer"><p>Questões introdutórias de autoria do portal, não retiradas de provas oficiais. O resultado é apenas feedback de estudo; não representa avaliação clínica ou certificação. A sessão não é salva.</p><a href="/flashcards">Complementar a revisão com flashcards →</a></footer>
   </section>
  </div>
 </div>;
}
