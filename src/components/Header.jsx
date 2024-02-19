import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Imgs/profile_2.jpg";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Header">
      <i
        onClick={() => setIsOpen(!isOpen)}
        class={isOpen ? "none" : "bx bx-menu-alt-left menu"}
      ></i>
      <header className={isOpen ? "active header" : "header"}>
        <div className="header-top">
          <img className="header-img" src={logo} alt="" />
          <h4 className="header-title">Azizbek</h4>
          <h6 className="header-sub-title">Web Developer</h6>
        </div>
        <div className="header-center">
          <ul onClick={() => setIsOpen(!isOpen)} className="header-ul">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "header-box active-box" : "header-box"
              }
            >
              <i class="bx bx-home nav-icon"></i>
              <li className="header-li">Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header-box active-box" : "header-box"
              }
              to={"about"}
            >
              <i class="bx bx-user nav-icon"></i>
              <li className="header-li">About</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header-box active-box" : "header-box"
              }
              to={"service"}
            >
              <i class="bx bx-briefcase nav-icon"></i>
              <li className="header-li">Services</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header-box active-box" : "header-box"
              }
              to={"experience"}
            >
              <i class="bx bx-book-open nav-icon"></i>
              <li className="header-li">Experience</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header-box active-box" : "header-box"
              }
              to={"work"}
            >
              <i class="bx bx-package nav-icon"></i>
              <li className="header-li">Works</li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "header-box active-box" : "header-box"
              }
              to={"contact"}
            >
              <i class="bx bx-message nav-icon"></i>
              <li className="header-li">Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-top">
            <a href="https://t.me/dasturchiazizbek" target="_blank">
              <i class="bx bxl-telegram face"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/azizbek-aliyev-8044ab268"
              target="_blank"
            >
              <i class="bx bxl-linkedin twit"></i>
            </a>
            <a
              href="https://www.instagram.com/frontend_dev_4005/#"
              target="_blank"
            >
              <i class="bx bxl-instagram insta"></i>
            </a>
            <a
              href="https://upwork.com/freelancers/~011d05676cd964834d"
              target="_blank"
            >
              <i class="bx bxl-upwork upwork"></i>
            </a>
          </div>
          <div className="header-bottom-bottom">
            <p className="header-text">© 2023 Azizbek</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
