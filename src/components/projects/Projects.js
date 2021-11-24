import React from 'react';
import './Projects.css';
import ProjectCard from '../project-card/ProjectCard';
import Project1 from '../../images/Project1.png';
import Amazon from '../../images/amazon.png';

function Projects() {
    return (
        <div id="work" className="project">
            <div className="project__container">
                <h1>Our Work</h1>
                <ProjectCard name="WebbedOut" content='Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words. There are many
                 variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                  or randomised words' image={Project1} reverse={false}/>
                <ProjectCard name="Amazon" content='Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words. There are many
                 variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                  or randomised words' image={Amazon} reverse={true}/>
            </div>
        </div>
    )
}

export default Projects
