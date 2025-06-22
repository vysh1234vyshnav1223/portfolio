'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  {
    name: 'What I Do',
    content: [
      'Growth Marketing',
      'SEO',
      'Content Marketing',
      'Marketing Operations',
      'Web Development',
      'No-code/Low-code Automation',
      'AI Content Creation',
    ],
  },
  {
    name: 'Soft Skills',
    content: [
      'Time Management',
      'Project Management',
      'Problem Solving',
      'Team Player',
      'Adaptability',
    ],
  },
  {
    name: 'Tools I Use',
    content: [
      'Google Search Console',
      'Google Analytics 4',
      'Google Sheets + Apps Script',
      'Ahrefs',
      'SEMrush',
      'Looker',
      'Mixpanel',
      'Zapier',
      'WordPress',
      'Vectorshift',
      'Make',
      'Pipedream'
    ],
  },
]

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="w-full py-24 px-4 bg-white text-gray-800" id="skills">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center mb-10">Skills & Tools</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 border-b border-gray-200 mb-8">
          {TABS.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className={`relative pb-2 px-2 text-sm font-medium transition-colors ${
                activeTab === index
                  ? 'text-accent'
                  : 'text-gray-500 hover:text-accent'
              }`}
            >
              {tab.name}
              {activeTab === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-0.5 w-full bg-accent"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {TABS[activeTab].content.map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-sm px-4 py-2 rounded-full text-gray-700 hover:bg-accent hover:text-white transition"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
