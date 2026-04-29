/**
 * Zonas de Cobertura - Sin fricción + Buscador de costos
 * Muestra cobertura en texto + permite consultar costo de visita
 */

"use client";

import { useState, useMemo } from "react";
import WhatsAppButton from "./WhatsAppButton";
import costRulesData from "@/shared/cost-rules.json";

const zonas = [
  { nombre: "CABA", icono: "🏙️" },
  { nombre: "Zona Norte", icono: "🧭" },
  { nombre: "Zona Oeste", icono: "🌅" },
  { nombre: "Zona Sur", icono: "🌴" },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Zonas() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Ciudades disponibles del JSON
  const cities = Object.keys(costRulesData).sort();

  // Filtrar en tiempo real
  const filteredCities = useMemo(() => {
    if (!search.trim()) return cities.slice(0, 6);
    const query = search.toLowerCase();
    return cities
      .filter((city) => city.toLowerCase().includes(query))
      .slice(0, 6);
  }, [search]);

  const handleCitySelect = (city: string) => {
    setSearch(city);
    setSelectedCity(city);
  };

  const costo = selectedCity
    ? costRulesData[selectedCity as keyof typeof costRulesData]
    : 0;
  const hasCoverage = selectedCity && costo > 0;

  return (
    <section id="zonas" className="py-16">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">
            Zonas de Cobertura
          </h2>
          <p className="text-neutral-600">
            Llegamos a toda CABA y GBA
          </p>
        </div>

        {/* Pills de zonas */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {zonas.map((zona) => (
            <span
              key={zona.nombre}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors cursor-default"
            >
              <span>{zona.icono}</span>
              {zona.nombre}
            </span>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-neutral-500 text-sm mb-8">
          * El costo de visita puede variar según la zona y disponibilidad
        </p>

        {/* Nota de cobertura extendida */}
        <div className="mt-8 bg-primary-50 rounded-xl p-5 text-center">
          <p className="text-primary-700">
            <span className="font-semibold">¿Tu zona no está en la lista?</span>{" "}
            Consultanos — llegamos a más localidades.
          </p>
        </div>

        {/* CTA simple */}
        <div className="mt-8 text-center">
          <WhatsAppButton variant="secondary" size="md">
            Coordinar visita
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
