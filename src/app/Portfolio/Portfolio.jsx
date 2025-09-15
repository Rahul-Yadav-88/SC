import React from 'react'
import Hero from '../../components/Home components/Hero'
import Section2 from '../../components/Portfolio components/Section2'


const Portfolio = () => {
    const heroData =
        {
            title:"Our Work Speaks for Itself",
            desc:"We’ve helped global brands and growing startups bring their ideas to life. Explore some of our featured projects and success stories.",
            btn1_txt:"Work With Us",
            btn2_txt:"Explore Services",
        }
    
  return (
    <div>
      <Hero data={heroData}/>
      <Section2/>
    </div>
        
  )
}

export default Portfolio
