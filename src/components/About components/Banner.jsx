import React from 'react';


function Banner() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div
        className="w-[90%] md:w-[80%] lg:w-[90%] bg-cover bg-center rounded-3xl flex flex-col items-center justify-center text-center py-12 px-6 shadow-lg "
        style={{ backgroundImage: `url(banner2.png)` }}
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Let’s <span className="text-black">Shape the Future Together</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-lg mb-6 max-w-2xl">
          Have a project in mind? Let’s collaborate to turn your vision into reality.
        </p>

        {/* Buttons */}
        <div className="md:flex md:gap-4   inline-block  space-y-2 md:space-y-0 w-[90%] md:w-[fit-content] space-x-4">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 px-6 rounded-full transition">
            Start Your Project
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-2 px-12 rounded-full  transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

