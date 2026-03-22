import { ChevronDown } from "lucide-react";

import type { FAQ } from "@/src/data/faqs";
import { Card, CardContent } from "@/components/ui/card";

export function FAQSection({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.question}>
          <CardContent className="p-0">
            <details className="group rounded-3xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-primary">
                {item.question}
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-sm leading-7 text-slate-600">
                {item.answer}
              </div>
            </details>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
