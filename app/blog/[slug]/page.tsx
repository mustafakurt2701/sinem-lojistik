import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog/blog-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTABox } from "@/components/cta-box";
import { FAQSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { getRelatedServicesForPost } from "@/lib/content";
import {
  blogMetaCopy,
  blogPostingSchema,
  breadcrumbSchema,
  createMetadata,
  faqSchema
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/src/data/blog-posts";
import { services } from "@/src/data/services";

type Params = Promise<{
  slug: string;
}>;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> | Metadata {
  return (async () => {
    const { slug } = await params;
    const post = blogPosts.find((entry) => entry.slug === slug);

    if (!post) {
      return createMetadata({
        title: "Blog | Sinem Lojistik",
        description: "Araç taşıma içerikleri",
        path: "/blog"
      });
    }

    const meta = blogMetaCopy(post);

    return createMetadata({
      title: meta.title,
      description: meta.description,
      path: `/blog/${post.slug}`,
      keywords: post.keywords,
      image: `/og/blog/${post.slug}.svg`,
      openGraphType: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      tags: post.keywords,
      category: post.category
    });
  })();
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 3);
  const relatedServices = getRelatedServicesForPost(post, services);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd data={faqSchema(post.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ])}
      />
      <section className="section-space bg-white">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
            <article>
              <div className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {post.category}
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
                <span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>
                <span>{post.readingTime}</span>
              </div>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[2rem] border border-border">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
              <div className="prose-sinem mt-10 max-w-none">
                {post.sections.map((section, index) => (
                  <div key={section.heading}>
                    <h2 id={section.heading.toLowerCase().replaceAll(" ", "-")}>
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {index === 1 ? (
                      <div className="my-10">
                        <CTABox />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-[2rem] border border-border bg-slate-50 p-8">
                <h2 className="text-2xl font-semibold text-primary">Hızlı özet</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {post.summaryPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-border bg-white px-4 py-4 text-sm font-medium text-slate-700"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Bu içerik, özellikle <strong>{post.keywords[0]}</strong> araması yapan
                  kullanıcıların hızlı bilgi ihtiyacına cevap vermek için yapılandırıldı.
                </p>
              </div>
              <div className="mt-12 rounded-[2rem] border border-border bg-white p-8 shadow-soft">
                <h2 className="text-2xl font-semibold text-primary">
                  Bu içerikte öne çıkan noktalar
                </h2>
                <div className="mt-5 grid gap-4">
                  {post.decisionNotes.map((note) => (
                    <div key={note} className="rounded-2xl border border-border bg-slate-50 p-4">
                      <p className="text-sm leading-7 text-slate-600">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 rounded-[2rem] border border-border bg-slate-50 p-8">
                <h2 className="text-2xl font-semibold text-primary">Kısa değerlendirme</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {post.landingSummary.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-white px-4 py-4 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {post.routeFocus ? (
                <div className="mt-12 rounded-[2rem] border border-primary/10 bg-white p-8 shadow-soft">
                  <div className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Öne Çıkan Hat
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-primary">
                    {post.routeFocus.from} → {post.routeFocus.to} araç taşıma
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                    Bu yazı doğrudan bu rotaya temas ediyor. Bu hatta fiyat, süreç ve
                    teslim planını ayrı sayfada daha detaylı inceleyebilirsiniz.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={post.routeFocus.href}
                      className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white"
                    >
                      Rota sayfasını incele
                    </Link>
                    <a
                      href={siteConfig.phoneHref}
                      className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-primary"
                    >
                      Hemen Ara
                    </a>
                  </div>
                </div>
              ) : null}
              {post.seoSections.map((section) => (
                <div
                  key={section.heading}
                  className="mt-12 rounded-[2rem] border border-border bg-white p-8 shadow-soft"
                >
                  <h2 className="text-2xl font-semibold text-primary">{section.heading}</h2>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-12 rounded-[2rem] border border-border bg-slate-50 p-8">
                <h2 className="text-2xl font-semibold text-primary">
                  Bu içerikle ilişkili hizmet sayfaları
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Bu rehber içeriklerin yanında, ilgili şehir ve rota sayfalarından da
                  fiyat, teslim ve süreç detaylarını inceleyebilirsiniz.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/hizmetler/${service.slug}`}
                      className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-primary transition-colors hover:border-primary/30"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight text-primary">
                  Sık sorulan sorular
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Bu yazıya özel hazırlanan soru-cevap bloğu, kullanıcıların fiyat, süre,
                  rota ve iletişim kararını hızlandırmak için düzenlendi.
                </p>
                <div className="mt-8">
                  <FAQSection items={post.faq} />
                </div>
              </div>
              <div className="mt-12 rounded-[2rem] border border-primary/10 bg-primary p-8 text-white">
                <h2 className="text-2xl font-semibold">
                  Hemen arayın: {siteConfig.phoneDisplay}
                </h2>
                <p className="mt-3 max-w-2xl text-slate-200">
                  Rota, şehir ve teslim detaylarını telefonda netleştirin veya WhatsApp
                  üzerinden bilgi alın.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.phoneHref}
                    className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white"
                  >
                    Hemen Ara
                  </a>
                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
                  >
                    WhatsApp&apos;tan bilgi alın
                  </a>
                </div>
              </div>
            </article>
            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-primary">İçindekiler</h2>
                <nav className="mt-4 space-y-3">
                  {post.sections.map((section) => (
                    <a
                      key={section.heading}
                      href={`#${section.heading.toLowerCase().replaceAll(" ", "-")}`}
                      className="block text-sm leading-7 text-slate-600 transition-colors hover:text-primary"
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="rounded-[2rem] border border-border bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-primary">Hızlı İletişim</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Form yok. Doğrudan arayın veya WhatsApp&apos;tan yazın.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-4 block rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold text-primary"
                >
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
              <div className="rounded-[2rem] border border-border bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-primary">Öne çıkan sorgular</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-slate-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <h2 className="text-3xl font-bold tracking-tight text-primary">İlgili yazılar</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
