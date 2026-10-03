"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { arrancarRadioConSonido, radioSilenciada } from "./RadioPlayer";

/**
 * Portada de bienvenida. Sirve para que la radio pueda sonar: los
 * navegadores solo permiten el audio despues de que el visitante pulse,
 * y este boton es esa pulsacion.
 */
export default function PantallaEntrada({ label }: { label: string }) {
  const [visible, setVisible] = useState(true);
  const [saliendo, setSaliendo] = useState(false);
  const botonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Si ya habia silenciado la radio, no tiene sentido hacerle pulsar
    if (radioSilenciada()) {
      setVisible(false);
      return;
    }
    document.body.style.overflow = "hidden";
    botonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const entrar = () => {
    arrancarRadioConSonido();
    setSaliendo(true);
    document.body.style.overflow = "";
    window.setTimeout(() => setVisible(false), 500);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#0a0a0a] transition-opacity duration-500 ${
        saliendo ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative h-32 w-32 sm:h-40 sm:w-40">
        <Image src="/logos/z-mark.png" alt="Z Estudio BCN" fill sizes="320px" className="object-contain" priority />
      </div>

      <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Z ESTUDIO <span className="text-amber-500">BCN</span>
      </p>

      <button
        ref={botonRef}
        type="button"
        onClick={entrar}
        className="rounded-lg bg-amber-500 px-10 py-4 text-base font-bold text-neutral-950 transition-colors hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {label}
      </button>
    </div>
  );
}
