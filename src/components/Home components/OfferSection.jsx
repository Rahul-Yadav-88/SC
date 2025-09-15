import React from "react";
import { ArrowRight } from "lucide-react"; // arrow icon

const services = [
  { title: "AI/ML Solutions", img: "whatwedo1.png", desc: "Harness AI & ML for smarter business decisions." },
  { title: "Mobile Apps", img: "whatwedo2.png", desc: "Custom mobile apps for Android & iOS platforms." },
  { title: "Web Development", img: "whatwedo3.png", desc: "Modern, responsive, and scalable websites." },
  { title: "Cloud & DevOps", img: "whatwedo4.png", desc: "Cloud migration and CI/CD pipeline setup." },
  { title: "UI/UX Design", img: "whatwedo5.png", desc: "Beautiful, intuitive, and user-friendly designs." },
  { title: "IT Consulting", img: "whatwedo6.png", desc: "Expert IT advice for business transformation." },
];

const OffersSection = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#262626] mb-20">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative h-64 rounded-3xl overflow-hidden shadow-md cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/50" />

              {/* Title (default view) */}
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-md">
                  {s.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-md bg-black/40">
                <h3 className="text-white text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{s.desc}</p>
               <div className="flex gap-2 mt-5">
                 <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
                  View More 
                </button>
                <div className="bg-[#FF8C42] h-12 w-12  text-white rounded-full text-md flex justify-center items-center">
                    <ArrowRight size={28} className="-rotate-45"/>
                </div>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
