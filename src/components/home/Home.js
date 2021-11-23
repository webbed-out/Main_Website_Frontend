import React, {useEffect} from 'react';
import Navbar from '../navbar/Navbar';
import Landing from '../landing/Landing';
import About from '../about/About';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import './Home.css';

function Home() {

    return (
        <div className="home">
            <div className="landing__page">
                <Navbar/>
                <Landing/>
            </div>
            <About/>
            <Services/>
            <Contact/>
      
        </div>
    )
}

export default Home
