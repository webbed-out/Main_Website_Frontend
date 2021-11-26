import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/about-us/AboutUs';
import OurWork from './components/ourwork/OurWork';


function App() {

  return (
    <Router>
        <div className="App">
     
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/about-us" element={<AboutUs/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/our-work" element={<OurWork/>}></Route>
        </Routes>
        </div>
    </Router>
   
  );
}

export default App;
