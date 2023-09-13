import "./style.scss";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">
          <p className="about__title">About me.</p>
          <p className="about__subtitle">Curious about me? Here you have it:</p>
          <div className="about__info">
            <p>
              Since starting my programming journey in March 2022, I've developed a versatile skill set encompassing
              HTML5, CSS3, Bootstrap 4, SCSS, and Responsive design for eye-catching websites. I'm proficient in
              JavaScript, WordPress, ReactJs, and Tailwind CSS, adding interactivity and structure to my projects. I
              also have basic knowledge of Adobe Photoshop and Figma for unique visuals. My expertise in time
              management, communication, and problem-solving has been invaluable for freelance work on platform{" "}
              <Link to="https://kwork.ru/user/quandiqkalbaev" target="_blank">
                {" "}
                kwork
              </Link>
              . I excel at balancing client projects, ensuring timely delivery, and exceeding expectations. Let's
              collaborate on crafting captivating web experiences!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
