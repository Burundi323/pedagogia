import { Link } from 'react-router-dom'
import './QuienesSomos.css'

export default function QuienesSomos() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="qs-hero">
        <div className="container">
          <span className="section-ey">Sobre nosotros</span>
          <h1>Acerca de <em>Kléos</em></h1>
          <p>Un consejo estudiantil que cree en el poder del legado, la acción colectiva y la comunidad.</p>
        </div>
      </div>

      {/* SOBRE KLEOS */}
      <section className="qs-about">
        <div className="container">
          <div className="qs-about-grid">
            <div className="qs-about-visual">
              <div className="qs-mosaic">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`qm-cell qm--${i % 5}`}>
                    {i === 4 && (
                      <div className="qm-center">
                        <svg viewBox="0 0 80 60" fill="none" width="60">
                          <circle cx="40" cy="38" r="14" fill="#d4541a" />
                          {[...Array(8)].map((_, j) => {
                            const a = (j * 45 - 150) * (Math.PI / 180)
                            return (
                              <line key={j}
                                x1={40 + 18 * Math.cos(a)} y1={38 + 18 * Math.sin(a)}
                                x2={40 + 28 * Math.cos(a)} y2={38 + 28 * Math.sin(a)}
                                stroke="#d4541a" strokeWidth="2.5" strokeLinecap="round"
                              />
                            )
                          })}
                        </svg>
                        <div className="qm-label">κιέος</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="qs-about-text">
              <span className="section-ey">Quiénes somos</span>
              <h2 className="section-title">El consejo que construye legado</h2>
              <p>
                Kléos es la planilla del Consejo de Pedagogía para el período 2026–2027. Nuestro nombre 
                proviene del griego antiguo <em>κιέος</em>, que significa «gloria» o «renombre»: aquello 
                que perdura a través de las acciones y el legado que dejamos.
              </p>
              <p>
                Somos estudiantes de Pedagogía comprometidos con representar a nuestra comunidad con 
                integridad, creatividad y propósito. Buscamos construir puentes entre los alumnos, 
                la institución y el mundo profesional.
              </p>
              <Link to="/propuestas" className="btn btn-orange" style={{ marginTop: '24px' }}>
                Conocer nuestras propuestas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="qs-mv">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <span className="section-ey">Misión</span>
              <h3 className="section-title">Lo que hacemos</h3>
              <p>
                Representar a todos los estudiantes de Pedagogía sin distinción, escuchar sus 
                necesidades y actuar con propósito. A través de iniciativas concretas que fortalezcan 
                la vida académica y universitaria, acompañando a cada estudiante en su desarrollo 
                como futuro profesionista.
              </p>
            </div>
            <div className="mv-card mv-card--accent">
              <span className="section-ey" style={{ color: '#fff' }}>Visión</span>
              <h3 className="section-title" style={{ color: '#fff' }}>Hacia dónde vamos</h3>
              <p>
                Ser un consejo referente que deje un legado tangible: proyectos, programas y 
                conexiones que permanezcan más allá de nuestra gestión y sigan beneficiando a 
                generaciones futuras de la Escuela de Pedagogía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="qs-valores">
        <div className="container">
          <span className="section-ey">Identidad</span>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>Nuestros valores</h2>
          <div className="qs-valores-grid">
            {[
              { t: 'Legado', d: 'Dejar proyectos y programas para que las y los estudiantes de Pedagogía puedan conectar con un mundo real y con propósito.', icon: '🌟' },
              { t: 'Respeto', d: 'Un valor que apuesta porque haya respeto hacia los integrantes del equipo, pero también a las y los alumnos de Pedagogía.', icon: '🤝' },
              { t: 'Responsabilidad', d: 'Adquirir conciencia de las decisiones que se toman y afrontar las mismas con madurez y compromiso.', icon: '⚖️' },
              { t: 'Pasión', d: 'Dar lo mejor de sí en cada proyecto y trabajo dentro del Consejo, poniendo energía en todo lo que hacemos.', icon: '🔥' },
              { t: 'Trabajo en equipo', d: 'Saber gestionar los momentos de conflicto y de interés por cada uno de los miembros del equipo.', icon: '👥' },
              { t: 'Resolución', d: 'La resolución será la capacidad de convertir una idea en acción real y concreta dentro de la gestión.', icon: '✦' },
            ].map(v => (
              <div key={v.t} className="qs-valor">
                <span className="qs-valor-icon">{v.icon}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTIVA */}
      <section className="qs-directiva">
        <div className="container">
          <span className="section-ey">Equipo directivo</span>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>Quienes lideran Kléos</h2>
          <div className="directiva-grid">
            {[
              { name: 'Fernando Axel Franco Anzurez', role: 'Presidente', initial: 'F', desc: 'Responsable de la dirección general del consejo y la representación institucional ante las autoridades universitarias.' },
              { name: 'María Fernanda Valadez López Santibáñez', role: 'Secretaria', initial: 'M', desc: 'Encargada de la documentación, comunicación interna y coordinación de los proyectos del consejo.' },
            ].map(m => (
              <div key={m.name} className="directiva-card">
                <div className="directiva-avatar">{m.initial}</div>
                <div className="directiva-info">
                  <div className="directiva-role">{m.role}</div>
                  <h3 className="directiva-name">{m.name}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
