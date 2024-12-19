"use client";

import { locales } from "@/app/lib/config/locale-config";
import { Link } from "@/i18n/routing";

export default function LanguageToggler() {
  return (
    <div>
      {locales.map((locale) => (
        <Link key={locale} locale={locale} href="/" style={{ margin: "0 5px" }}>
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
