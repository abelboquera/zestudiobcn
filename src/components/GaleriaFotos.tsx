"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Foto } from "@/data/galeria";

export default function GaleriaFotos({
  fotos,
  labels,
}: {
  fotos: Foto[];
  labels: { close: string; prev: string; next: string };
}) {
  const [abierta, setAbierta] = useState<number | null>(null);

  const cerrar = useCallback(() => setAbierta(null), []);
  const mover = useCallback(
    (paso: number) =>
      setAbierta((i) => (i === null ? i : (i + paso + fotos.length) % fotos.length)),
    [fotos.length]
  );

  useEffect(() => {
    if (abierta === null) return;

    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", alPulsar);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", alPulsar);
    };
  }, [abierta, cerrar, mover]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fotos.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            onClick={() => setAbierta(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800 transition-colors hover:border-amber-500 focus:outline-none focus-visible:border-amber-500"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {abierta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={fotos[abierta].alt}
          onClick={cerrar}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={cerrar}
            aria-label={labels.close}
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 p-2 text-white transition-colors hover:bg-amber-500 hover:text-neutral-950"
          >
            <X className="h-6 w-6" />
          </button>

          {fotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  mover(-1);
                }}
                aria-label={labels.prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white transition-colors hover:bg-amber-500 hover:text-neutral-950 sm:left-6"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  mover(1);
                }}
                aria-label={labels.next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2 text-white transition-colors hover:bg-amber-500 hover:text-neutral-950 sm:right-6"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div
            className="relative h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotos[abierta].src}
              alt={fotos[abierta].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
