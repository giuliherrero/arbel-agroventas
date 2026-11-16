# Arbel Agroventas

Sitio web de **Arbel Agroventas** (Carlos Arbel): venta de maquinaria, implementos y estructuras agrícolas en Melincué, Santa Fe. Hecho con Astro 7 y Tailwind CSS 4 sobre la plantilla AstroWind.

## Comandos

```bash
npm install      # instala dependencias (Node.js 22 o superior)
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en ./dist
npm run check    # revisa tipos, ESLint y Prettier
```

## Cómo editar

- **Datos de contacto** (WhatsApp, email, redes, mensaje predefinido): `src/data/contact.ts`.
- **Categorías de productos y galería de flyers**: `src/data/servicios.ts`.
- **Textos de cada página**: `src/pages/` (`index.astro`, `services.astro`, `about.astro`, `contact.astro`).
- **Menú y pie de página**: `src/navigation.ts`.
- **Nombre, dominio y SEO general**: `src/config.yaml`. Cuando tengas el dominio definitivo, cambiá `site.site` y `public/robots.txt`.
- **Colores**: `src/components/CustomStyles.astro` (`--aw-color-primary`, `secondary` y `accent`).
- **Imágenes**: carpeta `src/assets/images/arbel/`. Para sumar un flyer, copialo ahí (minúsculas, sin tildes ni espacios) y agregalo en `src/data/servicios.ts`.
- **Logo**: `src/components/Logo.astro`. Favicons en `src/assets/favicons/`.

Para guías de tareas más específicas, ver `AGENTS.md` y la carpeta `.agents/skills/`.
