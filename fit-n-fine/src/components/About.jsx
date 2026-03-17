import { CheckCircle2 } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={`section-pad ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        <div className={`sr ${styles.imgCol}`}>
          <div className={styles.stack}>
            <img src="/images/gym1.jpg" alt="Gym interior" className={styles.img1}/>
            <img src="/images/gym2.jpg" alt="Gym equipment" className={styles.img2}/>
            <div className={styles.chip}>
              <span className={styles.chipNum}>4.9</span>
              <div>
                <p className={styles.chipStars}>★★★★★</p>
                <p className={styles.chipSub}>Justdial &amp; Google</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`sr d2 ${styles.text}`}>
          <span className="eyebrow">About Us</span>
          <h2>A Space Built for <span className="orange">Champions</span></h2>
          <p>Infinite Fitness Club is a premium unisex gym in Palakkad, Kerala.
             We offer diverse workouts led by certified trainers, promoting health and enhancing the
             community's quality of life.</p>
          <p>Our facility is clean, well-maintained, and equipped with modern imported machinery for both
             beginners and advanced athletes. We also provide specialized recovery options like ice and steam baths.</p>
          <ul className={styles.list}>
            {['Certified Male & Female Trainers','Modern Imported Equipment','Premium Ambience & Lighting','Ice & Steam Bath Recovery'].map(t => (
              <li key={t}><CheckCircle2 size={18} color="var(--orange)"/>{t}</li>
            ))}
          </ul>
          
          <div className={styles.achievements}>
            <div className={styles.achieveCard}>
              <h3>500+</h3>
              <p>Happy Members</p>
            </div>
            <div className={styles.achieveCard}>
              <h3>Awarded</h3>
              <p>Top Premium Gym in Palakkad</p>
            </div>
          </div>

          <a href="#activities" className="btn btn-primary">Our Programs</a>
        </div>
      </div>
    </section>
  )
}
