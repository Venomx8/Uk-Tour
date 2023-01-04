import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectImg from '../components/ProjectImg'

const About = () => {
  return (
    <div>
      <Navbar/>
       <ProjectImg
        heading="ABOUT ME."
        text="Im a friendally Full Stack Developer."
       />
       <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About