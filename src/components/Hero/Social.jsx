import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { social } from '../../constants/social';

const Social = () => {
  const [isHovered, setIsHovered] = useState(false);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div className='flex flex-col sm:flex-row items-center gap-4'>
      <button
        onClick={() => alert('Coming soon!')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='text-[12px] text-nowrap sm:text-[16px] flex items-center gap-2 border sm:hover:bg-accent-default sm:hover:text-black duration-200 border-accent-default text-accent-default 
        px-6 sm:px-10 py-4 rounded-full'>
        <div className='max-w-[110px] overflow-hidden'>
          <span>Download CV </span>
        </div>
        <svg
          className='w-[14px] sm:w-[20px]'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill={isHovered && !isSmallScreen ? 'black' : '#00ff99'}>
          <path d='M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z'></path>
        </svg>
      </button>
      <div className='flex gap-2'>
        {social.map((item) => (
          <div
            key={item.id}
            className='w-[40px] h-[40px] flex justify-center items-center rounded-[100%] border border-accent-default cursor-pointer hover:scale-[0.8] duration-200'>
            <a href={item.url}>
              <img className='w-[20px]' src={item.image} alt='' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
