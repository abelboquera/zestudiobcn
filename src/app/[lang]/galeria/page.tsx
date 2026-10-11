import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Galeria from "@/components/Galeria";
import { galeria } from "@/data/galeria";
import { Locale, dictionaries } from "@/i18n";

export const metadata: Metadata = {
  title: "Galería | Z Estudio BCN",
  description: "Fotos del equipamiento de Z Estudio BCN.",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "ca" }];
}

export default async function GaleriaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === "en" || lang === "ca") ? lang : "es";
  const dict = dictionaries[validLang as Locale];

  return (
    <div className="bg-[#0a0a0a] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${validLang}#estudio`}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-amber-500"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>
            <span className="text-amber-500">Z</span>Estudio
          </span>
        </Link>

        <Galeria categorias={galeria} titulo={dict.estudio.galleryTitle} lang={validLang} />
      </div>
    </div>
  );
}
