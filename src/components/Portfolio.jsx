import { FaExternalLinkAlt } from "react-icons/fa";
import skillLinkImg from "../assets/skilLink.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#eeeeee] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <div className="inline-block border-4 border-black px-12 py-3 mb-14">
          <h2 className="text-xl md:text-2xl font-semibold tracking-widest">
            PORTFOLIO
          </h2>
        </div>

        {/* Project Card */}
        <div className="flex justify-center">
          <div className="relative group w-full max-w-xl overflow-hidden">

            {/* Project Image */}
            <img
              src={skillLinkImg}
              alt="SkillLink Project"
              className="w-full object-cover"
            />

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

              <p className="text-gray-300 text-sm mb-2">
                coded, designed
              </p>

              <h3 className="text-white text-3xl font-bold mb-2">
                SkillLink
              </h3>

              <p className="text-gray-300 text-sm mb-6 text-center px-4">
                A student skill exchange platform built using modern web technologies.
              </p>

              <a
                href="https://skill-link-ptzd.onrender.com/"
                target="_blank"
                className="flex items-center gap-2 border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition"
              >
                VIEW PROJECT <FaExternalLinkAlt />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
