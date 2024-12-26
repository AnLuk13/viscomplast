"use client";

import LanguageToggler from "@/app/components/LanguageToggler";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("about");
  return (
    <div>
      <LanguageToggler />
      <h1>{t("title")}</h1>
      <Link href="/">home</Link>
    </div>
  );
}
