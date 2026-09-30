"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DynamicLogo({ className = "" }: { className?: string }) {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Adjust these margins to trigger earlier/later
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // El logo es siempre la Z; solo cambia el nombre de la seccion
  const sectionName = activeSection === "estudio" ? "RECORDING" : "ESTUDIO";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-neutral-800 shadow-lg flex-shrink-0">
        <Image
          src="/logos/z-mark.png"
          alt="Z Estudio BCN"
          fill
          className="object-contain"
          sizes="96px"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-black text-xl leading-none tracking-tight text-white transition-all">
          Z <span className="text-amber-500">{sectionName}</span>
        </span>
        <span className="text-[10px] font-medium tracking-widest text-neutral-400 leading-none mt-1">
          BCN
        </span>
      </div>
    </div>
  );
}
