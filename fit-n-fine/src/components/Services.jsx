import { Dumbbell, Users, HeartPulse, Apple } from 'lucide-react'
import styles from './Services.module.css'

const SVCS = [
  { Icon: Dumbbell,   title:'Premium Equipment',  desc:'State-of-the-art imported machines and free weights kept spotlessly clean.' },
  { Icon: Users,      title:'Expert Trainers',    desc:'Certified male and female trainers providing personalized guidance and form correction.' },
  { Icon: HeartPulse, title:'Steam & Ice Baths',  desc:'Exclusive recovery zone with steam baths and ice therapy to reduce muscle soreness.' },
  { Icon: Apple,      title:'Nutrition & Wellness',desc:'Dietary guidance and professional support to maximize your physical potential.' },
]

export default function Services() {
  return (
    <section id="services" className={`section-pad ${styles.section}`}>
      <div className="container">
        <div className="section-head center sr">
          <span className="eyebrow">Why Choose Us</span>
          <h2>World-Class <span className="orange">Facilities</span></h2>
        </div>
        <div className={styles.grid}>
          {SVCS.map(({ Icon, title, desc }, i) => (
            <div key={title} className={`sr ${styles.card}`} style={{transitionDelay:`${i*100}ms`}}>
              <div className={styles.icon}><Icon size={28}/></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
