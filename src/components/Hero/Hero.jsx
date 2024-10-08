import React, {useRef, useEffect} from 'react'
import profile from '/profile-modified.png'
import Social from './Social'
import Typed from 'typed.js';
import backCircle from '/backCircle2.png'

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`I'm a full stack web developer and a fresher college student, passionate about building dynamic web applications. Eager to contribute to real-world projects and further enhance my skills.`],
      typeSpeed: 20,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className='h-[100vh] flex flex-col-reverse md:flex-row items-center px-5 sm:px-10 md:px-20'>
       <div className='h-[60%] md:h-fit md:w-[60%] flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6'>
            <div className='text-[32px] sm:text-[44px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[36px] sm:leading-[46px] md:leading-[60px] lg:leading-[74px] font-semibold'>
                <p>Hello I'm</p>
                <p className='relative intro-name text-accent-default'>Rupanjan De</p>
            </div>
            <p className='capitalize text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px]'>Full stack web developer</p>
            <p ref={el} className='min-h-[110px] sm:min-h-[70px] text-[12px] sm:text-[14px]'>I'm a full stack web developer and a fresher college student, passionate about building dynamic web applications. Eager to contribute to real-world projects and further enhance my skills.</p>
            <Social />
       </div> 
       <div className='relative h-[30%] md:h-fit md:w-[40%] flex justify-center mt-10 md:mt-0'>
            <img className='md:w-[60%] ' src={profile} alt="" />
            <img className='hidden xl:block rotator md:w-[80%] absolute z-[-1] top-[-60px]' src={backCircle} alt="" />
       </div>
    </section>
  )
}

export default Hero