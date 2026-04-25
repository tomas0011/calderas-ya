/**
 * Landing Page Principal
 * Servicio Técnico de Calderas en CABA y GBA
 * Norte Clima - Nuevo branding
 * 
 * Estructura:
 * - Header: Logo + nombre + teléfono fijo
 * - Hero: Primera sección con CTAs
 * - Sobre Nosotros: Identidad del negocio
 * - BuscadorCiudad: Buscador de cobertura + costos
 * - Servicios: Cards de servicios ofrecidos
 * - Costos deVisita: Información detallada de costos + proceso
 * - Marcas: Disclaimer de independencia + repuestos
 * - Beneficios: Diferenciadores del servicio
 * - Testimonios: Reseñas de clientes
 * - FAQ: Preguntas frecuentes
 * - CTA: Llamada a la acción final
 * - Footer: Información de contacto
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SobreNosotros from '@/components/SobreNosotros';
import BuscadorCiudad from '@/components/BuscadorCiudad';
import Servicios from '@/components/Servicios';
import CostosVisita from '@/components/CostosVisita';
import Marcas from '@/components/Marcas';
import Beneficios from '@/components/Beneficios';
import Testimonios from '@/components/Testimonios';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SobreNosotros />
      <BuscadorCiudad />
      <Servicios />
      <CostosVisita />
      <Marcas />
      <Beneficios />
      <Testimonios />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}