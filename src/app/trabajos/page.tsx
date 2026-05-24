import { Play, Music } from "lucide-react";

export const metadata = {
  title: "Trabajos | Z Estudio BCN",
  description: "Escucha algunos de los proyectos grabados, producidos y mezclados en Z Estudio BCN.",
};

export default function Trabajos() {
  // Placeholder data for portfolio items
  const trabajos = [
    { id: 1, title: "EP Debut", artist: "Banda Local", role: "Grabación y Mezcla", genre: "Indie Rock" },
    { id: 2, title: "Single de Verano", artist: "Artista Pop", role: "Producción Completa", genre: "Pop" },
    { id: 3, title: "Álbum Acústico", artist: "Cantautor", role: "Grabación, Mezcla y Mastering", genre: "Folk" },
    { id: 4, title: "Tema Instrumental", artist: "Guitarrista", role: "Mezcla y Mastering", genre: "Jazz Fusion" },
    { id: 5, title: "Demo", artist: "Banda Emergente", role: "Grabación en Directo", genre: "Punk Rock" },
    { id: 6, title: "Banda Sonora", artist: "Cortometraje", role: "Composición y Producción", genre: "Cinematic" },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-20 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Trabajos</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Una selección de los últimos proyectos que han pasado por el estudio.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Spotify Playlist Placeholder */}
          <div className="mb-20 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
            <Music className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Playlist del Estudio</h2>
            <p className="text-neutral-400 mb-6">
              Escucha nuestra playlist en Spotify con todos los lanzamientos producidos en Z Estudio BCN.
            </p>
            <div className="aspect-video max-w-3xl mx-auto bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-center">
              <p className="text-neutral-500">[ Aquí iría el embed de Spotify ]</p>
            </div>
          </div>

          {/* Portfolio Grid */}
          <h2 className="text-2xl font-bold text-white mb-8">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabajos.map((trabajo) => (
              <div key={trabajo.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group hover:border-amber-500/50 transition-colors">
                <div className="aspect-square bg-neutral-950 relative flex items-center justify-center">
                  {/* Placeholder for album art */}
                  <Music className="h-16 w-16 text-neutral-800" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-amber-500 text-neutral-950 rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <Play className="h-6 w-6 fill-current" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-amber-500 font-medium mb-2">{trabajo.genre}</div>
                  <h3 className="text-lg font-bold text-white">{trabajo.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{trabajo.artist}</p>
                  <div className="inline-block bg-neutral-950 border border-neutral-800 rounded px-3 py-1 text-xs text-neutral-300">
                    {trabajo.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
