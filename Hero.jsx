import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero(){
  return (
    <section className="section bg-hero flex items-center" id="hero">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.h1 variants={fadeUp} className="max-w-2xl text-4xl font-heading font-extrabold leading-tight sm:text-5xl md:text-6xl">Zumera Properties LTD</motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">Premium residential and commercial properties crafted for modern living. Explore curated homes and bespoke property services.</motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#properties" className="btn-primary inline-flex min-h-12 items-center justify-center rounded bg-brand-500 px-6 py-3 text-center text-white shadow hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">Explore Properties</a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded border border-gray-200 px-6 py-3 text-center hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">Get in touch</a>
          </motion.div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.15}} className="w-full min-w-0">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl">
            <img src="https://images.unsplash.com/photo-1560184897-6a1b6a9b9d1f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0" alt="Premium property" className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] md:aspect-[4/3]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
