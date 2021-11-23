import React from 'react';
import './Person.css';
import git from '../../images/git.png';
import linkedin from '../../images/linkedin.png';

function Person({name,content,image,reverse}) {
    return (
        <>
        {reverse ?
            <div className="person">
                <div className="person__description">
                    <div style={{textAlign: 'right'}} className="person__header">{name}</div>
                    <div className="person__desc">
                        {content}
                        <div style={{justifyContent: 'flex-end',width:"100%"}} className="person__social__media">
                            <img style={{marginRight:"20px"}} src={git}/>
                            <img src={linkedin}/>
                        </div>
                    </div>

                </div>
                <div className="person__photo">
                    <img src={image}/>
                </div>
            </div>
        :<div className="person">
            <div className="person__photo">
                <img src={image}/>
            </div>
            <div className="person__description">
                <div className="person__header">{name}</div>
                <div className="person__desc">
                    {content}
                    <div className="person__social__media">
                        <img src={git}/>
                        <img src={linkedin}/>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
        
    )
}

export default Person
