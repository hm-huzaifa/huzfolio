import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TbBrandFiverr, TbBrandLinktree} from 'react-icons/tb'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Huzaifa</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/hmhuzaifa/" target="_blank">< BsLinkedin/></a>
                <a href="https://github.com/hm-huzaifa" target="_blank">< FaGithub/></a>
                <a href="https://linktr.ee/hmhuzaifa" target="_blank"><TbBrandLinktree/></a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; Muhammad Huzaifa. All right reserved.
                </small>
            </div>
        </footer>
    )
}

export default Footer