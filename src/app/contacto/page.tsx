import { Mail, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

export const metadata = {
  title: "Contacto | Z Estudio BCN",
  description: "Contacta con Z Estudio BCN para grabar tu música, producir tus canciones o apuntarte a nuestras clases y combos en Barcelona.",
};

export default function Contacto() {
  return (
    <div className="py-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contacto</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Escríbenos y le daremos forma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Hablemos</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/34600000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-amber-500 transition-colors group"
                >
                  <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-amber-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-neutral-400">WhatsApp</p>
                    <p className="text-lg font-medium text-white">+34 600 000 000</p>
                  </div>
                </a>

                <a 
                  href="mailto:hola@zestudiobcn.com" 
                  className="flex items-center p-4 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-amber-500 transition-colors group"
                >
                  <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="h-6 w-6 text-amber-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-neutral-400">Email</p>
                    <p className="text-lg font-medium text-white">hola@zestudiobcn.com</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-neutral-950 border border-neutral-800 rounded-xl">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-neutral-400">Ubicación</p>
                    <p className="text-lg font-medium text-white">Barcelona, España</p>
                    <p className="text-sm text-neutral-500">Visitas solo con cita previa</p>
                  </div>
                </div>
                
                <a 
                  href="https://instagram.com/zestudiobcn" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-amber-500 transition-colors group"
                >
                  <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Instagram className="h-6 w-6 text-amber-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-neutral-400">Instagram</p>
                    <p className="text-lg font-medium text-white">@zestudiobcn</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-2">¿En qué estás interesado?</label>
                <select 
                  id="subject" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="estudio">Grabación en estudio</option>
                  <option value="produccion">Producción / Mezcla / Mastering</option>
                  <option value="combos">Escuela de Combos</option>
                  <option value="clases">Clases particulares</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o nivel musical..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
