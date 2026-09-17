import { 
  Mic, Sliders, Guitar, Play,
  Speaker, Headphones, Disc,
  Mail, MapPin, MessageCircle, Instagram, Music
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ArtistsPlayer from "@/components/ArtistsPlayer";
import ContactForm from "@/components/ContactForm";
import ReleasesSlider from "@/components/ReleasesSlider";
import { releases } from "@/data/releases";
import { gear, type GearCategory } from "@/data/gear";
import { Locale, dictionaries } from "@/i18n";

const gearIcons: Record<GearCategory["icon"], typeof Mic> = {
  guitar: Guitar,
  keys: Music,
  amp: Speaker,
  mic: Mic,
  monitor: Headphones,
  preamp: Sliders,
};

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
            <h2 className="text-4xl font-bold text-white">Equipamiento</h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {gear.map((category) => {
              const Icon = gearIcons[category.icon];
              return (
                <div key={category.title} className="break-inside-avoid mb-6 bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                  <div className="flex items-center gap-3 pb-3 mb-1 border-b border-amber-500/60">
                    <Icon className="h-5 w-5 text-amber-500 shrink-0" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">{category.title}</h3>
                  </div>
                  <ul>
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-baseline gap-2 py-2 border-b border-neutral-800 last:border-b-0 text-sm">
                        <span>
                          <span className="font-medium text-neutral-100">{item.name}</span>
                          {item.detail && <span className="ml-2 text-xs text-neutral-500">{item.detail}</span>}
                        </span>
                        {item.tag && (
                          <span className="ml-auto shrink-0 font-mono text-[11px] text-amber-500 border border-amber-500/30 bg-amber-500/10 rounded px-1.5 py-0.5">
                            {item.tag}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
              <p className="text-xl text-amber-500 mb-6">Productor, Compositor y CEO de Z Estudio BCN</p>
              <div className="space-y-4 text-neutral-300 mb-8">
                <p>Con más de 15 años de experiencia, ha producido a artistas como Noan, Maren, Hey Kid, Paula Koops y Lauren Nine, ha compuesto música para Vèrtex (TV3), West Side Story (El musical), spots de League of Legends, Cupra y Aperol. En grabación, mezcla y mastering ha trabajado con artistas de la talla de Iván Cornejo, Love of Lesbian, MÄLMO 040, Carla Morrison o Tommy Emmanuel, entre otros.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Sliders className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Productor</p>
                </div>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Music className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Compositor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Joan Isern */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse lg:flex-row">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-bold text-white mb-2">Joan Isern</h3>
              <p className="text-xl text-amber-500 mb-6">Productor y Compositor</p>
              <div className="space-y-4 text-neutral-300 mb-8">
                <p>Joan aporta una mirada fresca con experiencia directa en la escena pop e indie actual, con producciones para artistas como Depol, Hey Kid, Maren, Noan, Paul Alone, Paula Koops, Claudia Infante y Pla Moguda, además de su propia banda, MÄLMO 040.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Music className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Compositor</p>
                </div>
                <div className="bg-[#0a0a0a] border border-neutral-800 p-4 rounded-xl text-center">
                  <Sliders className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">Productor</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden border border-neutral-800">
              <div className="absolute inset-0 bg-[url('/images/joan-isern.jpg')] bg-cover bg-top" />
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
