# micr-dev/proyectos

Portafolio Next.js de proyectos personales.

## Stack

- Next.js 16
- TypeScript
- CSS Modules

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre http://localhost:3000

## Build

```bash
pnpm build
```

## Adding Projects

1. Añadir metadata en `app/repo-metadata.ts`
2. Añadir descripción en `app/repo-copy-batches/`
3. Añadir thumbnail en `public/images/repo-thumbnails/`
4. Mapear thumbnail en `app/repo-images.ts`

Ver `DESCRIPTION.md` para normas de escritura.

## Estructura

- `app/repo-metadata.ts` — metadata de repos (URLs, privado/público)
- `app/repo-copy-batches/` — descripciones por categoría
- `app/repo-images.ts` — mapeo de thumbnails
- `public/images/repo-thumbnails/` — imágenes

## Despliegue

Vercel: https://proyectos.micr.dev