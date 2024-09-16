import React, { useState } from 'react';
import PopUp from './PopUp';

const ImageContainer = ({ project, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={` flex ${position === "right" ? "justify-start" : "justify-end"}`}>
      <div className={`hidden sm:block absolute z-[0] ${position === "right" ? "right-0" : position === "left" ? "left-0" : ""} top-[50%] translate-y-[-50%] h-[2px] w-[220px] lg:w-[320px] bg-accent-default`}
      ></div>
      <div
        className="relative sm:h-[300px] flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="project-image h-[100px] sm:h-[220px] hover:scale-[1.15] duration-200 cursor-pointer"
          src={project.image}
          alt="macbook"
        />
        <PopUp name={project.name} url={project.url} isHovered={isHovered} />
      </div>
    </div>
  );
};

export default ImageContainer;