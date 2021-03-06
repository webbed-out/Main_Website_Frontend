import React,{useState,useEffect} from 'react';
import './Services.css';
import Card from '../card/Card';
import Tech from '../techtools/Tech';

import axios from 'axios';

function Services() {

    const [tech,setTech] = useState([]);
    const [services,setServices] = useState([]);

    useEffect(()=>{

        async function getServicesDetails(){
            const response = await axios.get(`https://webbedout-api.herokuapp.com/api/services`);
            setServices(response.data);
 
        };
        async function getTechStackDetails(){
            const response = await axios.get(`https://webbedout-api.herokuapp.com/api/tech-stacks`);
            setTech(response.data);

 
        };
        getServicesDetails();
        getTechStackDetails();
        
    },[])

    return (
        <div id="service" className="services">
            <div className="services__container">
                <h1>Our Services</h1>
                <div className="services__card">
                    {
                        services.map((item)=>{
                            return (
                                <Card header={item.title} content={item.description} image={item.logo}/>
                            )
                            
                        })
                    }
                </div>
            </div>
            <div className="tech__stack">
                <h1>Our Tech Stack</h1>
                <div className="tech__lang marquee">
                    <div className="marquee__content">
                        {
                            tech.map((item)=>{
                                return(
                                    <Tech name={item.title} image={item.logo}/>
                                )
                            })
                        }
                        {
                            tech.slice(0,(tech.length/2)+1).map((item)=>{
                                return(
                                    <Tech name={item.title} image={item.logo}/>
                                )
                            })
                        }   
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Services
