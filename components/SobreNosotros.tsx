/**
 * Sobre Nosotros - E-E-A-T para Google Ads
 * Muestra al técnico real con credentials
 * Evita parecer "unipersonal improvisado"
 */

import WhatsAppButton from "./WhatsAppButton";
import { config } from "@/lib/config";

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: contenido */}
          <div>
            {/* Badge con credentials */}
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              Técnicos calificados   • +20 años de experiencia
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Servicio técnico de calderas
              <br />
              <span className="text-primary-600">en CABA y GBA</span>
            </h2>

            {/* Descripción */}
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Somos{" "}
                <strong className="text-neutral-900">
                  {config.companyName}
                </strong>
                , un equipo de técnicos especializados en reparación de
                calderas. Atendemos en todo CABA y Gran Buenos Aires con más de
                10 años de experiencia.
              </p>
              <p>
                No somos una empresa grande con call center. Somos técnicos
                reales que responden directamente, sin intermediarios. Eso nos
                permite ofrecer un servicio más personalizado y presupuestos más
                claros.
              </p>
              <p>
                Estamos registrados y trabajamos con todas las marcas del
                mercado: Baxi, Peisa, Ariston, Orbis, Euterma, Caldaia y más.
              </p>
            </div>

            {/* Credentials de confianza */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="text-xl font-bold text-primary-600">+20</div>
                <div className="text-sm text-neutral-600">
                  años de experiencia
                </div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="text-xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-neutral-600">a domicilio</div>
              </div>
            </div>

            {/* CUIT y registro */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Técnico calificado
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CUIT: 20-xxxxx
              </span>
            </div>

            {/* CTA secundario */}
            <div className="mt-8">
              <a
                href={config.whatsappUrl}
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                <span className="text-primary-600">
                  ¿Tenés alguna pregunta?
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna derecha: visual de confianza */}
          <div className="relative">
            {/* Tarjeta visual */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              {/* Icono representativo */}
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>

              {/* Info de la empresa */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {config.companyName}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Servicio técnico profesional
                </p>

                {/* Separador */}
                <div className="border-t border-neutral-200 my-6" />

                {/* Datos de contacto */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-green-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.132-.127.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.495-.024-.124-.747-.748-.747-1.423 0-1.65.85-2.467 1.165-2.92.148-.214.395-.246.535-.246h.196c2.254 0 4.085.933 4.967 2.584.296.553.296 1.456.296 1.456v2.336c0 .296-.074.495-.445.495-.296 0-.744-.198-1.73-.743-1.01-.553-1.656-1.232-1.656-2.271 0-1.938 1.493-3.478 2.595-3.478.296 0 .596.074.768.223.173.148.297.297.371.446.074.149.025.372-.025.52-.05.148-.173.347-.446.52-.823.496-1.35 1.162-1.35 2.271 0 1.65 1.493 3.478 3.478 3.478.99 0 1.797-.297 2.268-.744.174-.174.222-.372.222-.495v-.075c0-.493-.198-.818-.496-1.022-.297-.198-.768-.248-1.165-.248h-.196c-.645 0-1.72.074-2.47.743z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">WhatsApp</p>
                      <p className="text-sm font-medium text-neutral-900">
                        {config.phoneFormatted}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Horario</p>
                      <p className="text-sm font-medium text-neutral-900">
                        {config.schedule}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Zona</p>
                      <p className="text-sm font-medium text-neutral-900">
                        CABA y GBA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-100 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
