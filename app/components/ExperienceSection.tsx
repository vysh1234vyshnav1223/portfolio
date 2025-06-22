'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const timeline = [
  { label: '2020', title: 'Started My Journey', desc: 'Started freelancing in SEO, content and social media marketing' },
  { label: 'Dec 2021 – May 2023', title: 'Digital Marketing Specialist', desc: 'Writtenlyhub' },
  { label: 'May 2023 – Present', title: 'Content Coordinator', desc: 'Headout' },
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

  return (
    <section className="w-full py-20 px-4 bg-white text-gray-800" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">My Journey</h2>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:flex relative w-full flex-col items-center">
          <div className="relative w-full h-1 bg-gray-200 rounded-full">
            <motion.div
              className="absolute h-1 bg-accent rounded-full top-0 left-0"
              animate={{ width: `${(targetProgressPointIndex / timeline.length) * 100}%` }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute left-0 top-1/2 w-full flex justify-between transform -translate-y-1/2">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center relative"
                  style={{ width: `${100 / timeline.length}%` }}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full border-4 z-10 shadow-md transition-all duration-300 ${index < activeStep ? 'bg-accent border-white shadow-accent-glow scale-110' : 'bg-gray-300 border-gray-100'}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  <div className="mt-10">
                    <div className="text-sm font-medium text-accent mb-1">{item.label}</div>
                    <div className="text-xs text-gray-600">{item.title}</div>
                    <div className="text-[11px] text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="flex flex-col space-y-8 md:hidden mt-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`w-4 h-4 rounded-full border-4 ${index < activeStep ? 'bg-accent border-white shadow-accent-glow' : 'bg-gray-300 border-gray-100'}`} />
              <div>
                <div className="text-sm font-medium text-accent">{item.label}</div>
                <div className="text-xs text-gray-600">{item.title}</div>
                <div className="text-[12px] text-gray-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
