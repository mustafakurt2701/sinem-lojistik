import { ShieldCheck, TimerReset, Truck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Sigortalı Taşıma",
    description: "Araçlar planlı ve güven odaklı operasyonla taşınır.",
    icon: ShieldCheck
  },
  {
    title: "Zamanında Teslim",
    description: "Yoğun hatta çalışan yapı sayesinde daha net teslim planı.",
    icon: TimerReset
  },
  {
    title: "Profesyonel Süreç",
    description: "Telefon ve WhatsApp üzerinden doğrudan, hızlı koordinasyon.",
    icon: Truck
  }
];

export function TrustBadges() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="border-primary/10">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
