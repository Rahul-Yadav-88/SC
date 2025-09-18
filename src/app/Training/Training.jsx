// src/pages/TrainingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { courseData } from "../Training/courseData";

const Training = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-orange-50 to-white">
        
        <h1 className="text-5xl font-bold mt-4">
          Build Your <span className="text-[#FFA559]">Future-Ready Career</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Learn with industry experts in Web Development, App Development, Web Designing,
          and Digital Marketing. Get certified and job-ready.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="#courses"
            className="px-6 py-3 bg-[#FFA559] text-white font-medium rounded-full shadow duration-300 hover:bg-orange-600"
          >
            Explore Courses
          </Link>
          <a
            href="#instructors"
            className="px-6 py-3 border border-gray-400 text-gray-700 font-medium rounded-full hover:bg-gray-100"
          >
            Meet Trainers
          </a>
        </div>
      </section>

      {/* Courses Section */}
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
              <button className="mt-6 px-5 py-2 bg-[#FFA559] text-white rounded-full">
                View Details
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-orange-100 to-white py-16 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center max-w-5xl mx-auto gap-8">
          <div>
            <h3 className="text-3xl font-bold text-[#FFA559]">50+</h3>
            <p className="text-gray-600">Global Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#FFA559]">120+</h3>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#FFA559]">30+</h3>
            <p className="text-gray-600">Skilled Professionals</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#FFA559]">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-16 px-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {["Amit Sharma", "Neha Verma", "Rahul Gupta", "Priya Singh"].map((name, i) => (
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

      {/* CTA */}
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
  );
};

export default Training;
