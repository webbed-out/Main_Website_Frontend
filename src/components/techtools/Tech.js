import React from 'react';
import './Tech.css'

function Tech({name,image}) {
    return (
        <div className="tech">
            <img src={image}/>
            <p>{name}</p> 
        </div>
    )
}

export default Tech
