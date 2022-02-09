import React from 'react';
import './Loader.css'

function Loader() {
    return (
        <div className="loader">
            <div className="spinner">
                <div className="pulse"></div>
                <div className="pulse rect2"></div>
                <div className="pulse rect3"></div>
                <div className="rect4 pulse"></div>
                <div className="rect5 pulse"></div>
            </div>
        </div>
       
    )
}

export default Loader
