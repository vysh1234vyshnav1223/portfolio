'use client'

import SkillsSection from './components/SkillsSection'
import ProjectsOverview from './components/ProjectsOverview'
import AboutOverview from './components/AboutOverview'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/footer'

export default function HomePage() {

  return (
    <>
      <HeroSection/>
      <AboutOverview/>      
      <ProjectsOverview/>
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  )
}
