import html5logo from "../../assets/images/skills/html.svg";
import css3logo from "../../assets/images/skills/css.svg";
import scsslogo from "../../assets/images/skills/scss.svg";
import tailwindlogo from "../../assets/images/skills/tailwind.svg";
import bootstrap4logo from "../../assets/images/skills/bootstrap-4.svg";
import jslogo from "../../assets/images/skills/js.svg";
import jqeurylogo from "../../assets/images/skills/jquery-1.svg";
import reactlogo from "../../assets/images/skills/react.svg";
import wordpresslogo from "../../assets/images/skills/wordpress-icon.svg";
import figmalogo from "../../assets/images/skills/figma.svg";
import adobelogo from "../../assets/images/skills/adobe-photoshop-2.svg";
const skillData = [
  { name: "HTML5", img: html5logo },
  { name: "CSS3", img: css3logo },
  { name: "SCSS/SASS", img: scsslogo },
  { name: "Tailwindcss", img: tailwindlogo },
  { name: "Bootstrap4", img: bootstrap4logo },
  { name: "JavaScript", img: jslogo },
  { name: "jQuery", img: jqeurylogo },
  { name: "React", img: reactlogo },
  { name: "WordPress", img: wordpresslogo },
  { name: "Figma", img: figmalogo },
  { name: "Photoshop", img: adobelogo },
];
const SkillItem = () => {
  return skillData.map((e, index) => (
    <li className="skills__item" key={index}>
      <img src={e.img} alt={e.name + `-logo`} className="skills__item-img" />
      <p className="skills__item-name">{e.name}</p>
    </li>
  ));
};
export default SkillItem;
