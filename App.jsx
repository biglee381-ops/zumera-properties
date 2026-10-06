import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Properties from './Properties'
import Contact from './Contact'

export default function App(){
  return (
    <div className="font-body text-gray-900 antialiased">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Properties />
        <Contact />
      </main>
    </div>
  )
}
