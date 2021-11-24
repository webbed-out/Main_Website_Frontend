import React from 'react';
import Navbar from '../navbar/Navbar';
import Work from '../work/Work';
import './OurWork.css';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

function OurWork() {
    return (
        <div className="our__work">
            <div className="our-work-landing">
                <Navbar/>
                <Work/>
            </div>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default OurWork
