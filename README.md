# micr-dev/proyectos

Portafolio Next.js de proyectos personales.

## Stack

- Next.js 16
- TypeScript
- CSS Modules

## Acerca de

Este repositorio contiene los datos que impulsa el portafolio de proyectos en [proyectos.micr.dev](https://proyectos.micr.dev). Es un repositorio de datos que actúa como fuente canónica de metadatos, descripciones y categorización.

## Estructura

```
proyectos/
├── REPO.md                    # Lista de repositorios organizada por categoría
├── DESCRIPTION.md             # Guía para escribir descripciones
├── app/
│   ├── repo-descriptions.ts   # Descripciones de proyectos
│   ├── repo-metadata.ts       # Metadatos (repo URL, live preview, privacidad)
│   ├── repo-images.ts         # Mapa de miniaturas
│   ├── repo-sections.ts       # Lógica de agrupamiento por sección
│   ├── repo-paths.ts          # Utilidades de rutas
│   └── repo-copy-batches/     # Descripciones divididas en batches temáticos
├── public/images/repo-thumbnails/  # Miniaturas de proyectos
└── components/                # Componentes UI
```

## Flujo de datos

1. **REPO.md** define qué proyectos aparecen y en qué categoría
2. **repo-descriptions.ts** proporciona las descripciones de cada proyecto
3. **repo-metadata.ts** proporciona URL del repo, live preview y estado de privacidad
4. **repo-images.ts** mapea cada proyecto a su miniatura
5. **repo-sections.ts** combina todo y genera las secciones para renderizar

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

## Añadir un proyecto

1. Añadir el nombre del repo en la sección adecuada de **REPO.md**
2. Añadir la entrada de descripción en el batch correspondiente en **repo-copy-batches/**
3. Añadir la entrada de metadatos en **repo-metadata.ts**
4. Añadir el mapeo de imagen en **repo-images.ts** y crear la miniatura en **public/images/repo-thumbnails/**

Ver `DESCRIPTION.md` para normas de escritura.

## Despliegue

Vercel: https://proyectos.micr.dev