import Link from "next/link";
import { ArrowRight, Mic, Sliders, Users, Guitar, PlayCircle, Music } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-neutral-900">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a] z-10" />
          {/* This would be an actual image in production */}
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Z ESTUDIO <span className="text-amber-500">BCN</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto font-light mb-10">
            Estudio de grabación, producción musical y escuela de combos en Barcelona.
          </p>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-10">
            Grabación, mezcla, mastering, producción, clases de guitarra y combos para músicos que quieren desarrollar su sonido tocando de verdad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Quiero grabar
            </Link>
            <Link 
              href="/escuela-combos" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors"
            >
              Apuntarme a un combo
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios de estudio */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios de Estudio</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Equipamiento profesional y acústica cuidada para llevar tus canciones al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Grabación */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-amber-500/50 transition-colors group">
              <Mic className="h-12 w-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Grabación</h3>
              <p className="text-neutral-400 mb-6">
                Captura la esencia de tu música en un entorno cómodo y profesional. Voces, guitarras, baterías y bandas completas.
              </p>
              <Link href="/estudio" className="text-amber-500 hover:text-amber-400 inline-flex items-center text-sm font-medium">
                Ver estudio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Producción */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-amber-500/50 transition-colors group">
              <PlayCircle className="h-12 w-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Producción Musical</h3>
              <p className="text-neutral-400 mb-6">
                Acompañamiento artístico desde la idea inicial hasta el master final. Arreglos, instrumentación y dirección.
              </p>
              <Link href="/produccion" className="text-amber-500 hover:text-amber-400 inline-flex items-center text-sm font-medium">
                Saber más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Mezcla y Mastering */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-amber-500/50 transition-colors group">
              <Sliders className="h-12 w-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Mezcla y Mastering</h3>
              <p className="text-neutral-400 mb-6">
                El toque final para que tu música suene potente, clara y lista para todas las plataformas digitales.
              </p>
              <Link href="/produccion" className="text-amber-500 hover:text-amber-400 inline-flex items-center text-sm font-medium">
                Escuchar ejemplos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Escuela de Combos */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                <span>Aprende tocando</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Escuela de Combos Barcelona</h2>
              <p className="text-lg text-neutral-300 mb-6">
                La música se aprende de verdad cuando la compartes. Únete a nuestras clases grupales para músicos y experimenta la dinámica real de una banda.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50 mt-0.5">
                    <span className="text-amber-500 text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-neutral-300">Combos organizados por niveles y estilos</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50 mt-0.5">
                    <span className="text-amber-500 text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-neutral-300">Repertorio y ensayo guiado semanalmente</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50 mt-0.5">
                    <span className="text-amber-500 text-xs">✓</span>
                  </div>
                  <span className="ml-3 text-neutral-300">Conciertos y muestras en directo</span>
                </li>
              </ul>
              <Link 
                href="/escuela-combos" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
              >
                Ver horarios y niveles
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524650359799-842906ca1ce1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Clases con David García */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse lg:flex-row">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-neutral-800">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511331214401-1ee345a8a1c5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">David García</h3>
                  <p className="text-amber-500">Productor, Guitarrista y Profesor</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Clases Individuales</h2>
              <p className="text-lg text-neutral-300 mb-6">
                Formación personalizada adaptada a tus objetivos musicales, ya sea que quieras dominar tu instrumento o aprender a producir tus propios temas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                  <Guitar className="h-8 w-8 text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-2">Guitarra</h4>
                  <p className="text-sm text-neutral-400">Técnica, repertorio e improvisación en diversos estilos.</p>
                </div>
                <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                  <Music className="h-8 w-8 text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-2">Armonía y Arreglos</h4>
                  <p className="text-sm text-neutral-400">Comprende la música moderna y aprende a arreglar canciones.</p>
                </div>
                <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800 sm:col-span-2">
                  <Sliders className="h-8 w-8 text-amber-500 mb-3" />
                  <h4 className="text-white font-bold mb-2">Producción Musical</h4>
                  <p className="text-sm text-neutral-400">Aprende a usar el estudio como un instrumento más. Grabación, mezcla y uso de DAWs.</p>
                </div>
              </div>
              <Link 
                href="/clases" 
                className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium"
              >
                Información sobre clases con David <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-6">
            ¿Listo para darle forma a tu proyecto musical?
          </h2>
          <p className="text-xl text-neutral-900/80 mb-10">
            Escríbenos por WhatsApp o email y cuéntanos qué necesitas. Te asesoramos sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/34600000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-white bg-neutral-950 hover:bg-neutral-800 transition-colors shadow-lg"
            >
              Contactar por WhatsApp
            </a>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-neutral-950 bg-transparent border-2 border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors"
            >
              Ver más formas de contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
