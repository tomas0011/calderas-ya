/**
 * Footer - Pie de página con información de contacto
 * Incluye disclaimer legal
 */

import { PhoneIcon, MapPinIcon, ClockIcon } from './Icons';
import { config } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-neutral-900 text-neutral-300">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Contacto */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>

            <div className="space-y-3">
              <a
                href={config.phoneUrl}
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span>{config.phoneFormatted}</span>
              </a>

              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400 transition-colors"
              >
                <span className="w-5 h-5 flex-shrink-0">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Horario */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horario</h3>

            <div className="flex items-start gap-3">
              <ClockIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p>{config.schedule}</p>
                <p className="text-sm text-neutral-500 mt-1">
                  Feriados: consultar disponibilidad
                </p>
              </div>
            </div>
          </div>

          {/* Columna 3: Cobertura */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Zonas de Atención</h3>

            <div className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                {config.coverageZones.map((zona) => (
                  <p key={zona}>{zona}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer legal completo */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <p className="text-sm text-neutral-400 leading-relaxed">
              {config.disclaimer}
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              © {currentYear} {config.companyName}. Todos los derechos reservados.
            </p>

            <p className="text-xs text-neutral-600 text-center md:text-right">
              Este sitio web es informativo y no representa servicio oficial de ninguna marca.
            </p>

            <p className="text-xs text-neutral-600 text-center md:text-left">
              No somos servicio técnico oficial de Baxi ni Caldaia. Trabajamos de forma independiente, especializados en estas marcas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}