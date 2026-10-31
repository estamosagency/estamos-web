/* Google Analytics for the public Estamos site only. */
(() => {
  'use strict';
  if (!['estamosagency.com', 'www.estamosagency.com'].includes(location.hostname)) return;
  if (window.__estamosAnalyticsLoaded) return;
  window.__estamosAnalyticsLoaded = true;
  const measurementId = 'G-G0SWRG5MRZ';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);
  document.addEventListener('click', (event) => {
    const link = event.target.closest && event.target.closest('a.header-cta');
    if (!link) return;
    window.gtag('event', 'click_conversemos', {
      send_to: measurementId,
      link_url: link.href,
      link_text: 'CONVERSEMOS',
      transport_type: 'beacon'
    });
  });
})();
