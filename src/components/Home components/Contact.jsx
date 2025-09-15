import { Mail, Phone } from 'lucide-react'
import React from 'react'

const ContactCTA = () => (
  <section className="px-4 py-16 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Let's Talk About Your Project
      </h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        We'd love to hear about your ideas. Fill out the form below or reach out directly.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        {/* <button className="px-19 py-4 bg-[#FF8C42] text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2">
        <Mail/>
          Send us an email
        </button> */}
        <div className="group inline-block">
  <button
    className="relative overflow-hidden px-18 py-4 bg-[#FF8C42] text-white font-semibold rounded-full shadow-lg flex items-center gap-2 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
  >
    {/* Foreground content (icon + text) */}
    <span className="relative z-20 flex items-center gap-2">
      <Mail />
      Send us an email
    </span>

    {/* Background layers */}
    <span className="absolute inset-0 bg-[#FF8C42] z-0"></span>
    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></span>
  </button>
</div>

        {/* <button className="px-8 py-4 bg-[#FF8C42] text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2">
      
          <Phone/>
          Call us directly: 08765 43210
        </button> */}
        <div className="group inline-block">
  <button
    className="relative overflow-hidden px-8 py-4 bg-[#FF8C42] text-white font-semibold rounded-full shadow-lg flex items-center gap-2 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
  >
    {/* Foreground Content */}
    <span className="relative z-20 flex items-center gap-2">
      <Phone />
      Call us directly: 08765 43210
    </span>

    {/* Background Layers */}
    <span className="absolute inset-0 bg-[#FF8C42] z-0"></span>
    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></span>
  </button>
</div>

      </div>
      
     
     
    </div>
  </section>
)

export default ContactCTA


