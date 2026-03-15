import styles from './Activities.module.css'

const ACTIVITIES = [
  { num:'01', title:'Zumba',           img:'/images/zumba.png',       desc:'High-energy Latin dance moves for a full-body cardio burn that feels like a party.' },
  { num:'02', title:'CrossFit',        img:'/images/crossfit.png',    desc:'Build strength, endurance, and power through constantly varied high-intensity movements.' },
  { num:'03', title:'Aerobics',        img:'/images/gym_dark.png',    desc:'Improve cardiovascular health with our structured aerobics classes, perfect for all levels.' },
  { num:'04', title:'Pilates',         img:'/images/gym2.jpg',        desc:'Strengthen your core and improve flexibility with mind-body focused Pilates sessions.' },
  { num:'05', title:'Weight Training', img:'/images/gym1.jpg',        desc:'Build serious muscle with guided weight and resistance training from our expert coaches.' },
  { num:'06', title:'Personal Training',img:'/images/hero_person.png',desc:'One-on-one sessions with a dedicated trainer to fast-track your goals with a personalised approach.' },
]

export default function Activities() {
  return (
    <section id="activities" className={`section-pad dark-section`}>
      <div className="container">
        <div className="section-head center sr">
          <span className="eyebrow">What We Offer</span>
          <h2>Our <span className="orange">Activities</span></h2>
          <p>From high-energy dance classes to hardcore weight training – something for every fitness level.</p>
        </div>
        <div className={styles.grid}>
          {ACTIVITIES.map((a, i) => (
            <div key={a.num} className={`sr ${styles.card}`} style={{transitionDelay:`${i*100}ms`}}>
              <div className={styles.imgWrap}>
                <img src={a.img} alt={a.title}/>
                <div className={styles.overlay}/>
              </div>
              <div className={styles.body}>
                <span className={styles.num}>{a.num}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
