/**
 * Testimonios reales de clientes
 * Lenguaje natural, no marketing
 */

import { QuoteIcon } from './Icons';

const testimonios = [
  {
    id: 1,
    texto: "Se me había roto la caldera un domingo a la noche y Marcelo vino ese mismo día. La arregló y funcionó perfecto. Muy conforme.",
    nombre: "Diego R.",
    barrio: "José Ingenieros, Zona Oeste",
    anio: "2024",
  },
  {
    id: 2,
    texto: "Me explicó qué tenía y cuánto costaba antes de empezar. No hubo sorpresas. Vino, lo arregló y listo.",
    nombre: "Margarita S.",
    barrio: "San Miguel, Zona Norte",
    anio: "2023",
  },
  {
    id: 3,
    texto: "Necesitaba cambiar la mía por una más nueva. Me cotizó, buscó el equipo, vino y la instaló. Todo bien.",
    nombre: "Jorge L.",
    barrio: "Caballito, CABA",
    anio: "2024",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-white/80">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Clientes que nos recomendaron
          </h2>
          <p className="section-subtitle">
            Algunas personas que nos llamaron y volvieron a llamarnos
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Comillas */}
              <div className="absolute top-4 right-4 text-primary-100">
                <QuoteIcon className="w-10 h-10" />
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

        {/* Nota */}
        <p className="text-center text-neutral-500 text-sm mt-12">
          ¿Tenés una emergencia con tu caldera?{' '}
          <a href="#" className="text-primary-600 hover:underline font-medium">
            Escribinos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}