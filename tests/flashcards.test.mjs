import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {cards,decks} from '../legacy/src/study/cards.mjs';
import {sanitizeProgress,availableCards,gradeCard} from '../legacy/src/study/review.mjs';
test('starter decks have unique identifiers and complete questions',()=>{assert.equal(cards.length,12);assert.equal(decks.length,3);assert.equal(new Set(cards.map(x=>x.id)).size,cards.length);assert.ok(cards.every(x=>x.question&&x.answer));});
test('review intervals and due filtering are deterministic',()=>{const now=1000000,id=cards[0].id;const again=gradeCard(undefined,'again',now);assert.equal(again.due,now+600000);assert.equal(gradeCard(undefined,'good',now).interval,1);assert.equal(gradeCard(undefined,'easy',now).interval,3);assert.equal(gradeCard({interval:60},'easy',now).interval,60);assert.equal(availableCards(cards,{[id]:again},'Todos','due',now).length,11);assert.equal(availableCards(cards,{[id]:again},'Todos','due',again.due).length,12);assert.equal(availableCards(cards,{[id]:again},'Todos','all',now).length,12);assert.throws(()=>gradeCard(null,'bad',now));});
test('local state rejects malformed and unknown records',()=>{const id=cards[0].id;assert.deepEqual(sanitizeProgress({[id]:{due:0,interval:99,reviews:1},unknown:{due:1,interval:1,reviews:1}},[id]),{});assert.deepEqual(sanitizeProgress(null,[id]),{});const ok=gradeCard(null,'good',123);assert.deepEqual(sanitizeProgress({[id]:ok},[id]),{[id]:ok});});
test('flashcards page is prerendered', {skip:process.env.SKIP_LEGACY==='true'},()=>{const html=fs.readFileSync('dist/flashcards/index.html','utf8');assert.match(html,/data-flashcards/);assert.match(html,/Iniciar revisão/);assert.match(html,/sem cadastro ou sincronização/);});
