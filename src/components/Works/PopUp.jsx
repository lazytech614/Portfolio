import React from 'react';
import diagArr from '/diagonalArrow.svg';

const PopUp = ({ name, url, isHovered }) => {
  return (
    <a href={url} target='_blank'
      className={`absolute left-1/2 -translate-x-1/2 flex bg-accent-default min-w-max sm:w-fit h-fit text-black px-4 py-1 rounded-md transition-all duration-300 ${isHovered ? 'top-[-20px] z-[2] opacity-100' : 'top-[40px] z-[-1] opacity-0'} cursor-pointer`}>
      <span className='text-[12px] sm:text-[14px]'>{name}</span>
      <img className="w-[20px] rotate-[-90deg]" src={diagArr} alt="arrow " />
      <div className="absolute left-1/2 -translate-x-1/2 w-[20px] h-[20px] rotate-[45deg] bg-accent-default bottom-[-10px] z-[-1]"></div>
    </a>
  );
};

export default PopUp;