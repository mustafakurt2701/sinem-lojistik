import { createCityFaqs, createRouteFaqs, faqs } from "@/src/data/faqs";
import { cityLabel, popularRoutes, routeTimeline } from "@/src/data/routes";

type ServiceContentBlock = {
  heading: string;
  paragraphs: string[];
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  type: "core" | "city" | "route";
  cityName?: string;
  routeInfo?: {
    from: string;
    to: string;
  };
  description: string;
  summary: string;
  intro: string[];
  searchIntent: string[];
  routeHighlights: string[];
  decisionNotes: string[];
  deliveryExpectations: string[];
  seoSections: ServiceContentBlock[];
  suitableFor: string[];
  process: string[];
  pricingFactors: string[];
  faq: typeof faqs;
  keywords: string[];
};

const baseServices: Service[] = [
  {
    slug: "sehirler-arasi-arac-tasima",
    title: "Sehirler Arasi Arac Tasima",
    shortTitle: "Şehirler Arası Araç Taşıma",
    type: "core",
    description:
      "Türkiye genelinde özellikle Istanbul'dan Diyarbakir'a uzanan hatta sigortalı ve planlı şehirler arası araç taşıma hizmeti.",
    summary:
      "Sinem Lojistik, bireysel ve kurumsal müşteriler için planlı sevkiyat, düzenli bilgilendirme ve güvenli teslim süreçleri sunar.",
    intro: [
      "Şehirler arası araç taşıma araması yapan kullanıcıların en temel beklentisi güven, hız ve net iletişimdir. Bu sayfa tam olarak bu niyete cevap verecek şekilde yapılandırıldı.",
      "Sinem Lojistik, özellikle Istanbul'dan Diyarbakir'a uzanan yoğun hatta aktif operasyon yürüttüğü için daha güçlü planlama kabiliyeti sunar."
    ],
    searchIntent: [
      "şehirler arası araç taşıma",
      "sigortalı araç taşıma",
      "güvenilir oto taşıma firması"
    ],
    routeHighlights: [
      "Istanbul - Ankara hattında yoğun sevkiyat",
      "Ankara - Adana geçişinde planlı operasyon",
      "Gaziantep - Sanliurfa - Diyarbakir bölgesinde düzenli teslim akışı"
    ],
    decisionNotes: [
      "Şehirler arası taşıma arayan kullanıcılar önce güvenilir firma, sonra teslim planı ve fiyat netliği arar.",
      "Telefonla ulaşılabilen ve aynı hatta düzenli çalışan firma seçimi karar sürecini hızlandırır.",
      "Araç tipi, mesafe ve teslim beklentisi baştan net konuşulduğunda operasyon daha öngörülebilir ilerler."
    ],
    deliveryExpectations: [
      "Teslim süresi, hattın yoğunluğu ve araç alım lokasyonuna göre değişebilir.",
      "Aktif çalışan rota yapısı, daha net sevkiyat penceresi oluşturur.",
      "Düzenli bilgilendirme, şehirler arası taşıma sürecinde güven hissini artırır."
    ],
    seoSections: [
      {
        heading: "Şehirler arası araç taşıma hizmetinde kullanıcı ne arar?",
        paragraphs: [
          "Bu hizmete gelen kullanıcıların çoğu fiyat bilgisinden önce güvenilirlik sinyali arar. Sigorta, teslim planı ve ulaşılabilir iletişim bu nedenle öne çıkar.",
          "Sinem Lojistik, İstanbul'dan Diyarbakır'a uzanan ana hatta odaklandığı için bu beklentiyi daha organize bir yapı ile karşılar."
        ]
      },
      {
        heading: "Neden hat odaklı çalışma önemlidir?",
        paragraphs: [
          "Belirli bir hatta yoğun çalışan firmalar, teslim planı ve yükleme düzeni konusunda daha net konuşabilir.",
          "Bu sayfa, genel vaatlerden çok aktif çalışılan şehirler arası araç taşıma hattını ve operasyon düzenini anlatır."
        ]
      }
    ],
    suitableFor: [
      "Bireysel araç sahipleri",
      "Galeriler ve filo yöneten işletmeler",
      "Farklı şehre taşınan kullanıcılar"
    ],
    process: [
      "Telefon veya WhatsApp üzerinden güzergah ve araç bilgisi alınır.",
      "Operasyon takvimi netleştirilir ve uygun taşıma planı oluşturulur.",
      "Araç güvenli şekilde teslim alınır, sevk edilir ve planlanan noktada teslim edilir."
    ],
    pricingFactors: [
      "Toplam rota mesafesi",
      "Araç tipi ve boyutu",
      "Teslim tarihi ve dönem yoğunluğu",
      "Alım ve teslim noktalarının erişim durumu"
    ],
    faq: faqs,
    keywords: ["şehirler arası araç taşıma", "sigortalı araç taşıma", "oto taşıma"]
  },
  {
    slug: "oto-tasima-hizmeti",
    title: "Oto Tasima Hizmeti",
    shortTitle: "Oto Taşıma Hizmeti",
    type: "core",
    description:
      "Bireysel otomobiller için güvenli, planlı ve hızlı oto taşıma hizmeti.",
    summary:
      "Aracınızın bulunduğu şehirden hedef şehre düzenli iletişim ve güven odaklı operasyonla teslim edilmesini sağlıyoruz.",
    intro: [
      "Oto taşıma hizmeti arayan kullanıcılar çoğunlukla araçlarının farklı şehre hasarsız, sigortalı ve zamanında ulaştırılmasını ister.",
      "Bu sayfa hem bireysel araç sahipleri hem de filo transferi yapan işletmeler için net hizmet çerçevesi sunar."
    ],
    searchIntent: [
      "oto taşıma hizmeti",
      "araç sevkiyat hizmeti",
      "şehirler arası otomobil taşıma"
    ],
    routeHighlights: [
      "Ana hatta düzenli yükleme planı",
      "Telefon ve WhatsApp üzerinden hızlı teyit",
      "Teslim öncesi net operasyon koordinasyonu"
    ],
    decisionNotes: [
      "Oto taşıma hizmetinde kullanıcılar hasarsız taşıma, hızlı iletişim ve plan netliği görmek ister.",
      "Aracın bulunduğu şehir ile varış noktası arasında aktif çalışan firma seçmek zaman baskısını azaltır.",
      "Çağrı ve WhatsApp üzerinden hızlı dönüş almak, kullanıcı için doğrudan güven işaretidir."
    ],
    deliveryExpectations: [
      "Teslim günü, rota yoğunluğu ve araç alım saatine göre netleştirilir.",
      "Kısa ve orta mesafeli hatlarda kullanıcılar daha dar zaman aralığı bekler.",
      "Düzenli bilgilendirme, teslim süreci boyunca en kritik beklentilerden biridir."
    ],
    seoSections: [
      {
        heading: "Oto taşıma hizmeti hangi kullanıcı niyetine hitap eder?",
        paragraphs: [
          "Bu sayfa doğrudan hizmet alma niyetindeki kullanıcılara hitap eder. Kullanıcılar burada genel lojistik bilgisi değil, araçlarının nasıl taşınacağını görmek ister.",
          "Bu nedenle içerik yapısı; süreç, fiyatı etkileyen faktörler, güven unsurları ve iletişim kanalları etrafında kuruldu."
        ]
      },
      {
        heading: "Neden profesyonel oto taşıma sayfası gerekir?",
        paragraphs: [
          "Genel hizmet sayfaları çoğu zaman kullanıcının karar vermesi için yeterli detay sunmaz. Oto taşıma gibi yüksek güven gerektiren hizmetlerde ayrı bir açıklama sayfası daha faydalı olur.",
          "Bu yaklaşım, kullanıcıya süreç ve teslim planını daha açık gösterir."
        ]
      }
    ],
    suitableFor: ["Yeni araç satın alanlar", "Taşınan aileler", "Kurumsal filo kullanıcıları"],
    process: [
      "Araç bilgileri alınır.",
      "Taşıma rotası ve uygun tarih planlanır.",
      "Operasyon ekibi teslim sürecini yönetir."
    ],
    pricingFactors: ["Araç segmenti", "Rota yoğunluğu", "Teslim süresi beklentisi"],
    faq: faqs,
    keywords: ["oto taşıma", "araç sevkiyatı", "profesyonel oto taşıma"]
  }
];

