import SkillsCard from "../components/SkillsCard";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import skills from "./skills.json";
import icon from "./skillsIcon";

const Skills = () => {
  return (
    <section className="p-4 space-y-4">
      <Title title="Skills" />
      <Subtitle title="Front-End" />
      <div className="flex overflow-x-scroll hide-scroll-bar sm:overflow-x-hidden">
        <ul className="flex space-x-4 sm:grid sm:gap-4 sm:grid-cols-4 sm:space-x-0 sm:w-full">
          {skills.frontend.map((skill, i) => (
            <SkillsCard key={i} icon={icon(skill.type)} title={skill.title} text={skill.text} size={skill.size} />
          ))}
        </ul>
      </div>
      <Subtitle title="UI Design" />
      <div className="flex overflow-x-scroll hide-scroll-bar sm:overflow-x-hidden">
        <ul className="flex space-x-4 sm:grid sm:gap-4 sm:grid-cols-4 sm:space-x-0 sm:w-full">
          {skills.ui.map((skill, i) => (
            <SkillsCard key={i} icon={icon(skill.type)} title={skill.title} text={skill.text} size={skill.size} />
          ))}
        </ul>
      </div>
    </section>
  );
}
  
export default Skills;
  