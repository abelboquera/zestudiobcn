"use client";

import { useState, useRef } from "react";
import { Users, Play, Pause } from "lucide-react";

export default function ArtistsPlayer({ dict, artists }: { dict: any, artists: any[] }) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async (index: number, src: string) => {
    if (playingIndex === index) {
      // Pause if clicking the currently playing artist
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      // Play new artist
      if (audioRef.current) {
        try {
          // Force load the audio before playing
          audioRef.current.src = src;
          audioRef.current.load();
          
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              setPlayingIndex(index);
            }).catch(error => {
              console.error("Error playing audio:", error);
              setPlayingIndex(null);
            });
          }
        } catch (error) {
          console.error("Error setting up audio:", error);
          setPlayingIndex(null);
        }
      }
    }
  };

  return (
    <section id="artistas" className="py-24 bg-neutral-900 border-t border-neutral-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">{dict.title}</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />
          
          <div className={`flex w-max animate-marquee hover:[animation-play-state:paused] ${playingIndex !== null ? '[animation-play-state:paused]' : ''}`}>
            {[...artists, ...artists].map((artist, index) => {
              const originalIndex = index % artists.length;
              const isPlaying = playingIndex === originalIndex;

              return (
                <div 
                  key={index} 
                  onClick={() => togglePlay(originalIndex, artist.audioSrc)}
                  className="w-40 md:w-56 mx-4 flex flex-col items-center group cursor-pointer"
                >
                  <div className={`relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#0a0a0a] border ${isPlaying ? 'border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.3)]' : 'border-neutral-800'} mb-6 flex items-center justify-center overflow-hidden group-hover:border-amber-500 transition-all duration-300 shadow-lg`}>
                    <Users className={`h-12 w-12 md:h-16 md:w-16 transition-transform duration-500 ${isPlaying ? 'text-amber-500 scale-110' : 'text-neutral-600 group-hover:scale-110'}`} />
                    <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      {isPlaying ? (
                        <Pause className="h-10 w-10 md:h-14 md:w-14 text-amber-500 fill-current transform scale-100 transition-transform duration-300" />
                      ) : (
                        <Play className="h-10 w-10 md:h-14 md:w-14 text-amber-500 fill-current transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                  <h3 className={`text-base md:text-lg font-bold transition-colors text-center ${isPlaying ? 'text-amber-500' : 'text-white group-hover:text-amber-500'}`}>
                    {artist.name}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 mt-1">{artist.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Hidden Audio Player */}
      <audio 
        ref={audioRef} 
        onEnded={() => setPlayingIndex(null)} 
        className="hidden"
      />
    </section>
  );
}
