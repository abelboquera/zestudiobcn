import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GaleriaFotos from "@/components/GaleriaFotos";
import { galeria } from "@/data/galeria";
import { Locale, dictionaries } from "@/i18n";

export const metadata: Metadata = {
  title: "Galería | Z Estudio BCN",
  description: "Fotos del equipamiento de Z Estudio BCN: guitarras, amplificadores y otros instrumentos.",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "ca" }];
}

export default async function GaleriaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === "en" || lang === "ca") ? lang : "es";
  const dict = dictionaries[validLang as Locale];
  const titulo = (c: (typeof galeria)[number]) =>
    validLang === "en" ? c.titleEn : validLang === "ca" ? c.titleCa : c.title;

  return (
    <div className="bg-[#0a0a0a] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${validLang}#galeria`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-amber-500"
        >
          <ArrowLeft className="h-4 w-4" />
          <span><span className="text-amber-500">Z</span>Estudio</span>
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-white">{dict.estudio.galleryTitle}</h1>

        {galeria.map((categoria) => (
          <section key={categoria.id} id={categoria.id} className="mt-16 scroll-mt-28">
            <h2 className="mb-6 text-2xl font-bold text-white">{titulo(categoria)}</h2>

            <GaleriaFotos
              fotos={categoria.fotos}
              labels={{ close: dict.ui.close, prev: dict.ui.prevPhoto, next: dict.ui.nextPhoto }}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
