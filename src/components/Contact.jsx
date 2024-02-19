import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import call from "../Imgs/call.png";
import mail from "../Imgs/mail.png";
import locate from "../Imgs/location.png";
function Contact() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-left" data-aos-duration="800" className="Contact">
      <div className="contact-top">
        <p className="contact-text">
          <i class="bx bx-message"></i> Get In touch
        </p>
        <h3 className="contact-title">Contact</h3>
      </div>
      <div className="cards">
        <div className="cards-card">
          <div className="cards-card-left">
            <img width={55} height={55} className="call" src={call} alt="" />
          </div>
          <div className="cards-card-right">
            <h5 className="cards-title">Phone</h5>
            <p className="cards-text">+998947344005</p>
          </div>
        </div>
        <div className="cards-card">
          <div className="cards-card-left">
            <img width={55} height={55} className="call" src={mail} alt="" />
          </div>
          <div className="cards-card-right">
            <h5 className="cards-title">E-Mail</h5>
            <p className="cards-text">alievazizbek91@gmail.com</p>
          </div>
        </div>
        <div className="cards-card">
          <div className="cards-card-left">
            <img width={55} height={55} className="call" src={locate} alt="" />
          </div>
          <div className="cards-card-right">
            <h5 className="cards-title">Location</h5>
            <p className="cards-text">Uzbekistan, Namangan</p>
          </div>
        </div>
      </div>
      <div className="contact-bottom">
        <h4 className="cards-sub-title">Send Message</h4>
        <form action="">
          <div className="inputs">
            <input required type="text" placeholder="Your name" />
            <input required type="email" placeholder="Your email" />
          </div>
          <input required type="text" className="sub" placeholder="Subject" />
          <textarea
            required
            placeholder="Your message here"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="Submit" role="submit">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