const cityDefinitions = [
  {
    slug: "istanbul-arac-tasima",
    shortTitle: "İstanbul Araç Taşıma",
    city: "Istanbul",
    detail:
      "Istanbul çıkışlı şehirler arası araç taşıma operasyonlarında yoğun planlama ve hızlı teklif desteği."
  },
  {
    slug: "bursa-arac-tasima",
    shortTitle: "Bursa Araç Taşıma",
    city: "Bursa",
    detail:
      "Bursa merkezli araç taşıma taleplerinde ana hatta bağlı planlı ve güvenli sevkiyat desteği."
  },
  {
    slug: "izmit-arac-tasima",
    shortTitle: "İzmit Araç Taşıma",
    city: "Izmit",
    detail:
      "Izmit çıkışlı veya varışlı araç taşıma ihtiyaçlarında hızlı operasyon planlaması."
  },
  {
    slug: "kocaeli-arac-tasima",
    shortTitle: "Kocaeli Araç Taşıma",
    city: "Kocaeli",
    detail:
      "Kocaeli hattında düzenli operasyon akışıyla güven veren araç taşıma çözümleri."
  },
  {
    slug: "bolu-arac-tasima",
    shortTitle: "Bolu Araç Taşıma",
    city: "Bolu",
    detail:
      "Bolu üzerinden geçen ana rotada planlı araç taşıma ve net teslim süreci."
  },
  {
    slug: "ankara-arac-tasima",
    shortTitle: "Ankara Araç Taşıma",
    city: "Ankara",
    detail:
      "Ankara merkezli araç taşıma çözümlerinde İç Anadolu bağlantılı hızlı planlama."
  },
  {
    slug: "aksaray-arac-tasima",
    shortTitle: "Aksaray Araç Taşıma",
    city: "Aksaray",
    detail:
      "Aksaray geçişli veya çıkışlı taşımalarda ana hatta entegre operasyon desteği."
  },
  {
    slug: "adana-arac-tasima",
    shortTitle: "Adana Araç Taşıma",
    city: "Adana",
    detail:
      "Adana hattında yoğun sevkiyat planlarıyla kontrollü araç taşıma süreci."
  },
  {
    slug: "mersin-arac-tasima",
    shortTitle: "Mersin Araç Taşıma",
    city: "Mersin",
    detail:
      "Mersin çıkışlı veya varışlı oto taşıma ihtiyaçlarında hızlı koordinasyon ve güvenli teslim."
  },
  {
    slug: "osmaniye-arac-tasima",
    shortTitle: "Osmaniye Araç Taşıma",
    city: "Osmaniye",
    detail:
      "Osmaniye bölgesinde ana rota avantajıyla planlı ve sigortalı araç taşıma hizmeti."
  },
  {
    slug: "gaziantep-arac-tasima",
    shortTitle: "Gaziantep Araç Taşıma",
    city: "Gaziantep",
    detail:
      "Gaziantep merkezli araç taşıma hizmetlerinde bölgesel deneyim ve planlı teslim avantajı."
  },
  {
    slug: "sanliurfa-arac-tasima",
    shortTitle: "Şanlıurfa Araç Taşıma",
    city: "Sanliurfa",
    detail:
      "Sanliurfa çıkışlı ve varışlı şehirler arası araç taşıma için güven odaklı planlama."
  },
  {
    slug: "diyarbakir-arac-tasima",
    shortTitle: "Diyarbakır Araç Taşıma",
    city: "Diyarbakir",
    detail:
      "Diyarbakir varışlı ve çıkışlı araç taşıma hizmetlerinde hattın son ayağına hakim operasyon desteği."
  }
] as const;

