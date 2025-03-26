import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {

    const EXPERIENCED = "Experienced"
    const INTERMEDIATE = "Intermediate"

    const frontendSkills = [
        {name: 'React JS', level: EXPERIENCED},
        {name: 'Angular', level: INTERMEDIATE},
        {name: 'Next JS', level: INTERMEDIATE},
        {name: 'JavaScript', level: EXPERIENCED},
        {name: 'TypeScript', level: EXPERIENCED},
        {name: 'HTML/CSS', level: EXPERIENCED},
        {name: 'Tailwind', level: EXPERIENCED},
        {name: 'Shadcn UI', level: EXPERIENCED},
        {name: 'Bootstrap', level: EXPERIENCED},
        {name: 'Figma', level: INTERMEDIATE},
        {name: 'WordPress', level: INTERMEDIATE},
    ];

    const backendSkills = [
        {name: 'Java', level: EXPERIENCED},
        {name: 'Spring Boot', level: EXPERIENCED},
        {name: 'JDBC', level: EXPERIENCED},
        {name: 'JPA', level: EXPERIENCED},
        {name: 'Spring Security', level: EXPERIENCED},
        {name: 'Kotlin', level: INTERMEDIATE},
        {name: 'Node JS', level: EXPERIENCED},
        {name: 'Nest JS', level: EXPERIENCED},
        {name: 'Express JS', level: EXPERIENCED},
        {name: 'Python', level: INTERMEDIATE},
        {name: 'Flask', level: INTERMEDIATE},
        {name: 'C#', level: INTERMEDIATE},
    ];

    const devOpsSkills = [
        {name: 'AWS', level: INTERMEDIATE},
        {name: 'AWS EC2', level: EXPERIENCED},
        {name: 'AWS RDS', level: INTERMEDIATE},
        {name: 'AWS ECS', level: INTERMEDIATE},
        {name: 'Docker', level: EXPERIENCED},
        {name: 'Kubernetes', level: INTERMEDIATE},
        {name: 'DevOps', level: INTERMEDIATE},
        {name: 'CI/CD', level: INTERMEDIATE},
    ];

    const databaseSkills = [
        {name: 'PostgreSQL', level: EXPERIENCED},
        {name: 'MongoDB', level: EXPERIENCED},
        {name: 'MySQL', level: INTERMEDIATE},
        {name: 'AWS DynamoDB', level: INTERMEDIATE},
        {name: 'Firebase', level: INTERMEDIATE},
    ];

    const renderSkills = (skills) =>
        skills.map((skill, index) => (
            <article key={index} className='experience__detail'>
                <BsPatchCheckFill className='experience__detail-icon'/>
                <div>
                    <h4>{skill.name}</h4>
                    <small className='text-light'>{skill.level}</small>
                </div>
            </article>
        ));

    return (
        <section id='experience'>
            <h5>What skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__game-development">
                    <h3>Backend Development</h3>
                    <div className='experience__content'>{renderSkills(backendSkills)}</div>
                </div>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>{renderSkills(frontendSkills)}</div>
                </div>
                <div className="experience__game-development">
                    <h3>DevOps</h3>
                    <div className='experience__content'>{renderSkills(devOpsSkills)}</div>
                </div>
                <div className="experience__game-development">
                    <h3>Databases</h3>
                    <div className='experience__content'>{renderSkills(databaseSkills)}</div>
                </div>
            </div>

        </section>
    )
}

export default Experience