import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const cards = [
  {
    title: "Web Development",
    desc: "Custom websites and platforms that are fast, secure, and scalable.",
    img: "offer1.png",
  },
  {
    title: "Mobile App Development",
    desc: "iOS & Android apps designed for performance and user experience.",
    img: "offer2.png",
  },
  {
    title: "Cloud & DevOps",
    desc: "Reliable cloud infrastructure and DevOps for agility and scalability.",
    img: "offer3.png",
  },
  {
    title: "AI & Machine Learning",
    desc: "Smart solutions powered by data, automation, and AI-driven insights.",
    img: "offer4.png",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive and user-friendly experiences that keep customers engaged.",
    img: "offer5.png",
  },
  {
    title: "IT Consulting",
    desc: "Expert guidance to align technology with your business goals.",
    img: "offer6.png",
  },
];

const OffersSection = () => (
  <section className="px-4 pb-16 mt-10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-5xl font-semibold">What We Offer</h2>
        <p className="mt-2 text-sm sm:text-lg max-w-xl mx-auto">
          Our services are designed to solve real business challenges while
          unlocking new opportunities for growth.
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 responsivewidth">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group bg-white rounded-2xl p-6  transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: "16 / 9" }}
            />
            <h3 className="mt-4 font-semibold text-xl sm:text-2xl md:text-3xl text-gray-900">
              {card.title}
            </h3>
            <p className="mt-2 text-gray-600 text-md sm:text-md md:text-lg max-w-sm">
              {card.desc}
            </p>

            {/* Hover Button (only visible on hover, expands card height) */}
           <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-20">
  <button
    className="relative mt-4 px-5 py-2 font-medium transition-all duration-500 
               opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
               border-b-2 border-black flex gap-3 cursor-pointer"
  >
    Learn More <ArrowRight/>
  </button>
</div>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OffersSection;
