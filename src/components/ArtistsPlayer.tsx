"use client";

import { Users, Play } from "lucide-react";

const artists = [
  { name: "MÄLMO 040", role: "Co-producción", spotifyUrl: "https://open.spotify.com/artist/4Xp5Yw0G1Jv1Z2J1Z2J1Z2" }, // Reemplaza con URLs reales
  { name: "Artista 2", role: "Grabación", spotifyUrl: "https://open.spotify.com" },
  { name: "Banda 3", role: "Mezcla", spotifyUrl: "https://open.spotify.com" },
  { name: "Artista 4", role: "Mastering", spotifyUrl: "https://open.spotify.com" },
  { name: "Banda 5", role: "Producción", spotifyUrl: "https://open.spotify.com" },
  { name: "Artista 6", role: "Grabación", spotifyUrl: "https://open.spotify.com" },
  { name: "Banda 7", role: "Mezcla", spotifyUrl: "https://open.spotify.com" },
  { name: "Artista 8", role: "Mastering", spotifyUrl: "https://open.spotify.com" },
];

export default function ArtistsPlayer() {
  return (
    <section id="artistas" className="py-24 bg-neutral-900 border-t border-neutral-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Artistas</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Músicos y bandas que han grabado, producido o colaborado en Z Estudio BCN.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...artists, ...artists].map((artist, index) => (
              <a 
                key={index} 
                href={artist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 md:w-56 mx-4 flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#0a0a0a] border border-neutral-800 mb-6 flex items-center justify-center overflow-hidden group-hover:border-amber-500 transition-all duration-300 shadow-lg">
                  <Users className="h-12 w-12 md:h-16 md:w-16 text-neutral-600 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Play className="h-10 w-10 md:h-14 md:w-14 text-amber-500 fill-current transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-amber-500 transition-colors text-center">{artist.name}</h3>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">{artist.role}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
