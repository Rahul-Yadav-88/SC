import React, { useMemo } from "react";

const ShowcaseCard = ({ title, image }) => (
  <div className="shrink-0 w-72 sm:w-80 md:w-96 bg-gray-200 rounded-3xl shadow-sm overflow-hidden h-[600px] flex flex-col group cursor-pointer">
    {/* Top tags */}
    <div className="p-4 flex items-center justify-between text-xs text-gray-500">
      <span className="px-3 py-1 rounded-full border bg-gray-50">Web-Service</span>
      <span className="px-3 py-1 rounded-full border bg-gray-50">2024</span>
    </div>

    {/* Title */}
    <h3 className="px-4 text-3xl font-extrabold tracking-tight">{title}</h3>

    {/* Full cover image */}
    <div className="flex-1 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  </div>
);

const WorkShowcase = () => {
  const cards = [
    {
      title: "ADIDAS",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "ADIDAS",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "ADIDAS",
      image:
        "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  // Duplicate list for seamless marquee
  const marqueeItems = useMemo(() => [...cards, ...cards], [cards]);

  return (
    <section className="px-4 py-12 responsivewidth">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-5xl text-[#262626] font-semibold mb-20">
          Our Work in Action
        </h2>

        <div className="relative group">
          {/* Marquee wrapper */}
          <div
            className="overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
              maskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex gap-6 px-2 animate-[scrollx_25s_linear_infinite] group-hover:[animation-play-state:paused]">
              {marqueeItems.map((c, i) => (
                <ShowcaseCard key={i} title={c.title} image={c.image} />
              ))}
            </div>
          </div>

          {/* Faded edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent rounded-3xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
