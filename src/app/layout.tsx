import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z Estudio BCN | Grabación, Producción y Escuela de Combos en Barcelona",
  description: "Estudio de grabación profesional en Barcelona. Producción musical, mezcla, mastering, clases de guitarra y escuela de combos dirigida por David García.",
  keywords: "estudio de grabación Barcelona, producción musical Barcelona, mezcla y mastering Barcelona, clases de guitarra Barcelona, escuela de combos Barcelona, combos musicales Barcelona, grabar canción Barcelona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
