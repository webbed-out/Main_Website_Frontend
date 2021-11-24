import React,{useEffect} from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../images/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarToggle from '../navbar-toggle/NavbarToggle';

function Navbar() {
    useEffect(()=>{
        window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
          })
    })
    var currLocation = window.location.href;
    var currPage = currLocation.split("/").pop();

    const handleToggle =()=>{
        var SideBar = document.getElementById("sidebar");
        SideBar.style.padding = "10%";
        SideBar.style.width = "80vw";
        
    }

    return (
        <>
        <NavbarToggle/>
        <div id="home" className="navbar__container">
            <div className="navbar">
                <img onClick={()=>window.location.href="/"} src={Logo} height="80px" width="280px"/>
                    <div className="toggle" onClick={()=>handleToggle()}><MenuIcon  fontSize="large" style={{color:"rgb(30,30,30)"}}/></div>
                    { currPage === "" &&
                        <>
                            <div className="navbar__items">
                                <Link to="home" spy={true} smooth={true}>Home</Link>
                                <Link to="about" spy={true} smooth={true}>About</Link>
                                <Link to="service" spy={true} smooth={true}>Services</Link>
                                <div className="navbar__contact">
                                    <Link to="contact" spy={true} smooth={true}>Contact</Link>
                                </div>
                            </div>
                            
                        </>
                  
                    }
                    {
                        currPage === "about-us" &&
                        < >
                        <div style={{width:"40%"}} className="navbar__items">
                            <Link onClick={()=>window.location.href="/"}>Home</Link>
                            <Link to="team" spy={true} smooth={true}>Team</Link>
                         
                            <Link to="contact" spy={true} smooth={true}>
                                <div className="navbar__contact">
                                    <a>Contact</a>
                                </div>
                            </Link>
                           
                        </div>
                           
                        </>
                    }{
                        currPage === "our-work" && 
                        <>
                            <div style={{width:"40%"}} className="navbar__items">
                                <Link onClick={()=>window.location.href="/"}>Home</Link>
                                <Link to="work" spy={true} smooth={true}>Our Work</Link>
                            
                                <Link to="contact" spy={true} smooth={true}>
                                    <div className="navbar__contact">
                                        <a>Contact</a>
                                    </div>
                                </Link>
                           
                            </div>
                        </>
                    }
            </div>
        </div>
        </>
        
    )
}

export default Navbar