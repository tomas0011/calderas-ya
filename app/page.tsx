/**
 * Landing Page Principal
 * Servicio Técnico de Calderas en CABA y GBA
 * 
 * Estructura:
 * - Hero: Primera sección con CTAs
 * - Sobre Nosotros: Identidad del negocio
 * - Servicios: Cards de servicios ofrecidos
 * - Cómo Trabajamos: Proceso diferencia
 * - Marcas: Disclaimer de independencia
 * - Beneficios: Diferenciadores del servicio
 * - Zonas: Cobertura geográfica
 * - Testimonios: Reseñas de clientes
 * - FAQ: Preguntas frecuentes
 * - CTA: Llamada a la acción final
 * - Footer: Información de contacto
 */

import Hero from '@/components/Hero';
import SobreNosotros from '@/components/SobreNosotros';
import Servicios from '@/components/Servicios';
import ComoTrabajamos from '@/components/ComoTrabajamos';
import Marcas from '@/components/Marcas';
import Beneficios from '@/components/Beneficios';
import Zonas from '@/components/Zonas';
import Testimonios from '@/components/Testimonios';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreNosotros />
      <Servicios />
      <ComoTrabajamos />
      <Marcas />
      <Beneficios />
      <Zonas />
      <Testimonios />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}