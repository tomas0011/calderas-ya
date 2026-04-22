# Calderas Landing

Landing page para Calderas YA — empresa de calderas industriales.

## 1. Correr en local

```bash
# Instalar dependencias
npm install

# Iniciar dev server (http://localhost:3000)
npm run dev
```

Para build de producción local:

```bash
npm run build
npm run start
```

## 2. Deploy a GitHub Pages

```bash
# Generar build estático (crea carpeta 'out/')
npm run build

# Desplegar a gh-pages branch
npm run deploy
```

El sitio ficará disponible en: `https://tomas0011.github.io/calderas-ya/`

## 3. Incrementar el proyecto

### Estructura básica

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
├── public/                # Archivos estáticos
├── next.config.mjs        # Configuración de Next.js
└── package.json
```

### Agregar una nueva sección

1. Crear componente en `components/`
2. Importar y usar en `app/page.tsx`

```tsx
// components/NuevaSeccion.tsx
export default function NuevaSeccion() {
  return (
    <section className="py-20">
      <h2>Nueva Sección</h2>
    </section>
  );
}
```

### Agregar una nueva página

Crear archivo en `app/nueva-pagina/page.tsx`.

### Agregar imágenes

1. Colocar imagen en `public/`
2. Usar etiqueta `<img>` (no usar Next.js Image con static export)

```tsx
<img src="/imagen.jpg" alt="Descripción" />
```

### Deploy automático (opcional)

Para deploy automático al hacer push a `main`, crear `.github/workflows/deploy.yml`.

## Stack

- **Next.js 14** (App Router + Static Export)
- **React 18**
- **Tailwind CSS**
- **TypeScript**
- **gh-pages** para deploy