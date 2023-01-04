import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PriceCard from '../components/PriceCard'
import ProjectImg from '../components/ProjectImg'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg
          heading="Projects."
          text="Some of my most recent works"
      />
      <Work/>
      <PriceCard/>
      <Footer/>
    </div>
  )
}

export default Project