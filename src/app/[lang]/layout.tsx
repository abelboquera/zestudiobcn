import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, dictionaries } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z Estudio BCN | Grabación, Producción y Escuela de Combos en Barcelona",
  description: "Estudio de grabación profesional en Barcelona. Producción musical, mezcla, mastering, clases de guitarra y escuela de combos dirigida por David García.",
  keywords: "estudio de grabación Barcelona, producción musical Barcelona, mezcla y mastering Barcelona, clases de guitarra Barcelona, escuela de combos Barcelona, combos musicales Barcelona, grabar canción Barcelona",
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
        <Navbar dict={dict.nav} lang={validLang as Locale} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
