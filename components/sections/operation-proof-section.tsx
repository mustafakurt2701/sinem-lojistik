import { ShieldCheck, PhoneCall, Route } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { operationProof } from "@/src/data/operation-proof";

const icons = [PhoneCall, Route, ShieldCheck];

export function OperationProofSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Operasyon Güvencesi"
          title="Araç taşıma sürecinde güven oluşturan temel noktalar"
          description="Kullanıcının ilk baktığı şey, bu işin nasıl planlandığı ve teslimin ne kadar net yönetildiğidir."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {operationProof.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;

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
      </div>
    </section>
  );
}
