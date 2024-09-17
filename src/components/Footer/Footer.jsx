import React, {useState} from 'react'
import copyright from '/copyright.svg'
import { social } from '../../constants/social'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const [isHovered, setIsHovered] = useState(false)
  return (
    <footer className='mt-10 mb-6 px-5 sm:px-10 md:px-20'>
        <div className='flex justify-between items-center'>
            <div>
                <p className='text-[18px] sm:text-[24px] md:text-[32px] font-semibold mb-4'>Rupanjan De</p>
                <p className='text-[10px] sm:text-[12px] md:text-[14px]'><span className='text-accent-default capitalize'>Full stack web developer</span> from Roorkee, Uttarakhand</p>
            </div>
            <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#home' className='w-[50px] sm:w-[60px] md:w-[100px] h-[50px] sm:h-[60px] md:h-[100px] rounded-[100%] bg-accent-default hover:bg-black border border-accent-default hover:border-white flex justify-center items-center cursor-pointer hover:scale-[0.8] duration-200'>
                <svg className='w-[20px] sm:w-[30px] md:w-[40px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${isHovered ? "white" : "black"}`}><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>
            </a>
        </div>
        <div className='w-full h-[1px] bg-white my-4'></div>
        <div className='flex justify-between items-center'>
            <div className='text-[#d9d9d9] text-[8px] sm:text-[10px] flex items-start sm:gap-2'>
                <img className='w-[8px] sm:w-[10px] mt-[2px]' src={copyright} alt='copyright' />
                <span>{currentYear} Rupanjan De. All rights reserved.</span>
            </div>
            <div className='flex gap-2'>
                {social.map(item => <a key={item.id} href={item.url}><img className='w-[20px] sm:w-[30px]' src={item.image} alt='item.text' /></a>)}
            </div>
        </div>
    </footer>
  )
}

export default Footer