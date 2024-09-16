import React from 'react';

const DescriptionContainer = ({ project, items, text }) => {
  return (
    <div className={`max-w-[200px] sm:max-w-fit flex flex-col items-center gap-4 text-center sm:px-20
        ${items === 'start' ? 'sm:items-start' : items === 'end' ? 'sm:items-end' : ''}
        ${text === 'left' ? 'sm:text-left' : text === 'right' ? 'sm:text-right' : ''}`}>      
      <p className='text-[18px] sm:text-[24px] font-semibold text-accent-default'>{project.name}</p>
      <p className='text-[10px] sm:text-[14px]'>{project.description}</p>
      <div className={`hidden sm:flex gap-2 flex-wrap ${items === "end" ? "sm:justify-end" : items === "start" ? "sm:justify-start" : "justify-center"}`}>
        {project.techs.map((tech, techIndex) => (
          <div key={techIndex} className='bg-accent-default sm:hover:bg-primary sm:hover:text-white duration-200 cursor-pointer text-[8px] sm:text-[14px] lg:text-[16px] text-black p-1 px-2 sm:p-2 rounded-xl'>
            #{tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionContainer;
