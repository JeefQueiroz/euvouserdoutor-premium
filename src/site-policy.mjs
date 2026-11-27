// Single release policy for both static renderers. No environment mutation.
export const PREVIEW_ORIGIN = 'https://euvouserdoutor-premium-v3.vercel.app';
export const PUBLIC_ORIGIN = 'https://www.euvouserdoutor.com';
export function resolveSitePolicy(env = process.env){
  const indexed = env.VERCEL_ENV === 'production' &&
    env.PUBLIC_INDEXING === 'true' &&
    String(env.SITE_URL || '').replace(/\/$/,'') === PUBLIC_ORIGIN;
  return {indexed,siteUrl:indexed ? PUBLIC_ORIGIN : PREVIEW_ORIGIN};
}
export function canonicalUrl(siteUrl,route){
  if(typeof route!=='string'||!route.startsWith('/')||route.startsWith('//')||route.includes('?')||route.includes('#')||route.includes(String.fromCharCode(92)))throw Error('Invalid canonical route');
  return siteUrl+encodeURI(route === '/' ? '/' : route.replace(/\/+$/,''));
}