function buildCityDecisionNotes(cityName: string) {
  return [
    `${cityName} araç taşıma aramalarında kullanıcıların ilk baktığı konu, firmanın ilgili şehirde gerçekten aktif çalışıp çalışmadığıdır.`,
    `${cityName} çıkışlı veya varışlı taşımalarda hızlı telefon dönüşü ve net süreç anlatımı, tekliften daha önce güven oluşturur.`,
    `${cityName} için taşıma planı yapılırken alım noktası, teslim şehri ve dönem yoğunluğu birlikte değerlendirilmelidir.`
  ];
}

function buildCityDeliveryExpectations(cityName: string) {
  return [
    `${cityName} hattında teslim beklentisi, hedef rotanın uzunluğuna ve operasyon yoğunluğuna göre değişir.`,
    `${cityName} merkezli aktif çalışma düzeni, daha öngörülebilir alım ve teslim akışı sağlar.`,
    `${cityName} için net zamanlama beklentisi olan kullanıcılar çoğunlukla telefon üzerinden hızlı teyit almak ister.`
  ];
}

function buildCitySeoSections(cityName: string) {
  const cityKey = routeTimeline.findIndex((entry) => cityLabel(entry) === cityName);
  const previousCity = cityKey > 0 ? cityLabel(routeTimeline[cityKey - 1]) : null;
  const nextCity = cityKey >= 0 && cityKey < routeTimeline.length - 1 ? cityLabel(routeTimeline[cityKey + 1]) : null;

  return [
    {
      heading: `${cityName} araç taşıma sayfası neden ayrı hazırlanır?`,
      paragraphs: [
        `${cityName} odaklı arama yapan kullanıcılar, genel araç taşıma bilgisinden çok kendi şehirleriyle ilişkili hizmet görmek ister.`,
        `${cityName} için oluşturulan ayrı hizmet içeriği; telefon iletişimi, şehir bazlı sorular ve süreç detaylarıyla daha anlaşılır bir çerçeve sunar.`
      ]
    },
    {
      heading: `${cityName} hattında planlama nasıl güçlenir?`,
      paragraphs: [
        previousCity && nextCity
          ? `${cityName}, ${previousCity} ve ${nextCity} arasında uzanan hizmet hattının önemli duraklarından biridir. Bu konum operasyon akışını daha öngörülebilir hale getirir.`
          : `${cityName}, hizmet hattımız üzerinde stratejik bir duraktır ve bu durum planlamayı daha düzenli hale getirir.`,
        `${cityName} için hızlı fiyat isteyen kullanıcıların en çok ihtiyaç duyduğu şey; aracın ne zaman alınacağı, hangi hatta ilerleyeceği ve teslim koordinasyonunun nasıl yönetileceğinin açık anlatılmasıdır.`
      ]
    }
  ];
}

