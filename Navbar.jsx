import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'Our story' },
  { href: '#properties', label: 'Explore' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-nav-wrap">
        <a className="brand-lockup" href="#hero" aria-label="Zumera home">
          <span className="brand-mark">Z</span>
          <span className="brand-name">
            <strong>Zumera</strong>
            <span>PROPERTY DEVELOPMENT</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <a className="nav-cta" href="#contact">
          <span>Start a conversation</span><span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
