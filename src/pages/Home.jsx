import React, { useMemo } from 'react'
import Header from '../components/Header'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import WorkSection from '../components/WorkSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home