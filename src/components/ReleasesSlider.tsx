import type { Release } from "@/data/releases";

const EMBED_HEIGHT: Record<Release["type"], number> = {
  playlist: 480,
  album: 380,
  track: 152,
};

export default function ReleasesSlider({ releases }: { releases: Release[] }) {
  // Sin releases no se muestra nada
  if (releases.length === 0) return null;

  return (
    <div id="releases" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      {releases.map((release) => (
        <div
          key={`${release.type}-${release.id}`}
          className="flex flex-col bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8"
        >
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
            src={`https://open.spotify.com/embed/${release.type}/${release.id}?theme=0`}
            width="100%"
            height={EMBED_HEIGHT[release.type]}
            style={{ border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mt-auto rounded-xl"
            title={release.artist ? `${release.title} - ${release.artist}` : release.title}
          />
        </div>
      ))}
    </div>
  );
}
