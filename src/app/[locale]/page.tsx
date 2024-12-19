import { useTranslations } from "next-intl";
import LanguageToggler from "@/app/components/LanguageToggler";
import { Link } from "@/i18n/routing";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const t = useTranslations("home");
  return (
    <div>
      <LanguageToggler />
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
