/**
 * CTA final - Llamada directa
 */

import WhatsAppButton from './WhatsAppButton';

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tu caldera no funciona?
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg text-primary-100 mb-8 max-w-xl mx-auto">
            Escribinos y te ayudamos. Vemos cómo coordinarlo.
          </p>

          {/* Botón */}
          <WhatsAppButton size="lg" variant="secondary">
            Escribir por WhatsApp
          </WhatsAppButton>

          {/* Microcopy */}
          <p className="text-primary-200 text-sm mt-6">
            Respondemos rápido • Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}