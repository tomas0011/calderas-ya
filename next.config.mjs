/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de rendimiento
  reactStrictMode: true,
  
  // Configuración de imágenes (agregar dominio si se usan imágenes externas)
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Configuración de i18n
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;