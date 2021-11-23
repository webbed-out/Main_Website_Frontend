import React from 'react';
import './SocialMedia.css';
import FB from '../../images/FB.png';
import git from '../../images/git.png';
import insta from '../../images/insta.png';

function SocialMedia() {
    return (
        <div className="social__media">
            <img src={FB}/>
            <img src={git}/>
            <img src={insta}/>
        </div>
    )
}

export default SocialMedia
