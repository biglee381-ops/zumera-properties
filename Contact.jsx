import React from 'react'
import { motion } from 'framer-motion'

const whatsappUrl = 'https://wa.me/2347045068663?text=Hello%20Zumera%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%20your%20property%20and%20hospitality%20opportunities.'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orb contact-orb-one" />
      <div className="contact-orb contact-orb-two" />
      <motion.div
        className="page-shell contact-content"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-copy">
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> LET’S BEGIN</span>
          <h2>Good things start<br />with <em>a conversation.</em></h2>
          <p>Tell us what you’re looking for. Our team in Benin City is ready to help you find a way forward.</p>
        </div>
        <motion.div className="contact-action glass-panel" whileHover={{ y: -4 }}>
          <span className="contact-action-kicker">SPEAK WITH OUR TEAM</span>
          <span className="contact-number">+234 704 506 8663</span>
          <a
            className="button button-gold whatsapp-button"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="whatsapp-icon"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.92 11.92 0 0 0 5.75 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.5-8.41Zm-8.44 18.32h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.94 9.92Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.1 4.5.7.3 1.25.48 1.68.62.7.22 1.33.19 1.83.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" /></svg>
            Message us on WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-action-note">Usually the quickest way to reach us.</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
