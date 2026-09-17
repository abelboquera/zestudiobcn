"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DynamicLogo from "./DynamicLogo";
import Link from "next/link";
import { Locale } from "@/i18n";

export default function Navbar({ dict, lang }: { dict: any, lang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: dict.estudio, href: "#estudio" },
    { name: dict.produccion, href: "#produccion" },
    { name: dict.combos, href: "#escuela-combos" },
    { name: dict.clases, href: "#clases" },
    { name: dict.trabajos, href: "#trabajos" },
    { name: dict.artistas, href: "#artistas" },
    { name: dict.nosotros, href: "#sobre-nosotros" },
    { name: dict.contacto, href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <DynamicLogo />
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Language Switcher */}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-neutral-800">
                <Link href="/es" className={`text-sm font-medium hover:text-amber-500 transition-colors ${lang === 'es' ? 'text-amber-500' : 'text-neutral-500'}`}>ES</Link>
                <Link href="/en" className={`text-sm font-medium hover:text-amber-500 transition-colors ${lang === 'en' ? 'text-amber-500' : 'text-neutral-500'}`}>EN</Link>
                <Link href="/ca" className={`text-sm font-medium hover:text-amber-500 transition-colors ${lang === 'ca' ? 'text-amber-500' : 'text-neutral-500'}`}>CA</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 px-3 py-4 mt-2 border-t border-neutral-800">
              <Link href="/es" className={`text-base font-medium ${lang === 'es' ? 'text-amber-500' : 'text-neutral-500'}`}>ES</Link>
              <Link href="/en" className={`text-base font-medium ${lang === 'en' ? 'text-amber-500' : 'text-neutral-500'}`}>EN</Link>
              <Link href="/ca" className={`text-base font-medium ${lang === 'ca' ? 'text-amber-500' : 'text-neutral-500'}`}>CA</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
