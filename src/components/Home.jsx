import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import vave from "../Imgs/vave.svg";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-left" data-aos-duration="800" className="Home">
      <div className="phone-box">
        <h6 className="phone">
          <i class="bx bx-phone-call"></i> +998947344005
        </h6>
        <h6 className="phone">
          <i class="bx bx-envelope"></i> alievazizbek91@gmail.com
        </h6>
      </div>
      <div className="home-left">
        <div className="home-box">
          <h5 className="home-title">
            <img src={vave} className="vave" alt="" /> Hello
          </h5>
        </div>
        <h3 className="home-sub-title">I'M Azizbek</h3>
        <p className="home-text">
          I am Azizbek Aliyev, web developer from Uzbekistan, Namangan. I have
          perfect experience in web site design and building and customization,
          also I am good at Reactjs.
        </p>
        <div className="home-btn-box">
          <Link to={"contact"}>
            <button className="home-btn contact-btn">Contact Me</button>
          </Link>
          <Link to={"work"}>
            <button className="home-btn work-btn-2">View Works </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
