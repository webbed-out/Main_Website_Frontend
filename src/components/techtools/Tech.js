import React,{useEffect,useState} from 'react';
import './Tech.css';
import axios from 'axios';

function Tech({name,image}) {

    const [tech,setTech] = useState([]);

    useEffect(()=>{

        async function getTechStackDetails(){
            const response = await axios.get(`https://webbedout-api.herokuapp.com/api/tech-stacks`);
            setTech(response.data);

 
        };
        getTechStackDetails();
        
    },[])

    return (
        <div className="tech">
            <img src={image}/>
            <p>{name}</p> 
        </div>
    )
}

export default Tech
