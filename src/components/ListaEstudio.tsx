"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Pause, Play } from "lucide-react";
import type { Trabajo } from "@/data/trabajos";
import { pausarRadio } from "./RadioPlayer";

type Ui = { play: string; pause: string; cover: string; onSpotify: string };

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function anyo(fecha: string) {
  const [a, m] = fecha.split("-");
  return m ? `${MESES[Number(m) - 1]} ${a}` : a;
}

export default function ListaEstudio({
  trabajos,
  titulo,
  playlistUrl,
  ui,
}: {
  trabajos: Trabajo[];
  titulo: string;
  playlistUrl: string;
  ui: Ui;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    const onEnded = () => setPlayingId(null);
    audio.addEventListener("ended", onEnded);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async (t: Trabajo) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playingId === t.spotifyId) {
      audio.pause();
      setPlayingId(null);
      return;
    }
    pausarRadio();
    audio.pause();
    audio.src = t.preview;
    setPlayingId(t.spotifyId);
    try {
      await audio.play();
    } catch {
      setPlayingId(null);
    }
  };

  // De lanzamiento mas reciente a mas antiguo
  const lista = [...trabajos].sort((a, b) => b.released.localeCompare(a.released));

  return (
    <div id="lista" className="scroll-mt-28 max-w-3xl mx-auto">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h3 className="text-2xl font-bold text-white">{titulo}</h3>
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-neutral-400 transition-colors hover:text-amber-500"
        >
          Spotify
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <ul className="max-h-[480px] overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-900/50 divide-y divide-neutral-800">
        {lista.map((t) => {
          const isPlaying = playingId === t.spotifyId;
          const artists = t.artists.join(", ");
          return (
            <li key={t.spotifyId} className="flex items-center gap-4 p-3 sm:p-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-neutral-800">
                <Image
                  src={t.cover}
                  alt={`${ui.cover} ${t.title} - ${artists}`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-white">{t.title}</p>
                <p className="truncate text-sm text-amber-500">{artists}</p>
              </div>

              <span className="hidden shrink-0 text-xs text-neutral-500 sm:block">{anyo(t.released)}</span>

              <a
                href={`https://open.spotify.com/track/${t.spotifyId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ui.onSpotify}: ${t.title}`}
                className="hidden shrink-0 text-neutral-500 transition-colors hover:text-amber-500 sm:block"
              >
                <ExternalLink className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => toggle(t)}
                aria-label={`${isPlaying ? ui.pause : ui.play} ${t.title}`}
                aria-pressed={isPlaying}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-neutral-950 transition-transform hover:scale-110 hover:bg-amber-400"
              >
                {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="ml-0.5 h-4 w-4 fill-current" />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
