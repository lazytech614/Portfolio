import React from 'react'
import about from '/about-section.png'
import { toolsUsed } from '../../constants/toolsUsed'
import Rocket from '../Rocket/Rocket'
import { colors } from '../../constants/colors'

const About = () => {
  return (
    <section id='about' className='mb-40 px-5 sm:px-10 md:px-20 '>
        <div className='relative main-intro moving-grad text-[24px] sm:text-[32px] md:text-[52px] font-semibold mb-10'>
            <div className=''>About Me</div>
        </div>
        <div className='relative flex flex-col-reverse lg:flex-row-reverse justify-between items-center'>
            <div className='relative bg-black p-4 lg:max-w-[50%] flex flex-col items-center gap-6 text-[10px] sm:text-[14px] rounded-md'>
                <Rocket />
                <div className='h-[480px] sm:h-[400px]'>
<pre className="max-w-[100vw] sm:max-w-auto overflow-hidden absolute left-0 top-0 p-4 text-accent-default text-[12px]">
  <code>
    <div>
      <span style={{ color: '#6c757d' }}>1. </span>
      <span style={{ color: '#D91656' }}>&lt;!DOCTYPE html&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>2. </span>
      <span style={{ color: '#f926ae' }}>&lt;html&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>3. </span>
      <span style={{ color: '#f926ae' }}>&nbsp;&nbsp;&lt;head&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>4. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;</span>
      <span style={{ color: '#f8f8f2' }}>About Me</span>
      <span style={{ color: '#50fa7b' }}>&lt;/title&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>5. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;link </span>
      <span style={{ color: '#ffb86c' }}>rel="stylesheet"</span> 
      <span style={{ color: '#f8f8f2' }}> href="styles.css"</span>
      <span style={{ color: '#50fa7b' }}>&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>6. </span>
      <span style={{ color: '#f926ae' }}>&nbsp;&nbsp;&lt;/head&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>7. </span>
      <span style={{ color: '#f926ae' }}>&nbsp;&nbsp;&lt;body&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>8. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
      <span style={{ color: '#f1fa8c' }}>About Me</span>
      <span style={{ color: '#50fa7b' }}>&lt;/h1&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>9. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span>
      <span style={{ color: '#f8f8f2' }}>Hello! I'm a motivated full stack web developer from Roorkee, India.</span>
      <span style={{ color: '#50fa7b' }}>&lt;/p&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>10. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span>
      <span style={{ color: '#f8f8f2' }}>I am passionate about building efficient, responsive, and user-friendly </span>
      {/* <span style={{ color: '#50fa7b' }}>&lt;/p&gt;</span> */}
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>11. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span style={{ color: '#f8f8f2' }}>web applications.</span>
      <span style={{ color: '#50fa7b' }}>&lt;/p&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>11. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;</span>
      <span style={{ color: '#f1fa8c' }}>Skills</span>
      <span style={{ color: '#50fa7b' }}>&lt;/h2&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>12. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>13. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;</span>
      <span style={{ color: '#f8f8f2' }}>JavaScript</span>
      <span style={{ color: '#50fa7b' }}>&lt;/li&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>14. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;</span>
      <span style={{ color: '#f8f8f2' }}>React</span>
      <span style={{ color: '#50fa7b' }}>&lt;/li&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>15. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;</span>
      <span style={{ color: '#f8f8f2' }}>Node.js & Express.Js</span>
      <span style={{ color: '#50fa7b' }}>&lt;/li&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>16. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;</span>
      <span style={{ color: '#f8f8f2' }}>MongoDb</span>
      <span style={{ color: '#50fa7b' }}>&lt;/li&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>17. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>18. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;a </span>
      <span style={{ color: '#ffb86c' }}>href="https://github.com/lazytech614"</span>
      <span style={{ color: '#50fa7b' }}>&gt;</span>
      <span style={{ color: '#f8f8f2' }}>GitHub Profile</span>
      <span style={{ color: '#50fa7b' }}>&lt;/a&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>19. </span>
      <span style={{ color: '#50fa7b' }}>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span>
      <span style={{ color: '#f8f8f2' }}>Check out my GitHub profile to see more of my projects.</span>
      <span style={{ color: '#50fa7b' }}>&lt;/p&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>20. </span>
      <span style={{ color: '#f926ae' }}>&nbsp;&nbsp;&lt;/body&gt;</span>
    </div>
    <div>
      <span style={{ color: '#6c757d' }}>21. </span>
      <span style={{ color: '#f926ae' }}>&lt;/html&gt;</span>
    </div>
  </code>
</pre>
                </div>
                <div className='absolute z-[-1] -inset-0.5 bg-gradient-to-br from-accent-default to-violet-700 blur opacity-80'></div>
                <div>
                    <p className='mb-2 text-[10px] sm:text-[12px]'>Tools and technologies that I use are...</p>
                    <div className='flex flex-wrap gap-2'>
                        {toolsUsed.map(tool => <div key={tool.id} className={`p-2 bg-accent-default sm:hover:bg-primary sm:hover:text-white duration-200 cursor-default text-black text-[10px] sm:text-[12px] rounded-lg`}>#{tool.name}</div>)}
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <img className='w-[520px]' src={about} alt='' />
            </div>
        </div>
    </section>
  )
}

export default About