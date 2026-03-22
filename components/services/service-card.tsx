import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/src/data/services";
import { Card, CardContent } from "@/components/ui/card";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="border-primary/10 transition-transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Hizmet
        </div>
        <h3 className="mt-4 text-xl font-semibold text-primary">{service.shortTitle}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
        <Link
          href={`/hizmetler/${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Detayı incele
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
