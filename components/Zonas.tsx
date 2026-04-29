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
    <section id="zonas" className="py-16 bg-white">
      <div className="container-main">
        {/* Grid de zonas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {zonas.map((zona) => (
            <div
              key={zona.nombre}
              className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="text-4xl mb-2">{zona.icono}</div>
              <span className="text-white font-bold text-lg">
                {zona.nombre}
              </span>
            </div>
          ))}
        </div>

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
