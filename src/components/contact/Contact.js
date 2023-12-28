import React from "react";
import "./Contact.css";
import SocialMedia from "../social_media/SocialMedia";
import Phone from "../../images/phone.svg";
import Mail from "../../images/mail.svg";
import { Link } from "react-scroll";

function Contact() {
  var currLocation = window.location.href;
  var currPage = currLocation.split("/").pop();

  return (
    <div id="contact" className="contact">
      <div className="contact__box1">
        <div className="contact__container">
          <div className="contact__question">
            <h1>Have Questions?</h1>
            <form className="form">
              <label>Name</label>
              <input type="text" className="input"></input>
              <label>Email</label>
              <input type="text" className="input"></input>
              <label>Message</label>
              <textarea rows="8" cols="50"></textarea>
            </form>
          </div>
          <div className="contact__quick">
            <h1>Quick Links</h1>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
            {currPage === "" && (
              <>
                <Link to="about" spy={true} smooth={true}>
                  About
                </Link>
                <Link to="service" spy={true} smooth={true}>
                  Services
                </Link>
              </>
            )}
            {currPage === "about-us" && (
              <>
                <Link to="team" spy={true} smooth={true}>
                  Team
                </Link>
              </>
            )}
            {currPage === "our-work" && (
              <>
                <Link to="work" spy={true} smooth={true}>
                  Our Work
                </Link>
              </>
            )}
          </div>
          <div className="contact__details">
            <h1>Contact Us</h1>
            <p>
              Reach out to us for any kind of queries and help. Mail/Call us at
              -{" "}
            </p>
            <div className="contact__info">
              <img src={Phone} />
              <p>+91 6303618891</p>
            </div>
            <div className="contact__info">
              <img src={Mail} />
              <p>webbedout00@gmail.com</p>
            </div>

            <SocialMedia />
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="copyright-container">
          <h2>© Copyright WebbedOut Freelancing. All Rights Reserved</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
