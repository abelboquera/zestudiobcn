import Link from "next/link";
import { Users, Music, Calendar, Star } from "lucide-react";

export const metadata = {
  title: "Escuela de Combos | Z Estudio BCN",
  description: "Aprende a tocar en grupo en Barcelona. Combos musicales por niveles, ensayo guiado y conciertos en directo.",
};

export default function EscuelaCombos() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-amber-500/20">
            <Star className="h-4 w-4 fill-current" />
            <span>Matrícula abierta</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Escuela de Combos</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            La música cobra sentido cuando la compartes. Únete a una banda de tu nivel, prepara un repertorio y súbete al escenario.
          </p>
          <Link 
            href="/contacto" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-colors"
          >
            Quiero apuntarme
          </Link>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">¿Cómo funciona?</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Nuestra metodología está pensada para que aprendas la dinámica real de una banda, desde el primer ensayo hasta el concierto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center">
              <div className="bg-neutral-950 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-neutral-800">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Formamos tu banda</h3>
              <p className="text-neutral-400">
                Te asignamos a un grupo con músicos de tu mismo nivel e inquietudes musicales. Guitarra, bajo, batería, teclado y voz.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center">
              <div className="bg-neutral-950 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-neutral-800">
                <Music className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Ensayo guiado</h3>
              <p className="text-neutral-400">
                Ensayos semanales de 1.5h dirigidos por David García. Trabajamos repertorio, escucha activa, tempo y arreglos.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center">
              <div className="bg-neutral-950 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-neutral-800">
                <Calendar className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Concierto en directo</h3>
              <p className="text-neutral-400">
                El objetivo final: tocar en directo. Organizamos conciertos periódicos en salas de Barcelona para mostrar el trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Niveles disponibles</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-white">Nivel Inicial</h3>
                <p className="text-neutral-400 mt-1">Para quienes llevan poco tiempo tocando y quieren su primera experiencia en grupo.</p>
              </div>
              <div className="bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800 whitespace-nowrap">
                <span className="text-amber-500 font-medium">Repertorio Pop/Rock</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-white">Nivel Medio</h3>
                <p className="text-neutral-400 mt-1">Dominas los acordes básicos y ritmos. Empezamos a trabajar dinámicas y solos.</p>
              </div>
              <div className="bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800 whitespace-nowrap">
                <span className="text-amber-500 font-medium">Rock / Funk / Blues</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-white">Nivel Avanzado</h3>
                <p className="text-neutral-400 mt-1">Para músicos con experiencia. Armonía compleja, improvisación y arreglos propios.</p>
              </div>
              <div className="bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800 whitespace-nowrap">
                <span className="text-amber-500 font-medium">Jazz / Neo-Soul / Fusión</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
