import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {mainDigest,reviewStatus,collectInventory,assertReleaseReady} from '../scripts/editorial-inventory.mjs';
test('review is tied to actual document content, not a generic approval flag',()=>{
 const digest=mainDigest('<main id="conteudo"><p>Example</p></main>');
 assert.equal(mainDigest('<head><title>Other</title></head><main id="conteudo"><p>Example</p></main>'),digest);
 assert.notEqual(mainDigest('<main id="conteudo"><p>Changed</p></main>'),digest);
 assert.equal(reviewStatus(null,digest),'pending');
 const approved={status:'approved',sha256:digest,reviewedBy:'Test reviewer',reviewedAt:'2026-01-01',note:'Test fixture',sourcesReviewed:true,mediaReviewed:true};
 assert.equal(reviewStatus(approved,digest),'approved');
 assert.equal(reviewStatus({...approved,reviewedAt:'2026-02-30'},digest),'pending');
 assert.equal(reviewStatus({...approved,mediaReviewed:false},digest),'pending');
 assert.equal(reviewStatus(approved,'different'),'stale');
 assert.throws(()=>assertReleaseReady({scope:'full',counts:{total:1,approved:0}}));
 assert.throws(()=>assertReleaseReady({scope:'diagnostic-premium-only',counts:{total:1,approved:1}}));
 assert.doesNotThrow(()=>assertReleaseReady({scope:'full',counts:{total:1,approved:1}}));
});
test('review inventory covers the actual generated editorial and study routes',{skip:process.env.SKIP_LEGACY==='true'},()=>{
 const inventory=collectInventory(process.cwd());
 const {imported}=JSON.parse(fs.readFileSync('dist/legacy-parity.json','utf8'));
 const news=imported.filter(x=>x.startsWith('/noticias/'));
 assert.equal(inventory.entries.filter(x=>x.group==='historical').length,news.length);
 assert.equal(inventory.entries.filter(x=>x.group==='premium').length,4);
 assert.equal(inventory.entries.filter(x=>x.group==='study').length,5);
 assert.equal(new Set(inventory.entries.map(x=>x.route)).size,inventory.counts.total);
 assert.ok(inventory.entries.every(x=>/^[a-f0-9]{64}$/.test(x.sha256)));
 assert.deepEqual(JSON.parse(fs.readFileSync('audit-reports/editorial-review.json','utf8')),inventory);
});
