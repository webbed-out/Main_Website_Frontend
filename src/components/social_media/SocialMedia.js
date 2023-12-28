import React from "react";
import "./SocialMedia.css";
import FB from "../../images/FB.png";
import git from "../../images/git.png";
import insta from "../../images/insta.png";
import Linkedin from "../../images/linkedin.png";

function SocialMedia() {
  return (
    <div className="social__media">
      <a href="https://www.linkedin.com/company/webbedout/">
        <img src={Linkedin} alt="linkedin icon" />
      </a>
      <a href="https://github.com/webbed-out">
        <img src={git} alt="github icon" />
      </a>
      <a href="javascript:void(0)">
        <img src={insta} alt="instagram icon" />
      </a>
    </div>
  );
}

export default SocialMedia;
