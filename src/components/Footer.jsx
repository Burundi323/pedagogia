import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">KL<span>É</span>OS</div>
            <p className="footer-tag">Consejo de Pedagogía 2026–2027. Legado, acción y comunidad al servicio de los estudiantes.</p>
            <div className="footer-greek">κιέος</div>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/quienes-somos">Quiénes somos</Link></li>
              <li><Link to="/propuestas">Propuestas</Link></li>
              <li><Link to="/integrantes">Integrantes</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Consejo</h4>
            <ul>
              <li><a href="#">Fernando Axel Franco Anzurez</a></li>
              <li><a href="#">María Fernanda Valadez</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>2026 © KLÉOS — Consejo de Pedagogía — Todos los derechos reservados</span>
          <span>2026 – 2027</span>
        </div>
      </div>
    </footer>
  )
}
