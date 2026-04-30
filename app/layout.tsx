import type { Metadata } from "next";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Norte Clima - Servicio Técnico de Calderas en CABA y GBA",
  description: "Servicio técnico independiente de calderas en Capital Federal y Gran Buenos Aires. Reparación, mantenimiento e instalación a domicilio. Atención rápida y presupuestos claros.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  keywords: ["servicio técnico calderas", "reparación calderas", "mantenimiento calderas", "calderas CABA", "calderas GBA", "técnico calderas", "instalación calderas"],
  authors: [{ name: "Norte Clima" }],
  openGraph: {
    title: "Norte Clima - Servicio Técnico de Calderas",
    description: "Servicio técnico independiente de calderas. Reparación, mantenimiento e instalación a domicilio en CABA y GBA.",
    type: "website",
    locale: "es_AR",
    siteName: "Norte Clima",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <AuroraBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}