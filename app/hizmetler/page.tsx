import { ContactBanner } from "@/components/contact-banner";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { createMetadata, itemListSchema } from "@/lib/seo";
import { services } from "@/src/data/services";

export const metadata = createMetadata({
  title: "Hizmetler | Sinem Lojistik",
  description:
    "Şehir bazlı ve rota odaklı araç taşıma hizmet sayfalarıyla güven veren kurumsal yapı.",
  path: "/hizmetler",
  image: "/og/services.svg",
  keywords: ["istanbul araç taşıma", "ankara araç taşıma", "gaziantep araç taşıma"],
  category: "Hizmet"
});

export default function ServicesPage() {
  const coreServices = services.filter((service) => service.type === "core");
  const cityServices = services.filter((service) => service.type === "city");
  const routeServices = services.filter((service) => service.type === "route");

  return (
    <>
      <JsonLd
        data={itemListSchema(
          "Sinem Lojistik hizmet sayfaları",
          services.map((service) => ({
            name: service.shortTitle,
            path: `/hizmetler/${service.slug}`
          }))
        )}
      />
      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Şehir bazlı ve rota odaklı hizmet sayfaları"
            description="Her sayfada ilgili şehir veya rota için süreç, fiyatı etkileyen unsurlar, SSS ve iletişim alanları yer alır."
          />
          <div className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            <p>
              Hizmet yapısı üç seviyede ilerler: ana hizmet sayfaları, şehir bazlı
              sayfalar ve rota bazlı sayfalar. Böylece kullanıcı ister genel şehirler
              arası araç taşıma bilgisi arasın, ister doğrudan İstanbul Ankara araç
              taşıma gibi belirli bir hattı incelesin, ilgili içeriğe daha hızlı ulaşır.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-primary">Ana hizmetler</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {coreServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-primary">Şehir bazlı hizmet sayfaları</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cityServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-primary">Rota bazlı hizmet sayfaları</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {routeServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
          <div className="mt-14 rounded-[2rem] border border-border bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold text-primary">
              Neden ayrı şehir ve rota sayfaları var?
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                Tek bir genel hizmet sayfası yerine şehir ve rota bazlı ayrı sayfalar
                hazırlamak, kullanıcının kendi ihtiyacına daha hızlı ulaşmasını sağlar.
              </p>
              <p>
                Örneğin İstanbul araç taşıma ile Gaziantep Şanlıurfa araç taşıma aynı
                beklentiye sahip değildir. Ayrı sayfalar bu farkı daha açık anlatır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
