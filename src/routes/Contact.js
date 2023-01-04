import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectImg from '../components/ProjectImg'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ProjectImg
       heading="CONTACT."
       text="Lets have a chat"
      />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact