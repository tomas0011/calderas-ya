/**
 * Header - Barra superior con logo y nombre
 * Visible en toda la página
 */

import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/lib/config';

export default function Header() {
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

          {/* Teléfono */}
          <a
            href={config.phoneUrl}
            className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm font-medium">{config.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </header>
  );
}