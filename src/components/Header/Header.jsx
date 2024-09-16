import React, {useState} from 'react';
import { navLinks } from '../../constants/navLinks';
import MobileNav from './MobileNav';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const handleClick = () => setIsMobileNavOpen(!isMobileNavOpen)

  return (
    <header id='header' className='fixed w-full top-0 z-[100] custom-backdrop flex justify-between items-center py-2 px-5 sm:px-10 md:px-20'>
      <div className='text-[36px] relative cursor-pointer'>
        Rupanjan<span className='text-accent-default text-[72px] absolute right-[-20px] bottom-[-16px]'>.</span>
      </div>
      <nav>
        <ul className='hidden md:flex items-center gap-6'>
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
            <a href='#connect' className='bg-accent-default hover:bg-black hover:text-white duration-200 border border-accent-default hover:border-white text-black text-[18px] px-6 py-2 rounded-3xl font-semibold flex justify-center items-center'>
                Connect
            </a>
        </ul>
        <div onClick={handleClick} className='md:hidden w-[30px] cursor-pointer text-white hover:text-accent-default transition-colors duration-100'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${!isMobileNavOpen ? "block" : "hidden"}`}>
            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${isMobileNavOpen ? "block" : "hidden"}`}>
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        </div>
        {isMobileNavOpen && (
            <MobileNav isOpen={isMobileNavOpen}/>
        )}
      </nav>
    </header>
  );
}

export default Header;
