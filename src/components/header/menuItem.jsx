import React from "react";
import { Link } from "react-router-dom";

const MenuItem = () => {
  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItemsData = [
    {
      url: "#about",
      text: "About.",
    },
    {
      url: "#skills", // Use the ID of the target section
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

  return (
    <ul className="nav__list">
      {menuItemsData.map((item, index) => (
        <li className="nav__item" key={index}>
          {/* Use an onClick handler to trigger the smooth scroll */}
          <span
            className="nav__link"
            onClick={() => smoothScrollTo(item.url.slice(1))}
          >
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
