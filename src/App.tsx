import './App.css'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

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
    href: 'https://barber.serviciosasm.cl',
    actionLabel: 'Abrir Barber',
    status: 'available',
    accent: 'orange',
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
  {
    name: 'Tenis Qtro',
    description:
      'Aplicación de gestión y seguimiento para actividades de tenis.',
    href: 'https://app-tenis-qtro-d464a680d0ae.herokuapp.com/',
    actionLabel: 'Abrir Tenis Qtro',
    status: 'available',
    accent: 'orange',
  },
  {
    name: 'Solnatura',
    description:
      'Catálogo público de productos de belleza, cuidado personal y bienestar con carrito de compras y sistema de pedidos.',
    href: 'https://app-sol-natura-0293c96fcee5.herokuapp.com/',
    actionLabel: 'Abrir Solnatura',
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
            Accede a todos tus sistemas desde un solo lugar: Servicio Técnico,
            Barber, Mi Minuto, Tenis Qtro y Solnatura.
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

        <aside
          className="contact-ticker-wrap"
          aria-label="Información de contacto"
        >
          <div className="contact-ticker">
            <span className="contact-ticker__track">
              <span className="contact-ticker__item">
                <a
                  className="contact-ticker__link"
                  href="mailto:alesoft.silva.m@gmail.com"
                >
                  <MdEmail className="contact-ticker__icon" aria-hidden="true" />
                  alesoft.silva.m@gmail.com
                </a>
                <span className="contact-ticker__separator">•</span>
                <a
                  className="contact-ticker__link"
                  href="https://wa.me/56981914285"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Escribir por WhatsApp al 981914285"
                >
                  <FaWhatsapp
                    className="contact-ticker__icon"
                    aria-hidden="true"
                  />
                  WhatsApp 981914285
                </a>
              </span>
              <span className="contact-ticker__item" aria-hidden="true">
                <span className="contact-ticker__link">
                  <MdEmail className="contact-ticker__icon" />
                  alesoft.silva.m@gmail.com
                </span>
                <span className="contact-ticker__separator">•</span>
                <span className="contact-ticker__link">
                  <FaWhatsapp className="contact-ticker__icon" />
                  WhatsApp 981914285
                </span>
              </span>
            </span>
          </div>
        </aside>
      </main>

      <footer className="hub-footer">
        <span>© {new Date().getFullYear()} Servicios ASM</span>
      </footer>
    </div>
  )
}

export default App
