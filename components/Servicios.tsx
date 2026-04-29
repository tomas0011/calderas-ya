/**
 * Sección de servicios ofrecidos
 * Muestra las 4 áreas principales de negocio
 */

import { ServiceIcon, WrenchIcon, ClipboardIcon, MagnifierIcon } from './Icons';
import { config } from '@/lib/config';

const servicios = [
  {
    id: 'reparacion',
    titulo: 'Reparación',
    descripcion: 'Fallas de presión, agua caliente o calefacción. Revisamos y arreglamos en tu domicilio.',
    Icon: WrenchIcon,
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento',
    descripcion: 'Revisión anual para que tu caldera funcione bien y no te deje sin calefacción en invierno.',
    Icon: ServiceIcon,
  },
  {
    id: 'instalacion',
    titulo: 'Instalación',
    descripcion: 'Colocamos calderas nuevas, reemplazamos equipos viejos y adaptamos la instalación.',
    Icon: ClipboardIcon,
  },
  {
    id: 'diagnostico',
    titulo: 'Diagnóstico',
    descripcion: 'Revisión completa con presupuesto detallado.',
    Icon: MagnifierIcon,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestros Servicios
          </h2>
          <p className="section-subtitle">
            Soluciones completas para tu sistema de calefacción
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="card group hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                <servicio.Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {servicio.titulo}
              </h3>

              <p className="text-neutral-600 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: servicio.descripcion }}
              />
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <p className="text-center text-neutral-500 text-sm mt-12">
          ¿No encontraste lo que buscas? <a href={config.phoneUrl} className="text-primary-600 hover:underline font-medium">Contáctanos</a> para consultas específicas.
        </p>
      </div>
    </section>
  );
}