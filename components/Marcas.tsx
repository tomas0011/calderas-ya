/**
 * Sección de marcas con las que trabajan
 * Incluye disclaimer de independencia
 */

import { config } from '@/lib/config';

export default function Marcas() {
  return (
    <section className="py-16 bg-white">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            Trabajamos con múltiples marcas del mercado
          </h2>
        </div>

        {/* Logos/nombres de marcas */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
          {config.brands.map((marca) => (
            <div
              key={marca}
              className="text-xl md:text-2xl font-semibold text-neutral-700 px-4 py-2 border border-neutral-200 rounded-lg hover:border-primary-300 hover:text-primary-600 transition-colors duration-200"
            >
              {marca}
            </div>
          ))}
        </div>

        {/* Disclaimer legal - visible y claro */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 text-center">
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-800"> {config.disclaimer}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}