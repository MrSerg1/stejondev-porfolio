import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { GlowBackground } from "@/components/glow-background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import { dictionaries, hasLocale, locales, type Locale } from "./dictionaries";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = dictionaries[lang];
  return {
    title: dict.site.title,
    description: dict.site.description,
    openGraph: {
      title: dict.site.title,
      description: dict.site.description,
      locale: lang,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = dictionaries[lang as Locale];

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <GlowBackground />
          <Navbar lang={lang} nav={dict.nav} name={dict.site.name} />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer name={dict.site.name} footer={dict.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
