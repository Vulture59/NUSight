import "../styles/hero.css";
import "../styles/preview.css";
import "../styles/hamburger.css";
import Hero from "./landingPageComponents/Hero.tsx";
import Preview from "./landingPageComponents/Preview.tsx";
import ViewMoreButton from "./landingPageComponents/ViewMoreButton.tsx";
import Hamburger from "./landingPageComponents/Hamburger.tsx";

const HomePage = () => {
  return (
    <>
      <Hamburger />
      <Hero />
      <Preview />
      <ViewMoreButton />
    </>
  );
};

export default HomePage;
