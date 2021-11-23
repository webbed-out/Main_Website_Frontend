import React from 'react';
import './About.css';
import AboutSVg from '../../images/about_svg.png';
import {useNavigate} from 'react-router-dom';

function About() {

    const navigate = useNavigate();

    return (
        <div id="about" className="about">
            <div className="about__container">
                <div className="about__left">
                    <img src={AboutSVg} height="486px" width="648px"/>
                </div>
                <div className="about__right" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <h1>Who are we?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button onClick={()=>window.location.href='/about-us'}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About
