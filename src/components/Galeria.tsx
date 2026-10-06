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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 transition-colors group-hover:from-black/50 group-hover:to-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-extrabold tracking-tight text-white">
                {lang === "en" ? c.titleEn : lang === "ca" ? c.titleCa : c.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
