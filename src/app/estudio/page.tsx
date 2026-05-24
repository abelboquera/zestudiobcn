import Link from "next/link";
import { Mic, Speaker, Headphones, Settings } from "lucide-react";

export const metadata = {
  title: "El Estudio | Z Estudio BCN",
  description: "Descubre nuestras instalaciones. Equipamiento analógico y digital de primer nivel para grabar tu música en Barcelona.",
};

export default function Estudio() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="py-20 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">El Estudio</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Un espacio diseñado para la creatividad. Acústica cuidada, ambiente relajado y el mejor equipo analógico y digital.
          </p>
        </div>
      </section>

      {/* Galería / Espacios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden h-80 relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Control Room</h3>
                <p className="text-neutral-300">El corazón del estudio</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-80 relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2058&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Live Room</h3>
                <p className="text-neutral-300">Acústica viva y controlada</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
              <Mic className="h-10 w-10 text-amber-500 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Microfonía</h4>
              <p className="text-sm text-neutral-400">Colección de micrófonos de condensador, cinta y dinámicos para cualquier fuente.</p>
            </div>
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
              <Settings className="h-10 w-10 text-amber-500 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Outboard</h4>
              <p className="text-sm text-neutral-400">Previos, compresores y EQs analógicos para darle color y calidez a tu sonido.</p>
            </div>
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
              <Speaker className="h-10 w-10 text-amber-500 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Monitoreo</h4>
              <p className="text-sm text-neutral-400">Escucha precisa y detallada para tomar las mejores decisiones en la mezcla.</p>
            </div>
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
              <Headphones className="h-10 w-10 text-amber-500 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Backline</h4>
              <p className="text-sm text-neutral-400">Guitarras, bajos, amplificadores y sintetizadores a tu disposición.</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Quieres grabar con nosotros?</h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Cuéntanos qué necesitas y prepararemos un presupuesto a medida para tu proyecto.
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
