# Servicios ASM Hub

Portal principal de `servicisoasm.cl` para redirigir a los sistemas de la organizacion.

## Objetivo

- `servicisoasm.cl` funciona como pivote entre aplicaciones.
- `Servicio Tecnico` disponible con acceso directo.
- `Barber` y `Mi Minuto` visibles como modulos proximos.

## Stack

- React 19
- TypeScript
- Vite 8

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Dominio y arquitectura objetivo

- Hub: `https://servicisoasm.cl`
- Servicio Tecnico Front: `https://st.servicisoasm.cl`
- Servicio Tecnico API: `https://api-st.servicisoasm.cl`

Dominios reservados para siguientes sistemas:

- `https://barber.servicisoasm.cl`
- `https://api-barber.servicisoasm.cl`
- `https://miminuto.servicisoasm.cl`
- `https://api-miminuto.servicisoasm.cl`

## Deploy en Cloudflare Pages

Configuracion recomendada:

- Production branch: `develop`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Asignar custom domains:

- `servicisoasm.cl`
- `www.servicisoasm.cl`

## Notas

- El boton de `Servicio Tecnico` abre en la misma pestana.
- La version del footer se lee desde `package.json` via `__APP_VERSION__` en `vite.config.ts`.
