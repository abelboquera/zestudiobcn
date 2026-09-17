"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Release } from "@/data/releases";

const ROTATION_MS = 9000;

export default function ReleasesSlider({ releases }: { releases: Release[] }) {
  const [current, setCurrent] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!autoRotate || hovered || releases.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === releases.length - 1 ? 0 : prev + 1));
    }, ROTATION_MS);
    return () => clearInterval(timer);
  }, [autoRotate, hovered, releases.length]);

  // Sin releases no se muestra el reproductor
  if (releases.length === 0) return null;

  // Cualquier interaccion manual detiene la rotacion automatica
  const goTo = (index: number) => {
    setAutoRotate(false);
    setCurrent(index);
  };
  const next = () => goTo(current === releases.length - 1 ? 0 : current + 1);
  const prev = () => goTo(current === 0 ? releases.length - 1 : current - 1);

  const release = releases[current];
  const embedHeight =
    release.type === "playlist" ? 480 : release.type === "album" ? 380 : 152;

  return (
    <div id="releases" className="scroll-mt-28">
      <div
        className="max-w-3xl mx-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">{release.title}</h3>
              {release.artist && <p className="text-amber-500">{release.artist}</p>}
            </div>
            {release.role && (
              <span className="flex-shrink-0 bg-neutral-950 border border-neutral-800 rounded px-3 py-1 text-xs text-neutral-300">
                {release.role}
              </span>
            )}
          </div>

          <iframe
            key={`${release.type}-${release.id}`}
            src={`https://open.spotify.com/embed/${release.type}/${release.id}?theme=0`}
            width="100%"
            height={embedHeight}
            style={{ border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
            title={release.artist ? `${release.title} - ${release.artist}` : release.title}
          />
        </div>

        {releases.length > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Release anterior"
              className="p-2 rounded-full bg-neutral-950 hover:bg-amber-500 hover:text-neutral-950 text-white transition-colors border border-neutral-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-3">
              {releases.map((item, index) => (
                <button
                  key={`${item.type}-${item.id}`}
                  onClick={() => goTo(index)}
                  aria-label={`Ir a ${item.title}`}
                  aria-current={index === current}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-amber-500" : "bg-neutral-700 hover:bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Release siguiente"
              className="p-2 rounded-full bg-neutral-950 hover:bg-amber-500 hover:text-neutral-950 text-white transition-colors border border-neutral-800"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
