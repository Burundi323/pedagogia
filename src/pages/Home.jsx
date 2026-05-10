import { Link } from 'react-router-dom'
import './Home.css'

const valores = ['Legado', 'Respeto', 'Responsabilidad', 'Pasión', 'Trabajo en equipo', 'Resolución']

const propuestas = [
  { icon: '⚖️', title: 'Debate Interuniversitario', cat: 'Académico', desc: 'Universidades públicas y privadas debatiendo sobre educación mexicana.' },
  { icon: '🎤', title: 'Ponencias KLEOS', cat: 'Académico', desc: 'Paneles con autoridades educativas y actores de la sociedad civil.' },
  { icon: '🏅', title: 'Alumni Insignia', cat: 'Comunidad', desc: 'Reconocimiento anual a un egresado con trayectoria destacada.' },
  { icon: '📖', title: 'Revista de Pedagogía', cat: 'Publicación', desc: 'Publicación semestral digital con ensayos e investigaciones.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow" />
          <div className="hero-glow hero-glow--2" />
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">Consejo de Pedagogía 2026 – 2027</span>
            <h1 className="hero-title">
              Legado que<br /><em>trasciende.</em>
            </h1>
            <p className="hero-sub">
              Kléos representa a la comunidad de Pedagogía con proyectos concretos,
              formación profesional y espacios de encuentro que perduran.
            </p>
            <div className="hero-btns">
              <Link to="/propuestas" className="btn btn-orange">Ver propuestas</Link>
              <Link to="/quienes-somos" className="btn btn-ghost">Quiénes somos</Link>
            </div>
          </div>

          <div className="hero-emblem">
            <div className="hero-mosaic">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`mosaic-cell mc--${i % 6}`} />
              ))}
            </div>
            <div className="hero-logo-wrap">
              <svg viewBox="0 0 120 80" className="hero-sun" fill="none">
                <circle cx="60" cy="52" r="18" fill="#d4541a" />
                {[...Array(9)].map((_, i) => {
                  const a = (i * 40 - 160) * (Math.PI / 180)
                  return (
                    <line key={i}
                      x1={60 + 24 * Math.cos(a)} y1={52 + 24 * Math.sin(a)}
                      x2={60 + 38 * Math.cos(a)} y2={52 + 38 * Math.sin(a)}
                      stroke="#d4541a" strokeWidth="3.5" strokeLinecap="round"
                    />
                  )
                })}
                <path d="M42 52 Q60 34 78 52" stroke="#d4541a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
              <div className="hero-kleos">κιέος</div>
              <div className="hero-sub-label">Consejo de Pedagogía</div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="home-equipo">
        <div className="container">
          <span className="section-ey">Directiva</span>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>El equipo detrás de Kléos</h2>
          <div className="equipo-grid">
            {[
              { name: 'Fernando Axel Franco Anzurez', role: 'Presidente', initial: 'F' },
              { name: 'María Fernanda Valadez López Santibáñez', role: 'Viceprecidenta', initial: 'M' },
              { name: 'Fátima Liliana Piñon Segundo', role: 'Secretaria', initial: 'FP' },
              { name: 'María Fernanda Jiménez Canedo', role: 'Jefa Redes Sociales', initial: 'MF' },
              { name: 'Grecia Paola Martínez Juárez', role: 'Jefa de Agenda de Género', initial: 'GP' },
              { name: 'Sofia Monserrat Torres Malagón', role: 'Coordinadora de Servicio Social', initial: 'SM' },
              { name: 'María Fernanda Aguirre Garcia', role: 'Jefa de Capellanía', initial: 'MA' },
              { name: 'Karen Gisela Domínguez Licona', role: 'Coordinadora de Asuntos Estudiantiles', initial: 'KG' },
              { name: 'Aldo Israel Omaña Ortiz', role: 'Jefe de Deporte y Cultura', initial: 'AO' },
              { name: 'Regina Pérez Osorio', role: 'Vínculo Interuniversitario', initial: 'RG' },
              { name: 'Georgina Martínez', role: 'Comisionada Alumni', initial: 'GM' },
              { name: 'Inés Herrera Gómez', role: 'Jefa Servicio Socila y Sustentabilidad', initial: 'IH' },
              { name: 'María José Cervantes Ruiz', role: 'Jefa Revista de Pedagogía', initial: 'MC' },
              { name: 'Ximena Ramírez García', role: 'Jefa del proyecto Buddies', initial: 'XR' },
              { name: 'Anna Yoselyn Romero Muñoz', role: 'Jefa Eventos UP', initial: 'AR' },
              { name: 'Angélica Vázques Castillo', role: 'Jefa Vínculo Alumni', initial: 'AV' },

            ].map(m => (
              <div key={m.name} className="equipo-card">
                <div className="equipo-avatar">{m.initial}</div>
                <div>
                  <h3 className="equipo-name">{m.name}</h3>
                  <span className="equipo-role">{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...valores, ...valores].map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      </div>

      {/* PROPUESTAS DESTACADAS */}
      <section className="home-propuestas" id="propuestas">
        <div className="container">
          <span className="section-ey">Agenda 2026–2027</span>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>
            Nuestras propuestas
          </h2>
          <div className="prop-grid">
            {propuestas.map(p => (
              <div key={p.title} className="prop-card">
                <span className="prop-icon">{p.icon}</span>
                <div className="prop-cat">{p.cat}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/propuestas" className="btn btn-outline">Ver todas las propuestas</Link>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="home-valores">
        <div className="container">
          <span className="section-ey">Identidad</span>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>
            Lo que nos mueve
          </h2>
          <div className="valores-grid">
            {[
              { t: 'Legado', d: 'Dejar proyectos y programas para que los estudiantes conecten con un mundo real y con propósito.', icon: '🌟' },
              { t: 'Respeto', d: 'Hacia los integrantes del equipo y hacia toda la comunidad de Pedagogía.', icon: '🤝' },
              { t: 'Responsabilidad', d: 'Adquirir conciencia de las decisiones que se toman y afrontarlas.', icon: '⚖️' },
              { t: 'Pasión', d: 'Dar lo mejor de sí en cada proyecto y trabajo dentro del Consejo.', icon: '🔥' },
              { t: 'Trabajo en equipo', d: 'Gestionar los momentos de conflicto y de interés de cada miembro.', icon: '👥' },
              { t: 'Resolución', d: 'La capacidad de convertir una idea en acción real y concreta.', icon: '✦' },
            ].map(v => (
              <div key={v.t} className="valor-card">
                <span className="valor-icon">{v.icon}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <h2 className="section-title">
            Sé parte del<br /><em>cambio</em>
          </h2>
          <p>Conoce todas nuestras propuestas y únete a la comunidad Kléos.</p>
          <Link to="/propuestas" className="btn btn-white">Ver propuestas</Link>
        </div>
      </section>
    </>
  )
}
