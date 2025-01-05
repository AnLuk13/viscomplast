import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../styles/reset.css";
import "./globals.css";
import Heading from "@/app/components/header/Heading";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params: rawParams,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await rawParams;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const languageMap = {
    ro: "https://viscomplast.md/ro",
    ru: "https://viscomplast.md/ru",
    en: "https://viscomplast.md/en",
  };

  const localizedDescription = {
    ro: "VISCOMPLAST reprezintă o companie clădită pe valorile unui business de familie a cărei intenție este să producă tâmplărie PVC și Aluminiu la cel mai înalt nivel.",
    ru: "VISCOMPLAST - компания, основанная на ценностях семейного бизнеса, цель которой - производство окон и дверей из ПВХ и алюминия самого высокого качества.",
    en: "VISCOMPLAST is a company built on the values of a family business with the intention to produce PVC and aluminum joinery at the highest level.",
  };

  return {
    title: {
      default: "Viscomplast",
      template: "%s | Viscomplast",
    },
    description: localizedDescription[locale],
    keywords: [
      "uși",
      "ferestre",
      "viscomplast",
      "veka",
      "gealan",
      "kurtoglu",
      "ramplast",
      "aluminiu",
      "pvc",
    ],
    alternates: {
      canonical: languageMap[locale],
      languages: languageMap,
    },
    openGraph: {
      title: "Viscomplast",
      description: localizedDescription[locale],
      url: languageMap[locale],
      siteName: "Viscomplast",
      type: "website",
      locale: locale === "ro" ? "ro_RO" : locale === "ru" ? "ru_RU" : "en_US",
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Viscomplast",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await rawParams;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Heading />
          {children}{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
