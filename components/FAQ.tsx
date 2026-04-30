/**
 * FAQ - Preguntas que nos hacen todo el tiempo
 * Respuestas cortas y claras
 */

"use client";

import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

const faqs = [
  {
    pregunta: "¿Pueden venir hoy?",
    respuesta:
      "Si es urgente, intentamos coordinar en el día. Escribinos por WhatsApp y vemos disponibilidad.",
  },
  {
    pregunta: "¿Atienden calderas en CABA / GBA?",
    respuesta:
      "Sí, trabajamos en todo Capital Federal y Gran Buenos Aires.",
  },
  {
    pregunta: "¿Qué marcas reparan?",
    respuesta:
      "Trabajamos principalmente con Baxi y Caldaia, pero también atendemos otras marcas. Consultanos.",
  },
  {
    pregunta: "¿Cada cuánto conviene hacer mantenimiento a una caldera?",
    respuesta:
      "El mantenimiento se recomienda una vez por año, idealmente antes de la temporada de calefacción.",
  },
  {
    pregunta: "¿Qué señales indican que mi caldera necesita reparación?",
    respuesta: (
      <span>
        <ul>
          <li><b>Error o luz roja intermitente</b></li>
          <li>Sin agua caliente pero con calefacción</li>
          <li>Sin calefacción pero con agua caliente</li>
          <li>La caldera no enciende</li>
        </ul>
      </span>
    ),
  },
  {
    pregunta: "¿Cobran diagnóstico o visita?",
    respuesta:
      "Realizamos diagnóstico con presupuesto. Si aceptás el trabajo, el diagnóstico no tiene costo. Si no, se cobra la visita según zona.",
  },
  {
    pregunta: "¿Cómo coordinan el servicio?",
    respuesta:
      "Podés escribirnos por WhatsApp o llamarnos. Nos contás el problema y coordinamos el turno.",
  },
  {
    pregunta: "¿Necesito trasladar la caldera?",
    respuesta:
      "No. Vamos a tu domicilio y en la mayoría de los casos resolvemos en el momento.",
  },
  {
    pregunta: "¿Aceptan transferencia?",
    respuesta:
      "Sí, aceptamos efectivo y transferencia bancaria inmediata.",
  },
  {
    pregunta: "¿Entregan comprobante del trabajo?",
    respuesta:
      "Sí, entregamos un recibo con garantía del trabajo realizado.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle">Lo que nos preguntan siempre</p>
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
                  className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Respuesta */}
              <div
                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-96" : "max-h-0"
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
          <p className="text-neutral-500 mb-4">¿Tenés otra pregunta?</p>
          <WhatsAppButton size="sm">Escribir por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
