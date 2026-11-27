import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('home renders a lightweight original scientific illustration with static fallback',()=>{
  const home=fs.readFileSync('dist/index.html','utf8');
  const svg=fs.readFileSync('dist/assets/science-helix.svg','utf8');
  assert.ok(Buffer.byteLength(svg)<22000,'SVG budget exceeded');
  assert.match(home,/<img class="science-plate" src="\/assets\/science-helix\.svg" width="480" height="480" alt="" aria-hidden="true"/);
  assert.match(home,/Representação esquemática/);
  assert.doesNotMatch(home,/class="core-shape"/);
  assert.doesNotMatch(svg,/<script|<foreignObject|\b(?:href|src)="https?:/i);
  assert.match(svg,/viewBox="0 0 480 480"/);
  assert.match(fs.readFileSync('dist/assets/motion.css','utf8'),/\.scientific-hero \.science-plate/);
});
