import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (

        <section id='about'>

            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            < FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            < FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>10+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            < VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ Projects</small>
                        </article>

                    </div>

                    <p>
                        I am skilled Full Stack Developer with 3+ years of experience specializing in Java
                        Spring Boot, NodeJS and ReactJS. As a Senior Software Engineer at Zedfour
                        Technologies, I design high-performance backend solutions, integrate robust
                        APIs, and deliver maintainable, efficient systems. Strong problem-solving skills and ability to
                        work effectively. Dedicated to continuous
                        learning and innovation.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About