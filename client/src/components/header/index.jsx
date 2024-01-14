import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Header() {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide className='swiper-slide one'>
                <i>Floral</i>
                <p>Excellent bouquets for you</p>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide two'>
                <i>Fixed-Height Slider</i>
                <p>Excellent bouquets for you</p>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide three'>
                <i>Floral</i>
                <p>Excellent bouquets for you</p>

            </SwiperSlide>

        </Swiper>
    )
}

export default Header