"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Pause, Play } from "lucide-react";
import type { Trabajo } from "@/data/trabajos";

export default function TrabajosGrid({ trabajos }: { trabajos: Trabajo[] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    const onTime = () => setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    const onEnded = () => {
      setPlayingId(null);
      setProgress(0);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async (trabajo: Trabajo) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingId === trabajo.spotifyId) {
      audio.pause();
      setPlayingId(null);
      return;
    }

    audio.pause();
    audio.src = trabajo.preview;
    setProgress(0);
    setPlayingId(trabajo.spotifyId);
    try {
      await audio.play();
    } catch {
      setPlayingId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      {trabajos.map((trabajo) => {
        const isPlaying = playingId === trabajo.spotifyId;
        const artists = trabajo.artists.join(", ");
        return (
          <article key={trabajo.spotifyId} className="group">
            <div
              className={`relative aspect-square overflow-hidden rounded-xl border transition-colors ${
                isPlaying ? "border-amber-500" : "border-neutral-800 group-hover:border-amber-500/50"
              }`}
            >
              <Image
                src={trabajo.cover}
                alt={`Portada de ${trabajo.title} - ${artists}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover transition-transform duration-700 ${isPlaying ? "scale-105" : "group-hover:scale-105"}`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity ${
                  isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <button
                type="button"
                onClick={() => toggle(trabajo)}
                aria-label={isPlaying ? `Pausar ${trabajo.title}` : `Escuchar ${trabajo.title}`}
                aria-pressed={isPlaying}
                className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-neutral-950 shadow-lg transition-transform hover:scale-110 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {isPlaying ? <Pause className="h-6 w-6 fill-current" /> : <Play className="ml-0.5 h-6 w-6 fill-current" />}
              </button>

              {isPlaying && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
                  <div className="h-full bg-amber-500" style={{ width: `${progress * 100}%` }} />
                </div>
              )}
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-tight text-white">{trabajo.title}</h3>
                <p className="mt-1 text-amber-500">{artists}</p>
              </div>
              <a
                href={`https://open.spotify.com/track/${trabajo.spotifyId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs font-medium text-neutral-400 transition-colors hover:text-amber-500"
                aria-label={`Escuchar ${trabajo.title} completa en Spotify`}
              >
                Spotify
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
