import Link from "next/link";
import { Guitar, Mic, Sliders, Music, Headphones } from "lucide-react";

export const metadata = {
  title: "Sobre Nosotros | Z Estudio BCN",
  description: "Conoce al equipo detrás de Z Estudio BCN: David García (productor y profesor) y Joan Isern (co-productor y colaborador).",
};

export default function SobreNosotros() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="py-20 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            El equipo creativo y técnico detrás de Z Estudio BCN.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* David García */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden border border-neutral-800">
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511331214401-1ee345a8a1c5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">David García</h2>
              <p className="text-xl text-amber-500 mb-8">Director, Productor y Profesor</p>
              
              <div className="space-y-6 text-neutral-300">
                <p>
                  Con más de 15 años de experiencia en el sector musical, David García es el motor detrás de Z Estudio BCN. Su visión integral de la música le permite abordar los proyectos desde múltiples perspectivas: como músico, como técnico y como productor.
                </p>
                <p>
                  Formado en guitarra moderna y armonía, ha tocado en numerosas formaciones de diversos estilos, lo que le ha dado un profundo entendimiento de la dinámica de banda y las necesidades reales de los músicos.
                </p>
                <p>
                  Como productor y técnico de grabación, su filosofía se basa en capturar la esencia y la emoción de cada artista, utilizando la tecnología como una herramienta al servicio de la canción, y no al revés.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl text-center">
                  <Guitar className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">Guitarrista</h3>
                  <p className="text-xs text-neutral-400">Sesión y Directo</p>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl text-center">
                  <Sliders className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">Productor</h3>
                  <p className="text-xs text-neutral-400">Estudio y Mezcla</p>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl text-center">
                  <Mic className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">Profesor</h3>
                  <p className="text-xs text-neutral-400">Clases y Combos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Joan Isern */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse lg:flex-row">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-white mb-2">Joan Isern</h2>
              <p className="text-xl text-amber-500 mb-8">Co-productor y Colaborador (MÄLMO 040)</p>
              
              <div className="space-y-6 text-neutral-300">
                <p>
                  Joan Isern, conocido por su trabajo en la exitosa banda <strong>MÄLMO 040</strong>, aporta al estudio su visión fresca y su experiencia directa en la escena pop e indie actual.
                </p>
                <p>
                  Como co-productor y colaborador habitual de Z Estudio BCN, Joan se involucra en los proyectos aportando ideas de arreglos, estructuras y sonidos que conectan con el público de hoy. Su sensibilidad musical y su trayectoria girando por todo el país le otorgan un criterio invaluable a la hora de dar forma a nuevas canciones.
                </p>
                <p>
                  La sinergia entre la experiencia técnica de David y la intuición creativa de Joan crea el entorno perfecto para llevar cualquier producción al siguiente nivel.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl text-center">
                  <Music className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">Compositor</h3>
                  <p className="text-xs text-neutral-400">Arreglos y Estructuras</p>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl text-center">
                  <Headphones className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-1">Co-productor</h3>
                  <p className="text-xs text-neutral-400">Visión Artística</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden border border-neutral-800">
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=2078&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Contactar con el estudio
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
