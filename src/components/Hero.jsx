import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-16 bg-black md:bg-transparent">
      <div className="relative min-h-[calc(100vh-64px)] flex flex-col md:flex-row">

        {/* MOBILE IMAGE */}
        <div className="absolute bottom-0 left-0 right-0 md:hidden h-[60vh] flex justify-center items-end">
          <img
            src="/profile.png"
            alt="profile"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* TEXT CONTENT */}
        <div
          className="
            relative z-10
            flex w-full md:w-1/2
            cursor-default
            flex-col items-center md:items-start
            justify-start md:justify-center
            text-center md:text-left

            pt-10 md:pt-0
            px-6 sm:px-10 md:px-16

            text-white md:text-black
            bg-transparent md:bg-[#D7D7D7]
          "
        >
          <p className="text-sm md:text-lg text-gray-300 md:text-gray-700 mb-2">
            Hi, I am
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            Faizan Mulani
          </h1>

          <p className="text-gray-400 md:text-gray-600 text-base md:text-lg mb-6">
            Front-end Developer
          </p>

          {/* Socials */}
          <div className="flex gap-5">
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

        {/* DESKTOP RIGHT IMAGE */}
        <div className="relative hidden md:flex w-1/2 bg-black overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-[#D7D7D7] -skew-x-12 origin-top z-0" />
          <div className="absolute inset-0 flex items-end justify-center z-10">
            <img
              src="/profile.png"
              alt="profile"
              className="h-[90%] max-w-none object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
