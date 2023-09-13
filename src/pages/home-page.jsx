import About from "../components/about/about";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
