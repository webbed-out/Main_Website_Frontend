import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../images/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarToggle from '../navbar-toggle/NavbarToggle';

function Navbar() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  var currLocation = window.location.href;
  var currPage = currLocation.split('/').pop();

  const handleToggle = () => {
    var SideBar = document.getElementById('sidebar');
    SideBar.style.height = '100vh';
  };

  return (
    <>
      <NavbarToggle />
      <div id="home" className="navbar__container">
        <div className="navbar">
          <img
            alt="logo"
            onClick={() => (window.location.href = '/')}
            src={Logo}
            height="70px"
            width="240px"
            className="logo"
          />
          <div className="toggle" onClick={() => handleToggle()}>
            <MenuIcon fontSize="large" style={{ color: 'rgb(30,30,30)' }} />
          </div>
          {currPage === '' && (
            <>
              <div className="navbar__items">
                <Link className="navlinks" to="home" spy={true} smooth={true}>
                  Home
                </Link>
                <Link className="navlinks" to="about" spy={true} smooth={true}>
                  About
                </Link>
                <Link className="navlinks" to="service" spy={true} smooth={true}>
                  Services
                </Link>
                <div className="navbar__contact">
                  <Link id="contact__button" to="contact" spy={true} smooth={true}>
                    Connect
                  </Link>
                </div>
              </div>
            </>
          )}
          {currPage === 'about-us' && (
            <>
              <div style={{ width: '40%' }} className="navbar__items">
                <Link className="navlinks" onClick={() => (window.location.href = '/')}>
                  Home
                </Link>
                <Link className="navlinks" to="team" spy={true} smooth={true}>
                  Team
                </Link>

                <div className="navbar__contact">
                  <Link id="contact__button" to="contact" spy={true} smooth={true}>
                    Connect
                  </Link>
                </div>
              </div>
            </>
          )}
          {currPage === 'our-work' && (
            <>
              <div style={{ width: '40%' }} className="navbar__items">
                <Link className="navlinks" onClick={() => (window.location.href = '/')}>
                  Home
                </Link>
                <Link className="navlinks" to="work" spy={true} smooth={true}>
                  Our Work
                </Link>

                <div className="navbar__contact">
                  <Link id="contact__button" to="contact" spy={true} smooth={true}>
                    Connect
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
