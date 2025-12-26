import { FaPaintBrush, FaCode, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-[#eeeeee] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <div className="inline-block border-4 border-black px-10 py-3 mb-12">
          <h2 className="text-xl md:text-2xl font-semibold tracking-widest">
            ABOUT ME
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed mb-16">
          <p className="mb-6">
            My name is Faizan Mulani, I am a front-end developer passionate about
            building clean and modern user interfaces. I enjoy transforming
            ideas into functional and visually appealing digital experiences.
          </p>

          <p>
            I focus on writing clean, maintainable code and creating responsive
            designs. I continuously improve my skills to stay aligned with
            modern web technologies and best practices.
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className="w-12 h-[1px] bg-black"></span>
          <span className="text-sm font-medium tracking-widest">MORE</span>
          <span className="w-12 h-[1px] bg-black"></span>
        </div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-3 text-center">

          {/* Design */}
          <div className="flex flex-col items-center gap-4">
            <FaPaintBrush className="text-4xl text-gray-600" />
            <h3 className="font-semibold tracking-widest">DESIGN</h3>
            <p className="text-sm text-gray-600">
              I create modern and user-friendly designs tailored to your needs.
            </p>
          </div>

          {/* Development */}
          <div className="flex flex-col items-center gap-4">
            <FaCode className="text-4xl text-gray-600" />
            <h3 className="font-semibold tracking-widest">DEVELOPMENT</h3>
            <p className="text-sm text-gray-600">
              I build responsive websites using modern
              technologies.
            </p>
          </div>

          {/* Maintenance */}
          <div className="flex flex-col items-center gap-4">
            <FaTools className="text-4xl text-gray-600" />
            <h3 className="font-semibold tracking-widest">MAINTENANCE</h3>
            <p className="text-sm text-gray-600">
              I provide updates, fixes, and improvements to keep your site
              running smoothly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
