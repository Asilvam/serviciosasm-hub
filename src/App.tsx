import './App.css'

type SystemCard = {
  name: string
  description: string
  href?: string
  status: 'available' | 'coming_soon'
  accent: 'orange' | 'violet'
}

const systems: SystemCard[] = [
  {
    name: 'Servicio Tecnico',
    description:
      'Gestion operativa de recepcion, diagnostico, repuestos, estados y tickets de impresion.',
    href: 'https://st.servicisoasm.cl',
    status: 'available',
    accent: 'orange',
  },
  {
    name: 'Barber',
    description:
      'Agenda y administracion de turnos para barberia con control de disponibilidad por equipo.',
    status: 'coming_soon',
    accent: 'violet',
  },
  {
    name: 'Mi Minuto',
    description:
      'Sistema de atencion rapida para reservas y servicios, integrado al ecosistema Servicios ASM.',
    status: 'coming_soon',
    accent: 'violet',
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
            Selecciona el sistema que deseas usar. Servicio Tecnico ya esta
            disponible y los siguientes modulos estaran habilitados
            progresivamente.
          </p>
        </header>

        <section className="systems-grid" aria-label="Sistemas disponibles">
          {systems.map((system) => {
            const isAvailable = system.status === 'available'

            return (
              <article
                key={system.name}
                className={`system-card accent-${system.accent}`}
              >
                <div className="card-head">
                  <h2>{system.name}</h2>
                  <span
                    className={`status-pill ${isAvailable ? 'is-live' : 'is-soon'}`}
                  >
                    {isAvailable ? 'Disponible' : 'Proximamente'}
                  </span>
                </div>

                <p>{system.description}</p>

                {isAvailable ? (
                  <a className="card-action" href={system.href}>
                    Entrar al sistema
                  </a>
                ) : (
                  <button
                    type="button"
                    className="card-action is-disabled"
                    disabled
                  >
                    No disponible por ahora
                  </button>
                )}
              </article>
            )
          })}
        </section>

        <aside className="announcements" aria-label="Avisos">
          <div className="notice notice-info">
            <strong>Info</strong>
            <span>Servicio Tecnico opera en su entorno productivo actual.</span>
          </div>
          <div className="notice notice-warning">
            <strong>Aviso</strong>
            <span>
              Barber y Mi Minuto se habilitaran cuando finalice su publicacion
              en infraestructura productiva.
            </span>
          </div>
        </aside>
      </main>

      <footer className="hub-footer">
        <span>Servicios ASM</span>
        <span>v{__APP_VERSION__}</span>
      </footer>
    </div>
  )
}

export default App
