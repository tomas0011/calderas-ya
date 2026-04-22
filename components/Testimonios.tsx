/**
 * Sección de testimonios de clientes
 * 3 testimonios realistas con nombre y barrio
 */

import { QuoteIcon, StarIcon } from './Icons';
import { config } from '@/lib/config';

const testimonios = [
  {
    id: 1,
    texto: "Excelente servicio. El técnico llegó rápido,diagnosticó el problema y lo resolvió en el momento. Mi caldera vuelve a funcionar perfectamente.",
    nombre: "Marcelo G.",
    barrio: "Villa Crespo, CABA",
    calificacion: 5,
  },
  {
    id: 2,
    texto: "Muy profesionales. Me explicaron todo lo que iban a hacer y el presupuesto fue exactamente lo que me dijeron. Recomiendo.",
    nombre: "Sandra M.",
    barrio: "San Miguel, Zona Norte",
    calificacion: 5,
  },
  {
    id: 3,
    texto: "Necesitaba urgentemente mi caldera que no tenía agua caliente. Llegaron en menos de 2 horas. Muy satisfechos.",
    nombre: "Carlos R.",
    barrio: "Caballito, CABA",
    calificacion: 5,
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-neutral-50">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Lo que dicen nuestros clientes
          </h2>
          <p className="section-subtitle">
            Miles de familias ya confiaron en nuestro servicio
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Comillas decorativas */}
              <div className="absolute top-4 right-4 text-primary-100">
                <QuoteIcon className="w-10 h-10" />
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    filled={i < testimonio.calificacion}
                  />
                ))}
              </div>

              {/* Texto */}
              <p className="text-neutral-700 mb-6 leading-relaxed relative z-10">
                "{testimonio.texto}"
              </p>

              {/* Autor */}
              <div className="border-t border-neutral-100 pt-4">
                <p className="font-semibold text-neutral-900">
                  {testimonio.nombre}
                </p>
                <p className="text-sm text-neutral-500">
                  {testimonio.barrio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de confianza */}
        <p className="text-center text-neutral-500 text-sm mt-12">
          ¿Vos también necesitás ayuda con tu caldera? <a href={config.whatsappUrl} className="text-primary-600 hover:underline font-medium">Escribinos</a> y te respondemos ahora.
        </p>
      </div>
    </section>
  );
}