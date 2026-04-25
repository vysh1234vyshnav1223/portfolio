'use client'

import { motion } from 'framer-motion'
import Footer from '../components/footer'

const tags = [
  'Pipeline Automation', 'Workflow Automation', 'AI-Powered Marketing', 'No-code/Low-code Systems',
  'SEO', 'GTM Engineering', 'Python', 'Vectorshift', 'n8n', 'Apps Script',
  'Content Marketing', 'Marketing Operations', 'Zapier', 'Clay', 'GSC', 'Mixpanel'
]

export default function ProjectsPage() {
  return (
    <>
    <section className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Projects &amp; Case Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Production systems and documented wins. AI pipelines, growth automation, and internal tools - all measurable, all shipped.
        </motion.p>
      </div>

      <div className="overflow-hidden whitespace-nowrap py-6 bg-gray-50 border-y border-gray-200">
        <motion.div
          className="inline-block"
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

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">FirstPage AI</h3>
            <p className="text-gray-600 mb-4">AI-powered landing page copy engine built on Google Generative AI, FAISS-based RAG, and a custom Markdown knowledge base. Generates structured, high-converting copy in seconds.</p>
            <a href="https://firstpage-ai.onrender.com/" className="text-accent font-semibold underline">Try it out</a>
          </div>
          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">On-Page SEO Checker</h3>
            <p className="text-gray-600 mb-4">No-code SEO audit tool built on Appsmith, Apify, and Apps Script. Scans pages and delivers instant, actionable SEO insights for content teams who need fast audits without technical overhead.</p>
            <a href="https://app.appsmith.com/app/on-page-seo-checker/home-6787d945c04e2645a435c16b" className="text-accent font-semibold underline">Try it out</a>
          </div>
          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">WeThePeople – Crowdfunding Platform</h3>
            <p className="text-gray-600 mb-4">MERN stack crowdfunding web app for social impact campaigns. Features user authentication, real-time donations, campaign pages, and progress tracking.</p>
            <a href="https://wethepeople-project.onrender.com/" className="text-accent font-semibold underline">Try it out</a>
          </div>
          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">Learnpath</h3>
            <p className="text-gray-600 mb-4">Personalized learning roadmap generator that adapts to your background and goals. Structured, day-by-day curricula instead of open-ended AI chats, built for marketers learning SQL, Python, or data analytics.</p>
            <a href="https://learnpath-omega.vercel.app/" className="text-accent font-semibold underline">Try it out</a>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2 block">AI Automation</span>
            <h3 className="text-xl font-bold mb-2">Vectorshift Pipeline Builder Automation</h3>
            <p className="text-gray-600 mb-4">Building pipelines on Vectorshift used to take 2+ hours each. Wrote a Python script using the Vectorshift SDK and AI to automate the entire build process, cutting pipeline creation down to minutes and making it repeatable for any new workflow.</p>
            <span className="text-gray-400 text-sm font-medium">Case study available on request</span>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2 block">AI Content Systems</span>
            <h3 className="text-xl font-bold mb-2">AI-Driven Internal Linking System</h3>
            <p className="text-gray-600 mb-4">Built an internal linking pipeline on Vectorshift where AI-generated content passes through an AI node that identifies and inserts contextually relevant internal links across pages. Eliminated the manual linking process at scale.</p>
            <span className="text-gray-400 text-sm font-medium">Case study available on request</span>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2 block">AI Content Systems</span>
            <h3 className="text-xl font-bold mb-2">Content Audit Automation Pipeline</h3>
            <p className="text-gray-600 mb-4">Automated the full content audit workflow. Pages are checked against dedicated templates and schema definitions that score content and surface actionable issues automatically, cutting audit cycles from weeks to hours.</p>
            <span className="text-gray-400 text-sm font-medium">Case study available on request</span>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2 block">AI Content Systems</span>
            <h3 className="text-xl font-bold mb-2">Report Automation Pipeline</h3>
            <p className="text-gray-600 mb-4">Built a reporting pipeline that aggregates data from GSC and analytics, processes it through an AI layer, and delivers formatted stakeholder reports automatically. No manual spreadsheet work, runs on its own.</p>
            <span className="text-gray-400 text-sm font-medium">Case study available on request</span>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">GTM Request Automation Workflow</h3>
            <p className="text-gray-600 mb-4">A fully automated demo request workflow that enriches lead data, scores prospects using AI, and sends a personalised email — all within 4 minutes of form submission. Built for B2B startups that cannot afford to follow up slowly.</p>
            <a href="https://lofty-submarine-301.notion.site/Request-Automation-Workflow-3267873b02778073ac79eb3f785cb894" className="text-accent font-semibold underline">Read more</a>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">Taskflow GTM Engine</h3>
            <p className="text-gray-600 mb-4">Built a full PLG-ready GTM engine that scores users and accounts from product events and automatically routes PQLs and PQAs into HubSpot with tasks and deals, entirely on free-tier tools.</p>
            <a href="https://lofty-submarine-301.notion.site/TaskFlow-GTM-Engine-Case-Study-Documentation-2c37873b0277805cb804f34a9f4a21b7?pvs=74" className="text-accent font-semibold underline">Read more</a>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">Pirate Funnel for an SEO Tool</h3>
            <p className="text-gray-600 mb-4">Applied the AARRR framework to analyze and optimize the growth journey of an SEO tool. Mapped key user touchpoints, identified activation drop-offs, and proposed funnel improvements to boost trial conversions and referral loops.</p>
            <a href="https://lofty-submarine-301.notion.site/Building-a-Pirate-Funnel-for-an-SEO-Tool-My-Learnings-1b77873b027780aca8d1c3074f198613/" className="text-accent font-semibold underline">Read more</a>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">Retention Playbook for a Meditation App</h3>
            <p className="text-gray-600 mb-4">Built a retention strategy using cohort analysis, behavioral insights, and lifecycle nudges. Covered activation tweaks, habit loops, and personalized re-engagement campaigns targeting Day 1, 7, and 30 retention across core user segments.</p>
            <a href="https://lofty-submarine-301.notion.site/Retention-Playbook-How-to-Keep-Meditation-App-Users-Engaged-Beyond-Day-14-1e97873b02778096aef8c9c1bb6f12cf?pvs=25" className="text-accent font-semibold underline">Read more</a>
          </div>

          <div className="p-6 border-2 border-accent/30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cyan-50/40">
            <h3 className="text-xl font-bold mb-2">Marketing Psychology – Comet</h3>
            <p className="text-gray-600 mb-4">Deep dive into how one of India's most distinctive brands applies psychological tactics to drive marketing results, covering anchoring, scarcity, social proof, and more.</p>
            <a href="https://lofty-submarine-301.notion.site/Marketing-Psychology-Comet-1a07873b02778013b3b5d4f6c736b005/" className="text-accent font-semibold underline">Read more</a>
          </div>

        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
