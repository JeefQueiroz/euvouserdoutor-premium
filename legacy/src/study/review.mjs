export const STORAGE_KEY = 'evd.flashcards.v1';
const DAY = 86400000;
export function sanitizeProgress(raw, validIds) {
  const result = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return result;
  for (const id of validIds) {
    const entry = Object.hasOwn(raw,id) ? raw[id] : null;
    if (entry && Number.isFinite(entry.due) && entry.due >= 0 && Number.isInteger(entry.interval) && entry.interval >= 0 && entry.interval <= 60 && Number.isInteger(entry.reviews) && entry.reviews >= 1 && entry.reviews <= 1000000) {
      result[id] = {due:entry.due,interval:entry.interval,reviews:entry.reviews};
    }
  }
  return result;
}
export function availableCards(cards, progress, deck, mode, now) {
  return cards.filter(card => (deck === 'Todos' || card.deck === deck) && (mode === 'all' || !progress[card.id] || progress[card.id].due <= now));
}
export function gradeCard(previous, rating, now) {
  if (!['again','good','easy'].includes(rating) || !Number.isFinite(now)) throw new TypeError('Invalid rating');
  const prev = previous?.interval || 0;
  const interval = rating === 'again' ? 0 : rating === 'good' ? Math.min(60,Math.max(1,Math.round(prev*2))) : Math.min(60,Math.max(3,Math.round(prev*3)));
  return { interval, due:now + (interval ? interval*DAY : 10*60000), reviews:Math.min(1000000,(previous?.reviews || 0)+1) };
}
