import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Cecilia',
        review: 'Huzaifa is the best! He made our website look so professional with a very clean design and layout. We are quite picky but he still managed to meet all of our needs that we had and made us extremely happy with the results. He did an amazing job with the design of the site.'
    },
    {
        avatar: AVTR2,
        name: 'Chris Berthelson',
        review: 'Muhammad Huzaifa has helped me redevelop my website, given me great insight and advice on other business projects. He insures you are satisfied with the work before he presents it as final. He has gone above and beyond the "normal" scope of work on each of our projects.'
    },
    {
        avatar: AVTR3,
        name: 'Marya Sherron',
        review: 'I needed a site up and running in about 48 hours and my materials were a bit disorganized. He was patient, quick, and offered helpful resolutions. I enjoyed working with him and I have subscribed so I can continue to use his expertise.'
    },
    {
        avatar: AVTR4,
        name: 'Erica Eden',
        review: 'Muhammad is fast, friendly, and skillful!! I watched him work on Zoom the first time I worked with him, and he’s so good at what he does while also being fast. Any time I need an update, help with my website, or design changes.He’s efficient and highly skilled! Thank you!!'
    }

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from client</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}

                    pagination={{clickable: true}}

            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="client"/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials