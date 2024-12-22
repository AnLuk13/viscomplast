import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../styles/reset.css";
import "./globals.css";
import Heading from "@/app/components/header/Heading";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="ro">
        <body>
          <Heading />
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
