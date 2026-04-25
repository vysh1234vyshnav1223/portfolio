'use client'

import { motion } from 'framer-motion'

export default function AboutOverview() {
  return (
    <section className="w-full py-24 px-4 bg-white text-gray-800" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-full md:w-1/2 relative h-[280px] flex items-center justify-center group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute w-40 h-56 transition-all duration-300 group-hover:translate-x-[-120px] group-hover:rotate-[-20deg] group-hover:scale-105 group-hover:z-50">
            <img
              src="/avatar1.jpeg"
              alt="Vyshnav"
              className="w-full h-full object-cover rounded-xl border-4 border-white shadow-lg transform rotate-[-8deg] translate-x-[-20px] translate-y-[10px] transition-all duration-300"
            />
          </div>

          <div className="absolute w-40 h-56 z-10 transition-all duration-300 group-hover:translate-x-0 group-hover:rotate-[0deg] group-hover:scale-110 group-hover:z-50">
            <img
              src="/avatar2.jpeg"
              alt="Vyshnav"
              className="w-full h-full object-cover rounded-xl border-4 border-white shadow-lg transform rotate-[4deg] translate-x-[10px] translate-y-[20px] transition-all duration-300"
            />
          </div>

          <div className="absolute w-40 h-56 z-20 transition-all duration-300 group-hover:translate-x-[120px] group-hover:rotate-[20deg] group-hover:scale-105 group-hover:z-50">
            <img
              src="/avatar5.jpeg"
              alt="Vyshnav"
              className="w-full h-full object-cover rounded-xl border-4 border-white shadow-xl transform rotate-[-2deg] transition-all duration-300"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
            I build AI-powered systems for marketing and growth teams, combining strategy with technical execution. I work across content, SEO, automation, and marketing ops, and I specialise in turning manual, time-heavy workflows into things that run themselves.
          </p>
          <a href="/about" className="relative group text-accent font-medium">
            Learn more
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
