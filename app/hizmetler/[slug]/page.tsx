import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTABox } from "@/components/cta-box";
import { FAQSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { getRelatedPostsForService, getRelatedServicesForService } from "@/lib/content";
import {
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  serviceMetaCopy,
  serviceSchema
} from "@/lib/seo";
import { services } from "@/src/data/services";
import { blogPosts } from "@/src/data/blog-posts";
import { Card, CardContent } from "@/components/ui/card";

type Params = Promise<{
  slug: string;
}>;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> | Metadata {
  return (async () => {
    const { slug } = await params;
    const service = services.find((entry) => entry.slug === slug);

    if (!service) {
      return createMetadata({
        title: "Hizmetler | Sinem Lojistik",
        description: "Araç taşıma hizmetleri",
        path: "/hizmetler"
      });
    }

    const meta = serviceMetaCopy(service);

    return createMetadata({
      title: meta.title,
      description: meta.description,
      path: `/hizmetler/${service.slug}`,
      keywords: service.keywords,
      image: `/og/services/${service.slug}.svg`,
      category: "Hizmet"
    });
  })();
}

export default async function ServiceDetailPage({
  params
}: {
  params: Params;
}) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedPosts = getRelatedPostsForService(service, blogPosts);
  const relatedServices = getRelatedServicesForService(service, services);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.shortTitle,
          description: service.description,
          path: `/hizmetler/${service.slug}`
        })}
      />
      <JsonLd data={faqSchema(service.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
          { name: service.shortTitle, path: `/hizmetler/${service.slug}` }
        ])}
      />
      <section className="section-space bg-white">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetler", href: "/hizmetler" },
              { label: service.shortTitle }
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
            <div>
              <SectionHeading
                eyebrow="Hizmet Detayı"
                title={service.shortTitle}
                description={service.description}
              />
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {service.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="inline-flex rounded-full border border-border bg-slate-50 px-4 py-2 text-sm font-semibold text-primary">
                  Hızlı fiyat ve planlama için hemen arayın
                </div>
                {service.routeInfo ? (
                  <div className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                    Hat: {service.routeInfo.from} → {service.routeInfo.to}
                  </div>
                ) : null}
                {service.cityName ? (
                  <div className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                    Şehir odağı: {service.cityName}
                  </div>
                ) : null}
              </div>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 rounded-[2rem] border border-border bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-primary">
                  {service.routeInfo
                    ? `${service.routeInfo.from} - ${service.routeInfo.to} hattında karar verirken`
                    : `${service.cityName ?? service.shortTitle} için karar verirken`}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                  {service.routeInfo ? (
                    <>
                      <p>
                        Bu hatta arama yapan kullanıcıların ana beklentisi rota özelinde net
                        fiyat, tahmini teslim süresi ve güven bilgisidir. Genel taşıma
                        anlatımı çoğu zaman yeterli olmaz; hat bazlı bilgi gerekir.
                      </p>
                      <p>
                        Bu nedenle sayfa kurgusu doğrudan {service.routeInfo.from} ile{" "}
                        {service.routeInfo.to} arasındaki taşıma süreci, teslim beklentisi
                        ve fiyatı etkileyen unsurları açıklayacak şekilde hazırlandı.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        {service.cityName ?? service.shortTitle} araması yapan kullanıcılar
                        çoğunlukla ilgili şehirde aktif çalışan ve ulaşılması kolay bir firma
                        görmek ister.
                      </p>
                      <p>
                        Bu sayfada ilgili şehir için süreç, fiyatı etkileyen noktalar,
                        teslim planı ve sık sorulan sorular bir arada sunulur.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-10 grid gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">
                      {service.routeInfo ? "Bu rota neden öne çıkıyor?" : "Bu şehir neden öne çıkıyor?"}
                    </h2>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                      {service.routeInfo ? (
                        <>
                          <p>
                            {service.routeInfo.from} ile {service.routeInfo.to} arasında araç
                            taşıma arayan kullanıcılar genellikle doğrudan rota bazlı fiyat,
                            teslim süresi ve güven bilgisi ister. Bu nedenle bu sayfa genel
                            taşıma anlatımı yerine hattın kendisine odaklanır.
                          </p>
                          <p>
                            Böylece bu hatta araç göndermek isteyen kullanıcı, ihtiyaç duyduğu
                            ana bilgileri tek sayfada daha net görür.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            {service.cityName ?? service.shortTitle} odaklı sayfalar, şehir
                            bazlı aramalarda daha güçlü eşleşme sağlar. Kullanıcı genel
                            lojistik değil, doğrudan ilgili şehirde hizmet arar.
                          </p>
                          <p>
                            Bu yüzden şehir ismi, hizmet özeti, SSS ve ilgili içerikler aynı
                            sayfada birlikte sunulur.
                          </p>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">
                      Sık aranan hizmet başlıkları
                    </h2>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {service.searchIntent.map((intent) => (
                        <span
                          key={intent}
                          className="rounded-full border border-border bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                        >
                          {intent}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">Kimler için uygun?</h2>
                    <div className="mt-5 grid gap-3">
                      {service.suitableFor.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                          <p className="text-sm leading-7 text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">Rota avantajları</h2>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {service.routeHighlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-border bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">
                      Karar verirken hangi noktalar öne çıkar?
                    </h2>
                    <div className="mt-5 grid gap-4">
                      {service.decisionNotes.map((note) => (
                        <div key={note} className="rounded-2xl border border-border bg-slate-50 p-4">
                          <p className="text-sm leading-7 text-slate-600">{note}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">
                      Teslim beklentisi ve planlama notları
                    </h2>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {service.deliveryExpectations.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-border bg-white px-4 py-4 text-sm leading-7 text-slate-600"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">Süreç</h2>
                    <div className="mt-5 grid gap-4">
                      {service.process.map((step, index) => (
                        <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                            {index + 1}
                          </div>
                          <p className="text-sm leading-7 text-slate-600">{step}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">
                      Fiyatı etkileyen faktörler
                    </h2>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.pricingFactors.map((factor) => (
                        <div
                          key={factor}
                          className="rounded-2xl border border-border bg-white px-4 py-4 text-sm font-medium text-slate-700"
                        >
                          {factor}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {service.seoSections.map((section) => (
                  <Card key={section.heading}>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold text-primary">{section.heading}</h2>
                      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-primary">
                      Bu sayfada hangi bilgiler yer alır?
                    </h2>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                      <p>
                        {service.shortTitle} sayfasında hizmet özeti, süreç anlatımı, fiyatı
                        etkileyen faktörler, teslim planı ve iletişim seçenekleri birlikte
                        sunulur.
                      </p>
                      <p>
                        Böylece kullanıcı fiyat sormadan önce temel çerçeveyi görür,
                        ardından telefon veya WhatsApp ile hızlı şekilde bilgi alabilir.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-primary">Hızlı geçiş</h2>
                <div className="mt-4 space-y-3">
                  <Link href="/iletisim" className="block text-sm text-slate-600 hover:text-primary">
                    İletişim sayfasına git
                  </Link>
                  <Link href="/blog" className="block text-sm text-slate-600 hover:text-primary">
                    Blog içeriklerini incele
                  </Link>
                  <Link href="/hizmetler" className="block text-sm text-slate-600 hover:text-primary">
                    Tüm hizmetlere dön
                  </Link>
                </div>
              </div>
              <div className="rounded-[2rem] border border-border bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-primary">Öne çıkan anahtar kelimeler</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-border bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <CTABox />
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="SSS"
            title={`${service.shortTitle} hakkında sık sorulan sorular`}
            description="Bu sayfaya özel sorular; fiyat, süre, sigorta ve iletişim konularında hızlı bilgi vermek için düzenlendi."
          />
          <div className="mt-10">
            <FAQSection items={service.faq} />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Yakın Konular"
            title="Benzer şehir ve rota sayfaları"
            description="Yakın şehirler ve benzer hatlar üzerinden hazırlanan ilgili hizmet sayfaları."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedServices.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/hizmetler/${relatedService.slug}`}
                className="rounded-3xl border border-border bg-white p-5 shadow-soft transition-transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {relatedService.shortTitle}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {relatedService.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="İç Linkler"
            title="İlgili blog içerikleri"
            description="Süreç, fiyat ve teslim detaylarını anlatan rehber içerikler."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-3xl border border-border bg-white p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {post.category}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-primary">{post.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
