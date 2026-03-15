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
          <p>Fit N' Fine Fitness Studio is a premium unisex gym in Perintalmanna, Malappuram, Kerala.
             We offer diverse workouts led by certified trainers, promoting health and enhancing the
             community's quality of life.</p>
          <p>Our facility is clean, well-maintained, and equipped with modern machinery for both
             beginners and advanced athletes.</p>
          <ul className={styles.list}>
            {['Certified Male & Female Trainers','Clean, Modern Equipment','192+ Members | 4.9★ Rated','Personalised Workout Plans'].map(t => (
              <li key={t}><CheckCircle2 size={18} color="var(--orange)"/>{t}</li>
            ))}
          </ul>
          <a href="#activities" className="btn btn-primary">Our Programs</a>
        </div>
      </div>
    </section>
  )
}
