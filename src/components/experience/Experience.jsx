import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
            <div className="experience__content">
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>React JS</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>Angular</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>Next JS</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>TypeScript</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>HTML/CSS</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>Tailwind</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>Figma</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__detail'>
                    <BsPatchCheckFill className='experience__detail-icon'/>
                    <div>
                        <h4>Wordpress</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
            </div>

        </div>
          <div className="experience__game-development">
              <h3>Backend Development</h3>
              <div className="experience__content">
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>Java</h4>
                          <small className='text-light'>Experienced</small>
                      </div>
                  </article>
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>Spring Boot</h4>
                          <small className='text-light'>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>Node JS</h4>
                          <small className='text-light'>Experienced</small>
                      </div>
                  </article>
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>Express JS</h4>
                          <small className='text-light'>Experienced</small>
                      </div>
                  </article>
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>C++</h4>
                          <small className='text-light'>Experienced</small>
                      </div>
                  </article>
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>C#</h4>
                          <small className='text-light'>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>PostgreSQL</h4>
                          <small className='text-light'>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience__detail'>
                      <BsPatchCheckFill className='experience__detail-icon'/>
                      <div>
                          <h4>MongoDB</h4>
                          <small className='text-light'>Experienced</small>
                      </div>
                  </article>
              </div>

          </div>
      </div>

    </section>
  )
}

export default Experience