import ProjectItem from "./projectItem";
import projectData from "./projectData";
import "./style.scss";
import { useState } from "react";
const Projects = () => {
  const [all, setAll] = useState(true);
  const filteredLayouts = projectData.filter((project) => project.category === "layout");

  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="projects__wrapper">
          <div className="projects__title">projects.</div>
          <div className="projects__menu">
            <div className={all ? `projects__cat projects__cat-active` : `projects__cat `} onClick={() => setAll(true)}>
              all.
            </div>
            <div
              className={!all ? `projects__cat projects__cat-active` : `projects__cat`}
              onClick={() => setAll(false)}
            >
              layouts.
            </div>
          </div>
          <ul className="projects__list">
            <ProjectItem filtered={all ? projectData : filteredLayouts} />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects;
