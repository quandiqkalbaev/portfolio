import "./style.scss";
import { Link } from "react-router-dom";
import MenuItem from "./menuItem";
import ScreenWidth from "../utils/screenwidth";

import { ReactComponent as NightIcon } from "../../assets/images/header/night.svg";
import { useState } from "react";
const Header = () => {
  const windowWidth = ScreenWidth();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  if (menuOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            &#60;CV/&#62;
          </Link>
          <nav className={menuOpen ? `nav nav--active` : `nav`}>
            <ul className="nav__list">
              <MenuItem />
            </ul>
            {windowWidth > 1024 ? null : (
              <div className="nav__mode">
                <p className="nav__mode-text">Switch Theme</p>
                <NightIcon className="nav__mode-icon" />
              </div>
            )}
            {windowWidth > 1024 ? null : (
              <Link
                to="https://drive.google.com/file/d/1mRQUeoQ1c1kKZWVYVf2OgMBaQ_ZNOO5c/view"
                target="_blank"
                className="nav__btn"
                onClick={() => setMenuOpen(false)}
              >
                Download CV
              </Link>
            )}
          </nav>
          {windowWidth > 1024 ? (
            <div className="header__mode">
              <p className="header__mode-text">Switch Theme</p>
              <NightIcon className="header__mode-icon" />
            </div>
          ) : null}

          {windowWidth > 1024 ? (
            <Link
              to="https://drive.google.com/file/d/1mRQUeoQ1c1kKZWVYVf2OgMBaQ_ZNOO5c/view"
              target="_blank"
              className="header__btn"
            >
              Download CV
            </Link>
          ) : null}
          <div className={menuOpen ? `hamburger hamburger--active` : `hamburger`} onClick={handleMenuToggle}>
            <span className={menuOpen ? `span span-active` : `span`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
