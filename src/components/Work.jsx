import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Work() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-left" data-aos-duration="800" className="Work">
      <div className="work-top">
        <p className="work-text">
          <i class="bx bx-package"></i> Recent Works
        </p>
        <h3 className="work-title">Portfolio</h3>
      </div>
      <div className="work-bottom">
        <div className="work-card">
          <a href="https://itparkchust.netlify.app/" target="_blank">
            <div className="work-card-top">
              
            </div>
          </a>
          <h4 className="work-sub-title">IT Park</h4>
          <h6 className="work-h6">Website</h6>
        </div>
        <div className="work-card">
          <a href="https://calcazizbek.netlify.app/" target="_blank">
            <div className="work-card-top"></div>
          </a>
          <h4 className="work-sub-title">Calculator</h4>
          <h6 className="work-h6">Web App</h6>
        </div>
      </div>
    </div>
  );
}

export default Work;
