import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
test('news and interactive study routes hydrate existing HTML; initial consent state is SSR-compatible',()=>{
 const client=fs.readFileSync('legacy/src/main.jsx','utf8');
 const consent=fs.readFileSync('legacy/src/components/CookieConsent.jsx','utf8');
 assert.match(client,/ReactDOM\.hydrateRoot\(rootElement, app/);
 assert.match(client,/\['news','flashcards','questions','laboratory'\]\.includes\(view\)/);
 assert.match(consent,/\[choice, setChoice\] = useState\(null\)/);
 assert.match(consent,/setChoice\(getCookieConsent\(\)\)/);
});
