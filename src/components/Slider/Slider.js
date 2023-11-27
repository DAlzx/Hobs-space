import React from 'react'
import './Slider.css';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider(props) {

    const lengthComponentsAvg = Math.ceil(((props.components).length)/2); 

    return (
        <div className='Slider'>
            {props.column ? 
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Grid, Navigation]}
                    className="mySwiper"
                >
                    {props.components.slice(0, lengthComponentsAvg).map((component, index) => (
                        <SwiperSlide key={index}>
                            <div className='sliderColumn'>
                            {component}
                            {props.components.slice(lengthComponentsAvg)[index] && (
                                <React.Fragment key={index}>
                                {props.components.slice(lengthComponentsAvg)[index]}
                                </React.Fragment>
                            )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                :
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {props.components.map((component, index) => (
                        <SwiperSlide key={index}>
                            {component}
                        </SwiperSlide>
                    ))}
                </Swiper>
            } 
        </div>

    );
}

export default Slider;
