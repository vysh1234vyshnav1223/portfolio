'use client'

import { motion } from 'framer-motion'

export default function ProjectsSection() {
  return (
    <section className="w-full py-24 px-4 bg-gray-50 text-gray-800" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects/Case Studies
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.a
            href="/projects"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/project1.png"
              alt="Project 1"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Firstpage AI</h3>
              <p className="text-gray-600 text-sm mb-2">Google Generative AI, FAISS (RAG), Markdown knowledge base, Python</p>
            </div>
          </motion.a>

          {/* Project 2 */}
          <motion.a
            href="/projects"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <img
              src="/project2.png"
              alt="Project 2"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">On page SEO Checker</h3>
              <p className="text-gray-600 text-sm mb-2">Appsmith, Apify, Apps Script (Google Sheets)</p>
            </div>
          </motion.a>

          {/* Project 3 */}
          <motion.a
            href="/projects"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src="/project3.png"
              alt="Project 3"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Marketing Psychology - “Comet”</h3>
              <p className="text-gray-600 text-sm mb-2">Marketing fundamentals, Growth loops, Brand marketing</p>
            </div>
          </motion.a>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-10">
          <a href="/projects" className="relative group text-accent font-medium">
            View all projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  )
}
