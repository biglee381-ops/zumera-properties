import React from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Properties from './Properties'
import Contact from './Contact'
import SiteFooter from './SiteFooter'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-root font-body text-gray-900 antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Properties />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </MotionConfig>
  )
}
