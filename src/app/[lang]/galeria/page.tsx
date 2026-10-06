import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoria.fotos.map((foto) => (
                <div
                  key={foto.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800"
                >
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
