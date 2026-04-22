/**
 * Configuración centralizada del sitio
 * Centraliza todos los datos editables del negocio
 */

export const config = {
  // Información de la empresa
  companyName: "Servicio Técnico de Calderas",
  phone: "+54911XXXXXXXX",
  phoneFormatted: "+54 9 11 XXXX XXXX",
  whatsapp: "54911XXXXXXXX",
  whatsappMessage: "Hola, necesito información sobre servicio técnico de calderas",
  
  // Horario de atención
  schedule: "Lunes a Sábado de 8:00 a 20:00",
  scheduleShort: "Lun-Sáb 8:00-20:00",
  
  // Cobertura geográfica
  coverage: ["CABA", "Zona Norte", "Zona Oeste", "Zona Sur"] as const,
  
  // Marcas con las que trabajan (NO son oficiales)
  brands: ["Baxi", "Peisa", "Ariston", "Orbis", "Euterma"] as const,
  
  // Descargo legal
  disclaimer: "Somos un servicio técnico independiente. No estamos afiliados a las marcas mencionadas.",
  
  // URLs generadas dinámicamente
  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  
  get phoneUrl(): string {
    return `tel:${this.phone}`;
  },
} as const;

export type Brand = typeof config.brands[number];
export type Zone = typeof config.coverage[number];