"use client";

import Link from "next/link";
import { Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { useState } from "react";

import { PhoneLink } from "@/components/analytics/phone-link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

const navigation = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-primary">
                Sinem Lojistik
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Şehirler Arası Araç Taşıma
              </span>
            </Link>
            <nav className="hidden items-center gap-7 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <PhoneLink
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <PhoneCall className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </PhoneLink>
            <ButtonLink href={siteConfig.phoneHref} variant="accent" size="sm">
              Hemen Ara
            </ButtonLink>
            <ButtonLink
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
            >
              WhatsApp
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-primary md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label="Menüyü aç"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "border-t border-border bg-white transition-all md:hidden",
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        )}
      >
        <div className="container-shell space-y-3 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <PhoneLink
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-3 text-sm font-semibold text-primary"
            onClick={() => setIsOpen(false)}
          >
            <PhoneCall className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </PhoneLink>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-semibold text-primary"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      </div>
    </header>
  );
}
