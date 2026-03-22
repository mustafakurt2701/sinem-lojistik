import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cityLabel, routeTimeline } from "@/src/data/routes";

const quickLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary pb-28 pt-16 text-white md:pb-10">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">Sinem Lojistik</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
            Istanbul&apos;dan Diyarbakir&apos;a uzanan yoğun hizmet hattında sigortalı,
            planlı ve güven veren şehirler arası araç taşıma çözümleri.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-6 block text-xl font-semibold text-white"
          >
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-medium text-slate-200"
          >
            WhatsApp&apos;tan bilgi al
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Hızlı Linkler
          </h3>
          <div className="mt-5 space-y-3">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-200 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Hizmet Bölgeleri
          </h3>
          <p className="mt-5 text-sm leading-7 text-slate-200">
            {routeTimeline.map(cityLabel).join(" • ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
