/**
 * Sección de Costos de Visita
 * Muestra información clara sobre cómo se cotiza la visita técnica
 */

import WhatsAppButton from './WhatsAppButton';

const factores = [
  {
    titulo: 'Ubicación geográfica',
    descripcion: 'La distancia desde nuestra base influye en el costo de desplazamiento.',
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titulo: 'Disponibilidad',
    descripcion: 'Necesidad urgente o fuera de horario puede modificar el costo.',
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: 'Tipo de equipo',
    descripcion: 'La complejidad del equipo y marca pueden influir en el diagnóstico.',
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const proceso = [
  {
    numero: '1',
    titulo: 'Te contactás',
    descripcion: 'Nos escribís por WhatsApp o llamás por teléfono. Un asesor evalúa tu caso.',
  },
  {
    numero: '2',
    titulo: 'Evaluamos el caso',
    descripcion: ' según la info que nos des, te decimos si es necesaria una visita y su costo.',
  },
  {
    numero: '3',
    titulo: 'Visita técnica',
    descripcion: 'Si acordás, el técnico va a tu domicilio, revisa la caldera y hace el diagnóstico.',
  },
  {
    numero: '4',
    titulo: 'Presupuesto',
    descripcion: 'Te mostramos el presupuesto en el lugar. Si aceptás, arranco a trabajar.',
  },
  {
    numero: '5',
    titulo: 'Reparación',
    descripcion: 'Una vez aprobado, realizamos la reparación con repuestos de calidad.',
  },
];

export default function CostosVisita() {
  return (
    <section id="costos" className="py-20 bg-white">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            ¿Cuánto cuesta la visita?
          </h2>
          <p className="section-subtitle">
            Te explicamos de qué depende el costo — sin letras chicas
          </p>
        </div>

        {/* Factores que influyen */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-neutral-900 mb-6 text-center">
            Factores que pueden influir en el costo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {factores.map((factor) => (
              <div 
                key={factor.titulo}
                className="bg-neutral-50 rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                  <div className="text-primary-600">
                    {factor.icono}
                  </div>
                </div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  {factor.titulo}
                </h4>
                <p className="text-neutral-600 text-sm">
                  {factor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso */}
        <div>
          <h3 className="text-lg font-bold text-neutral-900 mb-6 text-center">
            Así funciona nuestro proceso
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {proceso.map((step, index) => (
              <div key={step.numero} className="relative">
                <div className="bg-white rounded-xl p-5 border border-neutral-200 h-full">
                  {/* Número */}
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">
                    {step.numero}
                  </div>
                  
                  <h4 className="font-bold text-neutral-900 mb-2 text-sm">
                    {step.titulo}
                  </h4>
                  <p className="text-neutral-600 text-xs">
                    {step.descripcion}
                  </p>
                </div>
                
                {/* Conector */}
                {index < proceso.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-neutral-50 rounded-xl p-5 max-w-2xl mx-auto">
          <p className="text-sm text-neutral-600 text-center">
            <span className="font-medium">Importante:</span> Los costos de visita pueden variar según factores externos como distancia, disponibilidad y costos operativos (por ejemplo, combustible).
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-neutral-600 mb-4">
            ¿Querés saber más? Consultanos sin compromiso
          </p>
          <WhatsAppButton size="md">
            Consultar disponibilidad
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}