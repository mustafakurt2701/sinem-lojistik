declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function reportPhoneConversion(href: `tel:${string}`) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion(href);
    return;
  }

  window.location.href = href;
}
