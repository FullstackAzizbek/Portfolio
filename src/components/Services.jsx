import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import vave from "../Imgs/vave.svg";
import { useEffect } from "react";
import bio from "../Imgs/biografy.png";
function Services() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div data-aos="fade-left" data-aos-duration="800" className="service">
      <div className="service-top">
        <p className="service-text">
          <i class="bx bx-briefcase"></i> What do I do?
        </p>
        <h3 className="service-title">Services</h3>
      </div>
      <div className="service-bottom">
        <div className="service-card">
          <i class="bx bx-globe"></i>
          <h5 className="service-sub-title">Web Development</h5>
          <p className="service-sub-text">
            I am FrontEnd developer and nowadays I can build different excellent
            websites.
          </p>
        </div>
        <div className="service-card">
          <i class="bx bx-palette"></i>
          <h5 className="service-sub-title">UI & UX Design</h5>
          <p className="service-sub-text">
            I can use from Figma website very good and I can create pretty web
            designs.
          </p>
        </div>
        <div className="service-card">
          <i class="bx bxl-react"></i>
          <h5 className="service-sub-title">ReactJs</h5>
          <p className="service-sub-text">
            I can work in ReactJs perfect and I always use from this framework
            in website development.
          </p>
        </div>
        <div className="service-card">
          <i class="bx bxl-python"></i>
          <h5 className="service-sub-title">Python developer</h5>
          <p className="service-sub-text">
            I am good in Python programming and I always use this programming
            language for make backend of the website.
          </p>
        </div>
        <div className="service-card">
          <i class="bx bxl-redux redux"></i>
          <h5 className="service-sub-title">Redux</h5>
          <p className="service-sub-text">
            I can work in Redux perfect and I always use from this framework in
            website development.
          </p>
        </div>
        <div className="service-card">
          <i class="bx bxl-javascript java"></i>
          <h5 className="service-sub-title">Java Script</h5>
          <p className="service-sub-text">
            I can work in java Script perfect and I always use from this
            framework in website development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
