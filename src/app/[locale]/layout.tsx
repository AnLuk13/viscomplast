import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../styles/reset.css";
import "./globals.css";
import Heading from "@/app/components/header/Heading";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const langParams = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={langParams.locale || "ro"}>
        <body>
          <Heading />
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
