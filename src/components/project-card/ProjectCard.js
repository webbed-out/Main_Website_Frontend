import React from 'react';
import './ProjectCard.css';
import website from '../../images/website.png';

function ProjectCard({ image, name, content, reverse, link, type }) {
  return (
    <>
      {reverse === 1 ? (
        <div className="project-card" data-aos="fade-left" data-aos-duration="1000">
          <div className="project-card-right">
            <div className="project-card-right-content">
              <h5 style={{ textAlign: 'right', fontSize: 18, color: '#00563B' }}>{type}</h5>
              <h1 style={{ textAlign: 'right' }}>{name}</h1>
              <p>{content}</p>
            </div>

            <div className="work__social__media__reverse">
              <a href={link} target="_blank">
                View Project
              </a>
            </div>
          </div>
          <div className="project-card-left-reverse">
            <img src={image} />
          </div>
        </div>
      ) : (
        <div className="project-card" data-aos="fade-right" data-aos-duration="1000">
          <div className="project-card-left">
            <img src={image} />
          </div>
          <div className="project-card-right">
            <div className="project-card-right-content">
              <h5 style={{ fontSize: 18, color: '#00563B' }}>{type}</h5>
              <h1>{name}</h1>
              <p>{content}</p>
            </div>
            <div className="work__social__media">
              <a href={link} target="_blank">
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
