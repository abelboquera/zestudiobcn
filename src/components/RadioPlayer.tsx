"use client";

import { useEffect, useSyncExternalStore } from "react";
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
    // algunos navegadores bloquean el almacenamiento; no es grave
  }
}

/**
 * Un unico reproductor para toda la web: el icono aparece dos veces
 * (escritorio y movil) y los dos mandan sobre el mismo audio.
 */
const radio = {
  audio: null as HTMLAudioElement | null,
  orden: [] as RadioTrack[],
  indice: 0,
  sonando: false,
  oyentes: new Set<() => void>(),

  avisar() {
    this.oyentes.forEach((f) => f());
  },

  iniciar(tracks: RadioTrack[]) {
    if (this.audio || tracks.length === 0) return;

    const orden = [...tracks];
    for (let i = orden.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [orden[i], orden[j]] = [orden[j], orden[i]];
    }
    this.orden = orden;

    const audio = new Audio(orden[0].preview);
    audio.volume = VOLUMEN;
    this.audio = audio;
    audio.addEventListener("ended", () => this.siguiente());

    setInterval(() => {
      if (this.audio && !this.audio.paused) this.siguiente();
    }, SEGUNDOS * 1000);

    if (!leerSilenciada()) this.arrancar();
  },

  /**
   * Los navegadores no dejan que suene audio hasta que el visitante
   * interactua. Arrancamos en silencio (eso si lo permiten) y quitamos el
   * silencio en cuanto toca, pulsa o hace scroll.
   */
  arrancar() {
    const audio = this.audio;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        this.sonando = !audio.muted;
        this.avisar();
      })
      .catch(() => {
        audio.muted = true;
        audio.play().catch(() => undefined);
      });

    const quitarSilencio = () => {
      if (leerSilenciada()) return;
      audio.muted = false;
      if (audio.paused) {
        audio.play().catch(() => undefined);
      }
      this.sonando = true;
      this.avisar();
      eventos.forEach((e) => window.removeEventListener(e, quitarSilencio));
    };

    const eventos = ["pointerdown", "keydown", "touchstart", "scroll", "wheel"] as const;
    eventos.forEach((e) =>
      window.addEventListener(e, quitarSilencio, { once: false, passive: true })
    );
  },

  siguiente() {
    if (!this.audio || this.orden.length === 0) return;
    this.indice = (this.indice + 1) % this.orden.length;
    this.audio.src = this.orden[this.indice].preview;
    this.reproducir();
  },

  reproducir() {
    this.audio
      ?.play()
      .then(() => {
        this.sonando = true;
        this.avisar();
      })
      .catch(() => {
        // el navegador puede exigir que el visitante pulse antes de sonar
        this.sonando = false;
        this.avisar();
      });
  },

  alternar() {
    if (!this.audio) return;
    if (this.sonando) {
      this.audio.pause();
      this.sonando = false;
      guardarSilenciada(true);
      this.avisar();
    } else {
      guardarSilenciada(false);
      this.audio.muted = false;
      this.reproducir();
    }
  },

  suscribir(f: () => void) {
    this.oyentes.add(f);
    return () => {
      this.oyentes.delete(f);
    };
  },
};

export default function RadioPlayer({
  tracks,
  labels,
}: {
  tracks: RadioTrack[];
  labels: { on: string; off: string };
}) {
  const sonando = useSyncExternalStore(
    (f) => radio.suscribir(f),
    () => radio.sonando,
    () => false
  );

  useEffect(() => {
    radio.iniciar(tracks);
  }, [tracks]);

  if (tracks.length === 0) return null;

  return (
    <button
      type="button"
      onClick={() => radio.alternar()}
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
