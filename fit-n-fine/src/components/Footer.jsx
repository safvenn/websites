import { MapPin, Phone, Clock } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const LINKS = ['home','about','activities','services','reviews']
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.topBar}/>
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 className={styles.logo}>FIT N' <span className="orange">FINE</span></h2>
          <p>Perinthalmanna's premier unisex fitness studio. Empowering individuals through structured and quality fitness training.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className={styles.linkList}>
            {LINKS.map(l => <li key={l}><a href={`#${l}`}>{l.charAt(0).toUpperCase()+l.slice(1)}</a></li>)}
          </ul>
        </div>
        <div>
          <h3>Visit Us</h3>
          <ul className={styles.contactList}>
            <li><MapPin size={16}/><span>Near Alankar Auditorium, Perintalmanna, Malappuram, Kerala 679322</span></li>
            <li><Phone size={16}/><span>098468 28206</span></li>
            <li><Clock size={16}/><span>Mon–Sat: 5:30 AM – 10:00 PM<br/>Sunday: Closed</span></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2026 Fit N' Fine Fitness Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
