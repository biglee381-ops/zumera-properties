import React from 'react'
import { motion } from 'framer-motion'

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zumeraproperty/',
    label: 'Visit Zumera on Instagram',
    path: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" /></>,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/search/top?q=Zumera%20Property%20Development%20Limited',
    label: 'Search for Zumera on Facebook',
    path: <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/search/results/companies/?keywords=Zumera%20Property%20Development%20Limited',
    label: 'Search for Zumera on LinkedIn',
    path: <><rect x="3" y="8" width="4" height="13" /><circle cx="5" cy="5" r="2" /><path d="M11 21V8h4v2a4 4 0 0 1 7 3v8h-4v-7a2 2 0 0 0-4 0v7Z" /></>,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/search?q=Zumera%20Property%20Development%20Limited',
    label: 'Search for Zumera on TikTok',
    path: <path d="M15 3h4a5 5 0 0 0 4 4v4a9 9 0 0 1-8-4v8a7 7 0 1 1-7-7h1v4h-1a3 3 0 1 0 3 3V3h4Z" />,
  },
]

function SocialIcon({ item }) {
  return (
    <a href={item.href} aria-label={item.label} title={item.label} target="_blank" rel="noreferrer" className="social-link">
      <svg viewBox="0 0 24 24" aria-hidden="true">{item.path}</svg>
      <span className="sr-only">{item.name}</span>
    </a>
  )
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <motion.div
        className="page-shell footer-main"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-brand-block">
          <a className="brand-lockup footer-brand" href="#hero" aria-label="Zumera home">
            <span className="brand-mark">Z</span>
            <span className="brand-name"><strong>Zumera</strong><span>PROPERTY DEVELOPMENT</span></span>
          </a>
          <p>Places that move you forward.<br />Benin City, Edo State, Nigeria.</p>
        </div>
        <div className="footer-nav-block">
          <span className="footer-heading">EXPLORE</span>
          <a href="#about">Our story</a>
          <a href="#properties">Property & hospitality</a>
          <a href="#contact">Get in touch</a>
        </div>
        <div className="footer-social-block">
          <span className="footer-heading">FOLLOW THE JOURNEY</span>
          <div className="social-links">
            {socials.map(item => <SocialIcon key={item.name} item={item} />)}
          </div>
          <a className="footer-instagram" href="https://www.instagram.com/zumeraproperty/" target="_blank" rel="noreferrer">@zumeraproperty <span aria-hidden="true">↗</span></a>
          <a className="footer-website" href="https://zumeraproperty.com" target="_blank" rel="noreferrer">zumeraproperty.com <span aria-hidden="true">↗</span></a>
        </div>
      </motion.div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Zumera Property Development Limited</span>
        <span>Rooted in Africa. Open to the world.</span>
      </div>
    </footer>
  )
}
