import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {

    const backendServices = [
        "JWT Authentication Systems",
        "Spring Boot REST API Development",
        "Microservices Architecture Design",
        "Database Optimization & MongoDB",
        "OpenAPI Specification Implementation",
        "Financial Module Integration",
        "PDF Generation Services",
        "Role-Based Access Control",
        "Receipt Automation Solutions",
        "Legacy System Migration",
        "Third-Party API Integrations",
        "Spring Security Configuration",
        "Cache Optimization Strategies",
        "Kotlin Backend Services"
    ];


    const frontendServices = [
        "Angular Migration & Optimization",
        "React/NextJS Dashboard Development",
        "Dynamic Form Implementations",
        "State Management with RxJS",
        "Shadcn UI Component Libraries",
        "Google Auth Integration",
        "Admin Panel Development",
        "MERN/MEAN Stack Applications",
        "E-commerce Interfaces",
        "Healthcare Platform UI",
        "Social Media Frontends",
        "Real-time Chat Systems",
        "AI-Powered Web Applications",
        "Cross-Platform Compatibility"
    ];

    const devopsServices = [
        "AWS Cloud Infrastructure",
        "CI/CD Pipeline Automation",
        "Docker Container Orchestration",
        "ECS/ECR Deployment Strategies",
        "Database Scaling Solutions",
        "Performance Optimization",
        "Multi-stage Build Configurations",
        "Cloud Security Management",
        "MongoDB Atlas Configuration",
        "Load Balancing Solutions"
    ];

    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Backend Development</h3>
                    </div>
                    <ul className='service__list'>
                        {backendServices.map((service, index) => (
                            <li key={index}>
                                <BiCheck className='service__list-icon'/>
                                <p>{service}</p>
                            </li>
                        ))}
                    </ul>
                </article>

                {/* Service 2 */}

                <article className='service'>
                    <div className="service__head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className='service__list'>
                        {frontendServices.map((service, index) => (
                            <li key={index}>
                                <BiCheck className='service__list-icon'/>
                                <p>{service}</p>
                            </li>
                        ))}
                    </ul>
                </article>

                {/* Service 3 */}

                <article className='service'>
                    <div className="service__head">
                        <h3>DevOps & Cloud</h3>
                    </div>
                    <ul className='service__list'>
                        {devopsServices.map((service, index) => (
                            <li key={index}>
                                <BiCheck className='service__list-icon'/>
                                <p>{service}</p>
                            </li>
                        ))}
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services