# Servicios ASM Hub

Portal principal de `serviciosasm.cl` para redirigir a los sistemas de la organizacion.

## Objetivo

- `serviciosasm.cl` funciona como pivote entre aplicaciones.
- `Servicio Tecnico` disponible con acceso directo.
- `Barber` y `Mi Minuto` visibles como modulos proximos.

## Sistemas del hub

- **Servicio Tecnico**: flujo de recepcion, diagnostico, repuestos, estados y tickets de impresion.
- **Barber**: reserva de citas con seleccion de barbero, calendario y administracion de horarios.
- **Mi Minuto**: control operativo de estacionamiento por minuto (entradas, salidas, deuda por evasion y resumen diario).

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

- Hub: `https://serviciosasm.cl`
- Servicio Tecnico Front: `https://st.serviciosasm.cl`
- Servicio Tecnico API: `https://api-st.serviciosasm.cl`

Dominios reservados para siguientes sistemas:

- `https://barber.serviciosasm.cl`
- `https://api-barber.serviciosasm.cl`
- `https://miminuto.serviciosasm.cl`
- `https://api-miminuto.serviciosasm.cl`

## Deploy en Cloudflare Pages

Configuracion recomendada:

- Production branch: `develop`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Asignar custom domains:

- `serviciosasm.cl`
- `www.serviciosasm.cl`

## Notas

- El boton de `Servicio Tecnico` abre en la misma pestana.
- La version del footer se lee desde `package.json` via `__APP_VERSION__` en `vite.config.ts`.
