/**
 * Sección de beneficios/ventajas competitivas
 * Resalta los diferenciadores del servicio
 */

import { CheckCircleIcon, MapPinIcon, ClockIcon, CurrencyIcon } from './Icons';

const beneficios = [
  {
    titulo: 'Atención rápida',
    descripcion: 'Respondemos tu consulta y llegamos a tu domicilio en el menor tiempo posible.',
    icon: ClockIcon,
  },
  {
    titulo: 'Servicio a domicilio',
    descripcion: 'No necesitas trasladar tu caldera. Nuestro técnico va a tu casa.',
    icon: MapPinIcon,
  },
  {
    titulo: 'Técnicos con experiencia',
    descripcion: 'Años de experiencia en reparación y mantenimiento de múltiples marcas.',
    icon: CheckCircleIcon,
  },
  {
    titulo: 'Presupuestos claros',
    descripcion: 'Antes de trabajar, te damos un presupuesto detallado sin compromiso.',
    icon: CurrencyIcon,
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 bg-neutral-100">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            ¿Por qué elegirnos?
          </h2>
          <p className="section-subtitle">
            La confianza de miles de clientes satisfechos en CABA y GBA
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={beneficio.titulo}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <beneficio.icon className="w-6 h-6 text-primary-600" />
              </div>
              
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {beneficio.titulo}
              </h3>
              
              <p className="text-neutral-600 text-sm leading-relaxed">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Cobertura destaque */}
        <div className="mt-12 bg-primary-500 rounded-xl p-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
            <div className="flex items-center gap-2 text-white">
              <MapPinIcon className="w-6 h-6" />
              <span className="font-semibold">Cobertura en CABA y GBA</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30" />
            <p className="text-primary-100 text-sm">
              Zona Norte • Zona Oeste • Zona Sur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}