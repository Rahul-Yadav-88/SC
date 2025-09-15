import { Mail, PhoneIcon, Send } from "lucide-react";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center px-4 ">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Fill Out Your Details
      </h1>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-800 text-lg">
        <div className="flex items-center gap-2">
          <PhoneIcon size={20} /> +91 98765 43210
        </div>
        <div className="flex items-center gap-2">
          <Mail size={20} /> hello@smallcopper.com
        </div>
        <div className="flex items-center gap-2">
          <Send size={20} /> Address
        </div>
      </div>

   
<form
  className="w-full max-w-3xl space-y-4 p-6 rounded-lg relative "
  style={{
    backgroundImage: "url('contact.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "150% ",
  }}
>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-md px-4 py-3 text-lg outline-none bg-[#F6F6F6]/90"
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 border rounded-md px-4 py-3 text-lg outline-none bg-[#F6F6F6]/90"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 border rounded-md px-4 py-3 text-lg outline-none bg-[#F6F6F6]/90"
          />
        </div>

        <select className="w-full border rounded-md px-4 py-3 text-lg outline-none bg-[#F6F6F6]/90">
          <option>Service Interested In</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>UI/UX Design</option>
          <option>Digital Marketing</option>
        </select>

        <textarea
          rows="4"
          placeholder="Message"
          className="w-full border rounded-md px-4 py-3 text-lg outline-none bg-[#F6F6F6]/90"
        ></textarea>

        <div className="flex justify-center">
<div className="group inline-block">
  <button
    type="submit"
    className="relative overflow-hidden px-12 py-3 rounded-full text-lg font-medium text-white transform transition duration-500 group-hover:scale-105 group-hover:-translate-y-1"
  >
    <span className="relative z-10">Submit</span>

    <span className="absolute inset-0 bg-[#FFA559]"></span>

    <span
      className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
    ></span>
  </button>
</div>










        </div>
      </form>
    </div>
  );
};

export default ContactForm;
