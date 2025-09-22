import React from 'react'
import Hero from '../../components/Home components/Hero'
import { img } from 'framer-motion/client'
import Programs from '../../components/Training/Programs'
import Stats from '../../components/Home components/Stats'
import Trainers from '../../components/Training/Trainers'
import Enroll from '../../components/Training/Enroll'

const Training1 = () => {
      const heroData={
    title:"Build Your",
    title2:"Future-Ready Career",
    desc:" Learn with industry experts in Web Development, App Development, Web Designing,and Digital Marketing. Get certified and job-ready.",
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
        <Programs/>
        <Stats/>
        <Trainers/>
        <Enroll/>
      
    </div>
  )
}

export default Training1
