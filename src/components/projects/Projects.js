import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import ProjectCard from '../project-card/ProjectCard';
// import Project1 from '../../images/Project1.png';
// import Amazon from '../../images/amazon.png';
import axios from 'axios';
import { apiPaths, WEBBEDOUT_API_ENDPOINT } from '../../configs/webbedOutConfig';
import Loader from '../loader/Loader';

function Tabs(props) {
  const tabsList = ['ALL', 'DESKTOP', 'WEB', 'APP'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabPress = (index, type) => {
    setActiveIndex(index);
    props.changeSelectedType(type);
  };

  return (
    <div className="tabsContainer">
      {tabsList.map((item, index) => {
        return (
          <Button
            onPress={() => handleTabPress(index, item)}
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
      onClick={props.onPress}
      style={{
        backgroundColor: props.isActive ? '#00A6FB50' : '#FFFFFF',
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

function Projects() {
  const [works, setWorks] = useState(null);
  const [selectedType, setSelectedType] = useState('ALL');
  const workGrouped = {
    ['WEB']: [],
    ['DESKTOP']: [],
    ['APP']: [],
    ['ALL']: [],
  };

  const changeSelectedType = (type) => {
    setSelectedType(type);
  };

  const pairProjectsWithType = (data) => {
    data.forEach((item, index) => {
      workGrouped['ALL'].push(item);
      if (item?.type) {
        workGrouped[item.type].push(item);
      }
    });
    return workGrouped;
  };

  useEffect(() => {
    async function getWorksDetails() {
      axios
        .get(`${WEBBEDOUT_API_ENDPOINT}${apiPaths.work}`)
        .then((response) => {
          setWorks(pairProjectsWithType(response.data));
        })
        .catch((e) => {
          console.log('[WEBBEDOUT][ERROR] - ', e);
        });
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
          <Tabs changeSelectedType={changeSelectedType} />
        </div>
        {works && Object.keys(works) && works?.[selectedType].length ? (
          works?.[selectedType]?.map((work, index) => {
            return (
              <ProjectCard
                name={work.title}
                content={work.description}
                image={work.photo}
                reverse={index % 2}
                link={work.url}
                type={work?.type}
              />
            );
          })
        ) : (
          <div
            style={{
              height: '40vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h3 style={{ fontSize: '24px' }}>No projects of this type :(</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
