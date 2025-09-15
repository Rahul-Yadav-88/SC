import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    { number: 50, label: 'Global Clients' },
    { number: 120, label: 'Projects Delivered' },
    { number: 30, label: 'Skilled Professionals' },
    { number: 10, label: 'Industry Experience' }
  ];

  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              <div className="text-4xl md:text-5xl font-bold text-[#FFA559] mb-2">
                <CountUp
                end={stat.number}
                duration={2}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />

              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-px h-16 bg-gray-300 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
