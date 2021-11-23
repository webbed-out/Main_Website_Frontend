import React from 'react';
import './Card.css';

function Card({header,content,image}) {
    return (
        <div className="card" data-aos="flip-down" data-aos-duration="1000">
            <img src={image} height="115px" width="115px"/>
            <h1>{header}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Card
