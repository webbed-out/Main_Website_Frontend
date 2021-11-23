import React from 'react';
import './Services.css';
import Card from '../card/Card';
import Clock from '../../images/clock 1.png';
import Quality from '../../images/quality 1.png';
import Team from '../../images/team 1.png';
import Tech from '../techtools/Tech';
import Mongo from '../../images/mongo.png';
import ReactJS from '../../images/react.png';
import Node from '../../images/node.png';
import Figma from '../../images/figma.png';
import MySQL from '../../images/mysql.png';
import PHP from '../../images/php.png';
import ReduxLogo from '../../images/reduxlogo.png';

function Services() {
    return (
        <div id="service" className="services">
            <div className="services__container">
                <h1>Our Services</h1>
                <div className="services__card">
                    <Card header="Quick Services" content="It is a long established fact that a readable content of a page when looking at its layout. There are many variations of passages of Lorem Ipsum available" image={Clock}/>
                    <Card header="Best Quality" content="It is a long established fact that a readable content of a page when looking at its layout. There are many variations of passages of Lorem Ipsum available" image={Quality}/>
                    <Card header="Experienced Team" content="It is a long established fact that a readable content of a page when looking at its layout. There are many variations of passages of Lorem Ipsum available" image={Team}/>
                </div>
            </div>
            <div className="tech__stack">
                <h1>Our Tech Stack</h1>
                <div className="tech__lang marquee">
                    <div className="marquee__content">
                        <Tech name="Mongo DB" image={Mongo}/>
                        <Tech name="React JS" image={ReactJS}/>
                        <Tech name="Node JS" image={Node}/>
                        <Tech name="PHP" image={PHP}/>
                        <Tech name="Redux" image={ReduxLogo}/>
                        <Tech name="MySQL" image={MySQL}/>
                        <Tech name="Figma" image={Figma}/>
                       
                        <Tech name="Mongo DB" image={Mongo}/>
                        <Tech name="React JS" image={ReactJS}/>
                        <Tech name="Node JS" image={Node}/>
                        <Tech name="PHP" image={PHP}/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Services
