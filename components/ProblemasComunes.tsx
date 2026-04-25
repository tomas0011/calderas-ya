/**
 * Problemas Comunes - SEO + Intención de búsqueda
 * Keywords que la gente busca cuando tiene urgencia
 */

import WhatsAppButton from './WhatsAppButton';

const problemas = [
  {
    titulo: 'La caldera no enciende',
    descripcion: 'No da señal de vida, no hace clic ni inicia la combustión.',
    keywords: 'caldera no enciende, no prende caldera',
  },
  {
    titulo: 'Sin agua caliente',
    descripcion: 'El agua sale fría o no sale del termo.',
    keywords: 'agua caliente no sale, caldera no calienta agua',
  },
  {
    titulo: 'La caldera se apaga sola',
    keywords: 'caldera se apaga, corte de暖气',
  },
  {
    titulo: 'Fuga de agua o gas',
    keywords: 'fuga agua caldera, olor a gas',
  },
  {
    titulo: 'Error en pantalla',
    keywords: 'error E1 E2 E3, код ошибки',
  },
  {
    titulo: 'Ruido extraño',
    keywords: 'ruido caldera, pitido, zumbido',
  },
];

export default function ProblemasComunes() {
  return (
    <section id="problemas" className="py-16 bg-neutral-50">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            ¿Tu caldera tiene algún problema?
          </h2>
          <p className="section-subtitle">
            Estos son los problemas más comunes que solucionamos a diario
          </p>
        </div>

        {/* Grid de problemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problemas.map((problema) => (
            <div
              key={problema.titulo}
              className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">
                    {problema.titulo}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {problema.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA de urgencia */}
        <div className="mt-10 text-center">
          <p className="text-neutral-600 mb-4">
            ¿Tu problema no está en la lista? Lo revisamos igual.
          </p>
          <WhatsAppButton variant="secondary" size="md">
            Describer mi problema
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}