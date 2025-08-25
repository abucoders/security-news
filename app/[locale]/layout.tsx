import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { ChildProps } from "@/types";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Security News",
  description: "Security News from the world of security",
};

interface RootLayoutProps extends ChildProps {
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
