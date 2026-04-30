/**
 * Header - Barra superior con logo, navegación y teléfono
 * Visible en toda la página
 */

"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/lib/config';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#zonas', label: 'Zonas' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#nosotros', label: 'Nosotros' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Nombre */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.png" 
                alt="Norte Clima"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-xl font-bold text-white">
              Norte Clima
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Teléfono + Menu mobile */}
          <div className="flex items-center gap-4">
            {/* Desktop: Teléfono */}
            <a
              href={config.phoneUrl}
              className="hidden md:flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">{config.phoneFormatted}</span>
            </a>

            {/* Mobile: Botón menu */}
            <button
              className="md:hidden p-2 text-neutral-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile desplegable */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-300 hover:text-white py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-neutral-800 my-2" />
              <a
                href={config.phoneUrl}
                className="flex items-center gap-2 text-neutral-300 py-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">{config.phoneFormatted}</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}