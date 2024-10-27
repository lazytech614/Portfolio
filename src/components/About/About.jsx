import React from 'react'
import about from '/about.webp'
import { toolsUsed } from '../../constants/toolsUsed'

const About = () => {
  return (
    <section id='about' className='mb-40 px-5 sm:px-10 md:px-20 overflow-hidden'>
        <div className='relative main-intro moving-grad text-[24px] sm:text-[32px] md:text-[52px] font-semibold mb-10'>
            <div className=''>About Me</div>
            {/* <div className='absolute bottom-0 bg-gradient-to-r from-accent-default to-violet-700 w-[100%] h-[0.5px]'></div> */}
        </div>
        <div className='relative flex flex-col-reverse lg:flex-row justify-between items-end'>
            <div className='lg:max-w-[50%] flex flex-col items-center gap-6 text-[10px] sm:text-[14px]'>
                <div className='h-[300px] '>
                <pre className=' max-w-[100vw] sm:max-w-auto overflow-hidden absolute left-0 top-0 text-accent-default'>
                    {`
1.  <!DOCTYPE html>
2.  <html>
3.    <head>
4.      <title>About Me</title>
5.      <link rel="stylesheet" href="styles.css">
6.    </head>
7.    <body>
8.      <h1>About Me</h1>
9.      <p>Hello! I'm a motivated fresher full stack web developer 
10.      from Roorkee, India.</p>
11.     <p>I am passionate about building efficient, responsive, 
12.     and user-friendly web applications.</p>
13.   </body>
14. </html>
                    `}
                </pre>
                </div>
                <div>
                    <p className='mb-2'>Tools and technologies that I use are...</p>
                    <div className='flex flex-wrap gap-2'>
                        {toolsUsed.map(tool => <div key={tool.id} className='p-2 bg-accent-default sm:hover:bg-primary sm:hover:text-white duration-200 cursor-pointer text-black text-[12px] rounded-lg'>#{tool.name}</div>)}
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <img className='w-[400px]' src={about} alt='' />
            </div>
        </div>
    </section>
  )
}

export default About