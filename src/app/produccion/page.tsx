import Link from "next/link";
import { Sliders, Disc, Headphones } from "lucide-react";

export const metadata = {
  title: "Producción, Mezcla y Mastering | Z Estudio BCN",
  description: "Servicios de producción musical, mezcla y mastering en Barcelona. Llevamos tus canciones al estándar de la industria.",
};

export default function Produccion() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="py-20 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Producción Musical</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Desde la primera nota hasta el master final. Te ayudamos a encontrar tu sonido y a llevar tus canciones al siguiente nivel.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Disc className="h-12 w-12 text-amber-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Producción</h2>
              <p className="text-neutral-400 mb-6">
                Trabajamos juntos en la estructura, arreglos e instrumentación de tus canciones. Te asesoramos en la elección de sonidos y en la dirección artística del proyecto.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Pre-producción y maquetas</li>
                <li>• Arreglos musicales</li>
                <li>• Grabación de instrumentos (guitarras, bajos, sintes)</li>
                <li>• Programación de baterías y beats</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Sliders className="h-12 w-12 text-amber-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Mezcla</h2>
              <p className="text-neutral-400 mb-6">
                Equilibramos todos los elementos de tu canción para que suene potente, clara y con profundidad. Usamos una combinación de equipo analógico y digital.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Edición y afinación (voces, baterías)</li>
                <li>• EQ y compresión analógica/digital</li>
                <li>• Efectos espaciales (reverb, delay)</li>
                <li>• Automatización detallada</li>
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <Headphones className="h-12 w-12 text-amber-500 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">Mastering</h2>
              <p className="text-neutral-400 mb-6">
                El último paso antes de publicar. Optimizamos el volumen y el tono general para que tu música suene perfecta en cualquier dispositivo y plataforma.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• EQ correctiva y tonal</li>
                <li>• Compresión multibanda</li>
                <li>• Limitación y maximización</li>
                <li>• Formatos para streaming (Spotify, Apple Music)</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center bg-neutral-900 border border-neutral-800 p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">¿Tienes pistas grabadas en casa?</h3>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              También ofrecemos servicios de mezcla y mastering online. Envíanos tus pistas y nosotros nos encargamos del resto.
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Pedir presupuesto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
