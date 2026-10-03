import type { Video } from "@/data/videos";

export default function VideosGrid({
  videos,
  title,
  anchor,
}: {
  videos: Video[];
  title: string;
  anchor: string;
}) {
  if (videos.length === 0) return null;

  return (
    <div id={anchor} className="scroll-mt-28">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videos.map((video) => (
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
    </div>
  );
}
