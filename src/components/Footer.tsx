import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import DynamicLogo from "./DynamicLogo";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#inicio" className="inline-block mb-6">
              <DynamicLogo />
            </a>
            <p className="text-neutral-400 text-sm mb-6">
              Estudio de grabación, producción musical y escuela de combos en Barcelona dirigido por David García.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/zestudiobcn" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hola@zestudiobcn.com" className="text-neutral-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#estudio" className="text-neutral-400 hover:text-amber-500 text-sm">Estudio de grabación</a></li>
              <li><a href="#produccion" className="text-neutral-400 hover:text-amber-500 text-sm">Producción y Mezcla</a></li>
              <li><a href="#escuela-combos" className="text-neutral-400 hover:text-amber-500 text-sm">Escuela de Combos</a></li>
              <li><a href="#clases" className="text-neutral-400 hover:text-amber-500 text-sm">Clases con David</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Estudio</h3>
            <ul className="space-y-2">
              <li><a href="#trabajos" className="text-neutral-400 hover:text-amber-500 text-sm">Nuestros Trabajos</a></li>
              <li><a href="#artistas" className="text-neutral-400 hover:text-amber-500 text-sm">Artistas</a></li>
              <li><a href="#sobre-nosotros" className="text-neutral-400 hover:text-amber-500 text-sm">Sobre nosotros</a></li>
              <li><a href="#contacto" className="text-neutral-400 hover:text-amber-500 text-sm">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-neutral-400 text-sm">
                <MapPin className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span>Barcelona, España<br/>(Visitas concertadas)</span>
              </li>
              <li className="flex items-center text-neutral-400 text-sm">
                <Phone className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center text-neutral-400 text-sm">
                <Mail className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span>hola@zestudiobcn.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Z Estudio BCN. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-white text-sm">Aviso Legal</a>
            <a href="#" className="text-neutral-500 hover:text-white text-sm">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
