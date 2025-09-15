import React from 'react'
import WorkShowcase from '../../components/Services components/WorkShowcase'
import OffersSection from '../../components/Services components/OfferSection'
import Hero from '../../components/Home components/Hero'

const Services = () => {
  const heroData={
    title:"Solutions That  ",
    title2:"Transform Businesses",
    desc:"From web development to AI-driven innovations, we deliver technology that helps companies grow, scale, and stay future-ready.",
    btn1_txt:"Work With Us",
    btn2_txt:"Explore Services",
    img:"/servicesHero.png",
    altText:"Hero image"


  }
  return (
    <div className='text-[#262626]'>
      <Hero data={heroData}/>
      <OffersSection/>
      <WorkShowcase/>
    </div>
  )
}

export default Services
