import Image from "next/image";
import Link from "next/link";
import type { CategoriaGaleria } from "@/data/galeria";

/** Las tres portadas que llevan a la pagina de galeria */
export default function Galeria({
  categorias,
  titulo,
  lang,
}: {
  categorias: CategoriaGaleria[];
  titulo: string;
  lang: string;
}) {
  if (categorias.length === 0) return null;

  return (
    <div id="galeria" className="scroll-mt-28">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">{titulo}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categorias.map((c) => (
          <Link
            key={c.id}
            href={`/${lang}/galeria#${c.id}`}
            className="group relative block h-72 overflow-hidden rounded-2xl border border-neutral-800"
          >
            <Image
              src={c.portada}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Degradado solo en los bordes, para que el centro se vea nitido */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="px-4 text-center text-3xl font-extrabold uppercase tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] transition-colors group-hover:text-amber-500">
                {lang === "en" ? c.titleEn : lang === "ca" ? c.titleCa : c.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
