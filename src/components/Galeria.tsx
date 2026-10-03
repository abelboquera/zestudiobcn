import Image from "next/image";
import type { Foto } from "@/data/galeria";

export default function Galeria({ fotos, titulo }: { fotos: Foto[]; titulo: string }) {
  if (fotos.length === 0) return null;

  return (
    <div id="galeria" className="scroll-mt-28">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">{titulo}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fotos.map((foto) => (
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
    </div>
  );
}
