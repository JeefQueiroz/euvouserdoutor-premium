export function questionsFor(bank,topic,ids=null){return bank.filter(q=>(topic==='Todos'||q.topic===topic)&&(!ids||ids.includes(q.id)));}
export function evaluate(question,choice){if(!question||!Number.isInteger(choice)||choice<0||choice>=question.options.length)throw new TypeError('Alternativa inválida');return {id:question.id,choice,correct:choice===question.correct};}
export function summarize(results){return {total:results.length,correct:results.filter(r=>r.correct).length,missed:results.filter(r=>!r.correct).map(r=>r.id)};}
