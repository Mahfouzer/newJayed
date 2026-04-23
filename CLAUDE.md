# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server (port 3000)
pnpm build      # Production build
pnpm preview    # Preview production build locally
pnpm test       # Run tests with Vitest
```

Package manager is **pnpm**.

## Architecture

**TanStack Start** full-stack React app with SSR, file-based routing, and server functions.

### File-Based Routing

Routes live in `src/routes/`. The router plugin auto-generates `routeTree.gen.ts` (do not edit manually). Each route exports a `Route` created with `createFileRoute()`.

- `src/routes/__root.tsx` - root HTML shell, global layout (Header, Footer, DevTools), and theme initialization
- `src/routes/index.tsx` - home page (`/`)
- `src/routes/about.tsx` - about page (`/about`)

To add a new route, create a new file in `src/routes/` and the route tree will be regenerated automatically on next dev/build.

### Theme System

Light/Dark/Auto modes with system preference detection. Theme is persisted to `localStorage`. The root layout injects an inline script before render to read the stored theme and apply it immediately - this prevents flash of unstyled content. CSS custom properties in `src/styles.css` define the design tokens for each theme.

### Server Functions

Use `createServerFn()` from `@tanstack/react-start` for seamless client-server communication. Server functions can be called from route loaders or components - TanStack Start handles the serialization boundary.

### Styling

Tailwind CSS v4 via `@tailwindcss/vite`. Utility classes used inline. Global CSS custom properties (colors, fonts, animations) are defined in `src/styles.css`. Framer Motion is available for animations; the styles support `prefers-reduced-motion`.

### Type-Safe Routing

TanStack Router provides end-to-end type safety. Use `Link` from `@tanstack/react-router` for navigation. Route params and search params are typed via the generated route tree registered in `src/router.tsx`.

### Forms

React Hook Form + Zod + `@hookform/resolvers` for validated forms.
