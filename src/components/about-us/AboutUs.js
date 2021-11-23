import React from 'react';
import Navbar from '../navbar/Navbar';
import LandingAbout from '../landing-about/LandingAbout';
import Team from '../team/Team';
import Contact from '../contact/Contact';
import './AboutUs.css'

function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-landing">
                <Navbar/>
                <LandingAbout/>
            </div>
            <Team/>
            <Contact/>
        </div>
    )
}

export default AboutUs
