"use client";
import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import {EffectCards} from 'swiper/modules';
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';

const ReviewSlider = () => {
  return (
    <div>
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className='md:w-[450px] md:h-[350px] w-[90%] h-[300px]'>
            {
                reviewData.map((data) => (
                    <SwiperSlide key={data.id} className='bg-white rounded-3xl block'>
                        <div className='w-[80%] mx-auto mt-16'>
                            <p className='text-xs sm:text-sm md:text-base font-semibold'>{data.review}</p>
                            <div className='flex items-center mt-4'>
                                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                                <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default ReviewSlider
