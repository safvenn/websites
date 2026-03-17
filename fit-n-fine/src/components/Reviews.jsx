import { Quote } from 'lucide-react'
import styles from './Reviews.module.css'

const REVIEWS = [
  { name:'Rahul',           initial:'R', text:'"I\'ve been training at Infinite Fitness Club for several months now, and I can confidently say it\'s the best premium gym in Palakkad. The trainers are highly skilled and the equipment is top-notch."' },
  { name:'Sneha Menon',     initial:'S', text:'"The place is clean, well maintained, and has all the modern imported equipment needed. I especially love the steam bath for recovery after a hard workout."' },
  { name:'Arun Kumar',      initial:'A', text:'"Great gym with a fantastic vibe. The black and bronze interiors look amazing. The trainers are supportive, the atmosphere is friendly, and the workouts are well planned."' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad dark-section">
      <div className="container">
        <div className="section-head center sr">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our <span className="orange">Members Say</span></h2>
          <div className={styles.overall}>
            <span className={styles.bigRating}>4.9</span>
            <div>
              <p className={styles.stars}>★★★★★</p>
              <p className={styles.sub}>Based on 270 Google Reviews</p>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          {REVIEWS.map(({ name, initial, text }, i) => (
            <div key={name} className={`sr ${styles.card}`} style={{transitionDelay:`${i*100}ms`}}>
              <div className={styles.top}>
                <div className={styles.avatar}>{initial}</div>
                <div>
                  <h4>{name}</h4>
                  <p className={styles.revStars}>★★★★★</p>
                </div>
                <Quote size={30} className={styles.quoteIcon}/>
              </div>
              <p className={styles.text}>{text}</p>
              <span className={styles.source}>Google Review</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
