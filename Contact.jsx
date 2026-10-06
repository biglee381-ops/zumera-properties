import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="section bg-white">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-2xl font-heading font-bold sm:text-3xl">Get in touch</h2>
          <p className="mt-2 text-gray-600">Reach out for enquiries, viewings or bespoke services.</p>
          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input aria-label="Your name" autoComplete="name" className="min-h-12 w-full min-w-0 rounded border p-3 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="Your name" />
            <input aria-label="Email" type="email" autoComplete="email" className="min-h-12 w-full min-w-0 rounded border p-3 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="Email" />
            <textarea aria-label="Message" className="w-full min-w-0 rounded border p-3 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 sm:col-span-2" rows="4" placeholder="Message"></textarea>
            <div className="sm:col-span-2">
              <button type="button" className="btn-primary min-h-12 w-full rounded bg-brand-500 px-6 py-3 text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 sm:w-auto">Send message</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
