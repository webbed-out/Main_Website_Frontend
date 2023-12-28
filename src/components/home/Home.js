import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Landing from '../landing/Landing';
import About from '../about/About';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Loader from '../loader/Loader';
import axios from 'axios';
import './Home.css';
import { apiPaths, WEBBEDOUT_API_ENDPOINT } from '../../configs/webbedOutConfig';

function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`${WEBBEDOUT_API_ENDPOINT}${apiPaths.mainDetails}`)
      .then((response) => {
        localStorage.setItem('website-data', JSON.stringify(response.data));
        localStorage.setItem('dataFetched', true);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      {localStorage.getItem('dataFetched') === null && loader ? (
        <Loader />
      ) : (
        <>
          <div className="landing__page">
            <Navbar />
            <Landing />
          </div>
          <About />
          <Services />
          <Contact />
        </>
      )}
    </div>
  );
}

export default Home;
