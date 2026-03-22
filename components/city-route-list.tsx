import Link from "next/link";

import { cityLabel, popularRoutes, serviceCities } from "@/src/data/routes";
import { Card, CardContent } from "@/components/ui/card";

export function CityRouteList() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="border-primary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-primary">En çok tercih edilen rotalar</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {popularRoutes.map((route) => (
              <Link
                key={route.slug}
                href={`/hizmetler/${route.slug}`}
                className="rounded-2xl border border-border bg-slate-50 px-4 py-4 transition-colors hover:border-primary/30 hover:bg-white"
              >
                <div className="text-base font-semibold text-primary">
                  {cityLabel(route.from)} → {cityLabel(route.to)}
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{route.summary}</p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-primary">Hizmet verilen şehirler</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceCities.map((city) => (
              <Link
                key={city}
                href={`/hizmetler/${city.toLowerCase()}-arac-tasima`}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary/40 hover:text-primary"
              >
                {cityLabel(city)}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
