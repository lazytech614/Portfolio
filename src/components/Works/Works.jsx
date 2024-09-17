import React from 'react';
import { projects } from '../../constants/projects';
import ImageContainer from './ImageContainer';
import DescriptionContainer from './DescriptionContainer';
import doubleArrowRight from '/doubleArrowRight.svg'

const Works = () => {
  return (
    <section id='works' className='relative min-h-[100vh] px-5 sm:px-10 md:px-20'>
      <div className='hidden sm:block absolute left-[50%] translate-x-[-50%] h-full w-[1px] bg-accent-default'></div>
      <div className='flex justify-center mb-[50px] mt-[80px]'>
        <div className='text-[24px] sm:text-[32px] md:text-[52px]w-fit px-10 py-2 font-semibold  sm:border border-accent-default rounded-[100px] bg-transparent sm:bg-black z-[2] relative'>
            Latest Works
        </div>
      </div>
      <div className='flex flex-col gap-20'>
        {projects.map((project, index) => {
          return (
            <div className='relative flex justify-between items-start sm:items-center' key={project.id}>
              <a href={project.url} className='group hidden sm:block absolute left-[50%] -translate-x-1/2 w-[20px] h-[20px] rounded-[100%] border border-accent-default bg-black z-[20] hover:scale-[1.7] duration-200'>
                <p className='hidden group-hover:block absolute text-[6px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>click</p>
              </a>
              <div className='relative sm:w-[50%]'>
                {index % 2 === 0 ? (
                <div>
                  <ImageContainer project={project} position="right"/>
                </div>
                ) : (
                <DescriptionContainer project={project} items="end" text="right"/>
                )}
              </div>
              <div className='relative sm:w-[50%]'>
                {index % 2 === 0 ? (
                <DescriptionContainer project={project} items="start" text="left"/>
                ) : (
                <ImageContainer project={project} position="left"/>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center'>
        <a href='https://github.com/lazytech614' className='text-[12px] sm:text-[16px] w-fit px-4 sm:px-10 py-2 sm:py-4 font-semibold  border border-accent-default rounded-[100px] bg-black z-[2] relative mt-20 flex sm:gap-2 sm:hover:gap-4 duration-200'>
            <span>See More</span>
            <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Works;