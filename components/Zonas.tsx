/**
 * Sección de zonas de cobertura geográfica
 * Muestra las áreas donde ofrecen servicio
 * Ahora integrado con BuscadorCiudad
 */

import { MapPinIcon } from './Icons';
import { config } from '@/lib/config';

const zonasDetalladas = [
  {
    nombre: 'CABA',
    barrios: 'Todos los barrios',
    color: 'bg-primary-500',
  },
  {
    nombre: 'Zona Norte',
    barrios: 'San Isidro, Vicente López, Tigre, San Martín, Pilar',
    color: 'bg-blue-500',
  },
  {
    nombre: 'Zona Oeste',
    barrios: 'La Matanza, Morón, Ituzaingó, Merlo, Hurlingham',
    color: 'bg-green-500',
  },
  {
    nombre: 'Zona Sur',
    barrios: 'Lomas de Zamora, Avellaneda, Quilmes, Lanús, Alte. Brown',
    color: 'bg-orange-500',
  },
];

export default function Zonas() {
  return (
    <section id="zonas" className="py-20 bg-white">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Zonas de Cobertura
          </h2>
          <p className="section-subtitle">
            Atendemos en toda Capital Federal y Gran Buenos Aires
          </p>
        </div>

        {/* Grid de zonas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zonasDetalladas.map((zona) => (
            <div
              key={zona.nombre}
              className="relative overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200 hover:border-primary-300 transition-colors duration-300 group"
            >
              {/* Barra de color superior */}
              <div className={`h-2 ${zona.color} group-hover:h-3 transition-all duration-300`} />
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${zona.color} rounded-lg flex items-center justify-center`}>
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {zona.nombre}
                  </h3>
                </div>
                
                <p className="text-neutral-600 text-sm">
                  {zona.barrios}
                </p>
              </div>
            </div>
          ))}
        </div>

{/* Nota adicional */}
          <p className="text-center text-neutral-500 text-sm mt-8">
            ¿Tu zona no está en la lista? <a href={config.whatsappUrl} className="text-primary-600 hover:underline font-medium">Consultanos</a> — llegamos a más localidades.
          </p>
      </div>
    </section>
  );
}