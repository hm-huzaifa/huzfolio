import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TbBrandFiverr, TbBrandLinktree} from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hmhuzaifa" target="_blank">< BsLinkedin/></a>
        <a href="https://github.com/hm-huzaifa" target="_blank">< FaGithub/></a>
        <a href="https://linktr.ee/hmhuzaifa" target="_blank"><TbBrandLinktree/></a>

    </div>
  )
}

export default HeaderSocials