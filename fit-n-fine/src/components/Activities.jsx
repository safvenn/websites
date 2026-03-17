import styles from './Activities.module.css'

const ACTIVITIES = [
  { num:'01', title:'Personal Training', img:'/images/hero_person.png', desc:'One-on-one sessions with a dedicated trainer to fast-track your goals with a personalised approach.' },
  { num:'02', title:'Body Building',     img:'/images/prog_overhead.jpg', desc:'Build serious muscle with guided weight and resistance training from our expert coaches.' },
  { num:'03', title:'Cardio & Endurance',img:'/images/prog_cardio.jpg',   desc:'Improve cardiovascular health with our advanced treadmills, ellipticals, and structured classes.' },
  { num:'04', title:'Steam Bath',        img:'/images/prog_sauna.jpg',    desc:'Relax and detoxify your muscles in our premium steam bath after an intense workout.' },
  { num:'05', title:'Ice Bath Recovery', img:'/images/prog_ice_bath.jpg', desc:'Speed up muscle recovery and reduce inflammation with our specialized ice bath therapy.' },
  { num:'06', title:'Strength Training', img:'/images/prog_deadlift.jpg', desc:'Build strength, endurance, and power through constantly varied high-intensity movements.' },
]

export default function Activities() {
  return (
    <section id="activities" className={`section-pad dark-section`}>
      <div className="container">
        <div className="section-head center sr">
          <span className="eyebrow">What We Offer</span>
          <h2>Our <span className="orange">Activities</span></h2>
          <p>From hardcore bodybuilding to premium recovery options – everything you need in one place.</p>
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
