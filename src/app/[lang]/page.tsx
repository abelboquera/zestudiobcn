import { 
  Mic, Sliders, Users, Guitar, Play, 
  Settings, Speaker, Headphones, Disc, Calendar, Star, 
  Mail, MapPin, MessageCircle, Instagram, Music
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ArtistsPlayer from "@/components/ArtistsPlayer";
import ContactForm from "@/components/ContactForm";
import ReleasesSlider from "@/components/ReleasesSlider";
import { releases } from "@/data/releases";
import { Locale, dictionaries } from "@/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (lang === "en" || lang === "ca") ? lang : "es";
  const dict = dictionaries[validLang as Locale];

  const trabajos = [
    { id: 1, title: "EP Debut", artist: "Banda Local", role: dict.artistas.roles.mix, genre: "Indie Rock" },
    { id: 2, title: "Single de Verano", artist: "Artista Pop", role: dict.artistas.roles.prod, genre: "Pop" },
    { id: 3, title: "Álbum Acústico", artist: "Cantautor", role: dict.artistas.roles.rec, genre: "Folk" },
    { id: 4, title: "Tema Instrumental", artist: "Guitarrista", role: dict.artistas.roles.master, genre: "Jazz Fusion" },
    { id: 5, title: "Demo", artist: "Banda Emergente", role: dict.artistas.roles.rec, genre: "Punk Rock" },
    { id: 6, title: "Banda Sonora", artist: "Cortometraje", role: dict.artistas.roles.prod, genre: "Cinematic" },
  ];

  const artistsData = [
    { name: "MÄLMO 040", role: dict.artistas.roles.coprod, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Artista 2", role: dict.artistas.roles.rec, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { name: "Banda 3", role: dict.artistas.roles.mix, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { name: "Artista 4", role: dict.artistas.roles.master, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { name: "Banda 5", role: dict.artistas.roles.prod, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { name: "Artista 6", role: dict.artistas.roles.rec, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
    { name: "Banda 7", role: dict.artistas.roles.mix, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { name: "Artista 8", role: dict.artistas.roles.master, audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider slides={dict.hero.slides} />

      {/* ESTUDIO SECTION */}
      <section id="estudio" className="py-24 bg-[#0a0a0a] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">El Estudio</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Un espacio diseñado para la creatividad. Acústica cuidada, ambiente relajado y el mejor equipo analógico y digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden h-80 relative group">
              <div className="absolute inset-0 bg-[url('/images/control-room.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Control Room</h3>
                <p className="text-neutral-300">El corazón del estudio</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-80 relative group">
              <div className="absolute inset-0 bg-[url('/images/live-room.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Live Room</h3>
                <p className="text-neutral-300">Acústica viva y controlada</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
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

          {/* Galería de detalles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden h-48 relative">
              <div className="absolute inset-0 bg-[url('/images/amps.png')] bg-cover bg-center hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden h-48 relative">
              <div className="absolute inset-0 bg-[url('/images/sign.png')] bg-cover bg-center hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden h-48 relative">
              <div className="absolute inset-0 bg-[url('/images/hallway.png')] bg-cover bg-center hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCCION SECTION */}
      <section id="produccion" className="py-24 bg-neutral-900 border-t border-neutral-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Producción Musical</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Desde la primera nota hasta el master final. Te ayudamos a encontrar tu sonido y a llevar tus canciones al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl">
              <Disc className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Producción</h3>
              <p className="text-neutral-400 mb-6">
                Trabajamos juntos en la estructura, arreglos e instrumentación de tus canciones. Te asesoramos en la dirección artística.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Pre-producción y maquetas</li>
                <li>• Arreglos musicales</li>
                <li>• Grabación de instrumentos</li>
                <li>• Programación de baterías y beats</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl">
              <Sliders className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Mezcla</h3>
              <p className="text-neutral-400 mb-6">
                Equilibramos todos los elementos de tu canción para que suene potente, clara y con profundidad usando equipo híbrido.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Edición y afinación</li>
                <li>• EQ y compresión analógica/digital</li>
                <li>• Efectos espaciales</li>
                <li>• Automatización detallada</li>
              </ul>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl">
              <Headphones className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Mastering</h3>
              <p className="text-neutral-400 mb-6">
                El último paso antes de publicar. Optimizamos el volumen y el tono general para que tu música suene perfecta.
              </p>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• EQ correctiva y tonal</li>
                <li>• Compresión multibanda</li>
                <li>• Limitación y maximización</li>
                <li>• Formatos para streaming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ESCUELA DE COMBOS SECTION */}
      <section id="escuela-combos" className="py-24 bg-[#0a0a0a] relative overflow-hidden scroll-mt-20">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 bg-[url('/images/drums.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-amber-500/20">
              <Star className="h-4 w-4 fill-current" />
              <span>Matrícula abierta</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Escuela de Combos</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              La música cobra sentido cuando la compartes. Únete a una banda de tu nivel, prepara un repertorio y súbete al escenario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center">
              <div className="bg-neutral-950 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-neutral-800">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Formamos tu banda</h3>
              <p className="text-neutral-400">Te asignamos a un grupo con músicos de tu mismo nivel e inquietudes musicales.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center">
              <div className="bg-neutral-950 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-neutral-800">
                <Music className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Ensayo guiado</h3>
              <p className="text-neutral-400">Ensayos semanales de 1.5h dirigidos por David García. Trabajamos repertorio y dinámica.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center">
              <div className="bg-neutral-950 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-neutral-800">
                <Calendar className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Concierto en directo</h3>
              <p className="text-neutral-400">El objetivo final: tocar en directo. Organizamos conciertos periódicos en salas de Barcelona.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLASES SECTION */}
      <section id="clases" className="py-24 bg-neutral-900 border-t border-neutral-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Clases Individuales</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Aprende a tu ritmo con clases personalizadas de guitarra, armonía y producción musical.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-neutral-950 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-neutral-800">
                <Guitar className="h-16 w-16 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white">Guitarra</h3>
                <p className="text-amber-500 mt-2">Eléctrica y Acústica</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-neutral-300 mb-6">Clases adaptadas a tus gustos musicales y objetivos. Desde los primeros acordes hasta técnicas avanzadas de improvisación.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
                  <div className="flex items-start"><span className="text-amber-500 mr-2">•</span>Técnica y repertorio</div>
                  <div className="flex items-start"><span className="text-amber-500 mr-2">•</span>Improvisación y escalas</div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-neutral-950 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-neutral-800">
                <Music className="h-16 w-16 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white">Armonía</h3>
                <p className="text-amber-500 mt-2">Moderna y Arreglos</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-neutral-300 mb-6">Entiende cómo funciona la música que escuchas. Aprende a componer, rearmonizar y crear arreglos para tus propias canciones.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
                  <div className="flex items-start"><span className="text-amber-500 mr-2">•</span>Formación de acordes</div>
                  <div className="flex items-start"><span className="text-amber-500 mr-2">•</span>Composición de melodías</div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-neutral-950 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-neutral-800">
                <Sliders className="h-16 w-16 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white">Producción</h3>
                <p className="text-amber-500 mt-2">Grabación y Mezcla</p>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-neutral-300 mb-6">Aprende a usar tu ordenador como un estudio de grabación. Clases prácticas donde trabajaremos sobre tus propios proyectos.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-400">
                  <div className="flex items-start"><span className="text-amber-500 mr-2">•</span>Manejo de DAWs</div>
                  <div className="flex items-start"><span className="text-amber-500 mr-2">•</span>Criterios de mezcla</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRABAJOS SECTION */}
      <section id="trabajos" className="py-24 bg-[#0a0a0a] border-t border-neutral-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Nuestros Trabajos</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Una selección de los últimos proyectos que han pasado por el estudio.
            </p>
          </div>

          <div className="mb-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <Music className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Playlist del Estudio</h3>
            <p className="text-neutral-400 mb-6">Escucha nuestra playlist en Spotify con todos los lanzamientos producidos en Z Estudio BCN.</p>
            <div className="aspect-video bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-center">
              <p className="text-neutral-500">[ Aquí iría el embed de Spotify ]</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabajos.map((trabajo) => (
              <div key={trabajo.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group hover:border-amber-500/50 transition-colors">
                <div className="aspect-square bg-neutral-950 relative flex items-center justify-center">
                  <Music className="h-16 w-16 text-neutral-800" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-amber-500 text-neutral-950 rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <Play className="h-6 w-6 fill-current" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-amber-500 font-medium mb-2">{trabajo.genre}</div>
                  <h4 className="text-lg font-bold text-white">{trabajo.title}</h4>
                  <p className="text-neutral-400 text-sm mb-4">{trabajo.artist}</p>
                  <div className="inline-block bg-neutral-950 border border-neutral-800 rounded px-3 py-1 text-xs text-neutral-300">
                    {trabajo.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELEASES SECTION (no aparece en el menu de navegacion) */}
      <ReleasesSlider releases={releases} />

      {/* ARTISTAS SECTION */}
      <ArtistsPlayer dict={dict.artistas} artists={artistsData} />

      {/* SOBRE NOSOTROS SECTION */}
      <section id="sobre-nosotros" className="py-24 bg-[#0a0a0a] border-t border-neutral-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Sobre Nosotros</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              El equipo creativo y técnico detrás de Z Estudio BCN.
            </p>
          </div>

          {/* David García */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-neutral-800">
              <div className="absolute inset-0 bg-[url('/images/david-garcia.jpg')] bg-cover bg-center" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">David García</h3>
              <p className="text-xl text-amber-500 mb-6">Director, Productor y Profesor</p>
              <div className="space-y-4 text-neutral-300 mb-8">
                <p>Con más de 15 años de experiencia, David es el motor de Z Estudio BCN. Su visión integral le permite abordar proyectos como músico, técnico y productor.</p>
                <p>Su filosofía se basa en capturar la esencia de cada artista, utilizando la tecnología como herramienta al servicio de la canción.</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Guitar className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Guitarrista</p>
                </div>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Sliders className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Productor</p>
                </div>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Mic className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Profesor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Joan Isern */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse lg:flex-row">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-bold text-white mb-2">Joan Isern</h3>
              <p className="text-xl text-amber-500 mb-6">Co-productor y Colaborador (MÄLMO 040)</p>
              <div className="space-y-4 text-neutral-300 mb-8">
                <p>Joan aporta su visión fresca y experiencia directa en la escena pop e indie actual gracias a su trabajo en MÄLMO 040.</p>
                <p>Se involucra en los proyectos aportando ideas de arreglos, estructuras y sonidos que conectan con el público de hoy. La sinergia entre la experiencia técnica de David y la intuición creativa de Joan crea el entorno perfecto.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Music className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Compositor</p>
                </div>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Headphones className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Co-productor</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden border border-neutral-800">
              <div className="absolute inset-0 bg-[url('/images/keys.png')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="py-24 bg-neutral-900 border-t border-neutral-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Contacto</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Escríbenos y le daremos forma.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <a href="https://wa.me/34687281762" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500 transition-colors group">
                <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-neutral-400">WhatsApp</p>
                  <p className="text-lg font-medium text-white">+34 687 281 762</p>
                </div>
              </a>
              <a href="mailto:davidggmusic@gmail.com" className="flex items-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500 transition-colors group">
                <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="h-6 w-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="text-lg font-medium text-white">davidggmusic@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-neutral-400">Ubicación</p>
                  <p className="text-lg font-medium text-white">Barcelona, España</p>
                  <p className="text-sm text-neutral-500">Visitas solo con cita previa</p>
                </div>
              </div>
              <a href="https://instagram.com/zestudiobcn" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500 transition-colors group">
                <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Instagram className="h-6 w-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-neutral-400">Instagram</p>
                  <p className="text-lg font-medium text-white">@zestudiobcn</p>
                </div>
              </a>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>
              <ContactForm dict={dict.contacto} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
