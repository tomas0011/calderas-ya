# Calderas YA Landing

Landing page para **Calderas YA** — servicio técnico de calderas industriales en Buenos Aires.

## Stack Tecnológico

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (hosting)

## Requisitos

- Node.js >= 18
- npm >= 8

---

## 1. Iniciar en Local

```bash
# Instalar dependencias
npm install

# Dev server (http://localhost:3000)
npm run dev

# Build de producción
npm run build
```

---

## 2. Modificar Datos de la Landing

Todos los datos editables están centralizados en un solo archivo:

**`lib/config.ts`**

```ts
export const config = {
  // Información de la empresa
  companyName: "Calderas YA",
  phone: "+5491158403106",
  phoneFormatted: "11 5840-3106",
  whatsapp: "5491158403106",
  whatsappMessage: "Hola, necesito información sobre calderas",
  email: "yacalderas@gmail.com",

  // Horario de atención
  schedule: "Lunes a Sábado de 8:00 a 20:00",
  scheduleShort: "Lun-Sáb 8:00-20:00",

  // Cobertura geográfica
  coverage: ["CABA", "Zona Norte", "Zona Oeste", "Zona Sur"] as const,

  // Marcas con las que trabajan
  brands: ["Baxi", "Peisa", "Ariston", "Orbis", "Euterma"] as const,

  // Descargo legal
  disclaimer: "Somos un servicio técnico independiente...",
}
```

### URLs generadas automáticamente

| Campo | Uso |
|-------|-----|
| `config.whatsappUrl` | Link directo a WhatsApp |
| `config.phoneUrl` | Link `tel:` |
| `config.emailUrl` | Link `mailto:` |

### Cómo usar en componentes

```tsx
import { config } from '@/lib/config';

<a href={config.whatsappUrl}>WhatsApp</a>
<a href={config.phoneUrl}>{config.phoneFormatted}</a>
<a href={config.emailUrl}>{config.email}</a>
```

---

## 3. Incrementar el Proyecto

### Estructura de Directorios

```
calderas-ya/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes modulares
│   ├── Hero.tsx           # Sección principal
│   ├── Servicios.tsx      # Servicios ofrecidos
│   ├── Beneficios.tsx     # Beneficios
│   ├── Marcas.tsx         # Marcas con las que trabajan
│   ├── Zonas.tsx          # Cobertura geográfica
│   ├── Testimonios.tsx    # Testimonios de clientes
│   ├── CTA.tsx           # Llamado a la acción
│   ├── Footer.tsx        # Pie de página
│   ├── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   ├── Icons.tsx         # Iconos SVG
│   └── globals.css       # Estilos globales
├── lib/
│   └── config.ts        # ✅ Configuración centralizada
├── public/                # Archivos estáticos
├── next.config.mjs       # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind
└── tsconfig.json       # Configuración de TypeScript
```

### Agregar una nueva sección

1. Crear componente en `components/NuevaSeccion.tsx`
2. Importar en `app/page.tsx`

```tsx
// components/NuevaSeccion.tsx
export default function NuevaSeccion() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2>Nueva Sección</h2>
      </div>
    </section>
  );
}
```

```tsx
// app/page.tsx
import NuevaSeccion from '@/components/NuevaSeccion';

export default function Home() {
  return (
    <main>
      <Hero />
      <NuevaSeccion />
      {/* ... */}
    </main>
  );
}
```

### Agregar una nueva página

Crear archivo en `app/nueva-pagina/page.tsx`.

### Agregar imágenes

1. Colocar imagen en `public/`
2. Usar etiqueta `<img>` (HTML) o `next/image` (optimizado)

```tsx
// En un componente
<img src="/imagen.jpg" alt="Descripción" className="w-full" />
```

---

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Dev server con hot-reload |
| `npm run build` | Build de producción |
| `npm run start` | Servir build de producción |
| `npm run lint` | Verificar código |

---

## Deploy con Vercel

```bash
# Build y deploy automático
vercel --prod
```

O conectar el repositorio en [vercel.com](https://vercel.com) para deploy automático en cada push.

## Licencia

MIT