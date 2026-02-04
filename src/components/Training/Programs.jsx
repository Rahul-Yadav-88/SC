import React from 'react'
import { courseData } from '../../app/Training/courseData'
import { Link } from 'react-router-dom'
const Programs = () => {
  return (
    <div>
      <section id="courses" className="py-16 px-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.values(courseData).map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center"
            >
              <h3 className="text-2xl font-semibold text-[#FFA559]">{course.title}</h3>
              <p className="text-gray-600 mt-4">{course.description}</p>
              <p className="mt-3 text-sm text-gray-500">⏳ {course.duration}</p>
               <div className="group inline-block mt-4">
      <button
        type="submit"
        className="relative overflow-hidden px-5 py-2 rounded-full text-lg font-medium text-white transform transition duration-500 group-hover:scale-105 group-hover:-translate-y-1 "
      >
        <span className="relative z-10">View Details </span>
        <span className="absolute inset-0 bg-[#FFA559]"></span>
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
      </button>
    </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Programs