function buildRouteDecisionNotes(from: string, to: string) {
  return [
    `${from} ${to} araç taşıma aramalarında kullanıcılar çoğunlukla doğrudan rota bazlı fiyat, teslim süresi ve güven bilgisi görmek ister.`,
    `${from} ile ${to} arasında düzenli çalışan bir hat, hem plan netliği hem de iletişim kalitesi açısından daha güçlü görünür.`,
    `${from} - ${to} hattında karar verirken firmanın bu rotaya gerçekten içerik ve operasyon ayırıp ayırmadığı önemli bir sinyaldir.`
  ];
}

function buildRouteDeliveryExpectations(from: string, to: string) {
  return [
    `${from} - ${to} hattında teslim beklentisi; rota yoğunluğu, alım noktası ve araç tipine göre şekillenir.`,
    `${from} çıkışlı ve ${to} varışlı sevkiyatlarda aktif hat planı, kullanıcıya daha net zaman penceresi sunar.`,
    `${from} ile ${to} arasında taşıma yaptırmak isteyen kullanıcılar, süreç boyunca düzenli bilgi almak ister.`
  ];
}

function buildRouteSeoSections(from: string, to: string) {
  return [
      {
        heading: `${from} - ${to} araç taşıma sayfasında hangi bilgiler var?`,
        paragraphs: [
          `${from} - ${to} hattına özel hazırlanan bu sayfa, rota bazlı fiyat, teslim süresi ve süreç bilgisi arayan kullanıcılara cevap verir.`,
          `Bu nedenle sayfada rota adı, teslim beklentisi, sık sorulan sorular ve ilgili içerikler birlikte sunulur.`
        ]
      },
      {
        heading: `${from} ile ${to} arasında neden ayrı sayfa hazırlanır?`,
        paragraphs: [
          `${from} ile ${to} arasında araç taşıma yaptırmak isteyen kullanıcılar, doğrudan bu iki nokta arasındaki hizmeti kıyaslar.`,
          `Ayrı rota sayfası; kullanıcıya telefon ve WhatsApp ile hızlı bilgi alma imkanı sunarken süreci de daha açık anlatır.`
        ]
      }
  ];
}

