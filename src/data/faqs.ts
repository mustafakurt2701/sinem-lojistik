export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Şehirler arası araç taşıma ne kadar sürer?",
    answer:
      "Teslim süresi güzergaha, araç tipine ve planlanan yükleme takvimine göre değişir. Sinem Lojistik, özellikle Istanbul-Diyarbakir hattında düzenli operasyon yürüttüğü için planlamayı daha hızlı yapar."
  },
  {
    question: "Araç taşıma hizmetiniz sigortalı mı?",
    answer:
      "Evet. Operasyon planına dahil edilen araçlar taşıma sürecinde sigortalı şekilde sevk edilir ve teslim aşamasına kadar kontrollü şekilde takip edilir."
  },
  {
    question: "Hangi şehirlerde daha yoğun hizmet veriyorsunuz?",
    answer:
      "Istanbul, Ankara, Adana, Gaziantep, Sanliurfa ve Diyarbakir başta olmak üzere tüm ana hat boyunca aktif çalışıyoruz."
  },
  {
    question: "Fiyatı hangi faktörler etkiler?",
    answer:
      "Araç tipi, rota uzunluğu, sezon yoğunluğu, yükleme tarihi ve teslim bölgesi fiyat teklifini etkileyen temel unsurlardır."
  },
  {
    question: "Bilgi almak için form doldurmak gerekiyor mu?",
    answer:
      "Hayır. Sitede form bulunmaz. Hızlı fiyat ve planlama için doğrudan arayabilir veya WhatsApp üzerinden bilgi alabilirsiniz."
  }
];

export function createCityFaqs(cityLabel: string): FAQ[] {
  return [
    {
      question: `${cityLabel} araç taşıma hizmeti ne kadar sürer?`,
      answer: `${cityLabel} çıkışlı veya varışlı araç taşıma süresi; hedef şehre, operasyon yoğunluğuna ve planlanan yükleme tarihine göre değişir. Ana hizmet hattında düzenli çalıştığımız için planlamayı daha net yapabiliyoruz.`
    },
    {
      question: `${cityLabel} araç taşıma fiyatı nasıl belirlenir?`,
      answer: `${cityLabel} araç taşıma fiyatı; alım noktası, teslim şehri, araç tipi, mevsimsel yoğunluk ve planlanan sevkiyat tarihine göre şekillenir.`
    },
    {
      question: `${cityLabel} için bilgi almak adına form doldurmak gerekiyor mu?`,
      answer: `Hayır. ${cityLabel} araç taşıma hizmeti için form yok. Doğrudan arayabilir veya WhatsApp üzerinden hızlı bilgi alabilirsiniz.`
    },
    {
      question: `${cityLabel} araç taşıma sigortalı mı?`,
      answer: `Evet. ${cityLabel} çıkışlı ve varışlı operasyonlarda süreç sigortalı taşıma yaklaşımı ve kontrollü teslim planı ile yürütülür.`
    }
  ];
}

export function createRouteFaqs(from: string, to: string): FAQ[] {
  return [
    {
      question: `${from} ${to} araç taşıma ne kadar sürer?`,
      answer: `${from} ile ${to} arasındaki araç taşıma süresi rota yoğunluğu, teslim noktaları ve planlanan tarihe göre değişir. Düzenli çalışan hatta daha net teslim öngörüsü sunulabilir.`
    },
    {
      question: `${from} ${to} araç taşıma fiyatını ne etkiler?`,
      answer: `${from} ${to} araç taşıma fiyatında rota mesafesi, araç segmenti, teslim detayları ve operasyon dönemi temel belirleyicilerdir.`
    },
    {
      question: `${from} ${to} hattında neden rota deneyimi önemlidir?`,
      answer: `Rota deneyimi; yükleme planı, teslim koordinasyonu ve zaman yönetiminde fark yaratır. Özellikle yoğun çalışan hatlarda bu deneyim güven ve hız kazandırır.`
    },
    {
      question: `${from} ${to} araç taşıma için nasıl iletişime geçebilirim?`,
      answer: `Form kullanmanıza gerek yok. ${from} ${to} araç taşıma için doğrudan telefonla arayabilir veya WhatsApp üzerinden bilgi alabilirsiniz.`
    }
  ];
}

export function createBlogFaqs(
  title: string,
  primaryKeyword: string,
  supportKeyword?: string
): FAQ[] {
  return [
    {
      question: `${primaryKeyword} hakkında en çok merak edilen konu nedir?`,
      answer: `${title} içeriğinde en çok merak edilen başlıklar; süreç, fiyatı etkileyen faktörler, teslim planı ve güven kriterleridir. Kullanıcılar genellikle hızlı karar verebilmek için bu dört başlıkta net bilgi arar.`
    },
    {
      question: `${primaryKeyword} için fiyat almak adına ne yapmak gerekir?`,
      answer: `${primaryKeyword} için form doldurmanız gerekmez. Doğrudan telefonla arayabilir veya WhatsApp üzerinden rota, şehir ve araç bilgilerini paylaşarak hızlı bilgi alabilirsiniz.`
    },
    {
      question: `${primaryKeyword} aramasında neden rota deneyimi önemlidir?`,
      answer: `Rota deneyimi; planlama, zamanlama ve teslim koordinasyonunu doğrudan etkiler. Yoğun çalışan hatlara hakim firmalar daha net süreç yönetimi sunar.`
    },
    {
      question: supportKeyword
        ? `${supportKeyword} ile ilgili içerikler neden önemlidir?`
        : `${primaryKeyword} ile ilgili ek içerikler neden önemlidir?`,
      answer: `Benzer şehir ve rota içerikleri birlikte değerlendirildiğinde kullanıcı daha doğru karar verir. Aynı konu kümesindeki içerikler, hem bilgi ihtiyacını karşılar hem de doğru hizmet sayfasına geçişi kolaylaştırır.`
    }
  ];
}
