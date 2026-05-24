import Link from "next/link";
import { Guitar, Music, Sliders } from "lucide-react";

export const metadata = {
  title: "Clases con David García | Z Estudio BCN",
  description: "Clases particulares de guitarra, armonía moderna y producción musical en Barcelona con David García.",
};

export default function Clases() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-20 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Clases Individuales</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Aprende a tu ritmo con clases personalizadas de guitarra, armonía y producción musical.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Guitarra */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-neutral-950 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-neutral-800">
                <Guitar className="h-16 w-16 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-white">Guitarra</h2>
                <p className="text-amber-500 mt-2">Eléctrica y Acústica</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-neutral-300 mb-6">
                  Clases adaptadas a tus gustos musicales y objetivos. Desde los primeros acordes hasta técnicas avanzadas de improvisación.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Técnica (púa, fingerpicking, legato)
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Repertorio (Rock, Blues, Funk, Pop)
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Improvisación y escalas
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Lectura y ritmo
                  </div>
                </div>
              </div>
            </div>

            {/* Armonía */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-neutral-950 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-neutral-800">
                <Music className="h-16 w-16 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-white">Armonía</h2>
                <p className="text-amber-500 mt-2">Moderna y Arreglos</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-neutral-300 mb-6">
                  Entiende cómo funciona la música que escuchas. Aprende a componer, rearmonizar y crear arreglos para tus propias canciones.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Formación de acordes y tensiones
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Funciones tonales e intercambios
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Análisis de canciones
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Composición de melodías
                  </div>
                </div>
              </div>
            </div>

            {/* Producción */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-neutral-950 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-neutral-800">
                <Sliders className="h-16 w-16 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-white">Producción</h2>
                <p className="text-amber-500 mt-2">Grabación y Mezcla</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-neutral-300 mb-6">
                  Aprende a usar tu ordenador como un estudio de grabación. Clases prácticas donde trabajaremos sobre tus propios proyectos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Manejo de DAWs (Logic, Ableton, Pro Tools)
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Técnicas de grabación y microfonía
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Uso de EQs, compresores y efectos
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Criterios de mezcla
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Consultar horarios y precios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
