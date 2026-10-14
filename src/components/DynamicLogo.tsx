import Image from "next/image";

export default function DynamicLogo({ className = "" }: { className?: string }) {
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
        <span className="font-black text-xl leading-none tracking-tight text-white">
          Z <span className="text-amber-500">ESTUDIO</span>
        </span>
        <span className="text-[10px] font-medium tracking-widest text-neutral-400 leading-none mt-1">
          BCN
        </span>
      </div>
    </div>
  );
}
