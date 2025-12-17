'use client'

import { motion } from 'framer-motion'
import Footer from '../components/footer'

const tags = [
  'SEO', 'CRM automation', 'Automation', 'Zapier', 'GTM engineering',
  'Marketing operations', 'No-code/low-code builder', 'Content Marketing',
  'Looker', 'GSC', 'Mixpanel', 'APIs', 'Notion', 'Make.com', 'Attribution modelling'
]

export default function ProjectsPage() {
  return (
    <>
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Projects & Case Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Explore a curated collection of my work — from passion projects to data-driven growth case studies.
        </motion.p>
      </div>

      {/* Infinite Scrolling Tag Banner */}
      <div className="overflow-hidden whitespace-nowrap py-6 bg-gray-50 border-y border-gray-200">
        <motion.div
          className="inline-block animate-scroll-left"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
        >
          {[...tags, ...tags].map((tag, index) => (
            <span
              key={index}
              className="inline-block mx-6 text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>


      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">FirstPage AI</h3>
            <p className="text-gray-600 mb-2">A landing page ideation tool powered by Google’s Generative AI, FAISS-based RAG, and a custom Markdown knowledge base. It helps solopreneurs and founders generate high-converting landing page copy in seconds with no guesswork, and no fluff.</p>
            <a href="https://firstpage-ai.onrender.com/" className="text-accent font-semibold underline">Try it out →</a>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">On Page SEO Checker Tool</h3>
            <p className="text-gray-600 mb-2">A no-code SEO utility built using Appsmith, Apify, and Apps Script(Google Sheets). It scans web pages and gives instant, actionable SEO insights. It is perfect for marketers and content teams who want fast audits without technical hassle.</p>
            <a href="https://app.appsmith.com/app/on-page-seo-checker/home-6787d945c04e2645a435c16b" className="text-accent font-semibold underline">Try it out →</a>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">WeThePeople – Crowdfunding Platform</h3>
            <p className="text-gray-600 mb-2">A MERN stack-powered crowdfunding web app focused on social impact campaigns. Features include user authentication, real-time donations, campaign pages, and progress tracking. All wrapped in a clean, responsive UI.</p>
            <a href="https://wethepeople-project.onrender.com/" className="text-accent font-semibold underline">Try it out →</a>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Marketing Pyschology - Comet</h3>
            <p className="text-gray-600 mb-2">Deep dive into how one of the most coolest brands in India apply pyschological tactics and drive marketing results.</p>
            <a href="https://lofty-submarine-301.notion.site/Marketing-Psychology-Comet-1a07873b02778013b3b5d4f6c736b005/" className="text-accent font-semibold underline">Read more →</a>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Pirate funnel for an SEO tool</h3>
            <p className="text-gray-600 mb-2">Applied the AARRR framework to analyze and optimize the growth journey of an SEO tool. Mapped key user touchpoints from acquisition to referral, identified activation drop-offs, and proposed funnel improvements to boost user engagement, trial conversions, and referral loops.</p>
            <a href="https://lofty-submarine-301.notion.site/Building-a-Pirate-Funnel-for-an-SEO-Tool-My-Learnings-1b77873b027780aca8d1c3074f198613/" className="text-accent font-semibold underline">Read more →</a>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Retention Playbook for an Meditation App</h3>
            <p className="text-gray-600 mb-2">Built a retention strategy for a meditation app using cohort analysis, behavioral insights, and lifecycle nudges. The playbook included activation tweaks, habit loops, and personalized re-engagement campaigns aimed at improving Day 1, 7, and 30 retention across core user segments.</p>
            <a href="https://lofty-submarine-301.notion.site/Retention-Playbook-How-to-Keep-Meditation-App-Users-Engaged-Beyond-Day-14-1e97873b02778096aef8c9c1bb6f12cf?pvs=25" className="text-accent font-semibold underline">Read more →</a>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Taskflow GTM Engine</h3>
            <p className="text-gray-600 mb-2">Built a full PLG-ready GTM engine that scores users/accounts from product events and automatically routes PQLs/PQAs into HubSpot with tasks and deals - entirely on free-tier tools.</p>
            <a href="https://lofty-submarine-301.notion.site/TaskFlow-GTM-Engine-Case-Study-Documentation-2c37873b0277805cb804f34a9f4a21b7?pvs=74" className="text-accent font-semibold underline">Read more →</a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
