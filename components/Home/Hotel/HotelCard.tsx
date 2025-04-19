import React from 'react';
import { FaHeart } from 'react-icons/fa';

type Props = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    }
}

const HotelCard = ({hotel}:Props) => {
  return (
    <div>
        <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
            <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col'>
                <FaHeart className='w-3 h-3' />
            </div>
            <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
            <img src={hotel.image} alt={hotel.name} className='overflow-hidden h-full w-full transition-all decoration-300 object-cover group-hover:scale-110' />
        </div>
        <div>
            <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-300'>{hotel.name}</h1>
            <p className='text-sm text-gray-600 mt-3 font-medium mb-6'>{hotel.location}</p>
        </div>
    </div>
  )
}

export default HotelCard;
