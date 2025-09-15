import React from 'react'

export const Values = () => {
    const data2=[
        {
            icon:"🚀",
            title:"Innovation",
            desc:"Always staying ahead with emerging technologies."
        },
        {
            icon:"🌍",
            title:"Collaboration",
            desc:"Partnering with clients for long-term success."
        },
        {
            icon:"🤝",
            title:"Integrity",
            desc:"Transparent, honest, and ethical practices."
        },
        {
            icon:"‍‍‍‍‍👨‍💻",
            title:"Customer-Centricity",
            desc:"Building solutions tailored to real needs."
        },
    ]
  return (
   
<div className="min-h-screen bg-white px-8 py-10 ">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Section - Our Journey and Mission/Vision */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Our Journey Section */}
          <div className="flex-1 bg-gray-100 p-12 rounded-4xl">
            <h2 className="text-5xl my-2 font-bold text-gray-900 mb-8 text-center">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed my-20 tracking-wide">
              Founded with the belief that technology should empower, not overwhelm, Small Copper began as a small team of passionate developers and designers. Over the years, we have grown into a global technology partner trusted by startups, enterprises, and forward-thinking brands. Our focus has always been on delivering simple, scalable, and impactful solutions that create lasting value for our clients.
            </p>
          </div>

          {/* Mission and Vision Section */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Mission */}
            <div className="flex-1 bg-gray-100 p-12 rounded-4xl flex flex-col justify-center text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver innovative, secure, and scalable IT solutions that enable businesses to thrive in the digital age.
              </p>
            </div>

            {/* Vision */}
            <div className="flex-1 bg-gray-100 p-12 rounded-4xl flex flex-col justify-center text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a global leader in technology innovation, known for empowering organizations to achieve sustainable growth and meaningful transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-gray-100 p-10 rounded-4xl flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#262626] mb-16 text-center">
            Core Values
          </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        {
            data2.map((elem)=>(
                <div className='flex flex-col items-center'>
                   <div className='flex gap-2'>
                     <p className='text-xl md:text-3xl'>{elem.icon}</p>
                    <h4 className='text-xl sm:text-2xl mb-5 font-bold text-[#262626]'>{elem.title}</h4>
                   </div>
                    <p className='text-center'>{elem.desc}</p>
                </div>
            ))
        }
        </div>

        </div>
      </div>
    </div>

  )
};

export default Values;
