import { PhoneCall } from "lucide-react";

import { CTAButtons } from "@/components/cta-buttons";
import { siteConfig } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";

export function CTABox() {
  return (
    <Card className="overflow-hidden border-primary/10 bg-primary text-white">
      <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
            <PhoneCall className="h-3.5 w-3.5" />
            Hızlı İletişim
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Hemen arayın, hızlı fiyat ve rota planlaması alın
          </h3>
          <p className="mt-3 max-w-xl text-slate-200">
            Form doldurmadan doğrudan uzman ekibe ulaşın. {siteConfig.phoneDisplay}
          </p>
        </div>
        <CTAButtons stacked large />
      </CardContent>
    </Card>
  );
}
