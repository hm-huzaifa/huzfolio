import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Experience (UX) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Typography and Color Palette</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX Audits and Consultations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website and App Redesigns</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand Integration</p>
            </li>
          </ul>
        </article>

        {/* Service 2 */}

        <article className='service'>
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React JS / Angular JS / Next JS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Static Website Development (HTML/CSS/JS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Interface (UI) Implementation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Animations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom UI Components</p>
            </li>
          </ul>
        </article>

        {/* Service 3 */}

        <article className='service'>
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Java Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend with Spring Boot</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Creation & Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Implementation</p>
            </li>
          </ul>
        </article>



      </div>
    </section>
  )
}

export default Services