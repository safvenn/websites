import { Dumbbell, Users, HeartPulse, Apple } from 'lucide-react'
import styles from './Services.module.css'

const SVCS = [
  { Icon: Dumbbell,   title:'Modern Equipment',  desc:'State-of-the-art machines, free weights, and functional training tools – kept spotlessly clean.' },
  { Icon: Users,      title:'Certified Trainers', desc:'Experienced male and female trainers create personalised plans and ensure safe, proper form.' },
  { Icon: HeartPulse, title:'Cardio Zone',        desc:'Dedicated area with treadmills, cycles, and ellipticals for your endurance training.' },
  { Icon: Apple,      title:'Nutrition Guidance', desc:'Supplement advice and basic nutrition counselling to fuel performance and recovery.' },
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
