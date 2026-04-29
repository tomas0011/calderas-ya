/**
 * Hero Section - Optimizado para Google Ads
 * H1 orientado a urgencia y keyword de búsqueda
 * CTA visible sin scroll
 */

import WhatsAppButton from "./WhatsAppButton";
import { config } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 pt-16">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent" />

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container-main text-center px-4">
        <div className="animate-fade-in">
          {/* Badge con urgencia */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-300 px-4 py-2 rounded-full text-sm mb-6 border border-green-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Respondemos en minutos
          </div>

          {/* H1 ORIENTADO A GOOGLE ADS Y SEO */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance leading-tight">
            Reparación de calderas
            <br />
            <span className="text-primary-400">en el día en CABA y GBA</span>
          </h1>

          {/* Subtítulo con diferenciadores */}
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto text-balance">
            Técnicos calificados | Atención urgente | Servicio multimarca
          </p>

          {/* CTAs - VISIBLES SIN SCROLL */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <WhatsAppButton size="lg">Solicitar servicio ahora</WhatsAppButton>

            <a
              href={config.phoneUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-200"
            >
              <PhoneIcon />
              Llamar ahora
            </a>
          </div>

          {/* Microcopy de urgencia */}
          <p className="text-green-400 font-medium text-sm mb-8">
            Diagnóstico sin cargo • Reparación en el día • Presupuesto claro
          </p>

          {/* Confianzones */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>+20 años en el rubro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Técnico titular</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Mayoría de marcas</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-sm mt-2">
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Garantía propia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Servicio garantizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
