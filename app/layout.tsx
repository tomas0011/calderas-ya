import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Servicio Técnico de Calderas | Reparación y Mantenimiento en CABA y GBA",
  description: "Servicio técnico independiente de calderas. Reparación, mantenimiento e instalación a domicilio en CABA y Gran Buenos Aires. Atención rápida y presupuestos claros.",
  keywords: ["servicio técnico calderas", "reparación calderas", "mantenimiento calderas", "calderas CABA", "calderas GBA", "técnico calderas", "instalación calderas"],
  authors: [{ name: "Servicio Técnico de Calderas" }],
  openGraph: {
    title: "Servicio Técnico de Calderas | Reparación y Mantenimiento en CABA y GBA",
    description: "Servicio técnico independiente de calderas. Reparación, mantenimiento e instalación a domicilio.",
    type: "website",
    locale: "es_AR",
    siteName: "Servicio Técnico de Calderas",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-code",
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
        {children}
      </body>
    </html>
  );
}