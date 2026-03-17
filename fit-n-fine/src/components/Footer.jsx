import { MapPin, Phone, Clock } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const LINKS = ['home','about','activities','services','reviews']
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.topBar}/>
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 className={styles.logo}>INFINITE <span className="orange">FITNESS CLUB</span></h2>
          <p>Palakkad's premier fitness studio. Empowering individuals through structured and quality fitness training with imported modern equipment.</p>
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
            <li><MapPin size={16}/><span>Calicut Bypass, Near Trinity Eye Hospital, Kalvakulam, Manali, Palakkad, Kerala 678001</span></li>
            <li><Phone size={16}/><span>098464 18671</span></li>
            <li><Clock size={16}/><span>Mon–Sat: 5:00 AM – 10:00 PM<br/>Sunday: Closed</span></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2026 Infinite Fitness Club. All rights reserved.</p>
      </div>
    </footer>
  )
}
