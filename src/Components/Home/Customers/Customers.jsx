
import './Customers.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from '@mui/icons-material/Star';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from 'swiper';

export default function Customers(props){

    return(
        <section id='customers-section'>
            <h2 id='cust'> Our Happy Customers <hr></hr> </h2>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            breakpoints={{
                100:{
                  slidesPerView: 1,
                  spaceBetween:20
                },
                640: {
                  slidesPerView: 1,
                //   spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>

                <div className='swipeCard'>
                    <p className='rating'> <StarIcon/> <StarIcon/>  <StarIcon/>  <StarIcon/> </p>
                    <p className='comment'> 
                        "Imbibed deep within the roots of the early block printing history, 
                        melded with contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                    </p>
                    <p className='customer'> - Peekundi Dayalan </p>
                </div>

            </SwiperSlide>
            <SwiperSlide>
            <div className='swipeCard'>
                    <p className='rating'> <StarIcon/> <StarIcon/>  <StarIcon/>  <StarIcon/> </p>
                    <p className='comment'> 
                        "Imbibed deep within the roots of the early block printing history, 
                        melded with contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                    </p>
                    <p className='customer'> - Peekundi Dayalan </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='swipeCard'>
                    <p className='rating'> <StarIcon/> <StarIcon/>  <StarIcon/>  <StarIcon/> </p>
                    <p className='comment'> 
                        "Imbibed deep within the roots of the early block printing history, 
                        melded with contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                    </p>
                    <p className='customer'> - Peekundi Dayalan </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='swipeCard'>
                    <p className='rating'> <StarIcon/> <StarIcon/>  <StarIcon/>  <StarIcon/> </p>
                    <p className='comment'> 
                        "Imbibed deep within the roots of the early block printing history, 
                        melded with contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                    </p>
                    <p className='customer'> - Peekundi Dayalan </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='swipeCard'>
                    <p className='rating'> <StarIcon/> <StarIcon/>  <StarIcon/>  <StarIcon/> </p>
                    <p className='comment'> 
                        "Imbibed deep within the roots of the early block printing history, 
                        melded with contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                    </p>
                    <p className='customer'> - Peekundi Dayalan </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='swipeCard'>
                    <p className='rating'> <StarIcon/> <StarIcon/>  <StarIcon/>  <StarIcon/> </p>
                    <p className='comment'> 
                        "Imbibed deep within the roots of the early block printing history, 
                        melded with contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                    </p>
                    <p className='customer'> - Peekundi Dayalan </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='swipeCard'>
                    <p className='rating'> <StarIcon/> <StarIcon/>  <StarIcon/>  <StarIcon/> </p>
                    <p className='comment'> 
                        "Imbibed deep within the roots of the early block printing history, 
                        melded with contemporary influences of Night and Daywear, the vision 
                        of Papaya Whims comes alive.of Papaya Whims comes alive.of Papaya Whim"
                    </p>
                    <p className='customer'> - Peekundi Dayalan </p>
                </div>
            </SwiperSlide>
        </Swiper>
        </section>
    )

}