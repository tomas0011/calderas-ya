/**
 * Nuestros Trabajos - Carrusel de una card a la vez
 * Muestra los servicios más solicitados
 */

"use client";

import { useState, useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";

const trabajos = [
  {
    id: 1,
    titulo: "Reparación de Calderas",
    descripcion: "Ofrecemos un servicio de reparación de calderas que asegura la eficiencia y seguridad del sistema. Diagnosticamos fallas de encendido, fugas y ruidos, utilizando repuestos originales.",
    icono: "🔧",
  },
  {
    id: 2,
    titulo: "Mantenimiento de Piso Radiante",
    descripcion: "Detectamos fugas, problemas en bomba o termostatos, asegurando distribución uniforme del calor y eficiencia energética.",
    icono: "🔥",
  },
  {
    id: 3,
    titulo: "Reparación de Climatizadores de Piscina",
    descripcion: "Solucionamos fallas eléctricas, compresores y refrigerante para mantener la temperatura ideal todo el año.",
    icono: "🏊",
  },
];

export default function NuestrosTrabajos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play cada 4 segundos
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trabajos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="trabajos" className="py-20 bg-neutral-50">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Trabajos</h2>
          <p className="section-subtitle">
            Servicios especializados que realizamos
          </p>
        </div>

        {/* Carrusel - UNA card a la vez */}
        <div 
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card visible con transición */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {trabajos.map((trabajo, index) => (
              <div
                key={trabajo.id}
                className={`text-center transition-opacity duration-500 ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                {/* Icono */}
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{trabajo.icono}</span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {trabajo.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-neutral-600 leading-relaxed">
                  {trabajo.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Dots indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {trabajos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-500 w-8"
                    : "bg-neutral-300 hover:bg-neutral-400 w-2"
                }`}
                aria-label={`Ver trabajo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-neutral-500 mb-4">¿Necesitás ayuda con tu equipo?</p>
          <WhatsAppButton size="sm">Consultar por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}