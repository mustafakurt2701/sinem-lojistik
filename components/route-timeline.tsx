import Image from "next/image";

import { cityLabel, routeTimeline } from "@/src/data/routes";

export function RouteTimeline() {
  return (
    <div className="rounded-[2rem] border border-border bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            En Çok Hizmet Verdiğimiz Hat
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-primary">
            Türkiye&apos;nin yoğun araç taşıma hattında aktif operasyon
          </h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            Istanbul&apos;dan Diyarbakir&apos;a uzanan düzenli güzergah; planlamayı hızlandırır,
            teslim sürecine güven katar ve arama kararını kolaylaştırır.
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.5rem] border border-border">
          <Image
            src="/photo/downloads/images/coverage-turkey.jpg"
            alt="Türkiye genelinde şehirler arası araç taşıma kapsama alanı"
            width={560}
            height={420}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 280px"
          />
        </div>
      </div>
      <ol className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {routeTimeline.map((city, index) => (
          <li
            key={city}
            className="relative rounded-2xl border border-border bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
          >
            <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
              {index + 1}
            </span>
            <div>{cityLabel(city)}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
