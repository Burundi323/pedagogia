import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Propuestas from './pages/Propuestas'
import Integrantes from './pages/Integrantes'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/propuestas" element={<Propuestas />} />
          <Route path="/integrantes" element={<Integrantes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
