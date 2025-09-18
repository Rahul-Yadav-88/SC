// src/pages/CourseDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { courseData } from "../Training/courseData";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return (
      <div className="p-10 text-center ">
        <h2 className="text-2xl font-bold text-[#FFA559]">Course Not Found</h2>
        <Link to="/" className="text-[#FFA559] underline mt-4 block">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#FFA559] rounded-[30px] text-white py-20 px-10">
        <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
        <p className="text-lg max-w-2xl">{course.overview}</p>
      </section>

      {/* Details */}
      <section className="py-16 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#FFA559] mb-6">Course Information</h2>
        <p className="mb-2"><strong>Category:</strong> {course.category}</p>
        <p className="mb-2"><strong>Duration:</strong> {course.duration}</p>
        <p className="mb-6 text-gray-600">{course.description}</p>

        <h3 className="text-2xl font-semibold mb-4">Modules Covered</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-12">
          {course.modules.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </section>

      {/* Instructor */}
      <section className="bg-orange-50 py-16 px-10">
        <h2 className="text-3xl font-bold text-center text-[#FFA559] mb-10">Meet Your Instructor</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src=""
            alt="Instructor"
            className="w-28 h-28 rounded-full shadow"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Amit Sharma</h3>
            <p className="text-gray-600">
              Senior Trainer with 10+ years of experience in {course.category}.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#FFA559] mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">Do I need prior experience?</h4>
            <p className="text-gray-600">No, this course is beginner-friendly.</p>
          </div>
          <div>
            <h4 className="font-semibold">Will I get a certificate?</h4>
            <p className="text-gray-600">Yes, you’ll receive a certificate upon completion.</p>
          </div>
          <div>
            <h4 className="font-semibold">Is this course online?</h4>
            <p className="text-gray-600">Yes, all sessions are 100% online and interactive.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-[#FFA559] text-white rounded-[30px]">
        <h2 className="text-4xl font-bold mb-4">Start Learning {course.title} Today</h2>
        <p className="mb-6">Lifetime access, expert mentorship, and certification included.</p>
        <button className="px-6 py-3 bg-white text-[#FFA559] font-semibold rounded-full shadow hover:bg-gray-200">
          Enroll Now
        </button>
      </section>

      {/* Back link */}
      <div className="p-10 text-center">
        <Link to="/training" className="text-[#FFA559] underline">
          ← Back to All Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
