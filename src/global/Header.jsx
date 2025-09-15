import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const data = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      // closing → play animation then hide
      setAnimate(false);
      setTimeout(() => setIsOpen(false), 300); // matches duration-300
    } else {
      // opening → show instantly with animation
      setIsOpen(true);
      setTimeout(() => setAnimate(true), 10);
    }
  };

  return (
    <div>
      {/* Mobile Top Bar */}
      <div className="p-4 flex justify-between items-center bg-white shadow-md md:hidden">
        <img src="logo.png" width={120} alt="Logo" />
        <button onClick={handleToggle} className="text-gray-800">
          {!isOpen && <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex w-[20%] h-screen flex-col items-center gap-10 pt-10 fixed left-0 top-0 bg-white shadow-lg">
        <img src="logo.png" width={170} alt="Logo" />
        <ul className="flex flex-col">
          {data.map((elem) => (
            <NavLink
              key={elem.name}
              to={elem.href}
              className="mt-5 hover:text-orange-600"
            >
              {elem.name}
            </NavLink>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar with Backdrop */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden bg-black/30 transition-opacity duration-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleToggle}
        >
          <nav
            className={`fixed top-0 right-0 w-[70%] h-screen bg-white shadow-lg p-6 flex flex-col items-start gap-6 z-50 transform transition-transform duration-300 ease-in-out ${
              animate ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center w-full">
              <img src="logo.png" width={120} alt="Logo" />
              <button onClick={handleToggle}>
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col w-full">
              {data.map((elem) => (
                <NavLink
                  key={elem.name}
                  to={elem.href}
                  onClick={handleToggle}
                  className="mt-5 block hover:text-orange-600"
                >
                  {elem.name}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
