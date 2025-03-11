import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../styles/reset.css';
import './globals.css';
import Heading from '@/app/components/header/Heading';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import QueryProvider from '@/app/components/helper/QueryProvider';
import MetaHead from '@/app/[locale]/MetaHead';
import { generateStructuredData } from '@/app/lib/seo/generateStructuredData';

export async function generateMetadata({
  params,
}: {
  params: { locale: 'ro' | 'ru' | 'en' };
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'ro' | 'ru' | 'en')) {
    notFound();
  }

  const languageMap: Record<string, string> = {
    ro: 'https://viscomplast.md/ro',
    ru: 'https://viscomplast.md/ru',
    en: 'https://viscomplast.md/en',
  };

  const structuredData = generateStructuredData(locale, languageMap);

  const localizedDescription: Record<string, string> = {
    ro: 'De 18 ani producem și instalăm ferestre și uși din PVC/ALUMINIU, uși glisante pentru închideri terase, uși exterioare simple sau cu panel ornamental, uși glisante termice și fațade din sticlă pentru spații comerciale. Exportăm produsele noastre în țări precum Italia, Irlanda, Belgia și Franța.',
    ru: 'Мы производим и устанавливаем окна и двери из ПВХ/АЛЮМИНИЯ уже 18 лет, а также раздвижные двери для террас, входные двери (простые или с декоративными панелями), термораздвижные двери и стеклянные фасады для коммерческих помещений. Мы экспортируем нашу продукцию в такие страны, как Италия, Ирландия, Бельгия и Франция.',
    en: 'For 18 years, we have been manufacturing and installing PVC/ALUMINUM windows and doors, sliding doors for terrace enclosures, exterior doors (simple or with decorative panels), thermal sliding doors, and glass facades for commercial spaces. We export our products to Italy, Ireland, Belgium, and France',
  };

  return {
    title: {
      default: 'Viscomplast',
      template: '%s | Viscomplast',
    },
    description: localizedDescription[locale],
    verification: {
      google: '0OsCdd_J0HLeN007NIOlwLs7nst7c-uQSlfAXqi1VA8', // ✅ Google verification
    },
    keywords: [
      'uși',
      'ferestre',
      'glisante',
      'inchideri terase',
      'fatade aluminiu',
      'ferestre export italia',
      'ferestre export irlanda',
      'ferestre export franta',
      'ferestre export belgia',
      'usi export italia',
      'usi export irlanda',
      'usi export franta',
      'usi export belgia',
      'usi pvc',
      'usi aluminiu',
      'ferestre pvc',
      'ferestre aluminiu',
      'glisante pvc',
      'glisante aluminiu',
      'glisante veka motion',
      'viscomplast',
      'veka',
      'wds',
      'kurtoglu',
      'alutech',
      'winkhaus',
      'maco',
      'aluminiu',
      'pvc',
    ],
    alternates: {
      canonical: languageMap[locale],
      languages: languageMap,
    },
    openGraph: {
      title: 'Viscomplast',
      description: localizedDescription[locale],
      url: languageMap[locale],
      siteName: 'Viscomplast',
      type: 'website',
      locale: locale === 'ro' ? 'ro_RO' : locale === 'ru' ? 'ru_RU' : 'en_US',
      images: [
        {
          url: '/assets/images/meta-logo.jpg',
          width: 1200,
          height: 630,
          alt: 'Viscomplast',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: { structuredData: JSON.stringify(structuredData) },
  };
}

export default async function LocaleLayout({
  children,
  params: rawParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'ro' | 'ru' | 'en' }>;
}) {
  const resolvedParams = await rawParams; // ✅ Await the params
  const { locale } = await resolvedParams;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
  const metadata = await generateMetadata({ params: resolvedParams });
  const structuredData = metadata.other?.structuredData
    ? JSON.parse(metadata.other.structuredData as string)
    : null;

  return (
    <html lang={locale}>
      <MetaHead structuredData={structuredData} />
      <body>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <Heading />
            {children}
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
