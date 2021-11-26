import React,{useEffect, useState} from 'react';
import './Landing.css';
import HomePic from '../../images/SVG.png';
import SocialMedia from '../social_media/SocialMedia';
import axios from 'axios';

function Landing() {

    const [header, setHeader] = useState("");
    
    const [description, setDescription] = useState("");
    const [headerFirst, setHeaderFirst] = useState("");
    const [headerSecond, setHeaderSecond] = useState("");

    useEffect(()=>{
        var spaceIndex = [];
        async function getLandingDetails(){
            const response = await axios.get(`https://webbedout-api.herokuapp.com/api/main-details`);
            const answer=(response.data);

            setHeader(answer[0].title);
            setDescription(answer[0].description);
       
            spaceIndex = answer[0].title.split(" ");
            console.log(spaceIndex);
            var first = "";
            for(let i=0;i<4;i++){
                first +=spaceIndex[i];
                first += " "
            }
            var second = "";
            for(let i=5;i<spaceIndex.length;i++){
                second += spaceIndex[i];
                second += " "
            }

            setHeaderFirst(first);
            setHeaderSecond(second);
            setHeader(spaceIndex[4]);
            
        };
        
        getLandingDetails();

    },[])

    return (
        <div className="home__page">
            <div className="home__left" data-aos="fade-right" data-aos-duration="1000">
                <h1>{headerFirst}<span>{header} </span>{headerSecond}</h1>
                <p>{description}</p>
                <button onClick={()=>window.location.href = '/our-work'}>Check our work</button>
                <SocialMedia/>
            </div>
            <img  data-aos="fade-left" data-aos-duration="1000" src={HomePic} height="430px" width="625px"/>
        </div>
    )
}

export default Landing
