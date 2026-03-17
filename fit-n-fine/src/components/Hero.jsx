import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

function useCounter(target, active, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf, cur = 0
    const inc = target / (duration / 16)
    const tick = () => {
      cur = Math.min(cur + inc, target)
      setVal(Math.floor(cur))
      if (cur < target) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return val
}

export default function Hero() {
  const statsRef = useRef(null)
  const [active, setActive] = useState(false)
  const c1 = useCounter(192, active)
  const c2 = useCounter(8,   active)
  const c3 = useCounter(6,   active)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgImg}/>
      <div className={styles.bgOverlay}/>

      <div className={`container ${styles.grid}`}>

        {/* ── Left ── */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>GET THE CHALLENGE FOR YOUR</p>
          <h1 className={styles.h1}>
            Unlock Your<br/>
            <span className="orange">INFINITE POTENTIAL</span>
          </h1>
          <p className={styles.sub}>
            Experience a world-class premium fitness environment at Infinite Fitness Club in Palakkad.
            Our certified trainers and modern equipment help you reach your peak every single day.
          </p>
          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            <ArrowRight size={18}/> Join Us
          </a>
          <div className={styles.stats} ref={statsRef}>
            <div className={styles.stat}><span>{c1}<em className="orange">+</em></span><p>Active Members</p></div>
            <div className={styles.divider}/>
            <div className={styles.stat}><span>{c2}<em className="orange">+</em></span><p>Expert Trainers</p></div>
            <div className={styles.divider}/>
            <div className={styles.stat}><span>{c3}<em className="orange">+</em></span><p>Specialized Programs</p></div>
          </div>
        </div>

        {/* ── Right ── */}
        <div className={styles.right}>
          <div className={styles.personWrap}>
            <img src="/images/hero_person.png" alt="Trainer" className={styles.person}/>
            <div className={styles.badge}>
              <p className={styles.badgeTitle}>Open 6 Days</p>
              <p className={styles.badgeHours}>5:00 AM – 10:00 PM</p>
              <ul className={styles.badgeList}>
                {['Personal Training','Body Building','Cardio & Strength','Steam & Ice Baths'].map((item, i) => (
                  <li key={i}><span className={styles.num}>{i+1}</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Orange wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,0 C360,80 1080,0 1440,80 L1440,80 L0,80 Z" fill="#c19d60"/>
        </svg>
      </div>
    </section>
  )
}
