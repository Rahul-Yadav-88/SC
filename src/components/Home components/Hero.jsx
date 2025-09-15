import React from 'react'

const Hero = ({data}) => (
  <section
    className="relative px-4 py-10  overflow-hidden"
    style={{
      backgroundImage:
        "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 24px)",
      backgroundSize: "25px 25px",
    }}
  >
    {/* Orange Blur Effect */}
 {/* Orange Circular Glow */}
<div className={`${data.blurEffect}`}></div>


    <div className="max-w-6xl mx-auto text-center relative z-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#262626]">
        <span className="text-[#262626]">{data.title}</span>
        <br />
        <span className={`${data.text}`}>{data.title2}</span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
     {data.desc}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
  {data.btn1_txt && (
    <div className="group inline-block">
      <button
        type="submit"
        className="relative overflow-hidden px-15 py-3 rounded-full text-lg font-medium text-white transform transition duration-500 group-hover:scale-105 group-hover:-translate-y-1 "
      >
        <span className="relative z-10">{data.btn1_txt} </span>
        <span className="absolute inset-0 bg-[#FFA559]"></span>
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
      </button>
    </div>
  )}

  {data.btn2_txt && (
    <div className="group inline-block">
      <button
        type="submit"
        className="relative overflow-hidden px-12 py-3 rounded-full text-lg font-medium transform transition duration-500 group-hover:scale-105 group-hover:-translate-y-1 border"
      >
        <span className="relative z-10 transition-colors duration-500 text-black group-hover:text-white">
          {data.btn2_txt}
        </span>
        <span className="absolute inset-0"></span>
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
      </button>
    </div>
  )}
</div>


      {/* Large Image */}
      <div className="mt-16">
        <img
          src={data.img}
          alt={data.altText}
          className="w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  </section>
)

export default Hero




