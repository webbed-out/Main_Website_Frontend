import React, { useEffect, useState } from 'react';
import './Team.css';
import Person from '../person/Person';
import axios from 'axios';
import { apiPaths, WEBBEDOUT_API_ENDPOINT } from '../../configs/webbedOutConfig';

function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function getTeamsDetails() {
      const response = await axios.get(`${WEBBEDOUT_API_ENDPOINT}${apiPaths.team}`);
      setTeam(response.data);
      console.log(response.data);
    }
    getTeamsDetails();
  }, []);

  return (
    <div id="team" className="team">
      <div className="team__container">
        <div className="team-heading">
          <p>Our Team</p>
          <h1>Who do we have?</h1>
        </div>
        {team.map((person, index) => {
          return (
            <Person
              name={person.name}
              content={person.description}
              image={person.photo}
              link={person.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Team;
