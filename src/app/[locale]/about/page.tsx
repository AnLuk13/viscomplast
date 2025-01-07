"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("about");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">home</Link>
    </div>
  );
}
