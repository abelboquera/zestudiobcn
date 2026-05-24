"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function DynamicLogo({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  let logoSrc = "/logos/home.png";
  let sectionName = "ESTUDIO";

  if (pathname.startsWith("/estudio")) {
    logoSrc = "/logos/estudio.png";
    sectionName = "RECORDING";
  } else if (pathname.startsWith("/produccion")) {
    logoSrc = "/logos/produccion.png";
    sectionName = "PRODUCTION";
  } else if (pathname.startsWith("/escuela-combos")) {
    logoSrc = "/logos/combos.png";
    sectionName = "COMBOS";
  } else if (pathname.startsWith("/clases")) {
    logoSrc = "/logos/clases.png";
    sectionName = "GUITARS";
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
        <span className="font-black text-xl leading-none tracking-tight text-white">
          Z <span className="text-amber-500">{sectionName}</span>
        </span>
        <span className="text-[10px] font-medium tracking-widest text-neutral-400 leading-none mt-1">
          BCN
        </span>
      </div>
    </div>
  );
}
