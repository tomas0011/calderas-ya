/**
 * Configuración centralizada del sitio
 * Centraliza todos los datos editables del negocio
 */

export const config = {
  // Información de la empresa
  companyName: "Norte Clima",
  phone: "+5491158403106",
  phoneFormatted: "11 6912-7078",
  whatsapp: "5491158403106",
  whatsappMessage:
    "Hola, necesito información sobre servicio técnico de calderas",
  email: "yacalderas@gmail.com",

  // Horario de atención
  schedule: "Lunes a Viernes de 8:00 a 19:00, Sabado de 8:00 a 14:00",
  scheduleShort: "Lun-Vie 8:00-19:00, Sab 8:00-14:00",

  // Cobertura geográfica (lee de cost-rules.json)
  coverageZones: ["CABA", "Zona Norte", "Zona Oeste", "Zona Sur"] as const,

  // Ciudades con cobertura (cargadas desde cost-rules.json)
  coveredCities: [] as string[],

  // Marcas con las que trabajan (NO son oficiales)
  brands: ["Baxi", "Peisa", "Ariston", "Orbis", "Euterma", "Caldaia"] as const,

  // Descargo legal - servicio independiente (actualizado para Google Ads)
  disclaimer:
    "Servicio técnico independiente. No somos servicio oficial ni estamos afiliados a ninguna marca.",
  disclaimerRepuestos:
    "Trabajamos con repuestos de calidad acordes a cada equipo.",

  // URLs generadas dinámicamente
  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },

  get phoneUrl(): string {
    return `tel:${this.phone}`;
  },

  get emailUrl(): string {
    return `mailto:${this.email}`;
  },
} as const;

export type Brand = (typeof config.brands)[number];
export type Zone = (typeof config.coverageZones)[number];
