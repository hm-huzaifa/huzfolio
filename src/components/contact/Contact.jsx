import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandFiverr, TbBrandLinkedin, TbBrandLinktree} from 'react-icons/tb'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_65sshys', 'template_0bqxynk', form.current, 'Isct0PbFM2Fw0Pcpb')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>mhuzaifa150@gmail.com</h5>
              <a href="mailto:mhuzaifa150@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>
              <h5>Muhammad Huzaifa</h5>
              <a href="https://www.linkedin.com/in/hmhuzaifa" target='_blank'>Visit Profile</a>
            </article>
            <article className='contact__option'>
            <TbBrandLinktree className='contact__option-icon'/>
              <h4>Linktree</h4>
              <h5>Muhammad Huzaifa</h5>
              <a href="https://linktr.ee/hmhuzaifa" target='_blank'>Other Profiles</a>
            </article>
            <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+923454245718</h5>
              <a href="https://api.whatsapp.com/send?phone=923454245718" target='_blank'>Send a message</a>
            </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" placeholder='Your Message' rows="7" required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact