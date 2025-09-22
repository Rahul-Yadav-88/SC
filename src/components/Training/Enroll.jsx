import React from 'react'
import { Link } from 'react-router-dom'

const Enroll = () => {
  return (
    <div>
           <section className="text-center py-20 bg-[#FFA559] text-white rounded-[50px]">
        <h2 className="text-4xl font-bold mb-4">Start Your Learning Journey Today</h2>
        <p className="mb-6">Enroll in a course and take the first step toward your dream career.</p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full shadow hover:bg-gray-200"
        >
          Enroll Now
        </Link>
      </section>
    </div>
  )
}

export default Enroll
