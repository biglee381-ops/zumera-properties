import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-2xl font-heading font-bold sm:text-3xl">About Zumera Properties</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg">Zumera Properties LTD specialises in delivering premium real estate experiences. From modern apartments to expansive estates, every project blends design, location and quality.</p>
        </motion.div>
      </div>
    </section>
  )
}
