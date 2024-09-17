import React from 'react'
import {frontendSkills} from '../../constants/skills'
import {backendSkills} from '../../constants/skills'
import SkillCard from './SkillCard'
import arrowDown from '/arrowdown.svg'

const Skills = () => {
  return (
    <section id='skills' className='min-h-[100vh] py-4 mb-40 px-5 sm:px-10 md:px-20'>
        <div className='text-[24px] sm:text-[32px] md:text-[52px] font-semibold mb-16'>
            Technologies Known
        </div>
        <div className='relative flex flex-col-reverse md:flex-row justify-between gap-10'>
            <div className=' md:w-[50%] flex flex-col gap-10 h-[400px] overflow-y-auto scrollbar-hide' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {frontendSkills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
                <div className='absolute flex gap-2 px-4 py-2 right-0 md:right-auto md:left-[36%] rounded-xl bottom-[-46px] bg-accent-default text-black text-[12px] sm:text-[16px]'>
                    <p>scroll down</p>
                    <img className='w-[20px]' src={arrowDown} alt='arrow down ' />
                </div>
            </div>
            <div className='md:w-[50%] flex flex-col gap-2 mt-[-16px]'>
                <p className='text-[24px] sm:text-[32px] md:text-[52px] font-semibold text-accent-default'>Frontend</p>
                <p className='text-[12px] sm:text-[14px]'>Proficient in frontend development with expertise in JavaScript, React, and CSS frameworks like Bootstrap and Tailwind. Skilled in building responsive, dynamic web applications with smooth user interfaces. Experienced in integrating databases like MongoDB and PostgreSQL, and connecting APIs for full-stack functionality. Adept at using tools like Git for version control, with a focus on performance optimization and clean, maintainable code.</p>
            </div>
        </div>
        <div className='relative flex flex-col md:flex-row justify-between gap-10 mt-20'>
            <div className='md:w-[50%] flex flex-col gap-2'>
                <p className='text-[24px] sm:text-[32px] md:text-[52px] font-semibold text-accent-default'>Backend</p>
                <p className='text-[12px] sm:text-[14px]'>Experienced in backend development with a strong foundation in Node.js and Express for building scalable server-side applications. Proficient in working with databases such as MongoDB and PostgreSQL, designing efficient schemas, and managing data transactions. Skilled in creating RESTful APIs, handling authentication, and ensuring robust security measures. Adept at optimizing performance and integrating third-party services, while maintaining clean and maintainable code.</p>
            </div>
            <div className=' md:w-[50%] flex flex-col gap-10 h-[400px] overflow-y-auto scrollbar-hide' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {backendSkills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
                <div className='absolute flex gap-2 px-4 py-2 right-0 md:right-[36%] rounded-xl bottom-[-46px] bg-accent-default text-black text-[12px] sm:text-[16px]'>
                    <p>scroll down</p>
                    <img className='w-[20px]' src={arrowDown} alt='arrow down ' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills