import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import { useEffect } from 'react'

export default function App() {
  // Global scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.sr')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Services />
      <Reviews />
      <Footer />
    </>
  )
}
