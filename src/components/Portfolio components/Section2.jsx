import React from "react";

const Section2 = () => {
  const data = [
    { img: "/portfolio.png", title: "Project Name", desc: "[Project Description]", btn1: "UX Research", btn2: "UX Design", btn3: "SaaS" },
    { img: "/portfolio2.png", title: "Project Name", desc: "[Project Description]", btn1: "UX Research", btn2: "UX Design", btn3: "SaaS" },
    { img: "/portfolio3.png", title: "Project Name", desc: "[Project Description]", btn1: "UX Research", btn2: "UX Design", btn3: "SaaS" },
    { img: "/portfolio4.png", title: "Project Name", desc: "[Project Description]", btn1: "UX Research", btn2: "UX Design", btn3: "SaaS" },
    { img: "/portfolio5.png", title: "Project Name", desc: "[Project Description]", btn1: "UX Research", btn2: "UX Design", btn3: "SaaS" },
    { img: "/portfolio6.png", title: "Project Name", desc: "[Project Description]", btn1: "UX Research", btn2: "UX Design", btn3: "SaaS" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {data.map((elem, index) => {
      
        if (index % 3 === 0) {
          return (
            <div key={index} className="mb-8">
              <div className=" rounded-lg p-4">
                <img src={elem.img} alt="" className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{elem.title}</h3>
                <p className="text-gray-600">{elem.desc}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">{elem.btn1}</button>
                  <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">{elem.btn2}</button>
                  <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">{elem.btn3}</button>
                </div>
              </div>
            </div>
          );
        }

        // Two side-by-side items
        if (index % 3 === 1) {
          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[elem, data[index + 1]].map(
                (item, subIndex) =>
                  item && (
                    <div key={subIndex} className=" rounded-lg p-4">
                      <img src={item.img} alt="" className="w-full rounded-lg mb-4" />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">{item.btn1}</button>
                        <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">{item.btn2}</button>
                        <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">{item.btn3}</button>
                      </div>
                    </div>
                  )
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Section2;
