import React from 'react'

const Trainers = () => {
  return (
    <div>
      <section id="instructors" className="py-16 px-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {["Arjun Mehta", "Simran Kaur", "Rohan Malhotra", "Kavya Nair"].map((name, i) => (
            <div key={i} className="p-6 bg-orange-50 rounded-xl shadow">
              <img
                src=''
                alt=""
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm">Senior Trainer</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Trainers
