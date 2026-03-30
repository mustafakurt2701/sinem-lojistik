import Image from "next/image";
import { Clock3, MapPinned, PhoneCall } from "lucide-react";

import { PhoneLink } from "@/components/analytics/phone-link";
import { CTAButtons } from "@/components/cta-buttons";
import { RouteTimeline } from "@/components/route-timeline";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { serviceAreasSummary } from "@/src/data/operation-proof";

export const metadata = createMetadata({
  title: "İletişim | Sinem Lojistik",
  description:
    "Form olmadan doğrudan arama ve WhatsApp üzerinden şehirler arası araç taşıma bilgisi alın.",
  path: "/iletisim",
  image: "/og/contact.svg",
  keywords: ["sinem lojistik iletişim", "araç taşıma telefon", "whatsapp araç taşıma"]
});

export default function ContactPage() {
  return (
    <>
      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-border bg-primary p-8 text-white shadow-soft">
              <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                İletişim
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight">
                Form yok, doğrudan iletişim var
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Hızlı fiyat almak, rota sormak veya teslim sürecini konuşmak için doğrudan
                arayın.
              </p>
              <PhoneLink
                href={siteConfig.phoneHref}
                className="mt-8 block text-3xl font-semibold text-white"
              >
                {siteConfig.phoneDisplay}
              </PhoneLink>
              <div className="mt-6">
                <CTAButtons stacked />
              </div>
              <div className="mt-10 space-y-4 border-t border-white/10 pt-8 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <PhoneCall className="mt-1 h-4 w-4 text-accent" />
                  <span>Tek tıkla arama için header ve mobil sabit CTA her sayfada aktif.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 text-accent" />
                  <span>{siteConfig.businessHours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 h-4 w-4 text-accent" />
                  <span>Istanbul&apos;dan Diyarbakir&apos;a uzanan aktif hizmet hattı</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-border bg-slate-50 p-8">
                <h2 className="text-2xl font-semibold text-primary">Hizmet bölgeleri</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Özellikle ana hizmet hattında yoğun çalışıyoruz. Bu rota, hızlı planlama ve
                  daha net teslim süreci sağlar.
                </p>
                <div className="mt-6 grid gap-3">
                  {serviceAreasSummary.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-white px-4 py-4 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-soft">
                <Image
                  src="/photo/downloads/images/quote-truck.jpg"
                  alt="Araç taşıma için fiyat ve rota planlamasını temsil eden lojistik tır görseli"
                  width={1200}
                  height={720}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <RouteTimeline />
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
}
