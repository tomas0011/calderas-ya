/**
 * Sección FAQ - Preguntas frecuentes
 * Resuelve objeciones comunes y mejora SEO
 */

'use client';

import { useState } from 'react';

const faqs = [
  {
    pregunta: '¿Atienden en el día si es urgente?',
    respuesta: 'Sí, intentamos llegar lo antes posible. Si tenés una urgencia (sin agua caliente o sin calefacción), escribinos por WhatsApp y vemos cómo coordinarlo. No podemos garantizar llegada en el mismo día para todas las zonas, pero hacemos nuestro mejor esfuerzo.',
  },
  {
    pregunta: '¿Qué zonas cubren?',
    respuesta: 'Trabajamos principalmente en Zona Oeste (La Matanza, Morón, Ituzaingó, Merlo, Hurlingham) y también en CABA según la zona. Si estás en otra zona, consultanos que vemos si llegamos.',
  },
  {
    pregunta: '¿Reparan todas las marcas?',
    respuesta: 'Trabajamos con las marcas más comunes del mercado: Baxi, Peisa, Ariston, Orbis, Euterma, VAILLANT, Junkers, y otras. Si tenés una marca diferente, consultanos.',
  },
  {
    pregunta: '¿Dan presupuesto sin compromiso?',
    respuesta: 'Sí, el diagnóstico tiene costo pero te lo detallamos antes de empezar cualquier reparación. El presupuesto que te damos es el que pagás — no hay costos ocultos.',
  },
  {
    pregunta: '¿Necesito llevar la caldera a algún lugar?',
    respuesta: 'No, vamos a tu domicilio. No necesitás trasladar la caldera a ningún lado. Si hay que cambiar algún repuesto que no llevamos, coordinamos para volver más tarde.',
  },
  {
    pregunta: '¿Cómo solicito un turno?',
    respuesta: 'La forma más fácil es por WhatsApp. Nos escribís, nos contás qué le pasa a tu caldera, y coordinamos el turno. También podés llamarnos si preferís.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Preguntas frecuentes
          </h2>
          <p className="section-subtitle">
            Resolvemos tus dudas antes de que contactes
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              {/* Pregunta (clickeable) */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors duration-200"
              >
                <span className="font-medium text-neutral-900 pr-4">
                  {faq.pregunta}
                </span>
                <svg
                  className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Respuesta (expandible) */}
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="p-5 text-neutral-600 leading-relaxed border-t border-neutral-200">
                  {faq.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <p className="text-center text-neutral-500 mt-10">
          ¿Tenés otra pregunta?{' '}
          <a href="#" className="text-primary-600 hover:underline font-medium">
            Escribinos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}