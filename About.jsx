import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from './assets/project_img_5.jpg'

const values = [
  { number: '01', title: 'Place, with purpose', text: 'Thoughtful development begins by understanding the character and possibility of a place.' },
  { number: '02', title: 'Hospitality, by nature', text: 'Every detail should make people feel welcomed, cared for and free to discover.' },
  { number: '03', title: 'Africa, in focus', text: 'We share the richness and potential of African places with a wider world.' },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="page-shell">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> A PLACE FOR POSSIBILITY</span>
            <h2>Built around the<br /><em>feeling of belonging.</em></h2>
          </div>
          <div className="about-description">
            <p>Zumera Property Development Limited is a real estate and hospitality company based in Benin City, Edo State.</p>
            <p>We believe places can do more than look beautiful. They can open doors, bring people together and reveal something wonderful about where they are.</p>
            <a href="#contact" className="text-link">Get to know us <span aria-hidden="true">↗</span></a>
          </div>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-wrap">
            <img src={aboutImage} alt="Contemporary architecture framed by natural light" loading="lazy" />
            <div className="image-glass-note glass-panel">
              <span className="image-note-label">OUR POINT OF VIEW</span>
              <span>Design that feels<br />at home in its place.</span>
            </div>
          </div>
          <div className="about-values">
            {values.map((value, index) => (
              <motion.article
                key={value.number}
                className="value-item"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
              >
                <span className="value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
