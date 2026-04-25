/**
 * Buscador de Ciudad - Componente de cobertura geográfica
 * Permite buscar ciudad con autocomplete y mostrar costos
 */

'use client';

import { useState, useMemo, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';

// Cargar reglas de costo desde JSON
interface CostRules {
  [ciudad: string]: number;
}

const costRulesData: CostRules = {
  "Nordelta": 50000,
  "San Isidro": 50000,
  "Vicente Lopez": 50000,
  "Tigre": 50000,
  "San Martín": 50000,
  "Pilar": 50000,
  "CABA": 50000,
  "Zarate": 80000,
};

// Ciudades disponibles
const cities = Object.keys(costRulesData).sort();

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function BuscadorCiudad() {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Filtrar ciudades en tiempo real
  const filteredCities = useMemo(() => {
    if (!search.trim()) return cities.slice(0, 8); // Mostrar hasta 8 sin filtro
    const query = search.toLowerCase();
    return cities.filter(city => 
      city.toLowerCase().includes(query)
    ).slice(0, 8); // Máximo 8 resultados
  }, [search]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest('#ciudad-search')) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleCitySelect = (city: string) => {
    setSearch(city);
    setSelectedCity(city);
    setIsOpen(false);
  };

  const hasCoverage = selectedCity ? selectedCity in costRulesData : false;
  const costo = selectedCity ? costRulesData[selectedCity] : 0;

  return (
    <section id="cobertura" className="py-16 bg-neutral-50">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="section-title">
            ¿En qué zona estás?
          </h2>
          <p className="section-subtitle">
            Consultá si llegamos a tu barrio y conocé el costo de visita
          </p>
        </div>

        {/* Buscador */}
        <div className="max-w-md mx-auto">
          <div id="ciudad-search" className="relative">
            <label 
              htmlFor="ciudad-input" 
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Buscá tu ciudad o barrio
            </label>
            
            <div className="relative">
              <input
                id="ciudad-input"
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedCity(null);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Ej: CABA, Tigre, Pilar..."
                className="w-full px-4 py-3 pr-10 text-base bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                autoComplete="off"
              />
              
              {/* Icono de búsqueda */}
              <svg 
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Dropdown de resultados */}
            {isOpen && filteredCities.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                {filteredCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="w-full px-4 py-3 text-left hover:bg-primary-50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-neutral-800">{city}</span>
                    <span className="text-sm text-green-600 font-medium">
                      {formatCurrency(costRulesData[city])}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resultado */}
          {selectedCity && (
            <div className="mt-6">
              {hasCoverage ? (
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900">
                        Cobertura disponible en {selectedCity}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Visitamos tu domicilio sin problema
                      </p>
                    </div>
                  </div>
                  
                  {/* Costo */}
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <p className="text-sm text-neutral-600 mb-1">
                      Costo de visita estimado:
                    </p>
                    <p className="text-2xl font-bold text-primary-600">
                      {formatCurrency(costo)}
                    </p>
                    <p className="text-xs text-neutral-500 mt-2">
                      *El costo final puede variar según distancia, disponibilidad y costos operativos del momento
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-4">
                    <WhatsAppButton size="md">
                      Coordinar visita en {selectedCity}
                    </WhatsAppButton>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-6 border border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900">
                        Actualmente no llegamos a {selectedCity}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Pedimos disculpas por las molestias
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 mt-4">
                    ¿Tu zona no está en la lista? <a href="#contacto" className="text-primary-600 hover:underline font-medium">Consultanos</a> — podemos llegar a más localidades.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-neutral-500 text-xs mt-6 max-w-md mx-auto">
          Los costos de visita pueden variar según factores externos como distancia, disponibilidad y costos operativos (por ejemplo, combustible).
        </p>
      </div>
    </section>
  );
}