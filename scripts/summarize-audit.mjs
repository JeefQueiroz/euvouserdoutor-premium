import fs from 'node:fs';
const r=JSON.parse(fs.readFileSync('audit-reports/npm-audit.json','utf8'));
if(!r.metadata?.vulnerabilities||r.error)throw Error('npm audit não retornou relatório válido');
console.log('npm audit (inclui desenvolvimento): '+JSON.stringify(r.metadata.vulnerabilities));
// Baseline report only: findings require triage, not a claim of zero vulnerabilities.
for(const [name,item] of Object.entries(r.vulnerabilities||{}))if(['high','critical'].includes(item.severity))console.log('Revisar: '+name+' '+item.severity);
