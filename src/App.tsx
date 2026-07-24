import './App.css'

type SystemCard = {
  name: string
  description: string
  href?: string
  actionLabel?: string
  status: 'available' | 'coming_soon'
  accent: 'orange' | 'violet'
}

const systems: SystemCard[] = [
  {
    name: 'Servicio Técnico',
    description:
      'Gestión operativa de recepción, diagnóstico, repuestos, estados y tickets de impresión.',
    href: 'https://st.serviciosasm.cl',
    actionLabel: 'Abrir Servicio Técnico',
    status: 'available',
    accent: 'orange',
  },
  {
    name: 'Barber',
    description:
      'Reserva de citas con selección de barbero, calendario de disponibilidad y panel administrativo de horarios.',
    status: 'coming_soon',
    accent: 'violet',
  },
  {
    name: 'Mi Minuto',
    description:
      'Control de estacionamiento por minuto: registro de entrada, cobro de salida, deudas por evasión y resumen diario.',
    href: 'https://miminuto.serviciosasm.cl',
    actionLabel: 'Abrir Mi Minuto',
    status: 'available',
    accent: 'orange',
  },
]

function App() {
  return (
    <div className="hub-shell">
      <main className="hub-main">
        <header className="hero">
          <span className="eyebrow">Portal de aplicaciones</span>
          <h1>Servicios ASM</h1>
          <p>
            Accede a Servicio Técnico y conoce las próximas aplicaciones que
            estarán disponibles.
          </p>
        </header>

        <section className="systems-grid" aria-label="Sistemas disponibles">
          {systems.map((system) => {
            const isAvailable = system.status === 'available'

            return (
              <article
                key={system.name}
                className={`system-card accent-${system.accent} ${
                  isAvailable ? 'is-available' : 'is-coming-soon'
                }`}
              >
                <div className="card-head">
                  <h2>{system.name}</h2>
                  <span
                    className={`status-pill ${isAvailable ? 'is-live' : 'is-soon'}`}
                  >
                    {isAvailable ? 'Disponible' : 'Próximamente'}
                  </span>
                </div>

                <p>{system.description}</p>

                {isAvailable ? (
                  <a className="card-action" href={system.href}>
                    {system.actionLabel ?? `Abrir ${system.name}`}
                  </a>
                ) : (
                  <span className="availability-note">En preparación</span>
                )}
              </article>
            )
          })}
        </section>

      </main>

      <footer className="hub-footer">
        <span>Servicios ASM</span>
      </footer>
    </div>
  )
}

export default App
