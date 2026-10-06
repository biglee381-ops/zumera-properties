import React from 'react'
import { motion } from 'framer-motion'

const list = [
  {id:1,title:'Oceanview Penthouse',location:'Miami, FL',price:'$3,250,000',img:'https://images.unsplash.com/photo-1505691723518-36a0f6b7f510?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0'},
  {id:2,title:'City Centre Loft',location:'London, UK',price:'$1,150,000',img:'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0'},
  {id:3,title:'Countryside Villa',location:'Tuscany, IT',price:'$2,400,000',img:'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0'}
]

export default function Properties(){
  return (
    <section id="properties" className="section bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-2xl font-heading font-bold sm:text-3xl">Featured Properties</h2>
        </motion.div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {list.map(item=> (
            <motion.article key={item.id} whileHover={{y:-6, scale:1.01}} className="min-w-0 overflow-hidden rounded-xl bg-white shadow">
              <img src={item.img} alt={item.title} className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
              <div className="p-4">
                <h3 className="break-words font-semibold">{item.title}</h3>
                <div className="text-sm text-gray-500">{item.location}</div>
                <div className="mt-2 font-bold">{item.price}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
