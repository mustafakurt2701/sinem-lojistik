import { MessageCircle, PhoneCall } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";

type CTAButtonsProps = {
  stacked?: boolean;
  large?: boolean;
};

export function CTAButtons({ stacked = false, large = false }: CTAButtonsProps) {
  return (
    <div className={stacked ? "flex flex-col gap-3 sm:flex-row" : "flex flex-wrap gap-3"}>
      <ButtonLink
        href={siteConfig.phoneHref}
        variant="accent"
        size={large ? "lg" : "default"}
        aria-label={`Hemen ara ${siteConfig.phoneDisplay}`}
      >
        <PhoneCall className="h-4 w-4" />
        Hemen Ara
      </ButtonLink>
      <ButtonLink
        href={siteConfig.whatsappHref}
        variant="outline"
        size={large ? "lg" : "default"}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp'tan bilgi al"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp'tan Yaz
      </ButtonLink>
    </div>
  );
}
