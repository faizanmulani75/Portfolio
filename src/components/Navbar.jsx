import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-black font-bold text-sm"
            >
              FM
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <a href="#about" className="hover:text-[#c9c0c0] transition">
              About Me
            </a>
            <a href="#skills" className="hover:text-[#c9c0c0] transition">
              Skills
            </a>
            <a href="#portfolio" className="hover:text-[#c9c0c0] transition">
              Portfolio
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-[#c9c0c0] transition"
            >
              CONTACT ME
            </a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-black overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-white font-medium">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About Me
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
