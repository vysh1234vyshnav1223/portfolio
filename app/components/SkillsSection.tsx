'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TABS = [
  {
    name: 'What I Build',
    content: [
      'AI-Powered Marketing Systems',
      'Pipeline and Workflow Automation',
      'No-code/Low-code Internal Tools',
      'Content Systems',
      'SEO',
      'Growth Marketing',
      'GTM Engineering',
      'Marketing Operations',
    ],
  },
  {
    name: 'Soft Skills',
    content: [
      'Systems Thinking',
      'Project Management',
      'Problem Solving',
      'Cross-functional Collaboration',
      'Adaptability',
    ],
  },
  {
    name: 'Tools and Stack',
    content: [
      'Python',
      'JavaScript',
      'SQL',
      'Vectorshift',
      'LLM API Integration',
      'Coding Agents',
      'n8n',
      'Make / Zapier',
      'Google Sheets + Apps Script',
      'Google Search Console',
      'Ahrefs / SEMrush',
      'Looker',
      'Mixpanel',
      'Clay',
    ],
  },
]

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="w-full py-24 px-4 bg-white text-gray-800" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Skills and Tools</h2>

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
