import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GitIcon } from "../../assets/images/intro/gitIcon.svg";
import { ReactComponent as LinIcon } from "../../assets/images/intro/linkedinIcon.svg";
import { ReactComponent as TgIcon } from "../../assets/images/intro/tgIcon.svg";

const socialsData = [
  {
    url: "https://github.com/quandiqkalbaev",
    component: <GitIcon className="intro__social-icon" />,
    name: "github",
  },
  {
    url: "https://www.linkedin.com/in/quandiqkalbaev/",
    component: <LinIcon className="intro__social-icon" />,
    name: "linkedin",
  },
  {
    url: "https://t.me/quandiqkalbaev",
    component: <TgIcon className="intro__social-icon" />,
    name: "telegram",
  },
];

const SocialItem = () => {
  return (
    <>
      {socialsData.map((e, index) => (
        <Link key={index} to={e.url} className={`intro__social-link intro__social-${e.name}`}>
          {e.component}
        </Link>
      ))}
    </>
  );
};
export default SocialItem;
