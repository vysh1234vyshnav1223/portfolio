'use client'

import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="w-full bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] text-gray-800 py-24 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
          <p className="text-gray-700 mb-10 max-w-xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi — I'm just a message away.
          </p>

          <motion.a
            href="mailto:vyshnavnair378@gmail.com"
            className="inline-flex items-center gap-3 text-white bg-accent px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={20} />
            Drop me an email
          </motion.a>
        </div>
      </section>
    </>
  )
}
