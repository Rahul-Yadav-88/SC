import React from 'react'
import WhyPartner from '../../components/Home components/WhyPartner'

import TrustedBy from '../../components/Home components/Trustedby'
import Stats from '../../components/Home components/Stats'
import OffersSection from '../../components/Home components/OfferSection'
import WorkShowcase from '../../components/Services components/WorkShowcase'
import Testimonials from '../../components/Home components/Testimonials'
import ContactCTA from '../../components/Home components/Contact'
import Hero from '../../components/Home components/Hero'


const Home = () => {
  const heroData={
    title:"We Build Future-Ready ",
    title2:"Web Experiences",
    desc:"From web to mobile to AI, we design and develop technology that drives business growth.",
    btn1_txt:"Work With Us",
    btn2_txt:"Explore Services",
    img:"/homehero.png",
    altText:"Hero image",
    text:"text-[#FFA559]",
    blurEffect:"absolute right-[-10px] top-1/4 w-[250px] h-[250px] rounded-full bg-orange-400 opacity-40 blur-[30px] pointer-events-none"


  }
  return (
    <div className=''>
      <Hero data={heroData}/>
      <TrustedBy/>
      <Stats/>
      <OffersSection/>
      <WhyPartner/>
      <WorkShowcase/>
      <Testimonials/>
      <ContactCTA/>
    </div>
  )
}

export default Home
