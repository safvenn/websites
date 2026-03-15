import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden]   = useState(false)

  useEffect(() => {
    let lastY = 0
    const fn = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHidden(y > lastY && y > 80)   // hide on scroll-down
      lastY = y
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>FIT N' <span>FINE</span></a>

        <button className={styles.toggle} onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {['home','about','activities','services','reviews'].map(s => (
            <li key={s}>
              <a href={`#${s}`} onClick={() => setOpen(false)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
