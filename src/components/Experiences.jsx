import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Experiences() {
  useEffect(() => {
    Aos.init();
  });
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div data-aos="fade-left" data-aos-duration="800" className="experience">
      <div className="experience-top">
        <p className="experience-text">
          {" "}
          <i class="bx bx-book-open"></i> Education & Experience
        </p>

        <h3 className="experience-title">Job && Experience</h3>
      </div>
      <div className="experience-bottom">
        <div className="experience-card">
          <span className="ex-span">{year} - Present</span>
          <h4 className="ex-sub-title">International Collage diploma</h4>
          <p className="experience-sub-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            placerat ultrices metus sed luctus.
          </p>
        </div>
        <div className="experience-card">
          <span className="ex-span bir">{year} - Present</span>
          <h4 className="ex-sub-title">IT certificate</h4>
          <p className="experience-sub-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            placerat ultrices metus sed luctus.
          </p>
        </div>
        <div className="experience-card">
          <span className="ex-span ikki">{year} - Present</span>
          <h4 className="ex-sub-title">Front End developer</h4>
          <p className="experience-sub-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            placerat ultrices metus sed luctus.
          </p>
        </div>
        <div className="experience-card">
          <span className="ex-span uch">{year} - Present</span>
          <h4 className="ex-sub-title">Backend Developer</h4>
          <p className="experience-sub-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            placerat ultrices metus sed luctus.
          </p>
        </div>
        <div className="experience-card">
          <span className="ex-span tort">{year} - Present</span>
          <h4 className="ex-sub-title">WordPress developer</h4>
          <p className="experience-sub-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            placerat ultrices metus sed luctus.
          </p>
        </div>
        <div className="experience-card">
          <span className="ex-span besh">{year} - Present</span>
          <h4 className="ex-sub-title">Computer Master</h4>
          <p className="experience-sub-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            placerat ultrices metus sed luctus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
