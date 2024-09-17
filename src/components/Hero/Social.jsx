import React, {useState} from 'react'
import { social } from '../../constants/social'
import downloadIcon from '/downloadIcon.svg'

const Social = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='flex flex-col sm:flex-row items-center gap-4'>
        <button onClick={() => alert("Coming soon!")} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='text-[12px] text-nowrap sm:text-[16px] flex items-center gap-2 border border-accent-default text-accent-default 
        px-6 sm:px-10 py-4 rounded-full'>
            <div className='max-w-[110px] overflow-hidden'>
                <span>Download CV </span>
            </div>
            <img className='w-[14px] sm:w-[20px]' src={downloadIcon} alt='' />
        </button>
        <div className='flex gap-2'>
        {social.map(item => (
            <div key={item.id} className='w-[40px] h-[40px] flex justify-center items-center rounded-[100%] border border-accent-default cursor-pointer hover:scale-[0.8] duration-200'>
                <a href={item.url}><img className='w-[20px]' src={item.image} alt=''/></a>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Social