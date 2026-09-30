import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import DynamicLogo from "./DynamicLogo";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#inicio" className="inline-block mb-6">
              <DynamicLogo />
            </a>
            <div className="flex space-x-4">
              <a href="https://instagram.com/zestudiobcn" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:davidggmusic@gmail.com" className="text-neutral-400 hover:text-amber-500 transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{dict.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-neutral-400 text-sm">
                <MapPin className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span>08024 Barcelona</span>
              </li>
              <li className="flex items-center text-neutral-400 text-sm">
                <Phone className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span>+34 687 281 762</span>
              </li>
              <li className="flex items-center text-neutral-400 text-sm">
                <Mail className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span>davidggmusic@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Z Estudio BCN. {dict.rights}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-white text-sm">{dict.legal}</a>
            <a href="#" className="text-neutral-500 hover:text-white text-sm">{dict.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
