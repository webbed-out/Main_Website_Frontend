import React,{useEffect,useState} from 'react';
import './About.css';
import AboutSVg from '../../images/about_svg.png';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function About() {


    const [para1,setPara1] = useState("");
    const [para2,setPara2] = useState("");

    useEffect(()=>{
        let paragraph = [];
        async function getAboutDetails(){
            const response = await axios.get(`https://webbedout-api.herokuapp.com/api/main-details`);
            const aboutDetails=(response.data);
            
            paragraph = aboutDetails[0].about.split("@");
            setPara1(paragraph[0]);
            setPara2(paragraph[1]);
      
 
        };
        getAboutDetails();
        
        

    },[])

    return (
        <div id="about" className="about">
            <div className="about__container">
                <div className="about__left">
                    <img src={AboutSVg} height="486px" width="648px"/>
                </div>
                <div className="about__right" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <h1>Who are we?</h1>
                    <p>{para1}</p>
                    <p>{para2}</p>
                    <button onClick={()=>window.location.href='/about-us'}>Meet our Team</button>
                </div>
            </div>
        </div>
    )
}

export default About
