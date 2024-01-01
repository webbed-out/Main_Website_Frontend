import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectCard from '../project-card/ProjectCard';
// import Project1 from '../../images/Project1.png';
// import Amazon from '../../images/amazon.png';
import axios from 'axios';
import {
    apiPaths,
    WEBBEDOUT_API_ENDPOINT,
} from '../../configs/webbedOutConfig';

function Button(props) {
    return (
        <div
            className='button'
            style={{
                backgroundColor: props.isActive
                    ? 'rbga(0,148,255,0.5)'
                    : '#FFFFFF',
                border: props.isActive
                    ? '2px solid #00A6FB'
                    : '2px solid #FFFFFF',
            }}
        >
            <p
                className='button-text'
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
        <div className='tabsContainer'>
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
            const response = await axios.get(
                `${WEBBEDOUT_API_ENDPOINT}${apiPaths.work}`
            );
            // setWorks(response.data);
            setWorks([
                {
                    photo: 'https://github.com/Samarthnehe/web_dev/blob/master/src/images/kalasad.png?raw=true',
                    _id: '61e01c84dbb12f6236619f93',
                    title: 'Kalasaad Studio',
                    description:
                        'Landing page for an art exhibition. Includes payment gateway that helps a user to purchase the painting from the website. The website is responsive for laptops, tablets and mobiles. Made with ReactJS, NodeJs and designed on Figma. ',
                    createdAt: '2022-01-13T12:35:16.377Z',
                    updatedAt: '2022-02-09T07:04:32.496Z',
                    __v: 0,
                    url: 'https://www.kalasaadstudios.com/',
                    type: 'WEB',
                },
                {
                    photo: 'https://github.com/webbed-out/Main_Website_Frontend/blob/master/src/images/Project1.png?raw=true',
                    _id: '61a122b8cca5279f0193a618',
                    url: 'https://webbedout.netlify.app/',
                    title: 'WeBBeD out Official Website',
                    description:
                        'This is the official website of WeBBeDOut that you are currently using. This website is dynamically rendered using a Admin Portal, with React, Node and designed with Figma.',
                    createdAt: '2021-11-26T15:29:31.644Z',
                    updatedAt: '2021-11-27T15:09:55.354Z',
                    __v: 0,
                    type: 'WEB',
                },
                {
                    photo: 'https://i.ibb.co/xKk7xvW/Whats-App-Image-2021-11-27-at-10-44-41-PM.jpg',
                    _id: '61a12362cca5279f0193a61b',
                    url: 'https://blogspot.theexpresscoder.com/',
                    title: 'Interview Spot Official Website',
                    description:
                        'Interview Spot is a website that has Interview Experiences of your peers who got Internship/Placement Oppurtunities in reputed companies. Write your own interview experience and read many! Made with NextJS, NodeJS, MongoDB.',
                    createdAt: '2021-11-26T15:36:35.827Z',
                    updatedAt: '2021-11-28T05:45:58.668Z',
                    __v: 0,
                    type: 'APP',
                },
                {
                    photo: 'https://i.ibb.co/FHjVjq1/Whats-App-Image-2021-11-26-at-11-32-49-PM.jpg',
                    _id: '61a0fd5b9034c8fc86a1e0ad',
                    url: 'https://navyaasharma.github.io/Resturant-Website/',
                    title: 'Live Dinner Restaurant Website',
                    description:
                        'A website made for Live Dinner Resturant to increase the popularity of the resturant among people and for their business growth. Made with HTML5,CSS3,Javascript.',
                    createdAt: '2021-11-26T15:29:31.644Z',
                    updatedAt: '2021-11-26T15:29:31.644Z',
                    __v: 0,
                    type: 'DESKTOP',
                },
                {
                    photo: 'https://github.com/Samarthnehe/Samarthnehe.github.io/blob/master/images/CUBEVIT.png?raw=true',
                    _id: '61a0fcf59034c8fc86a1e0ab',
                    url: 'https://cubevit-e1c09.web.app/',
                    title: 'Cube VIT Official Website',
                    description:
                        'The official website of C.U.B.E- the only cubing club of VIT. This website talks about what the entire club is and what it represents. Made with React and designed in Figma.',
                    createdAt: '2021-11-26T15:27:49.815Z',
                    updatedAt: '2021-11-27T15:07:12.455Z',
                    __v: 0,
                    type: 'APP',
                },
                {
                    photo: 'https://github.com/Samarthnehe/Samarthnehe.github.io/blob/master/images/portfolio.png?raw=true',
                    _id: '61a1232fcca5279f0193a619',
                    url: 'https://samarthnehe.github.io/',
                    title: 'Personal Portfolio Website',
                    description:
                        'Portfolio website of one of our team members. The website is completely responsive and designed on Figma. It is made using Vanilla JavaScript.',
                    createdAt: '2021-11-26T15:31:25.397Z',
                    updatedAt: '2021-11-29T09:00:16.074Z',
                    __v: 0,
                    type: 'WEB',
                },
                {
                    photo: 'https://github.com/Samarthnehe/web_dev/blob/master/src/images/HMJ.png?raw=true',
                    _id: '61e01b5edbb12f6236619f86',
                    title: 'H.M Jewellers',
                    description:
                        'A full-fledged billing desktop application for managing your shop bills. Loaded with functionalities like Create Bill, View customers, Balance view, Reminders etc. Built with ElectronJS, NodeJS and designed on Figma. ',
                    createdAt: '2022-01-13T12:30:22.859Z',
                    updatedAt: '2022-01-13T12:31:09.070Z',
                    __v: 0,
                    url: '#',
                    type: 'DESKTOP',
                },
            ]);
        }
        getWorksDetails();
    }, []);
    return (
        <div id='work' className='project'>
            <div className='project__container'>
                <div className='project-heading'>
                    <p>Our Work</p>
                    <h1>What have we created?</h1>
                </div>
                <div className='tabs'>
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
