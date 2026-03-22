import Image from "next/image";

const logos = [
  { src: "/photo/downloads/images/logos/audi.jpg", alt: "Audi" },
  { src: "/photo/downloads/images/logos/bmw.jpg", alt: "BMW" },
  { src: "/photo/downloads/images/logos/ford.jpg", alt: "Ford" },
  { src: "/photo/downloads/images/logos/mercedes.jpg", alt: "Mercedes" },
  { src: "/photo/downloads/images/logos/renault.jpg", alt: "Renault" },
  { src: "/photo/downloads/images/logos/toyota.jpg", alt: "Toyota" }
];

export function BrandLogoStrip() {
  return (
    <div className="rounded-[2rem] border border-border bg-white p-6 shadow-soft">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
        Sık taşıma planı yapılan araç markaları
      </p>
      <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-20 items-center justify-center rounded-2xl border border-border bg-slate-50 p-3"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={48}
              className="h-auto max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
