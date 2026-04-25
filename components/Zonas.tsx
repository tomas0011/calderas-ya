/**
 * Zonas de Cobertura - Sin fricción + Buscador de costos
 * Muestra cobertura en texto + permite consultar costo de visita
 */

'use client';

import { useState, useMemo } from 'react';
import WhatsAppButton from './WhatsAppButton';
import costRulesData from '@/shared/cost-rules.json';

const zonas = [
  {
    nombre: 'CABA',
    incluidos: 'Capital Federal, Recoleta, Palermo, Belgrano, Núñez, Caballito, Flores, Villa Lugano, todos los barrios',
  },
  {
    nombre: 'Zona Norte',
    incluidos: 'San Isidro, Vicente López, Tigre, San Martín, Pilar, Nordelta, Martínez',
  },
  {
    nombre: 'Zona Oeste',
    incluidos: 'Morón, Ituzaingó, Hurlingham, Merlo, La Matanza, Ramos Mejía, Villa Sarmiento',
  },
  {
    nombre: 'Zona Sur',
    incluidos: 'Lomas de Zamora, Banfield, Lanús, Avellaneda, Quilmes, Berazategui',
  },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Zonas() {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Ciudades disponibles del JSON
  const cities = Object.keys(costRulesData).sort();

  // Filtrar en tiempo real
  const filteredCities = useMemo(() => {
    if (!search.trim()) return cities.slice(0, 6);
    const query = search.toLowerCase();
    return cities.filter(city => 
      city.toLowerCase().includes(query)
    ).slice(0, 6);
  }, [search]);

  const handleCitySelect = (city: string) => {
    setSearch(city);
    setSelectedCity(city);
  };

  const costo = selectedCity ? costRulesData[selectedCity as keyof typeof costRulesData] : 0;
  const hasCoverage = selectedCity && costo > 0;

  return (
    <section id="zonas" className="py-16 bg-white">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="section-title">
            Zonas de Cobertura
          </h2>
          <p className="section-subtitle">
            Llegamos a toda CABA y GBA — Visitamos tu domicilio sin cargo
          </p>
        </div>

        {/* Grid de zonas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {zonas.map((zona) => (
            <div
              key={zona.nombre}
              className="bg-neutral-50 rounded-xl p-5 border border-neutral-200"
            >
              <h3 className="font-bold text-primary-600 text-lg mb-2">
                {zona.nombre}
              </h3>
              <p className="text-neutral-600 text-sm">
                {zona.incluidos}
              </p>
            </div>
          ))}
        </div>

        {/* Buscador de costo de visita */}
        <div className="max-w-md mx-auto">
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 text-center">
              Consultá el costo de visita en tu zona
            </h3>
            
            {/* Input de búsqueda */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedCity(null);
                }}
                onFocus={() => setSelectedCity(null)}
                placeholder="Escribí tu barrio o ciudad..."
                className="w-full px-4 py-3 text-base bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              
              {/* Dropdown de resultados */}
              {search && filteredCities.length > 0 && !selectedCity && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="w-full px-4 py-3 text-left hover:bg-primary-50 transition-colors"
                    >
                      <span className="text-neutral-800">{city}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resultado */}
            {selectedCity && hasCoverage && (
              <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-green-800">Cobertura en {selectedCity}</span>
                </div>
                <p className="text-2xl font-bold text-green-700">
                  {formatCurrency(costo)}
                  <span className="text-sm font-normal text-green-600 ml-2">costo de visita</span>
                </p>
              </div>
            )}

            {/* Disclaimer de variación */}
            <p className="text-center text-neutral-500 text-xs mt-4">
              * El costo puede variar según distancia, disponibilidad del técnico, costo de combustible y otros factores operativos. El presupuesto final se define en la visita.
            </p>
          </div>
        </div>

        {/* Nota de cobertura extendida */}
        <div className="mt-8 bg-primary-50 rounded-xl p-5 text-center">
          <p className="text-primary-700">
            <span className="font-semibold">¿Tu zona no está en la lista?</span> Consultanos — llegamos a más localidades.
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