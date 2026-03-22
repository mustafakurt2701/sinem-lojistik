export type Testimonial = {
  name: string;
  route: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Murat K.",
    route: "İstanbul → Ankara",
    quote:
      "Süreç baştan sona telefonda net anlatıldı. Araç alımı ve teslim planı beklediğimden daha düzenli ilerledi."
  },
  {
    name: "Ayşe T.",
    route: "Ankara → Adana",
    quote:
      "Fiyat konuşurken sadece ücret değil, teslim günü ve araç alım noktası da açıkça paylaşıldı. Güven veren tarafı buydu."
  },
  {
    name: "Mehmet A.",
    route: "Gaziantep → Şanlıurfa",
    quote:
      "Kısa hatta hızlı bilgi almak istiyordum. Telefonla doğrudan ulaşabildiğim için süreç çok daha rahat ilerledi."
  }
];
