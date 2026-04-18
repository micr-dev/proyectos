# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.0] - 2026-04-18

### Features

- **Portfolio site**: Next.js-based portfolio/projects showcase site deployed at `proyectos.micr.dev`.
- **Project sections**: Organized display of projects across four categories — Software, Hardware, MCPs, and Skills.
- **Repo copy system**: Structured copy batches (`software-a`, `software-b`, `software-c`, `micr-ms26`, `hardware`, `mcps-skills`) for managing project descriptions and metadata.
- **Repo metadata and images**: Centralized repo metadata, descriptions, paths, and image handling with TypeScript type safety.
- **Skiper component system**: Animated preloader and transition system (`Skiper10`, `Skiper80`) with progressive blur and text shimmer effects.
- **Smooth scrolling**: Lenis-powered smooth scroll integration via `SmoothScroll` wrapper.
- **Animations**: Framer Motion-powered page transitions and interactive animations.
- **Typography**: Custom font loading with Inter and Cal Sans, with dark mode by default.
- **Open Graph / SEO**: Full OG metadata with default og image, Twitter card support, and Spanish locale (`es_ES`).
- **Catch-all routing**: `[...slug]` dynamic route for deep-linking into individual project entries.

### Technical

- Next.js 16 with App Router and React 19.
- Tailwind CSS v4 with PostCSS integration.
- TypeScript 5.9 with strict configuration.
- pnpm for package management.
- ESLint with `eslint-config-next`.