function createCityService(city: (typeof cityDefinitions)[number]): Service {
  return {
    slug: city.slug,
    title: city.shortTitle,
    shortTitle: city.shortTitle,
    type: "city",
    cityName: cityLabel(city.city),
    description: city.detail,
    summary:
      `${city.city}, hizmet hattımızın aktif duraklarından biridir. Bu yoğunluk, daha hızlı planlama, daha net teslim akışı ve güven veren operasyon deneyimi sağlar.`,
    intro: [
      `${city.shortTitle} sayfası, doğrudan ${cityLabel(city.city)} çıkışlı veya varışlı taşıma arayan kullanıcıları hedefler.`,
      `${cityLabel(city.city)} hattında düzenli çalışmak; araç alımı, sevkiyat planı ve teslim koordinasyonunda daha öngörülebilir sonuç üretir.`
    ],
    searchIntent: [
      `${cityLabel(city.city)} araç taşıma`,
      `${cityLabel(city.city)} oto taşıma`,
      `${cityLabel(city.city)} şehirler arası araç taşıma`
    ],
    routeHighlights: [
      `${cityLabel(city.city)} merkezli hızlı planlama`,
      "Yoğun hatta düzenli operasyon akışı",
      "Telefonla teklif ve WhatsApp ile hızlı bilgi"
    ],
    decisionNotes: buildCityDecisionNotes(cityLabel(city.city)),
    deliveryExpectations: buildCityDeliveryExpectations(cityLabel(city.city)),
    seoSections: buildCitySeoSections(cityLabel(city.city)),
    suitableFor: [
      `${city.city} çıkışlı araç gönderimi yapan bireyler`,
      "Bayi ve galeri transferleri",
      "Kurumsal filo ve taşınma operasyonları"
    ],
    process: [
      `${city.city} için araç ve rota bilgisi alınır.`,
      "Uygun sevkiyat takvimi oluşturulur.",
      "Araç kontrollü şekilde taşınır ve hedef şehirde teslim edilir."
    ],
    pricingFactors: [
      `${city.city} içi alım ve teslim lokasyonu`,
      "Hedef rota uzunluğu",
      "Araç tipi ve dönem yoğunluğu"
    ],
    faq: createCityFaqs(cityLabel(city.city)),
    keywords: [
      `${city.city.toLowerCase()} araç taşıma`,
      `${city.city.toLowerCase()} oto taşıma`,
      `${city.city.toLowerCase()} şehirler arası araç taşıma`
    ]
  };
}

function createRouteService(route: (typeof popularRoutes)[number]): Service {
  const shortTitle = `${route.from} ${route.to} Araç Taşıma`;

  return {
    slug: route.slug,
    title: shortTitle,
    shortTitle,
    type: "route",
    routeInfo: {
      from: cityLabel(route.from),
      to: cityLabel(route.to)
    },
    description:
      `${cityLabel(route.from)} ile ${cityLabel(route.to)} arasında sigortalı, planlı ve doğrudan iletişim destekli araç taşıma hizmeti.`,
    summary:
      `${route.summary} Yoğun çalışan hat yapısı teslim kalitesini ve müşteri güvenini destekler.`,
    intro: [
      `${cityLabel(route.from)} ${cityLabel(route.to)} araç taşıma araması yapan kullanıcılar çoğunlukla rota bazlı fiyat, teslim süresi ve güven konularına odaklanır.`,
      "Bu sayfada hizmet özeti, fiyatı etkileyen faktörler, rota avantajı ve iletişim alanları bir araya getirildi."
    ],
    searchIntent: [
      `${cityLabel(route.from)} ${cityLabel(route.to)} araç taşıma`,
      `${cityLabel(route.from)} ${cityLabel(route.to)} oto taşıma`,
      `${cityLabel(route.from)} ${cityLabel(route.to)} araç taşıma fiyatı`
    ],
    routeHighlights: [
      `${cityLabel(route.from)} çıkışlı planlı yükleme`,
      `${cityLabel(route.to)} varışlı düzenli teslim`,
      "Yoğun çalışan hat yapısı sayesinde daha güçlü zamanlama"
    ],
    decisionNotes: buildRouteDecisionNotes(cityLabel(route.from), cityLabel(route.to)),
    deliveryExpectations: buildRouteDeliveryExpectations(cityLabel(route.from), cityLabel(route.to)),
    seoSections: buildRouteSeoSections(cityLabel(route.from), cityLabel(route.to)),
    suitableFor: [
      `${cityLabel(route.from)} - ${cityLabel(route.to)} arasında araç gönderen bireyler`,
      "Galeri ve filo taşımaları",
      "Hızlı planlama isteyen kullanıcılar"
    ],
    process: [
      "Rota ve teslim beklentisi alınır.",
      "Hat yoğunluğuna göre uygun sevkiyat planlanır.",
      "Araç profesyonel süreçle teslim edilir."
    ],
    pricingFactors: [
      "Rota mesafesi",
      "Sevkiyat dönemi",
      "Araç tipi ve teslim noktaları"
    ],
    faq: createRouteFaqs(cityLabel(route.from), cityLabel(route.to)),
    keywords: [
      `${cityLabel(route.from).toLowerCase()} ${cityLabel(route.to).toLowerCase()} araç taşıma`,
      `${cityLabel(route.from).toLowerCase()} ${cityLabel(route.to).toLowerCase()} oto taşıma`
    ]
  };
}

export const services: Service[] = [
  ...baseServices,
  ...cityDefinitions.map(createCityService),
  ...popularRoutes.map(createRouteService)
];
