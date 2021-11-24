import React from 'react';
import './NavbarToggle.css';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link} from 'react-scroll';


function NavbarToggle() {

    const handleToggleClose =()=>{
        var SideBar = document.getElementById("sidebar");
        SideBar.style.width = "0vw";
        SideBar.style.padding = "0px";
    }

    var currLocation = window.location.href;
    var currPage = currLocation.split("/").pop();


    return (
        <div id="sidebar" >
            <div className="toggle-cross">
                <CancelIcon onClick={()=>handleToggleClose()} fontSize="large" style={{color:"rgb(30,30,30)"}}/>
            </div>
            <div className="toggle-items">
            { currPage === "" &&
                        <>
                            <div className="toggle__items">
                                <Link to="home" spy={true} onClick={()=>handleToggleClose()} smooth={true}>Home</Link>
                                <Link to="about" spy={true} onClick={()=>handleToggleClose()} smooth={true}>About</Link>
                                <Link to="service" spy={true} onClick={()=>handleToggleClose()} smooth={true}>Services</Link>
                                <div className="toggle__contact">
                                    <Link to="contact" spy={true} smooth={true} onClick={()=>handleToggleClose()}>Contact</Link>
                                </div>
                            </div>
                            
                        </>
                  
                    }
                    {
                        currPage === "about-us" &&
                        < >
                        <div style={{width:"40%"}} className="toggle__items">
                            <Link onClick={()=>window.location.href="/"}>Home</Link>
                            <Link onClick={()=>handleToggleClose()} to="team" spy={true} smooth={true}>Team</Link>
                         
                            <Link onClick={()=>handleToggleClose()} to="contact" spy={true} smooth={true}>
                                <div className="toggle__contact">
                                    <a >Contact</a>
                                </div>
                            </Link>
                           
                        </div>
                           
                        </>
                    }{
                        currPage === "our-work" && 
                        <>
                            <div style={{width:"40%"}} className="toggle__items">
                                <Link onClick={()=>window.location.href="/"}>Home</Link>
                                <Link onClick={()=>handleToggleClose()} to="work" spy={true} smooth={true}>Our Work</Link>
                            
                                <Link onClick={()=>handleToggleClose()} to="contact" spy={true} smooth={true}>
                                    <div className="toggle__contact">
                                        <a>Contact</a>
                                    </div>
                                </Link>
                           
                            </div>
                        </>
                    }
            </div>
        </div>
    )
}

export default NavbarToggle
