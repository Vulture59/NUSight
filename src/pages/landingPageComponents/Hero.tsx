import nusightlogo from "../../assets/NUSightLogoNew.png";
import { Row, Col } from "antd";
import StudyVid from "../../assets/StudyVid.mp4";

const Hero = () => {
  return (
    <div className="video-wrapper">
      <video autoPlay muted loop playsInline className="background-vid">
        <source src={StudyVid} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <div className="hero">
        <img src={nusightlogo} alt="NUSight" />
        <div className="motto">"Stop Roaming. Start Cramming"</div>
      </div>
      <div className="arrow animated bounce"></div>
    </div>
  );
};

export default Hero;
