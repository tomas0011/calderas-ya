/**
 * Beneficios reales - Diferenciadores concretos
 * Sin lenguaje corporativo
 */

import { MapPinIcon } from './Icons';

const beneficios = [
  {
    titulo: 'Vamos a tu casa',
    descripcion: 'No necesitás acercar la caldera a ningún lado. Vamos a tu domicilio.',
    icono: '🏠',
  },
  {
    titulo: 'Sin llamar a un call center',
    descripcion: 'Atiende nuestro asesor calificado directamente. Sin intermediarios.',
    icono: '📞',
  },
  {
    titulo: 'Presupuesto detallado',
    descripcion: 'Te mostramos el costo antes de empezar. Sin costos ocultos.',
    icono: '💰',
  },
  {
    titulo: 'Reparamos en el lugar',
    descripcion: 'En la mayoria de los casos, lo resolvemos en tu casa.',
    icono: '🔧',
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 bg-neutral-100">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Por qué llamarnos
          </h2>
          <p className="section-subtitle">
            Porque somos un servicio técnico especializado en la reparación de calderas, proporcionando garantía exclusiva por todos nuestros trabajos.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={beneficio.titulo}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-3">
                {beneficio.icono}
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

        {/* Cobertura */}
        <div className="mt-12 bg-primary-500 rounded-xl p-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
            <div className="flex items-center gap-2 text-white">
              <MapPinIcon className="w-6 h-6" />
              <span className="font-semibold">Atendemos en CABA y GBA</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30" />
            <p className="text-primary-100 text-sm">
              Zona Sur según zona
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}