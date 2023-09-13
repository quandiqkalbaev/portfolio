import { Link } from "react-router-dom";
import linkSVG from "../../assets/images/projects/link.svg";
const ProjectItem = ({ filtered }) => {
  return filtered.map((e, index) => (
    <li className="projects__item" key={index}>
      <div className="projects__img">
        <Link to={e.applink} target="_blank">
          <img src={e.img} alt={e.alt} />
        </Link>
      </div>
      <div className="projects__block">
        <p className="projects__name">
          <Link to={e.applink}>{e.name}</Link>
        </p>
        <p className="projects__desc">{e.about}</p>
        <ul className="projects__tools tools__list">
          {e.tools.map((i, index) => (
            <li className="tools__list-item" key={index}>
              {i}
            </li>
          ))}
        </ul>
        <div className="projects__code">
          Source code:
          <Link to={e.codelink} target="_blank">
            <img src={linkSVG} alt="link-svg" />
          </Link>
        </div>
      </div>
    </li>
  ));
};
export default ProjectItem;
