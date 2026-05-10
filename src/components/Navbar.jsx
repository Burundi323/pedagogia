import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/quienes-somos', label: 'Quiénes somos' },
    { to: '/propuestas', label: 'Propuestas' },
    { to: '/integrantes', label: 'Integrantes' },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">KL<span>É</span>OS</Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
        ))}
      </div>
    </nav>
  )
}
