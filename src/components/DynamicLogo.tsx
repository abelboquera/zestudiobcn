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

  let logoSrc = "/logos/home.png";
  let sectionName = "ESTUDIO";

  switch (activeSection) {
    case "estudio":
      logoSrc = "/logos/estudio.png";
      sectionName = "RECORDING";
      break;
    case "produccion":
      logoSrc = "/logos/produccion.png";
      sectionName = "PRODUCTION";
      break;
    case "escuela-combos":
      logoSrc = "/logos/combos.png";
      sectionName = "COMBOS";
      break;
    case "clases":
      logoSrc = "/logos/clases.png";
      sectionName = "GUITARS";
      break;
    case "trabajos":
    case "sobre-nosotros":
    case "contacto":
    case "inicio":
    default:
      logoSrc = "/logos/home.png";
      sectionName = "ESTUDIO";
      break;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-neutral-800 shadow-lg flex-shrink-0">
        <Image 
          src={logoSrc} 
          alt={`Z ${sectionName} Logo`} 
          fill 
          className="object-cover"
          sizes="48px"
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
