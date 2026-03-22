import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  category?: string;
  image?: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  category,
  image = "/og-image.svg",
  openGraphType = "website",
  publishedTime,
  modifiedTime,
  tags = []
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title,
    description,
    keywords,
    category,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    alternates: {
      canonical: url
    },
    verification: siteConfig.googleSiteVerification
      ? {
          google: siteConfig.googleSiteVerification
        }
      : undefined,
    openGraph: {
      type: openGraphType,
      locale: "tr_TR",
      url,
      title,
      description,
      siteName: siteConfig.name,
      publishedTime,
      modifiedTime,
      tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDisplay,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"]
    },
    sameAs: [siteConfig.whatsappBase]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "tr-TR",
    description: siteConfig.description
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    image: absoluteUrl("/og-image.svg"),
    description: siteConfig.description,
    areaServed: siteConfig.serviceArea,
    serviceArea: siteConfig.serviceArea.map((area) => ({
      "@type": "City",
      name: area
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Araç Taşıma Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: siteConfig.serviceType
          }
        }
      ]
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "08:00",
        closes: "22:00"
      }
    ]
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay
    },
    areaServed: siteConfig.serviceArea,
    description: service.description,
    url: absoluteUrl(service.path)
  };
}

export function itemListSchema(
  name: string,
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path)
    }))
  };
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  category: string;
  image: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: post.keywords,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(post.image),
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/og-image.svg")
      }
    }
  };
}

export function serviceMetaCopy(service: {
  shortTitle: string;
  type: "core" | "city" | "route";
  cityName?: string;
  routeInfo?: {
    from: string;
    to: string;
  };
  description: string;
  keywords: string[];
}) {
  if (service.type === "city") {
    return {
      title: `${service.shortTitle} | Hızlı Fiyat ve Güvenli Taşıma`,
      description: `${service.cityName ?? service.shortTitle} için sigortalı taşıma, hızlı planlama ve doğrudan telefon desteği. ${service.keywords[0]} aramalarında güçlü landing sayfası.`
    };
  }

  if (service.type === "route") {
    const routeLabel = service.routeInfo
      ? `${service.routeInfo.from} - ${service.routeInfo.to}`
      : service.shortTitle;

    return {
      title: `${routeLabel} Araç Taşıma | Hızlı Fiyat ve Güvenli Süreç`,
      description: `${routeLabel} hattında sigortalı taşıma, net teslim planı ve doğrudan telefon desteği. Rota bazlı hızlı bilgi için hemen ulaşın.`
    };
  }

  return {
    title: `${service.shortTitle} | Sinem Lojistik`,
    description: service.description
  };
}

export function blogMetaCopy(post: {
  title: string;
  description: string;
  keywords: string[];
  category: string;
}) {
  return {
    title: `${post.title} | 2026 Rehberi`,
    description: `${post.description} ${post.keywords[0]} konusunda hızlı karar vermek isteyenler için pratik bilgiler ve doğrudan hizmet bağlantıları.`
  };
}
