"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider({ slides }: { slides: any[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 w-full">
        {slides.map((slide, index) => (
          <div
            key={`content-${slide.id}`}
            className={`transition-all duration-700 transform ${
              index === current 
                ? "opacity-100 translate-y-0 relative" 
                : "opacity-0 translate-y-8 absolute inset-x-0 top-0 pointer-events-none"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              {slide.titlePrefix}
              <span className="text-amber-500">{slide.titleHighlight}</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto font-light mb-6">
              {slide.subtitle}
            </p>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-10">
              {slide.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={slide.cta1.href} 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
              >
                {slide.cta1.text}
              </a>
              <a 
                href={slide.cta2.href} 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
              >
                {slide.cta2.text}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-amber-500 text-white transition-colors border border-white/10 backdrop-blur-sm"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-amber-500 text-white transition-colors border border-white/10 backdrop-blur-sm"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-amber-500" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
