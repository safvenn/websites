import { Quote } from 'lucide-react'
import styles from './Reviews.module.css'

const REVIEWS = [
  { name:'Noufal',           initial:'N', text:'"I\'ve been training at this gym for several months now, and I can confidently say it\'s the best unisex gym in Perinthalmanna. The trainers are highly skilled, humble, and supportive. Highly recommended."' },
  { name:'Jassim Vattuvara', initial:'J', text:'"The place is clean, well maintained, and has all the modern equipment needed. The atmosphere is motivating yet disciplined. Management maintains a professional and positive environment."' },
  { name:'Aswathy',          initial:'A', text:'"Good gym for anyone who wants results without pressure. The trainers are supportive, the atmosphere is friendly, and the workouts are well planned. A place you will enjoy coming back to."' },
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
