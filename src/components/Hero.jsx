import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-16">

      <div className="flex min-h-[calc(100vh-64px)] flex-col md:flex-row">

        {/* LEFT CONTAINER */}
        <div className="flex w-full md:w-1/2 flex-col justify-center bg-[#D7D7D7] px-6 sm:px-10 md:px-16 text-center md:text-left">

          <p className="text-sm md:text-lg text-gray-700 mb-2">
            Hi, I am
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-2">
            Faizan Mulani
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-8">
            Front-end Developer
          </p>

          {/* Socials */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://instagram.com/faizan.m_75"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black hover:bg-black hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/FaizanMulani75"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black hover:bg-black hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black hover:bg-black hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE (hidden on mobile) */}
        <div className="relative hidden md:flex w-1/2 bg-black items-center justify-center">

          {/* Diagonal Divider */}
          <div className="absolute left-0 top-0 h-full w-24 bg-[#D7D7D7] -skew-x-12 origin-top" />

          <img
            src="/profile.jpg"
            alt="profile"
            className="relative z-10 h-[80%] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
