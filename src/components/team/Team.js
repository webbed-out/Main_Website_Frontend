import React from 'react';
import './Team.css';
import Person from '../person/Person';
import Person1 from '../../images/Person1.png';
import Person2 from '../../images/Person2.png';
import Person3 from '../../images/Person3.png';

function Team() {
    return (
        <div id="team" className="team">
            <div className="team__container">
                <h1>Our Team</h1>
                <Person reverse={false} name="John Doe" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words" image={Person1}/>
                <Person reverse={true} name="Jenny Kaif" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words" image={Person2}/>
                <Person reverse={false} name="David Watson" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words" image={Person3}/>
            </div>
        </div>
    )
}

export default Team
