import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/src/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Müşteri Deneyimleri"
          title="Süreçte en çok önem verilen konu: netlik"
          description="Araç taşıma hizmetinde kullanıcıların öne çıkardığı başlıklar hız, iletişim ve teslim planının açık olmasıdır."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={`${testimonial.name}-${testimonial.route}`} className="border-primary/10">
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-accent" />
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-primary">{testimonial.name}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    {testimonial.route}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
