"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Video } from "@/data/videos";

export default function VideosGrid({
  videos,
  title,
  anchor,
  limite,
  labels,
}: {
  videos: Video[];
  title: string;
  anchor: string;
  /** Cuantos se ven antes del boton "Ver mas" */
  limite?: number;
  labels?: { more: string; less: string };
}) {
  const [expanded, setExpanded] = useState(false);

  if (videos.length === 0) return null;

  const hayBoton = !!limite && !!labels && videos.length > limite;
  const visibles = hayBoton && !expanded ? videos.slice(0, limite) : videos;

  return (
    <div id={anchor} className="scroll-mt-28">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {visibles.map((video) => (
          <div key={video.youtubeId}>
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={`${video.brand} - ${video.title}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
                style={{ border: 0 }}
              />
            </div>
            <p className="mt-3 text-lg font-bold text-white">{video.brand}</p>
          </div>
        ))}
      </div>

      {hayBoton && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((val) => !val)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-amber-500 hover:text-amber-500"
          >
            {expanded ? labels!.less : labels!.more}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
