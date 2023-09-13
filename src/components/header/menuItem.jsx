import { Link } from "react-router-dom";
const menuItemsData = [
  {
    url: "#about",
    text: "About.",
  },
  {
    url: "#skills",
    text: "Skills.",
  },
  {
    url: "#projects",
    text: "Projects.",
  },
  {
    url: "#links",
    text: "Links.",
  },
];

const MenuItem = () => {
  return (
    <>
      {menuItemsData.map((e, index) => (
        <li className="nav__item" key={index}>
          <Link to={e.url} className="nav__link">
            {e.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MenuItem;
