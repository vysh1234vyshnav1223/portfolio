'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    label: '2020',
    title: 'Freelance SEO & Content',
    desc: 'Built content workflows and SEO systems for early-stage clients',
  },
  {
    label: 'Dec 2021 – May 2023',
    title: 'Digital Marketing Specialist',
    desc: 'Writtenlyhub · SEO, content pipelines, and marketing automation',
  },
  {
    label: 'May 2023 – Present',
    title: 'Content & Growth Specialist',
    desc: 'Headout · AI pipelines, content systems, and workflow automation at scale',
  },
]

export default function ExperienceSection() {
  const [activeStep, setActiveStep] = useState(0)
  const targetProgressPointIndex = timeline.length

  useEffect(() => {
    if (activeStep >= targetProgressPointIndex) return
    const interval = setInterval(() => {
      setActiveStep(prev => (prev < targetProgressPointIndex ? prev + 1 : prev))
    }, 300)
    return () => clearInterval(interval)
  }, [activeStep, targetProgressPointIndex])

  const colWidth = 100 / timeline.length
  const lineOffset = `${colWidth / 2}%`

  return (
    <section className="w-full py-20 px-4 bg-white text-gray-800" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">My Journey</h2>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative w-full">
          {/* Line sits at the vertical center of the dots (dot height = 24px, so top = 12px) */}
          <div
            className="absolute h-1 bg-gray-200 rounded-full"
            style={{ top: '12px', left: lineOffset, right: lineOffset }}
          >
            <motion.div
              className="h-1 bg-accent rounded-full"
              animate={{ width: '100%' }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Dots and text — natural flow, dots appear at top → line centered on them */}
          <div className="flex justify-between">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                style={{ width: `${colWidth}%` }}
              >
                <motion.div
                  className={`w-6 h-6 rounded-full border-4 z-10 shadow-md transition-all duration-300 ${
                    index < activeStep
                      ? 'bg-accent border-white scale-110'
                      : 'bg-gray-300 border-gray-100'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <div className="mt-5 px-2">
                  <div className="text-sm font-semibold text-accent mb-1">{item.label}</div>
                  <div className="text-sm font-medium text-gray-700">{item.title}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="flex flex-col space-y-8 md:hidden mt-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`w-4 h-4 rounded-full border-4 mt-1 flex-shrink-0 ${
                  index < activeStep ? 'bg-accent border-white' : 'bg-gray-300 border-gray-100'
                }`}
              />
              <div>
                <div className="text-sm font-semibold text-accent">{item.label}</div>
                <div className="text-sm font-medium text-gray-700">{item.title}</div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
