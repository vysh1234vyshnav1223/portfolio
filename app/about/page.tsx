'use client'

import { motion } from 'framer-motion'
import Footer from '../components/footer'

export default function AboutPage() {
  return (
    <>
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-700 mb-4">
            Content systems engineer. Growth specialist. Builder of things that automate the tedious.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 group">
            <img
              src="/avatar4.jpeg"
              alt="Vyshnav"
              className="absolute w-full h-full object-cover rounded-xl shadow-xl transform group-hover:scale-105 transition duration-300 border-4 border-white"
            />
            <img
              src="/avatar6.jpeg"
              alt="Vyshnav Back"
              className="absolute w-full h-full object-cover rounded-xl shadow-xl transform scale-105 rotate-6 group-hover:-rotate-6 transition duration-300 border-4 border-white opacity-0 group-hover:opacity-100"
            />
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          The longer version
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed space-y-6"
        >
          <p>
            I work at the intersection of marketing, AI, and engineering. My job is to give growth teams leverage by building systems and pipelines that scale output without scaling headcount.
          </p>
          <p>
            My background spans the full growth stack: SEO, content marketing, performance marketing, CRM, marketing operations, and the automation layer that ties it all together. I have run end-to-end campaigns, managed organic growth, built internal tools, and shipped AI pipelines that solve real problems for real teams.
          </p>
          <p>
            More recently, I have been building AI-powered workflows on platforms like Vectorshift and N8N, automating processes that used to eat hours, building audit systems that surface actionable fixes automatically, and writing custom Python scripts to streamline what teams previously did by hand. If there is a repetitive process in a marketing workflow, I have probably built something to automate it.
          </p>
          <p>
            What makes this interesting is where I sit. I can think in marketing strategy and execute in Python, n8n, or Vectorshift. I understand the content objectives well enough to build systems that actually serve them, not just automate for the sake of it. This intersection between content, AI, and engineering means I add value across functions rather than just one lane.
          </p>
          <p>
            I am looking for teams that want to scale their marketing efforts with AI and automation, where there is real ambition and room to build. If that sounds like you, let us talk.
          </p>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  )
}
