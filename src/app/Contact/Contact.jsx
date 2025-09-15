import React from 'react'
import ContactForm from '../../components/Contact component/ContactForm'
import Map from '../../components/Contact component/Map'
import Hero from '../../components/Home components/Hero'

const Contact = () => {
 const heroData={
    title:"Let’s Build  ",
    title2:"Something Together",
    desc:"Have an idea or a project in mind? We’d love to hear about it. Our team is ready to help you bring it to life.",
   }
  return (
    <div>
        <Hero data={heroData}/>
        <ContactForm/>
        <Map/>
      
    </div>
  )
}

export default Contact
