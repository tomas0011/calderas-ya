/**
 * FAQ - Preguntas que nos hacen todo el tiempo
 * Respuestas cortas y claras
 */

'use client';

import { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const faqs = [
  {
    pregunta: '¿Pueden venir hoy?',
    respuesta: 'Si es urgente, intentamos en el día. Escribinos por WhatsApp y vemos cómo coordinarlo.',
  },
  {
    pregunta: '¿Atienden en mi zona?',
    respuesta: 'Estamos en Zona Oeste (La Matanza, Morón, Ituzaingó, Merlo, Hurlingham). También CABA según la zona. Consultanos.',
  },
  {
    pregunta: '¿Qué marcas reparan?',
    respuesta: 'Baxi, Peisa, Ariston, Orbis, Euterma, VAILLANT, Junkers y otras. Si tenés otra, consultanos.',
  },
  {
    pregunta: '¿Cuánto cobra el diagnóstico?',
    respuesta: 'El diagnóstico tiene costo, pero te lo detallamos antes de arrancar. Si aprobás el presupuesto, se descuenta del total.',
  },
  {
    pregunta: '¿Necesito mover la caldera?',
    respuesta: 'No. Vamos a tu casa y revisamos todo ahí. No tenés que acercar nada.',
  },
  {
    pregunta: '¿Cómo coordinarte?',
    respuesta: 'Escribinos por WhatsApp o llamanos. Nos decís qué le pasa a la caldera y acordamos el turno.',
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
            Lo que nos preguntan siempre
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              {/* Pregunta */}
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

              {/* Respuesta */}
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

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-neutral-500 mb-4">
            ¿Tenés otra pregunta?
          </p>
          <WhatsAppButton size="sm">
            Escribir por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}