import React from 'react';
import './Landing.css';
import HomePic from '../../images/SVG.png';
import SocialMedia from '../social_media/SocialMedia';

function Landing() {
    return (
        <div className="home__page">
            <div className="home__left" data-aos="fade-right" data-aos-duration="1000">
                <h1>Get the best website <span>freelance</span> service</h1>
                <p>We are a team of experienced developers who aim at providing professional website services for your personal/business needs. </p>
                <button onClick={()=>window.location.href = '/our-work'}>Check our work</button>
                <SocialMedia/>
            </div>
            <img  data-aos="fade-left" data-aos-duration="1000" src={HomePic} height="430px" width="625px"/>
        </div>
    )
}

export default Landing
