import { JsonLd } from "@/components/json-ld";
import { createMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/seo";
import { BlogListClient } from "@/components/blog/blog-list-client";
import { ContactBanner } from "@/components/contact-banner";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/src/data/blog-posts";

export const metadata = createMetadata({
  title: "Blog | Sinem Lojistik",
  description:
    "Araç taşıma rehberleri, rota bazlı içerikler ve fiyatlandırma yazılarıyla şehirler arası taşıma blogu.",
  path: "/blog",
  image: "/og/blog.svg",
  keywords: ["araç taşıma blog", "istanbul ankara araç taşıma", "gaziantep araç taşıma rehberi"],
  category: "Blog"
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "Sinem Lojistik blog içerikleri",
          blogPosts.map((post) => ({
            name: post.title,
            path: `/blog/${post.slug}`
          }))
        )}
      />
      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Blog"
            title="Şehir, rota ve süreç odaklı içerikler"
            description="Şehirler arası araç taşıma süreci, fiyatı ve teslim planı hakkında hazırlanan rehber içerikler."
          />
          <div className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            <p>
              Blog yapısı; şehirler arası araç taşıma, şehir bazlı hizmetler ve rota
              bazlı taşıma ihtiyaçları hakkında daha net bilgi vermek için hazırlandı.
              Her içerik ilgili hizmet sayfalarına bağlanır ve kullanıcıyı telefon veya
              WhatsApp üzerinden doğrudan iletişime taşır.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-slate-50 p-5">
              <div className="text-2xl font-bold text-primary">{blogPosts.length}+</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Şehir, rota ve süreç odaklı rehber içerik
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-slate-50 p-5">
              <div className="text-2xl font-bold text-primary">13</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ana hizmet hattını destekleyen şehir kümesi
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-slate-50 p-5">
              <div className="text-2xl font-bold text-primary">5</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Öne çıkan rota rehberi
              </p>
            </div>
          </div>
          <div className="mt-10">
            <BlogListClient posts={blogPosts} />
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
