/**
 * Modelos de Calderas - Formato discreto en línea
 * Pills/chips compactos en carrusel horizontal
 */

"use client";

import { useState } from "react";

const modelos = [
  { nombre: "MAIN 24FI/I", tag: "Más instalado" },
  { nombre: "ECO 3/240/280", tag: "Más instalado" },
  { nombre: "LUNA 3 COMFORT HT", tag: null },
  { nombre: "ECO", tag: "Recomendado" },
  { nombre: "ECO 4", tag: "Recomendado" },
  { nombre: "ECO 5 COMPACT", tag: null },
  { nombre: "FOURTECH", tag: null },
  { nombre: "MAINFOUR", tag: null },
  { nombre: "MAIN DIGIT", tag: null },
  { nombre: "ECO NOVA", tag: "Recomendado" },
  { nombre: "LUNA 3 CONFORT", tag: null },
  { nombre: "DUO-TEC COMPACT", tag: null },
];

// Mostrar solo los primeros 6, resto hidden
const VISIBLES_INICIALES = 6;

function ModeloPill({ nombre, tag }: { nombre: string; tag: string | null }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 hover:border-primary-300 hover:text-primary-600 transition-colors cursor-pointer">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
      <span className="font-medium">{nombre}</span>
      {tag && (
        <span className="text-xs text-neutral-400 ml-1">({tag})</span>
      )}
    </span>
  );
}

export default function ModelosCalderas() {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const modelosVisibles = mostrarTodos ? modelos : modelos.slice(0, VISIBLES_INICIALES);
  const restantes = modelos.length - VISIBLES_INICIALES;

  return (
    <section id="modelos" className="py-16">
      <div className="container-main">
        {/* Encabezado compact */}
        <div className="text-center mb-8">
          <h2 className="section-title">Modelos que reparamos</h2>
          <p className="section-subtitle">
            Baxi y Caldaia
          </p>
        </div>

        {/* Pills en línea - formato discreto */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {modelosVisibles.map((modelo) => (
            <ModeloPill
              key={modelo.nombre}
              nombre={modelo.nombre}
              tag={modelo.tag}
            />
          ))}
        </div>

        {/* Ver más / Ver menos */}
        {restantes > 0 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setMostrarTodos(!mostrarTodos)}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm underline"
            >
              {mostrarTodos ? 'Ver menos' : `Ver ${restantes} modelos más`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}