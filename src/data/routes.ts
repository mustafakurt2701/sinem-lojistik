export const serviceCities = [
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
] as const;

export const cityLabelMap: Record<(typeof serviceCities)[number], string> = {
  Istanbul: "İstanbul",
  Bursa: "Bursa",
  Izmit: "İzmit",
  Kocaeli: "Kocaeli",
  Bolu: "Bolu",
  Ankara: "Ankara",
  Aksaray: "Aksaray",
  Adana: "Adana",
  Mersin: "Mersin",
  Osmaniye: "Osmaniye",
  Gaziantep: "Gaziantep",
  Sanliurfa: "Şanlıurfa",
  Diyarbakir: "Diyarbakır"
};

export function cityLabel(city: (typeof serviceCities)[number]) {
  return cityLabelMap[city];
}

export const routeTimeline = [
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
] as const;

export const popularRoutes = [
  {
    from: "Istanbul",
    to: "Bursa",
    slug: "istanbul-bursa-arac-tasima",
    summary:
      "Marmara hattında hızlı alım planı ve düzenli teslim organizasyonu."
  },
  {
    from: "Bursa",
    to: "Izmit",
    slug: "bursa-izmit-arac-tasima",
    summary:
      "Bölgesel yoğunluk sayesinde esnek zamanlama ve kontrollü araç sevkiyatı."
  },
  {
    from: "Izmit",
    to: "Kocaeli",
    slug: "izmit-kocaeli-arac-tasima",
    summary:
      "Kısa hatta net koordinasyon, hızlı iletişim ve güvenli teslim süreci."
  },
  {
    from: "Kocaeli",
    to: "Bolu",
    slug: "kocaeli-bolu-arac-tasima",
    summary:
      "Geçiş hattında planlı yükleme ve operasyon akışına uygun araç taşıma desteği."
  },
  {
    from: "Bolu",
    to: "Ankara",
    slug: "bolu-ankara-arac-tasima",
    summary:
      "İç Anadolu bağlantısında düzenli çalışan hat ile kontrollü sevkiyat."
  },
  {
    from: "Istanbul",
    to: "Ankara",
    slug: "istanbul-ankara-arac-tasima",
    summary:
      "Yoğun planlanan hatta hızlı araç alımı, düzenli sevkiyat ve güvenli teslim."
  },
  {
    from: "Ankara",
    to: "Adana",
    slug: "ankara-adana-arac-tasima",
    summary:
      "İç Anadolu ile Akdeniz arasında planlı ve sigortalı taşıma operasyonu."
  },
  {
    from: "Ankara",
    to: "Aksaray",
    slug: "ankara-aksaray-arac-tasima",
    summary:
      "Ankara çıkışlı geçiş hattında hızlı programlama ve kontrollü teslim avantajı."
  },
  {
    from: "Aksaray",
    to: "Adana",
    slug: "aksaray-adana-arac-tasima",
    summary:
      "Güney hattına geçişte düzenli planlanan araç taşıma operasyonu."
  },
  {
    from: "Adana",
    to: "Gaziantep",
    slug: "adana-gaziantep-arac-tasima",
    summary:
      "Bölgesel yoğunluk sayesinde esnek yükleme ve doğru zamanlama."
  },
  {
    from: "Adana",
    to: "Mersin",
    slug: "adana-mersin-arac-tasima",
    summary:
      "Kısa Akdeniz hattında esnek yükleme ve hızlı teslim koordinasyonu."
  },
  {
    from: "Mersin",
    to: "Osmaniye",
    slug: "mersin-osmaniye-arac-tasima",
    summary:
      "Bölgesel sevkiyatta net rota planı ve güven veren teslim organizasyonu."
  },
  {
    from: "Osmaniye",
    to: "Gaziantep",
    slug: "osmaniye-gaziantep-arac-tasima",
    summary:
      "Doğu Akdeniz ile Güneydoğu arasında aktif hatta bağlı profesyonel taşıma."
  },
  {
    from: "Gaziantep",
    to: "Sanliurfa",
    slug: "gaziantep-sanliurfa-arac-tasima",
    summary:
      "Kısa hatta profesyonel teslim planı ve aktif iletişim desteği."
  },
  {
    from: "Sanliurfa",
    to: "Diyarbakir",
    slug: "sanliurfa-diyarbakir-arac-tasima",
    summary:
      "Güneydoğu hattında düzenli çalışan operasyon akışıyla güven veren hizmet."
  }
] as const;
