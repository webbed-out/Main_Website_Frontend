import React from "react";
import "./LandingAbout.css";
import SocialMedia from "../social_media/SocialMedia";
import Pic1 from "../../images/aboutpic1.png";
import Pic2 from "../../images/aboutpic2.png";

function LandingAbout() {
  return (
    <div className="landing-about">
      <div
        className="landing__about__left"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>
          Get to<span> know </span>us better
        </h1>
        <p>
          Before starting to work with anyone, you should probably understand
          them better! So yes, we do it from our side first! Here you go...{" "}
        </p>
        <SocialMedia />
      </div>
      <div className="about__pics">
        <img className="about__pic1" src={Pic2} height="253" width="387" />
        <img className="about__pic2" src={Pic1} height="325" width="510" />
      </div>
    </div>
  );
}

export default LandingAbout;
