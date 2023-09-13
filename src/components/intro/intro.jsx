import SocialItem from "./socialitem";
import locationIcon from "../../assets/images/intro/locationLogo.svg";
import dotIcon from "../../assets/images/intro/dot.svg";
import "./style.scss";
const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__title">Hi,I’m Quandiq</div>
          <div className="intro__subtitle">
            I'm a frontend developer who doesn't just create websites, but aims for every pixel to have its purpose. My
            passion for speed, accessibility, and aesthetics empowers me to craft online spaces that are not only
            functional, but also inspiring at every turn.
          </div>
          <div className="intro__location">
            <img src={locationIcon} alt="locationLogo" />
            <div className="intro__location-text">Tashkent,Uzbekistan</div>
          </div>
          <div className="intro__pos">
            <img src={dotIcon} className="intro__pos-logo" alt="dot-green" />
            <div className="intro__pos-text">Available for new projects</div>
          </div>
          <div className="intro__social">
            <SocialItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
