import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-black" /> },
];

const Skills = () => {
  return (
    <section className="bg-[#D7D7D7] py-20" id="skills">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <div className="inline-block border-4 border-black px-10 py-3 mb-14">
          <h2 className="text-2xl font-bold tracking-widest">SKILLS</h2>
        </div>

        {/* Sub Title */}
        <p className="mb-10 text-left font-semibold tracking-widest">
          USING NOW:
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 transition transform hover:scale-110"
            >
              <div className="text-6xl">{skill.icon}</div>
              <p className="text-sm font-semibold tracking-widest">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
