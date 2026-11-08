import { useEffect } from 'react';
import { getCookieConsent } from '../CookieConsent';

const DEFAULT_SCRIPT_ORIGIN = 'https://www.googletagmanager.com';

function normalizeGatewayPath(path) {
  if (!path) return '';
  const trimmed = path.trim();
  if (!trimmed) return '';
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

function getScriptOrigin() {
  const gatewayPath = normalizeGatewayPath(import.meta.env.VITE_GOOGLE_TAG_GATEWAY_PATH);
  return gatewayPath || DEFAULT_SCRIPT_ORIGIN;
}

function shouldEnableAnalytics() {
  return import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS_DEV === 'true';
}

function appendScriptOnce(id, src) {
  if (document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function pushGtmStart() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
}

function loadGtm(scriptOrigin, gtmId) {
  pushGtmStart();
  appendScriptOnce(
    'google-tag-manager',
    `${scriptOrigin}/gtm.js?id=${encodeURIComponent(gtmId)}`,
  );
}

function loadGa4(scriptOrigin, ga4Id) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };

  appendScriptOnce(
    'google-analytics',
    `${scriptOrigin}/gtag/js?id=${encodeURIComponent(ga4Id)}`,
  );

  window.gtag('js', new Date());
  window.gtag('config', ga4Id);
}

export function GoogleAnalytics() {
  useEffect(() => {
    if (!shouldEnableAnalytics()) return;

    const loadAnalyticsAfterConsent = () => {
      if (getCookieConsent() !== 'accepted') return;

      const gtmId = import.meta.env.VITE_GTM_ID;
      const ga4Id = import.meta.env.VITE_GA4_ID;
      const scriptOrigin = getScriptOrigin();

      if (gtmId) {
        loadGtm(scriptOrigin, gtmId);
        return;
      }

      if (ga4Id) {
        loadGa4(scriptOrigin, ga4Id);
      }
    };

    loadAnalyticsAfterConsent();
    window.addEventListener('evsd-cookie-consent-changed', loadAnalyticsAfterConsent);
    return () => window.removeEventListener('evsd-cookie-consent-changed', loadAnalyticsAfterConsent);
  }, []);

  return null;
}
