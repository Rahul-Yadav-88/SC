import React from 'react'
import Hero from '../../components/Home components/Hero'
import Values from '../../components/About components/Value'
import Stats from '../../components/Home components/Stats'
import LeadershipTeam from '../../components/About components/Leadership'
import WhyPartner from '../../components/Home components/WhyPartner'
import Banner from '../../components/About components/Banner'

const About = () => {
    const heroData = {
        title:"Who We Are",
        desc:"At Small Copper, we don’t just build software—we craft solutions that empower businesses to scale and innovate.",
        btn1_txt:"Work With Us",
        btn2_txt:"Explore Services",
        img:"/abouthero.png"

    }
  return (
    <div>
      <Hero data={heroData}/>
      <Values/>
      <Stats/>
      <LeadershipTeam/>
      <WhyPartner/>
      <Banner/>
    </div>
  )
}

export default About
