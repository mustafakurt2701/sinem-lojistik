import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";

import { PhoneLink } from "@/components/analytics/phone-link";
import { CTAButtons } from "@/components/cta-buttons";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-primary" />
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:44px_44px] opacity-10" />
      <div className="container-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-soft backdrop-blur">
              <ArrowRight className="h-3.5 w-3.5 text-accent" />
              Istanbul&apos;dan Diyarbakir&apos;a güçlü hizmet hattı
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Güven veren şehirler arası araç taşıma deneyimi
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Sinem Lojistik, Türkiye&apos;nin en yoğun araç taşıma hattında sigortalı,
              planlı ve hızlı koordinasyon odaklı hizmet sunar. Tek adımda arayın veya
              WhatsApp&apos;tan yazın.
            </p>
            <div className="mt-8">
              <CTAButtons stacked />
            </div>
            <PhoneLink
              href={siteConfig.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-soft backdrop-blur"
            >
              <PhoneCall className="h-4 w-4 text-accent" />
              Hemen Ara: {siteConfig.phoneDisplay}
            </PhoneLink>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-primary/10 blur-3xl" />
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-soft backdrop-blur">
              <Image
                src="/photo/downloads/images/truck-1.png"
                alt="Sinem Lojistik için kullanılan araç taşıma tırı görseli"
                width={1200}
                height={800}
                className="h-auto w-full rounded-[1.5rem]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
