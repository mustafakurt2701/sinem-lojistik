export const siteConfig = {
  name: "Sinem Lojistik",
  legalName: "Sinem Lojistik",
  title: "Sinem Lojistik | Şehirler Arası Araç Taşıma",
  description:
    "İstanbul'dan Diyarbakır'a uzanan yoğun hizmet hattında sigortalı, planlı ve güvenilir şehirler arası araç taşıma çözümleri.",
  url: "https://www.ototasima.com",
  phoneDisplay: "+90 543 542 87 63",
  phoneHref: "tel:+905435428763",
  whatsappHref:
    "https://wa.me/905435428763?text=Merhaba%2C%20ara%C3%A7%20ta%C5%9F%C4%B1ma%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  whatsappBase: "https://wa.me/905435428763",
  serviceType: "Şehirler Arası Araç Taşıma",
  availability: "Telefon ve WhatsApp üzerinden hızlı bilgi",
  businessHours: "Pazartesi - Cumartesi 08:00 - 22:00",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? process.env.GOOGLE_SITE_VERIFICATION ?? "",
  googleAnalyticsId:
    process.env.NEXT_PUBLIC_GA_ID ??
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ??
    "AW-17979367744",
  serviceArea: [
    "Istanbul",
    "Bursa",
    "Izmit",
    "Kocaeli",
    "Bolu",
    "Ankara",
    "Aksaray",
    "Adana",
    "Mersin",
    "Osmaniye",
    "Gaziantep",
    "Sanliurfa",
    "Diyarbakir"
  ]
} as const;
