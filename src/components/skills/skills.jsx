import SkillItem from "./skillItem";
import "./style.scss";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="skills__wrapper">
          <h2 className="skills__title">Skills.</h2>
          <ul className="skills__list">
            <SkillItem />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
