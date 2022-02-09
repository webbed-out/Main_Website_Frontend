import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Landing from "../landing/Landing";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Loader from "../loader/Loader";
import axios from "axios";
import "./Home.css";

function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://webbedout-api.herokuapp.com/api/main-details`)
      .then((response) => setLoader(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      {loader ? (
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
