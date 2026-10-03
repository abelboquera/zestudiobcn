"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Radio } from "lucide-react";

export type RadioTrack = { title: string; artist: string; preview: string };

/** Cada tema suena 20 segundos y pasa al siguiente */
const SEGUNDOS = 20;
const VOLUMEN = 0.5;
const CLAVE = "zestudio-radio-silenciada";

function leerSilenciada(): boolean {
  try {
    return window.localStorage.getItem(CLAVE) === "1";
  } catch (error) {
    return false;
  }
}

function guardarSilenciada(valor: boolean) {
  try {
    if (valor) window.localStorage.setItem(CLAVE, "1");
    else window.localStorage.removeItem(CLAVE);
  } catch (error) {
    // el navegador puede bloquear el almacenamiento; no pasa nada
  }
}

export default function RadioPlayer({
  tracks,
  labels,
}: {
  tracks: RadioTrack[];
  labels: { on: string; off: string };
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ordenRef = useRef<RadioTrack[]>([]);
  const indiceRef = useRef(0);
  const [sonando, setSonando] = useState(false);

  const siguiente = useCallback(() => {
    const audio = audioRef.current;
    const orden = ordenRef.current;
    if (!audio || orden.length === 0) return;
    indiceRef.current = (indiceRef.current + 1) % orden.length;
    audio.src = orden[indiceRef.current].preview;
    audio.play().catch(() => setSonando(false));
  }, []);

  useEffect(() => {
    if (tracks.length === 0) return;

    // Orden aleatorio, distinto en cada visita
    const orden = [...tracks];
    for (let i = orden.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [orden[i], orden[j]] = [orden[j], orden[i]];
    }
    ordenRef.current = orden;

    const audio = new Audio(orden[0].preview);
    audio.volume = VOLUMEN;
    audio.preload = "none";
    audioRef.current = audio;

    const silenciada = leerSilenciada();

    if (!silenciada) {
      // Puede fallar: los navegadores bloquean el audio hasta que se interactua
      audio.play().then(() => setSonando(true)).catch(() => setSonando(false));
    }

    const temporizador = setInterval(() => {
      if (!audio.paused) siguiente();
    }, SEGUNDOS * 1000);
    audio.addEventListener("ended", siguiente);

    return () => {
      clearInterval(temporizador);
      audio.removeEventListener("ended", siguiente);
      audio.pause();
    };
  }, [tracks, siguiente]);

  const alternar = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (sonando) {
      audio.pause();
      setSonando(false);
      guardarSilenciada(true);
    } else {
      audio.play().then(() => setSonando(true)).catch(() => setSonando(false));
      guardarSilenciada(false);
    }
  };

  if (tracks.length === 0) return null;

  return (
    <button
      type="button"
      onClick={alternar}
      aria-pressed={sonando}
      aria-label={sonando ? labels.on : labels.off}
      title={sonando ? labels.on : labels.off}
      className={`relative transition-colors ${
        sonando ? "text-amber-500" : "text-neutral-400 hover:text-amber-500"
      }`}
    >
      <Radio className="h-5 w-5" />
      {!sonando && (
        <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-current" />
      )}
    </button>
  );
}
