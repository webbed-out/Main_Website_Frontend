import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectCard from '../project-card/ProjectCard';
// import Project1 from '../../images/Project1.png';
// import Amazon from '../../images/amazon.png';
import axios from 'axios';
import { apiPaths, WEBBEDOUT_API_ENDPOINT } from '../../configs/webbedOutConfig';

function Button(props) {
  return (
    <div
      className="button"
      style={{
        backgroundColor: props.isActive ? 'rbga(0,148,255,0.5)' : '#FFFFFF',
        border: props.isActive ? '2px solid #00A6FB' : '2px solid #FFFFFF',
      }}
    >
      <p
        className="button-text"
        style={{
          color: props.isActive ? '#00A6FB' : '#4A4A4A',
          fontWeight: props.isActive ? '700' : '400',
        }}
      >
        {props.label}
      </p>
    </div>
  );
}

function Tabs(props) {
  const tabsList = ['ALL', 'DESKTOP', 'WEB', 'APP'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabPress = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabsContainer">
      {tabsList.map((item, index) => {
        return (
          <Button
            onPress={() => handleTabPress(index)}
            label={item}
            isActive={index === activeIndex}
          />
        );
      })}
    </div>
  );
}

function Button(props) {
  return (
    <div
      className="button"
      style={{
        backgroundColor: props.isActive ? 'rbga(0,148,255,0.5)' : '#FFFFFF',
        border: props.isActive ? '2px solid #00A6FB' : '2px solid #FFFFFF',
      }}
    >
      <p
        className="button-text"
        style={{
          color: props.isActive ? '#00A6FB' : '#4A4A4A',
          fontWeight: props.isActive ? '700' : '400',
        }}
      >
        {props.label}
      </p>
    </div>
  );
}

function Tabs(props) {
  const tabsList = ['ALL', 'DESKTOP', 'WEB', 'APP'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabPress = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabsContainer">
      {tabsList.map((item, index) => {
        return (
          <Button
            onPress={() => handleTabPress(index)}
            label={item}
            isActive={index === activeIndex}
          />
        );
      })}
    </div>
  );
}

function Projects() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function getWorksDetails() {
      const response = await axios.get(`${WEBBEDOUT_API_ENDPOINT}${apiPaths.work}`);
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
        <div className="tabs">
          <Tabs />
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
