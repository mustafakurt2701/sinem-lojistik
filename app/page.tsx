import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { BrandLogoStrip } from "@/components/brand-logo-strip";
import { CityRouteList } from "@/components/city-route-list";
import { ContactBanner } from "@/components/contact-banner";
import { CTABox } from "@/components/cta-box";
import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OperationProofSection } from "@/components/sections/operation-proof-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { JsonLd } from "@/components/json-ld";
import { RouteTimeline } from "@/components/route-timeline";
import { SectionHeading } from "@/components/section-heading";
import { TrustBadges } from "@/components/trust-badges";
import { faqSchema, itemListSchema, serviceSchema } from "@/lib/seo";
import { faqs } from "@/src/data/faqs";
import { blogPosts } from "@/src/data/blog-posts";
import { cityLabel, popularRoutes } from "@/src/data/routes";
import { services } from "@/src/data/services";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  "Arayın veya WhatsApp'tan ulaşın",
  "Güzergah ve araç bilgilerini paylaşın",
  "Planlanan günde taşıma sürecini başlatın"
];

const reasons = [
  "Yoğun hatta aktif operasyon",
  "Telefonla hızlı teklif süreci",
  "Şehir ve rota bazlı deneyim",
  "Güven veren kurumsal iletişim"
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Şehirler Arası Araç Taşıma",
          description:
            "Istanbul'dan Diyarbakir'a uzanan yoğun hizmet hattında sigortalı araç taşıma hizmeti.",
          path: "/"
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={itemListSchema(
          "Sinem Lojistik popüler araç taşıma rotaları",
          popularRoutes.map((route) => ({
            name: `${cityLabel(route.from)} ${cityLabel(route.to)} araç taşıma`,
            path: `/hizmetler/${route.slug}`
          }))
        )}
      />
      <HeroSection />

      <section className="section-space pt-0">
        <div className="container-shell">
          <TrustBadges />
          <div className="mt-8">
            <BrandLogoStrip />
          </div>
        </div>
      </section>

      <OperationProofSection />

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Hizmet Hattı"
            title="Bu hatta aktif çalışıyoruz, bu yüzden planlama daha net ilerliyor"
            description="En çok çalışılan şehirler üzerinden planlama ve teslim kalitesi daha öngörülebilir hale gelir."
          />
          <div className="mt-10">
            <RouteTimeline />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Nasıl Çalışır?"
              title="Form yok, doğrudan iletişim var"
              description="Dönüşüm sürecini kısaltmak için iletişimi telefon ve WhatsApp üzerinde tutuyoruz."
            />
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <Card key={step}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{step}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Operasyon ekibi rota, teslim tarihi ve araç bilgisine göre en uygun
                      planı hızlı şekilde netleştirir.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Neden Biz?"
              title="Güven veren hizmet hissi birkaç saniyede oluşmalı"
              description="Site mimarisi ve içerik dili, kullanıcıyı düşündürmeden doğrudan aramaya yönlendirecek şekilde tasarlandı."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-3xl border border-border bg-slate-50 p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-primary">{reason}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Ana hat üzerindeki düzenli taşıma deneyimi ve hızlı iletişim merkezi farkı
                  oluşturur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Popüler Rotalar"
            title="En çok tercih edilen şehirler ve geçiş noktaları"
            description="En sık çalışılan şehirler ve hatlar, teslim planını daha öngörülebilir hale getirir."
          />
          <div className="mt-10">
            <CityRouteList />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Hizmet Yapısı"
            title="Şehir ve rota bazlı güçlü hizmet ağı"
            description="Ana sayfada hem genel şehirler arası araç taşıma hizmeti hem de sık çalışılan şehir ve rota hatları birlikte gösterilir."
          />
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary">
                  Sık aranan şehir bazlı hizmetler
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  İstanbul araç taşıma, Ankara araç taşıma, Gaziantep araç taşıma,
                  Şanlıurfa araç taşıma ve Diyarbakır araç taşıma sayfalarında şehir
                  bazlı süreç, teslim ve fiyat detayları ayrı ayrı anlatılır.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary">
                  Sık aranan rota bazlı hizmetler
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  İstanbul Ankara araç taşıma, Ankara Adana araç taşıma, Adana
                  Gaziantep araç taşıma, Gaziantep Şanlıurfa araç taşıma ve Şanlıurfa
                  Diyarbakır araç taşıma sayfalarında hat bazlı teslim planı ve süreç
                  bilgileri yer alır.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Hizmetler"
              title="Şehir, rota ve hizmet bazlı güçlü sayfa yapısı"
              description="Her hizmet sayfasında ilgili rota veya şehir için açıklayıcı içerik, SSS ve iletişim alanları bulunur."
            />
            <Link
              href="/hizmetler"
              className="hidden items-center gap-2 text-sm font-semibold text-primary md:inline-flex"
            >
              Tüm hizmetler
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="rounded-[1.75rem] border border-border bg-white p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Hizmet Sayfası
                </div>
                <h3 className="mt-4 text-xl font-semibold text-primary">
                  {service.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="SSS"
            title="Sık sorulan sorular"
            description="Karar sürecini kısaltan, güven oluşturan ve aramaya yönlendiren temel cevaplar."
          />
          <div className="mt-10">
            <FAQSection items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Blog"
              title="Araç taşıma rehber içerikleri"
              description="Blog yazıları; şehir, rota, fiyat ve teslim süreci hakkında hızlı bilgi vermek için hazırlandı."
            />
            <Link
              href="/blog"
              className="hidden items-center gap-2 text-sm font-semibold text-primary md:inline-flex"
            >
              Tüm yazılar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <CTABox />
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
