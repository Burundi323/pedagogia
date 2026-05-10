import './Integrantes.css'

const INTEGRANTES = [
  { name: 'Fernando Axel Franco Anzurez', role: 'Presidente', initial: 'F' },
  { name: 'María Fernanda Valadez López', role: 'Vicepresidenta', initial: 'M' },
  { name: 'Fátima Liliana Piñon Segundo', role: 'Secretaria', initial: 'F' },
  { name: 'Grecia Paola Martínez Juárez', role: 'Jefa de Agenda de Género', initial: 'G' },
  { name: 'Aldo Israel Omaña Ortiz', role: 'Jefe de Deporte y Cultura', initial: 'A' },
  { name: 'María José Cervantes Ruiz', role: 'Jefa Revista de Pedagogía', initial: 'M' },
  { name: 'María Fernanda Jiménez Canedo', role: 'Jefa Redes Sociales', initial: 'M' },
  { name: 'María Fernanda Aguirre García', role: 'Vínculo Interuniversitario', initial: 'M' },
  { name: 'Ximena Ramírez García', role: 'Jefa del Proyecto Buddies', initial: 'X' },
  { name: 'Sofía Monserrat Torres Malagón', role: 'Coordinadora de Servicio Social', initial: 'S' },
  { name: 'Georgina Martínez', role: 'Comisionada Alumni', initial: 'G' },
  { name: 'Anna Yoselyn Romero Muñoz', role: 'Jefa Eventos UP', initial: 'A' },
  { name: 'María Fernanda Aguirre García', role: 'Jefa de Capellanía', initial: 'M' },
  { name: 'Inés Herrera Gómez', role: 'Jefa Servicio Social y Sustentabilidad', initial: 'I' },
  { name: 'Angélica Vázques Castillo', role: 'Jefa Vínculo Alumni', initial: 'A' },
]

const DIRECTIVA = INTEGRANTES.slice(0, 3)
const RESTO = INTEGRANTES.slice(3)

export default function Integrantes() {
  return (
    <>
      <div className="int-hero">
        <div className="container">
          <span className="section-ey">El equipo</span>
          <h1>Integrantes <em>del consejo</em></h1>
          <p>Conoce a las personas que conforman el Consejo de Pedagogía Kléos 2026–2027.</p>
        </div>
      </div>

      {/* DIRECTIVA */}
      <section className="int-section">
        <div className="container">
          <span className="section-ey">Directiva</span>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>Mesa directiva</h2>
          <div className="int-directiva-grid">
            {DIRECTIVA.map(m => (
              <div key={m.name + m.role} className="int-card int-card--featured">
                <div className="int-avatar int-avatar--lg">{m.initial}</div>
                <div className="int-role">{m.role}</div>
                <h3 className="int-name">{m.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTO */}
      <section className="int-section int-section--gray">
        <div className="container">
          <span className="section-ey">Coordinaciones</span>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>Jefes y coordinadores</h2>
          <div className="int-grid">
            {RESTO.map(m => (
              <div key={m.name + m.role} className="int-card">
                <div className="int-avatar">{m.initial}</div>
                <div className="int-role">{m.role}</div>
                <h3 className="int-name">{m.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
