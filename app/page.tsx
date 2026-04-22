/**
 * Landing Page Principal
 * Servicio Técnico de Calderas en CABA y GBA
 * 
 * Estructura:
 * - Hero: Primera sección con CTAs
 * - Servicios: Cards de servicios ofrecidos
 * - Marcas: Disclaimer de independencia
 * - Beneficios: Diferenciadores del servicio
 * - Zonas: Cobertura geográfica
 * - Testimonios: Reseñas de clientes
 * - CTA: Llamada a la acción final
 * - Footer: Información de contacto
 */

import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Marcas from '@/components/Marcas';
import Beneficios from '@/components/Beneficios';
import Zonas from '@/components/Zonas';
import Testimonios from '@/components/Testimonios';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Marcas />
      <Beneficios />
      <Zonas />
      <Testimonios />
      <CTA />
      <Footer />
    </main>
  );
}