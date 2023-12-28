import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectCard from "../project-card/ProjectCard";
import Project1 from "../../images/Project1.png";
import Amazon from "../../images/amazon.png";
import axios from "axios";

function Projects() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function getWorksDetails() {
      const response = await axios.get(
        `https://webbedout-api.herokuapp.com/api/work`
      );
      setWorks(response.data);
    }
    getWorksDetails();
  }, []);
  return (
    <div id="work" className="project">
      <div className="project__container">
        <div className="project-heading">
          <p>Our Work</p>
          <h1>What have we created?</h1>
        </div>
        {works.map((work, index) => {
          return (
            <ProjectCard
              name={work.title}
              content={work.description}
              image={work.photo}
              reverse={index % 2}
              link={work.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
