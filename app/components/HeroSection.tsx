'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Rocket, Code2, MousePointerClick, Wand2 } from 'lucide-react'

const specialties = [
  'Pipeline Automation',
  'Workflow Automation',
  'AI-Powered Marketing',
  'No-code/Low-code Systems',
]

export default function HeroSection() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section className="relative pt-24 pb-12 px-4 overflow-hidden bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] text-gray-800 flex flex-col justify-start items-center text-center min-h-[calc(100vh-64px)]">
      <div className="absolute w-[35rem] h-[35rem] bg-white/30 border border-white/20 shadow-xl blur-[100px] rounded-full top-16 -left-24 -z-10" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[8%] w-32 h-32 bg-cyan-200/30 blur-3xl rounded-full z-[-1]" />
        <div className="absolute bottom-[15%] right-[10%] w-40 h-40 bg-cyan-200/40 blur-2xl rounded-full z-[-1]" />
        <Rocket className="absolute top-[10%] left-[8%] text-cyan-600/60 w-20 h-20 drop-shadow-md animate-drift-one" />
        <Code2 className="absolute top-[30%] right-[6%] text-cyan-600/60 w-16 h-16 drop-shadow-md animate-drift-two delay-1000" />
        <MousePointerClick className="absolute bottom-[20%] left-[10%] text-cyan-600/60 w-24 h-24 drop-shadow-md animate-drift-three delay-2000" />
        <Wand2 className="absolute bottom-[12%] right-[10%] text-cyan-600/60 w-20 h-20 drop-shadow-md animate-drift-one delay-3000" />
      </div>

      <div
        className="relative w-44 h-44 md:w-56 md:h-56 mb-10 cursor-pointer perspective"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full transition-transform duration-700 preserve-3d"
          style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
        >
          <motion.img
            src="/avatar7.jpeg"
            alt="Front"
            className="absolute w-full h-full object-cover rounded-xl border-4 border-white shadow-lg backface-hidden transition-transform duration-300"
            animate={{ opacity: flipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/avatar8.jpeg"
            alt="Back"
            className="absolute w-full h-full object-cover rounded-xl border-4 border-white shadow-lg rotate-y-180 backface-hidden transition-transform duration-300"
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hey, I'm <span className="text-accent">Vyshnav</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl"
      >
        I build{' '}
        <span className="text-accent font-semibold">AI-powered marketing systems</span>{' '}
        that let growth teams scale without scaling headcount.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="mt-4 flex flex-wrap gap-2 justify-center"
      >
        {specialties.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1.5 rounded-full border border-cyan-400/60 text-cyan-700 bg-white/60 backdrop-blur-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="/projects"
          className="bg-gradient-to-r from-accent to-cyan-500 text-white px-6 py-3 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          Let's Talk
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
        className="mt-10 text-gray-600 animate-bounce text-sm"
      >
        Scroll for more
      </motion.div>
    </section>
  )
}
