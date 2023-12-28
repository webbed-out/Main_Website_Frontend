import React from 'react';
import './Person.css';
import linkedin from '../../images/linkedin.png';

function Person({ name, content, image, link }) {
  return (
    <div className="person">
      <div
        className="person__photo"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <img src={image} />
      </div>
      <div className="person__description">
        <div className="person__header">{name}</div>
        <div className="person__desc">
          {content}
          <div className="person__social__media">
            <a href={link} target="_blank">
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
