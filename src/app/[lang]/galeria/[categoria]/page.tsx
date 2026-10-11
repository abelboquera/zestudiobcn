import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import GaleriaFotos from "@/components/GaleriaFotos";
import { galeria } from "@/data/galeria";
import { Locale, dictionaries } from "@/i18n";

export async function generateStaticParams() {
  return ["es", "en", "ca"].flatMap((lang) =>
    galeria.map((c) => ({ lang, categoria: c.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; categoria: string }>;
}): Promise<Metadata> {
  const { lang, categoria } = await params;
  const c = galeria.find((x) => x.id === categoria);
  if (!c) return {};
  const titulo = lang === "en" ? c.titleEn : lang === "ca" ? c.titleCa : c.title;
  return { title: `${titulo} | Z Estudio BCN` };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ lang: string; categoria: string }>;
}) {
  const { lang, categoria } = await params;
  const validLang = (lang === "en" || lang === "ca") ? lang : "es";
  const dict = dictionaries[validLang as Locale];

  const c = galeria.find((x) => x.id === categoria);
  if (!c) notFound();

  const titulo = validLang === "en" ? c.titleEn : validLang === "ca" ? c.titleCa : c.title;

  return (
    <div className="bg-[#0a0a0a] py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${validLang}#galeria`}
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-amber-500"
        >
          <ArrowLeft className="h-4 w-4" />
          {dict.estudio.galleryTitle}
        </Link>

        <h1 className="mt-6 mb-10 text-4xl font-bold text-white">{titulo}</h1>

        <GaleriaFotos
          fotos={c.fotos}
          labels={{ close: dict.ui.close, prev: dict.ui.prevPhoto, next: dict.ui.nextPhoto }}
        />
      </div>
    </div>
  );
}
