import React from 'react';
import './ProjectCard.css';
import git from '../../images/git.png';

function ProjectCard({image,name,content,reverse}) {
    return (
        <>
          {reverse ? 
            <div className="project-card">
                
                <div data-aos="fade-right" data-aos-duration="1000" className="project-card-right">
                    <h1 style={{textAlign:"right"}}>{name}</h1>
                    <p>{content}</p>
                    <div className="work__social__media">
                        <img src={git}/>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="project-card-left">
                    <img src={image}/>
                </div>
            </div>:
            <div className="project-card">
                <div data-aos="fade-right" data-aos-duration="1000" className="project-card-left">
                    <img src={image}/>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="project-card-right">
                    <h1>{name}</h1>
                    <p>{content}</p>
                    <div className="work__social__media">
                        <img src={git}/>
                    </div>
                </div>
            </div>
        }
        </>
      
    )
}

export default ProjectCard
