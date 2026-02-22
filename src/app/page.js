import HeroSection from '@/components/HeroSection'
import React from 'react'
import About from './about/page'
import Projects from './projects/page'
import Contact from './contact/page'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
