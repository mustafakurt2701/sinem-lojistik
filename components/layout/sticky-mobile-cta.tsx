import { MessageCircle, PhoneCall } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-4 text-sm font-semibold text-white"
          aria-label={`Ara ${siteConfig.phoneDisplay}`}
        >
          <PhoneCall className="h-4 w-4" />
          Ara
        </a>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-primary"
          aria-label="WhatsApp'tan yaz"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
