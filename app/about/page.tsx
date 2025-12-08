'use client'

import { motion } from 'framer-motion'
import Footer from '../components/footer'

export default function AboutPage() {
  return (
    <>
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl font-bold mb-6">Hello there 👋</h1>
          <p className="text-lg text-gray-700 mb-4">
            The ‘About Me’ bit you actually want to read ↓
          </p>
        </motion.div>

        {/* Image Section */}
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
      {/* In-depth Description Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          My Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 leading-relaxed space-y-4"
        >
          <>
            <span>
              I didn’t exactly set out to become a digital marketer. I kind of stumbled into it. But once I realized the fun part, there was no going back.
            </span>
            <br />
            <br />
            <span>
              Over the past few years, I’ve worked primarily in the organic growth side of marketing (SEO, Content, Social Media, and Marketing Operations).
              I’ve been building systems that get attention and convert. From optimizing blogs that drive traffic to building internal tools using no-code platforms,
              I love tinkering with things until they just work smarter.
            </span>
            <br />
            <br />
            <span>
              Most recently, I’ve been diving into performance marketing to complete the paid side of the growth puzzle. I also enjoy automating workflows,
              processes, and manual tasks, the kind that save hours of repetitive work for my team.
            </span>
            <br />
            <br />
            <span>
              I’m not here to throw jargon or buzzwords. I like building cool stuff, sharing what I learn, and chasing wins. One experiment at a time.
            </span>
            <br />
            <br />
            <span className="font-semibold text-gray-700">My goals:</span>
            <ul className="list-disc list-inside mt-2 text-base text-gray-600">
              <li>Help teams focus on meaningful decisions - not manual tasks through automation.</li>
              <li>Become a full-stack growth marketer who doesn’t rely on just one channel to drive results.</li>
            </ul>
          </>
        </motion.p>

      </div>
    </section>
    <Footer />
    </>
  )
}
