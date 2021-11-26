import React from 'react';
import './Work.css';
import SocialMedia from '../social_media/SocialMedia';
import WorkPic1 from '../../images/WorkPic1.png';
import WorkPic2 from '../../images/WorkPic2.png';

function Work() {

    
    return (
        <div className="work">
            <div className="work__container">
                <div className="work__left" data-aos="fade-right" data-aos-duration="1000">
                <h1>Come check our previous <span>works</span></h1>
                <p>Before starting to work with anyone, you should probably understand them better! So yes, we do it from our side first! Here you go... </p>
                <SocialMedia/>
                </div>
                <div className="work__right">
                    <div className="work__images">
                        <img data-aos="fade-right" data-aos-duration="1000" className="work__pic2" src={WorkPic2} height="385" width="620" />
                        <img data-aos="fade-left" data-aos-duration="1000" className="work__pic1" src={WorkPic1} height="280" width="481"/>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Work
