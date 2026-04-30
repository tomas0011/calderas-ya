/**
 * Beneficios reales - Diferenciadores concretos
 * Sin lenguaje corporativo
 */

import { MapPinIcon } from "./Icons";
import HorizontalCarousel from "./HorizontalCarousel";

const beneficios = [
  {
    titulo: "Vamos a tu casa",
    descripcion:
      "No necesitás trasladar la caldera. En la mayoría de los casos, reparamos en la primera visita."
  },
  {
    titulo: "Sin call center",
    descripcion:
      "Te atiende un asesor calificado. Sin intermediarios ni vueltas."
  },
  {
    titulo: "Presupuesto claro y sin sorpresas",
    descripcion:
      "Te informamos el costo antes de empezar. Sin cargos ocultos."
  },
  {
    titulo: "20+ años de experiencia",
    descripcion:
      "Especialistas en Baxi y Caldaia. Diagnóstico rápido y preciso."
  },
  {
    titulo: "Asesoramiento en compra e instalación",
    descripcion:
      "Te ayudamos a elegir la caldera adecuada y nos encargamos de instalarla."
  },
  {
    titulo: "Turnos ágiles en CABA y GBA",
    descripcion:
      "Coordinación rápida por WhatsApp y prioridad para urgencias en temporada alta."
  }
];

function BeneficioCard({ titulo, descripcion }: { titulo: string; descripcion: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <h3 className="text-lg font-bold text-neutral-900 mb-2">
        {titulo}
      </h3>
      <p className="text-neutral-600 text-sm leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
}

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="section-title">¿Por qué llamarnos?</h2>
          <p className="section-subtitle">
            Somos un servicio técnico especializado en la reparación de
            calderas, proporcionando garantía exclusiva por todos nuestros
            trabajos.
          </p>
        </div>

        {/* Carrusel Horizontal */}
        <div className="h-[180px] rounded-xl">
          <HorizontalCarousel
            className="h-full"
            speed={60}
          >
            {beneficios.map((beneficio) => (
              <BeneficioCard
                key={beneficio.titulo}
                titulo={beneficio.titulo}
                descripcion={beneficio.descripcion}
              />
            ))}
          </HorizontalCarousel>
        </div>

        {/* Cobertura */}
        <div className="mt-12 bg-neutral-50 shadow-sm rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-neutral-700">
              <MapPinIcon className="w-5 h-5 text-primary-500" />
              <span className="font-medium">CABA y GBA</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-neutral-300" />
            <p className="text-neutral-500 text-sm">
              Zona Sur según disponibilidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}