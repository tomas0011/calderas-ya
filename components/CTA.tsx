/**
 * CTA Final - Llamada a la acción antes del footer
 * Bloque destacado para convertir visitantes en contactos
 */

import WhatsAppButton from './WhatsAppButton';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tu caldera dejó de funcionar?
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg text-primary-100 mb-8 max-w-xl mx-auto">
            No esperes a que el problema empeore. Te atendemos ahora mismo.
          </p>

          {/* Botón CTA */}
          <WhatsAppButton size="lg" variant="secondary">
            Coordinar visita
          </WhatsAppButton>

          {/* Microcopy: qué pasa al hacer click */}
          <p className="text-primary-200 text-sm mt-6">
            Te respondemos rápido • Sin compromiso • Presupuesto claro desde el inicio
          </p>
        </div>
      </div>
    </section>
  );
}