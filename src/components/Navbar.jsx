import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">


          {/* Logo Section */}
          <div className="flex items-center">
            
            <div className="block ">
              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-white text-black font-bold text-sm">
                  <a href="#">FM</a>
                </div>
            </div>
          </div>

          <div className="flex  items-center justify-between">
            {/* Navigation Links */}
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
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="rounded-full mx-8 bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-[#c9c0c0] transition"
          >
            CONTACT ME
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
