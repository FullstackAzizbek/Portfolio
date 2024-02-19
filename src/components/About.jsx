import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CloudDownloadOutline } from "react-ionicons";
function About() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-left" data-aos-duration="800" className="About">
      <div className="about-top">
        <p className="about-text">
          {" "}
          <i class="bx bx-user"></i> Who am I?
        </p>
        <h3 className="about-title">About Me</h3>
      </div>
      <div className="about-bottom">
        <div className="about-bottom-left"></div>
        <div className="about-bottom-right">
          <div className="about-title-box">
            <h3 className="about-sub-title">Bio</h3>
            <p className="about-text">
              I am Azizbek Aliyev, web developer from Uzbekistan, Namangan. I
              have perfect experience in web site design and building and
              customization, also I am good at Reactjs. I love to talk with you
              about our unique.
            </p>
          </div>
          <div className="about-text-box">
            <div className="about-text-box-left">
              <div className="about-text-box-left-top">
                <h4 className="about-text-box-titl">Age</h4>
                <h5 className="about-text0box-sub-title">18</h5>
              </div>
              <div className="about-text-box-left-bottom">
                <h4 className="about-text-box-titl">Residence</h4>
                <h5 className="about-text0box-sub-title">Uzbekistan</h5>
              </div>
            </div>
            <div className="about-text-box-right">
              <div className="about-text-box-right-top">
                <h4 className="about-text-box-titl">Email</h4>
                <h5 className="about-text0box-sub-title">
                  alievazizbek91@gmail.com
                </h5>
              </div>
              <div className="about-text-box-right-bottom">
                <h4 className="about-text-box-titl">Phone</h4>
                <h5 className="about-text0box-sub-title">+998947344005</h5>
              </div>
            </div>
          </div>
          <button
            className="download"
            style={{ display: "flex", alignItems: "center" }}
          >
            <a
              style={{ color: "black" }}
              href="https://drive.google.com/file/d/1aKX8DP4mLMhtS8SkmFHHBnkOjEM_mCSU/view?usp=drive_link"
            >
              Download CV
            </a>{" "}
            <CloudDownloadOutline
              color={"#f8530d"}
              beat
              height="25px"
              width="25px"
            />
          </button>
        </div>
      </div>
      <div className="fun">
        <div className="fun-top">
          <p className="about-text-2">
            <i class="bx bx-award"></i> Achievements
          </p>
          <h3 className="about-title">Fun Facts</h3>
        </div>
        <div className="fun-bottom">
          <div className="fun-card">
            <div className="fun-card-left">
              <i class="bx bx-package"></i>
            </div>
            <div className="fun-card-right">
              <h3 className="fun-title">2</h3>
              <p className="fun-text">Projects finished</p>
            </div>
          </div>
          <div className="fun-card">
            <div className="fun-card-left">
              <i class="bx bx-smile"></i>
            </div>
            <div className="fun-card-right">
              <h3 className="fun-title">2</h3>
              <p className="fun-text">Happy customers</p>
            </div>
          </div>
          <div className="fun-card">
            <div className="fun-card-left">
              <i class="bx bx-gift"></i>
            </div>
            <div className="fun-card-right">
              <h3 className="fun-title">0</h3>
              <p className="fun-text">Awards winner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-top">
          <p className="about-text-3">
            <i class="bx bx-pie-chart-alt"></i> What can I do?
          </p>
          <h3 className="skill-title">My Skills</h3>
        </div>
        <div className="skill-bottom">
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">HTML</h5>
              <h4 className="skill-title-2">90%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-1"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">CSS</h5>
              <h4 className="skill-title-2">85%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-2"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">TAILWIND CSS</h5>
              <h4 className="skill-title-2">80%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-3"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">BOOTSTRAPT</h5>
              <h4 className="skill-title-2">80%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-7"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">SASS</h5>
              <h4 className="skill-title-2">80%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-6"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">JAVASCRIPT</h5>
              <h4 className="skill-title-2">70%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-4"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">REACTJS</h5>
              <h4 className="skill-title-2">70%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-5"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">FIGMA</h5>
              <h4 className="skill-title-2">70%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-6"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">Python</h5>
              <h4 className="skill-title-2">70%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-7"></div>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-top">
              <h5 className="skill-sub-title">PostgreSQL</h5>
              <h4 className="skill-title-2">70%</h4>
            </div>
            <div className="skill-card-bottom">
              <div className="line-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
