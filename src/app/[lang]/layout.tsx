import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, dictionaries } from "@/i18n";
import { trabajos } from "@/data/trabajos";

const inter = Inter({ subsets: ["latin"] });

const TITLE = "Z Estudio BCN | Estudio de Producción Musical en Barcelona";
const DESCRIPTION = "Estudio de producción musical en Barcelona. Composición, producción, publicidad, mezcla, mastering";

export const metadata: Metadata = {
  metadataBase: new URL("https://zestudiobcn.com"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: "estudio de grabación Barcelona, producción musical Barcelona, mezcla y mastering Barcelona, grabar canción Barcelona",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://zestudiobcn.com",
    siteName: "Z Estudio BCN",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Logo de Z Estudio BCN" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "ca" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const validLang = (lang === "en" || lang === "ca") ? lang : "es";
  const dict = dictionaries[validLang as Locale];

  return (
    <html lang={validLang} className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar
          dict={dict.nav}
          ui={dict.ui}
          lang={validLang as Locale}
          radio={trabajos.map((t) => ({
            title: t.title,
            artist: t.artists.join(", "),
            preview: t.preview,
          }))}
        />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
