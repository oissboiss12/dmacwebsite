import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import './Slideshow.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';


function Slideshow() {
    return(
        <div className='border-8 border-gray-900'>
            <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay:2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true}}
            navigation={true}
            className='mySwiper'
            >
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src='trucks/lorry.jpg' alt='Slide 1'/>
                        <div className="slide-caption">
                            <h2>SPECIALIST TRAILER MANUFACTURER</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src='trucks/van.jpg' alt='Slide 2'/>
                        <div className="slide-caption">
                            <h2>SPECIALIST TRAILER MANUFACTURER</h2>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slideshow;