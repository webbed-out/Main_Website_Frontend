import React, { useEffect, useState } from "react";
import "./About.css";
import AboutSVg from "../../images/about_svg.png";

function About() {
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const localData = localStorage.getItem("website-data");

  useEffect(() => {
    let paragraph = [];
    async function getAboutDetails() {
      const response = JSON.parse(localData);
      if (response !== undefined) {
        const aboutDetails = response;

        paragraph = aboutDetails[0].about.split("@");
        setPara1(paragraph[0]);
        setPara2(paragraph[1]);
      }
    }
    getAboutDetails();
  }, [localData]);

  return (
    <div id="about" className="about">
      <div className="about__container">
        <h1>About Us</h1>
        <p className="para">{para1}</p>
        <div className="about__flex">
          <div className="about__left">
            <img alt="about-img" src={AboutSVg} height="440px" width="572px" />
          </div>
          <div
            className="about__right"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <p>{para2}</p>
            <button onClick={() => (window.location.href = "/about-us")}>
              Meet our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
