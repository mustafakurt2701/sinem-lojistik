import Image from "next/image";

import { ContactBanner } from "@/components/contact-banner";
import { OperationProofSection } from "@/components/sections/operation-proof-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Hakkımızda | Sinem Lojistik",
  description:
    "Sinem Lojistik'in güven odaklı taşıma yaklaşımı, hizmet anlayışı ve yoğun hizmet hattındaki operasyon tecrübesi.",
  path: "/hakkimizda",
  keywords: ["sinem lojistik", "araç taşıma firması", "güvenilir lojistik"]
});

export default function AboutPage() {
  return (
    <>
      <section className="section-space bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Hakkımızda"
              title="Güven, net iletişim ve aktif hizmet hattı üzerine kurulu yapı"
              description="Sinem Lojistik, şehirler arası araç taşıma hizmetini karmaşık süreçler yerine doğrudan iletişim, net planlama ve güven odaklı operasyonla yönetir."
            />
            <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <Image
                src="/photo/downloads/images/about-truck.jpg"
                alt="Sinem Lojistik kurumsal araç taşıma operasyonunu temsil eden tır görseli"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Ana hattımız Istanbul&apos;dan başlayıp Bursa, Izmit, Kocaeli, Bolu,
              Ankara, Aksaray, Adana, Mersin, Osmaniye, Gaziantep, Sanliurfa ve
              Diyarbakir&apos;a kadar uzanır. Bu düzenli operasyon akışı müşteriye hız ve
              öngörülebilirlik sağlar.
            </p>
            <p>
              Sitede form bulunmamasının sebebi dönüşümü gereksiz adımlarla
              yavaşlatmamak. Kullanıcı doğrudan arar veya WhatsApp üzerinden bilgi alır;
              operasyon bu netlik üzerinden başlar.
            </p>
            <p>
              Yaklaşımımız sade: güven veren görünüm, güçlü içerik mimarisi, ulaşılabilir
              iletişim ve profesyonel hizmet algısı.
            </p>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <TrustBadges />
          <div className="mt-8 rounded-[2rem] border border-border bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-primary">Hizmet anlayışımız</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="text-lg font-semibold text-primary">Doğrudan iletişim</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Kullanıcıya form yerine telefon ve WhatsApp ile hızlı ulaşım sunuyoruz.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="text-lg font-semibold text-primary">Aktif hizmet hattı</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  İstanbul&apos;dan Diyarbakır&apos;a uzanan rota üzerinde düzenli çalışma
                  ile daha net teslim planı hedeflenir.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="text-lg font-semibold text-primary">Ulaşılabilir destek</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Çalışma düzenimiz: {siteConfig.businessHours}. Hızlı bilgi için ana temas
                  kanalımız {siteConfig.phoneDisplay}.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <Image
              src="/photo/downloads/images/mission-truck.jpg"
              alt="Şehirler arası araç taşıma hizmetinde kullanılan lojistik araç görseli"
              width={1400}
              height={700}
              className="h-auto w-full object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      <OperationProofSection />
      <TestimonialsSection />
      <ContactBanner />
    </>
  );
}
