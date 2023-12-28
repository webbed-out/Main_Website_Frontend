import React, { useEffect, useState } from "react";
import "./Team.css";
import Person from "../person/Person";
import Person1 from "../../images/Person1.png";
import Person2 from "../../images/Person2.png";
import Person3 from "../../images/Person3.png";
import axios from "axios";

function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function getTeamsDetails() {
      const response = await axios.get(
        `https://webbedout-api.herokuapp.com/api/team`
      );
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
              reverse={index % 2}
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
