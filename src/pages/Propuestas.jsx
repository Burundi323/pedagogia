import { useState } from 'react'
import './Propuestas.css'

const PROPOSALS = [
  { id:1, icon:'⚖️', cat:'académico', title:'Debate Interuniversitario',
    desc:'Kleos convoca a universidades públicas y privadas a un debate estructurado sobre un tema coyuntural de la educación mexicana.',
    detail:'Los equipos debatientes son estudiantes de Pedagogía; el tema es elegido por las y los alumnos. Se busca un moderador externo de reconocimiento académico.' },
  { id:2, icon:'🎤', cat:'académico', title:'Ponencias KLEOS',
    desc:'Paneles con autoridades educativas (SEP, directivos escolares) y actores de la sociedad civil.',
    detail:'ONGs educativas, fundaciones y colectivos docentes. Cada panel aborda una problemática concreta del sistema educativo mexicano con espacio de preguntas de los alumnos.' },
  { id:3, icon:'🏅', cat:'comunidad', title:'Alumni Insignia',
    desc:'Reconocimiento anual a una o un egresado de Pedagogía con trayectoria destacada en el ámbito educativo-profesional.',
    detail:'Kleos abre una convocatoria de nominaciones entre estudiantes y docentes, un jurado selecciona al galardonado y se realiza una ceremonia con su presencia.' },
  { id:4, icon:'🏛️', cat:'formación', title:'Visitas a Recintos',
    desc:'Visitas guiadas a instituciones clave del sistema educativo y político: SEP, Cámara de Diputados, Senado de la República.',
    detail:'Cada visita incluye sesión informativa previa y relatoría posterior para consolidar el aprendizaje de los estudiantes.' },
  { id:5, icon:'📖', cat:'publicación', title:'Revista de Pedagogía KLEOS',
    desc:'Publicación semestral digital que recoge ensayos, investigaciones, reseñas y reflexiones de los estudiantes de Pedagogía.',
    detail:'Cuenta con un comité editorial conformado por alumnos, con asesoría docente para garantizar la calidad académica.' },
  { id:6, icon:'📚', cat:'comunidad', title:'Clubes de Lectura',
    desc:'Sesiones mensuales de lectura colectiva y discusión en torno a libros relevantes para la Pedagogía.',
    detail:'Clásicos de la educación, pensamiento crítico, sociología escolar y narrativa que interpela la práctica docente. Formación con otras carreras.' },
  { id:7, icon:'🤝', cat:'comunidad', title:'Programa Buddies',
    desc:'Programa de acompañamiento entre pares: cada alumno de primer y segundo semestre recibe a un buddy de semestres superiores.',
    detail:'El buddy guía en la adaptación universitaria, comparte experiencias de la carrera y orienta en decisiones académicas importantes.' },
  { id:8, icon:'🎭', cat:'convivencia', title:'Eventos Cultura y Deporte',
    desc:'Espacios de convivencia que integran a toda la Escuela de Pedagogía con actividades culturales y deportivas.',
    detail:'Torneos deportivos entre grupos y generaciones, muestras culturales, noches de cine y más eventos de integración.' },
]

const CATS = ['todos', 'académico', 'comunidad', 'formación', 'publicación', 'convivencia']

export default function Propuestas() {
  const [active, setActive] = useState('todos')
  const [modal, setModal] = useState(null)

  const filtered = active === 'todos' ? PROPOSALS : PROPOSALS.filter(p => p.cat === active)

  return (
    <>
      <div className="prop-hero">
        <div className="container">
          <span className="section-ey">Agenda 2026–2027</span>
          <h1>Nuestras <em>propuestas</em></h1>
          <p>Ocho proyectos concretos para fortalecer la vida académica y universitaria de Pedagogía.</p>
        </div>
      </div>

      <section className="prop-section">
        <div className="container">
          <div className="prop-filters">
            {CATS.map(c => (
              <button key={c} className={`filter-btn${active === c ? ' active' : ''}`} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="prop-grid">
            {filtered.map(p => (
              <div key={p.id} className="prop-item" onClick={() => setModal(p)}>
                <div className="prop-item-top">
                  <span className="prop-item-icon">{p.icon}</span>
                  <span className="prop-item-cat">{p.cat}</span>
                </div>
                <h3 className="prop-item-title">{p.title}</h3>
                <p className="prop-item-desc">{p.desc}</p>
                <div className="prop-item-more">Ver detalle →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}>✕</button>
            <div className="modal-icon">{modal.icon}</div>
            <div className="modal-cat">{modal.cat}</div>
            <h2 className="modal-title">{modal.title}</h2>
            <p className="modal-body">{modal.desc}</p>
            <p className="modal-body" style={{ marginTop: '12px', color: 'var(--gray-600)' }}>{modal.detail}</p>
          </div>
        </div>
      )}
    </>
  )
}
