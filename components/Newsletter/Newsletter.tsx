import React from 'react';
import { BsEnvelopePaper } from 'react-icons/bs';

const Newsletter = () => {
  return (
    <div className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
        <BsEnvelopePaper className='w-16 h-16 mt-20 text-white' />
        <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>Your Travel Journet Start Here</h1>
    </div>
  )
}

export default Newsletter;
