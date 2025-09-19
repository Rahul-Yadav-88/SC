import React from 'react'
import Hero from '../../components/Home components/Hero'
import { img } from 'framer-motion/client'

const Training1 = () => {
      const heroData={
    title:"We Build Future-Ready ",
    title2:"Web Experiences",
    desc:"From web to mobile to AI, we design and develop technology that drives business growth.",
    btn1_txt:"Work With Us",
    btn2_txt:"Explore Services",
   img:"training.png",
    altText:"Hero image",
    text:"text-[#FFA559]",
    blurEffect:"absolute right-[-10px] top-1/4 w-[250px] h-[250px] rounded-full bg-orange-400 opacity-40 blur-[30px] pointer-events-none"


  }
  return (
    <div>
        <Hero data={heroData}/>
      
    </div>
  )
}

export default Training1
