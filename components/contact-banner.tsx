import { CTAButtons } from "@/components/cta-buttons";

export function ContactBanner() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary to-slate-900 px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12">
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
            Doğrudan Ulaşın
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Araç taşıma planınızı şimdi netleştirin
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            Sinem Lojistik ile en yoğun hizmet hattında hızlı planlama, sigortalı taşıma
            ve net iletişim deneyimi alın.
          </p>
          <div className="mt-8">
            <CTAButtons stacked />
          </div>
        </div>
      </div>
    </section>
  );
}
