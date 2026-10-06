import React from 'react'
import { motion } from 'framer-motion'
import heroImage from './assets/project_img_1.jpg'

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <img className="hero-image" src={heroImage} alt="" fetchpriority="high" />
      <div className="hero-shade" />
      <div className="hero-grain" />
      <div className="hero-content page-shell">
        <motion.div initial="hidden" animate="visible" variants={entrance} className="hero-copy">
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> BENIN CITY · EDO STATE · NIGERIA</span>
          <h1>Places that move<br /><em>you forward.</em></h1>
          <p className="hero-intro">Property development and considered hospitality, rooted in Africa and made for the way the world wants to live.</p>
          <div className="hero-actions">
            <a href="#properties" className="button button-gold">Discover Zumera <span aria-hidden="true">↗</span></a>
            <a href="#about" className="text-link text-link-light">Our point of view <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note">
            <span className="hero-note-line" />
            <span>To reveal Africa’s power, freedom and beauty to the world through a new standard of peerless hospitality.</span>
          </div>
        </motion.div>
        <motion.div
          className="hero-glass-card glass-panel"
          initial={{ opacity: 0, y: 20, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="hero-card-index">01 / OUR WORLD</span>
          <span className="hero-card-title">A more thoughtful<br />way to arrive.</span>
          <span className="hero-card-location"><span aria-hidden="true">⌖</span> Benin City, Nigeria</span>
        </motion.div>
        <a className="hero-scroll" href="#about"><span /> SCROLL TO EXPLORE</a>
      </div>
    </section>
  )
}
