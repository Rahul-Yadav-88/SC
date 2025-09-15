import React from "react";


const LeadershipTeam = () => {
  const teamMembers = [
    { name: "Rohan Mehta", position: "Founder & CEO", img: "/leader.png" },
    { name: "Aditi Sharma", position: "Head of Product Design", img: "/leader2.png" },
    { name: "Kunal Verma", position: "CTO", img: "/leader3.png" },
    { name: "Priya Nair", position: "Client Success Manager", img:"/leader4.png"  }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262626] mb-8">
          Leadership & Team
        </h1>
        <p className="text-md text-gray-600 leading-relaxed">
          Behind every successful project is a team of innovators, strategists, and engineers who bring ideas to life. At Small Copper, our people are our greatest strength—passionate professionals who love solving challenges and creating impact.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center items-start gap-4 max-w-6xl ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  rounded-2xl   p-2 py-9"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src={member.img} 
                alt={member.name}
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-1xl md:text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-1xl  text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
