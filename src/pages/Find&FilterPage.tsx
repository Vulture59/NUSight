import "../styles/hero.css";
import "../styles/preview.css";
import Hero from "./landingPageComponents/Hero.tsx";
import Preview from "./landingPageComponents/Preview.tsx";
import { useParams } from "react-router-dom";

export default function FindnFilterPage() {
  useParams();
  return (
    <>
      <Hero />
      <Preview />
    </>
  );
};


