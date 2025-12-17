'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Rocket, Code2, MousePointerClick, Wand2 } from 'lucide-react'

export default function HeroSection() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section className="relative pt-24 pb-12 px-4 overflow-hidden bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] text-gray-800 flex flex-col justify-start items-center text-center min-h-[calc(100vh-64px)]">
      {/* Glass Blob */}
      <div className="absolute w-[35rem] h-[35rem] bg-white/30 border border-white/20 shadow-xl blur-[100px] rounded-full top-16 -left-24 -z-10" />

      {/* Background blobs and icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[8%] w-32 h-32 bg-cyan-200/30 blur-3xl rounded-full z-[-1]" />
        <div className="absolute bottom-[15%] right-[10%] w-40 h-40 bg-cyan-200/40 blur-2xl rounded-full z-[-1]" />

        <Rocket className="absolute top-[10%] left-[8%] text-cyan-600/60 w-20 h-20 drop-shadow-md animate-drift-one" />
        <Code2 className="absolute top-[30%] right-[6%] text-cyan-600/60 w-16 h-16 drop-shadow-md animate-drift-two delay-1000" />
        <MousePointerClick className="absolute bottom-[20%] left-[10%] text-cyan-600/60 w-24 h-24 drop-shadow-md animate-drift-three delay-2000" />
        <Wand2 className="absolute bottom-[12%] right-[10%] text-cyan-600/60 w-20 h-20 drop-shadow-md animate-drift-one delay-3000" />
      </div>

      {/* Flip Avatar */}
      <div
        className="relative w-44 h-44 md:w-56 md:h-56 mb-10 cursor-pointer perspective"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full transition-transform duration-700 preserve-3d"
          style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
        >
          {/* Front Image */}
          <motion.img
            src="/avatar7.jpeg"
            alt="Front"
            className="absolute w-full h-full object-cover rounded-xl border-4 border-white shadow-lg backface-hidden group-hover:scale-105 transition-transform duration-300"
            animate={{ opacity: flipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          {/* Back Image */}
          <motion.img
            src="/avatar8.jpeg"
            alt="Back"
            className="absolute w-full h-full object-cover rounded-xl border-4 border-white shadow-lg rotate-y-180 backface-hidden group-hover:scale-105 transition-transform duration-300"
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        👋 Hey, I'm <span className="text-accent">Vyshnav</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl"
      >
        I’m into{' '}
        <span className="text-accent font-semibold">
          <Typewriter
            words={[
              'Growth Marketing',
              'No-code/Low-code automation',
              'GTM Engineering',
              'Marketing operations',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="/projects"
          className="bg-gradient-to-r from-accent to-cyan-500 text-white px-6 py-3 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          See My Magic ✨
        </a>
        <a
          href="#contact"
          className="border border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          Let’s Talk 👀
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
        className="mt-10 text-gray-600 animate-bounce text-sm"
      >
        ↓ Scroll for more
      </motion.div>
    </section>
  )
}
