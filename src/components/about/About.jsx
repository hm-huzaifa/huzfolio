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
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              < FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              < FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about__card'>
              < VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>70+ Projects</small>
            </article>

          </div>

          <p>As a versatile professional, I excel in both the realms of front-end development and game development. With a keen eye for user-centric design, I craft captivating interfaces using HTML, CSS, React and JavaScript to ensure seamless web experiences. Simultaneously, my passion for game development drives me to create immersive worlds, combining coding prowess with artistic vision to deliver engaging gameplay, visually stunning graphics, and interactive storytelling. My skill set bridges two dynamic domains, allowing me to bring creativity and innovation to both web and gaming landscapes.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About