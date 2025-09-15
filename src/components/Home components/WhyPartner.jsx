import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Global Expertise",
    desc: "Serving diverse industries.",
    icon: "/partner.png",
  },
  {
    id: 2,
    title: "Innovation First",
    desc: "Driving creative solutions.",
    icon: "/partner.png",
  },
  {
    id: 3,
    title: "Trusted Partnership",
    desc: "Building long-term success.",
    icon: "/partner.png",
  },
  {
    id: 4,
    title: "Scalable Growth",
    desc: "Expanding your opportunities.",
    icon: "/partner.png",
  },
];

export default function WhyPartner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Arc positions (desktop only)
  const getArcPosition = (index, total, radius, centerX, centerY) => {
    const startAngle = Math.PI;
    const endAngle = 2 * Math.PI;
    const angle = startAngle + ((endAngle - startAngle) / (total - 1)) * index;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-3xl sm:text-5xl font-bold mb-20 text-center text-[text-[#262626]] ">
        Why Partner With Us?
      </h2>

      {/* Mobile Layout: Vertical Stepper */}
      <div className="sm:hidden w-full max-w-sm space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            onClick={() => setActive(index)}
            className={`flex items-start p-4 rounded-xl cursor-pointer border
              ${active === index ? "border-orange-500 bg-orange-50" : "border-gray-200"}`}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-white mr-4
              ${active === index ? "bg-orange-500" : "bg-black"}`}
            >
              {step.id}
            </div>
            <div>
              <div className="text-xl mb-1 w-20">
                <img src={steps[active].icon} alt="" />
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Layout: Arc */}
      <div className="hidden sm:block relative w-[700px] h-[360px]">
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M 50 300 A 300 300 0 0 1 650 300"
            fill="none"
            stroke="#ccc"
            strokeWidth="2"
          />
        </svg>

        {steps.map((step, index) => {
          const { x, y } = getArcPosition(index, steps.length, 300, 350, 300);
          return (
            <motion.div
              key={step.id}
              className={`absolute flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-white
                ${active === index ? "bg-orange-500" : "bg-black"}`}
              style={{ left: x - 20, top: y - 20 }}
              whileHover={{ scale: 1.15 }}
              onClick={() => setActive(index)}
            >
              {step.id}
            </motion.div>
          );
        })}

        {/* Center Content */}
        <motion.div
          key={steps[active].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <div className=" flex justify-center w-56">
            <img src={steps[active].icon} alt="" />
          </div>
          <h3 className="text-xl font-semibold">{steps[active].title}</h3>
          <p className="text-gray-600">{steps[active].desc}</p>
        </motion.div>
      </div>
    </div>
  );
}
