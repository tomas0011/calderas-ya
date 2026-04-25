/**
 * Sección Cómo Trabajamos - Proceso diferencia
 * Muestra el flujo de trabajo para generar confianza
 * SIN visita sin cargo - proceso real y transparente
 */

import WhatsAppButton from './WhatsAppButton';

const pasos = [
  {
    numero: '01',
    titulo: 'Te contactás',
    descripcion: 'Nos escribís por WhatsApp o llamás. Un asesor evalúa tu caso y te pregunta algunos detalles sobre el problema.',
    icono: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.132-.127.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371.025-.495-.024-.124-.747-.748-.747-1.423 0-1.65.85-2.467 1.165-2.92.148-.214.395-.246.535-.246h.196c2.254 0 4.085.933 4.967 2.584.296.553.296 1.456.296 1.456v2.336c0 .296-.074.495-.445.495-.296 0-.744-.198-1.73-.743-1.01-.553-1.656-1.232-1.656-2.271 0-1.938 1.493-3.478 2.595-3.478.296 0 .596.074.768.223.173.148.297.297.371.446.074.149.025.372-.025.52-.05.148-.173.347-.446.52-.823.496-1.35 1.162-1.35 2.271 0 1.65 1.493 3.478 3.478 3.478.99 0 1.797-.297 2.268-.744.174-.174.222-.372.222-.495v-.075c0-.493-.198-.818-.496-1.022-.297-.198-.768-.248-1.165-.248h-.196c-.645 0-1.72.074-2.47.743z"/>
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'Evaluamos el caso',
    descripcion: 'Según la información que nos des, te informamos si es necesaria una visita y cuál es su costo estimado.',
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    numero: '03',
    titulo: 'Visita técnica',
    descripcion: 'El técnico va a tu domicilio, revisa la caldera y hace el diagnóstico. Puede haber repuestos que requieran aprobación.',
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17l1-5a2 2 0 012-2h8a2 2 0 012 2l1 5" />
      </svg>
    ),
  },
  {
    numero: '04',
    titulo: 'Presupuesto',
    descripcion: 'Te mostramos el presupuesto en el lugar. Si aceptás, arrancamos a trabajar con los repuestos acordados.',
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    numero: '05',
    titulo: 'Reparación',
    descripcion: 'Una vez aprobado, realizamos la reparación. Trabajamos con repuestos de calidad. Probamos que funcione antes de irnos.',
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export default function ComoTrabajamos() {
  return (
    <section id="proceso" className="py-20 bg-neutral-50">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            ¿Cómo trabajamos?
          </h2>
          <p className="section-subtitle">
            Un proceso simple, sin intermediarios y con transparencia total
          </p>
        </div>

        {/* Pasos en timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pasos.map((paso, index) => (
            <div key={paso.numero} className="relative">
              {/* Tarjeta */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                {/* Número decorativo */}
                <div className="text-6xl font-bold text-primary-100 absolute top-2 right-4">
                  {paso.numero}
                </div>

                {/* Icono */}
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 relative z-10">
                  <div className="text-primary-600">
                    {paso.icono}
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-neutral-900 mb-3 relative z-10">
                  {paso.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-neutral-600 text-sm leading-relaxed relative z-10">
                  {paso.descripcion}
                </p>
              </div>

              {/* Conector (excepto último) */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <svg className="w-6 h-6 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-neutral-200 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.132-.127.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371.025-.495-.024-.124-.747-.748-.747-1.423 0-1.65.85-2.467 1.165-2.92.148-.214.395-.246.535-.246h.196c2.254 0 4.085.933 4.967 2.584.296.553.296 1.456.296 1.456v2.336c0 .296-.074.495-.445.495-.296 0-.744-.198-1.73-.743-1.01-.553-1.656-1.232-1.656-2.271 0-1.938 1.493-3.478 2.595-3.478.296 0 .596.074.768.223.173.148.297.297.371.446.074.149.025.372-.025.52-.05.148-.173.347-.446.52-.823.496-1.35 1.162-1.35 2.271 0 1.65 1.493 3.478 3.478 3.478.99 0 1.797-.297 2.268-.744.174-.174.222-.372.222-.495v-.075c0-.493-.198-.818-.496-1.022-.297-.198-.768-.248-1.165-.248h-.196c-.645 0-1.72.074-2.47.743z"/>
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-neutral-900 font-medium">
                ¿Te urge una reparación?
              </p>
              <p className="text-neutral-600 text-sm">
                Escribinos ahora por WhatsApp y te respondemos en breve.
              </p>
            </div>
            <WhatsAppButton size="md" className="flex-shrink-0">
              Iniciar consulta
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}