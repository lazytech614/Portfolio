import React from 'react'
import { navLinks } from '../../constants/navLinks'

const MobileNav = ({isOpen}) => {
  return (
    <div className={`fixed z-[200] h-[120vh] flex flex-col justify-start items-center gap-40 top-0 bg-black w-[60%] ${isOpen ? "left-[-20px]" : "left-[-400px]"} px-5 sm:px-10 py-4 transition-all duration-300 ease-in-out`}>
        <div className='text-[36px] relative cursor-pointer'>
            Rupanjan<span className='text-accent-default text-[72px] absolute right-[-20px] bottom-[-16px]'>.</span>
        </div>
        <ul className='flex flex-col items-center gap-6'>
            {navLinks.map(link => {
                return (
                    <div key={link.id}>
                        <li className={`group relative hover:text-accent-default text-[18px] overflow-hidden`}>
                            <a href={link.url}>{link.text}</a>
                            <div className={`absolute bottom-0 w-full h-[2px] bg-accent-default left-[-100%] sm:group-hover:left-0 transition-all duration-200 mt-4`}></div>
                        </li>
                    </div>
                )
            })}
        </ul>
    </div>
  )
}

export default MobileNav