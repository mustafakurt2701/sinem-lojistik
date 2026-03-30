"use client";

import Script from "next/script";

type GoogleAnalyticsProps = {
  gaId: string;
};

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          window.gtag_report_conversion = function (url) {
            var callback = function () {
              if (typeof url !== 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              send_to: 'AW-17979367744/l6FqCJ-syP8bEMDCnf1C',
              value: 1.0,
              currency: 'TRY',
              event_callback: callback
            });
            return false;
          };
          gtag('js', new Date());
          gtag('config', '${gaId}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
