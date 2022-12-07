import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';


const Slide = ({ slides }) => {

    SwiperCore.use([Autoplay])
    return (
        <div className='h-fit w-full max-w-screen bg-blue-400 dark:bg-red-400'>
            <Swiper
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 5000
                }}>

                {
                    slides.map((slide) => {
                        return (
                            <SwiperSlide><img src={slide.image.url} alt="" key={slide.id} className="w-1/2 bg-blue-200 dark:bg-red-200 mx-auto mt-6 snap-start rounded-2xl p-2 m-8 hover:scale-105" /></SwiperSlide>

                        )
                    })
                }

            </Swiper>
        </div >
    )
}

export default Slide