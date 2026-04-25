/**
 * Landing Page Principal - Optimizada para Conversión Google Ads
 * Orden optimizado para maximizar conversiones:
 * - Hero: Problema + Solución + CTA visible sin scroll
 * - Problemas comunes: SEO + intención de búsqueda
 * - Beneficios: Diferenciadores
 * - Servicios: Lo que ofrecemos
 * - Testimonios: Prueba social
 * - Zonas: Cobertura sin fricción (search optional)
 * - FAQ: Preguntas frecuentes
 * - Sobre Nosotros: E-E-A-T
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemasComunes from '@/components/ProblemasComunes';
import Beneficios from '@/components/Beneficios';
import Servicios from '@/components/Servicios';
import Testimonios from '@/components/Testimonios';
import Zonas from '@/components/Zonas';
import FAQ from '@/components/FAQ';
import SobreNosotros from '@/components/SobreNosotros';
import Footer from '@/components/Footer';
import WhatsAppFlotante from '@/components/WhatsAppFlotante';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemasComunes />
      <Beneficios />
      <Servicios />
      <Testimonios />
      <Zonas />
      <FAQ />
      <SobreNosotros />
      <Footer />
      <WhatsAppFlotante />
    </main>
  );
}