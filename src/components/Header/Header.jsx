import React, {useState} from 'react';
import { navLinks } from '../../constants/navLinks';
import MobileNav from './MobileNav';
import logo from '/logo.svg'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => setIsMobileNavOpen(!isMobileNavOpen)

  return (
    <header id='header' className='fixed w-full top-0 z-[100] custom-backdrop flex justify-between items-center py-4 px-5 sm:px-10 md:px-20'>
      <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#home' className='text-[18px] sm:text-[36px] relative sm:hover:text-accent-default'>
        <svg className='h-[20px] sm:h-[30px] md:h-[40px]' viewBox="0 0 261 222" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M145.132 99.4494C146.355 100.398 147.145 101.258 147.5 102H62L173.599 221.75H130.884L24.8036 102H24.4206L0 74H45.5H121.5L145.132 99.4494Z" fill={`${isHovered ? "white" : "#00FF99"}`}/>
        <path d="M121.5 125.5H164.5H173.599C177.4 125.5 181 125.5 184.5 124.5C192.5 121 195.496 115.28 196.496 111.78L200 100.5C200 88.5 196.667 78.8333 195.5 74C189.9 63.2 185.167 54.5 183 51.5L173.599 41.5L159.5 31.5C153.1 28.7 140.5 27.3333 135 27L119.5 26H62C43.6 20.4 43 12.1667 38.5 9L33 0.734491L144.5 0.734497C148.982 1.78734 153.079 1.44905 156 1.99997C163.245 3.36639 170.838 4.69346 173 6.00001C176.033 7.83334 185.5 11 195.5 19.5L200 23.5L204 28.5C206.236 30.9756 208.611 34.9372 208.709 35.2522C211.337 38.4492 213.547 41.8754 215.5 44.5C218.804 48.9398 220.551 54.944 221.5 57L225 65L228 74L229.5 81.5L230.5 88.5V94V102L229.5 107.5L227 118L223.5 125.5C223.26 127.054 220.677 130.992 219.5 133L219.078 133.759C218.41 135.019 217.861 136.291 217 137.5C215.626 139.43 214 140.5 212 142C210 143.5 208.466 144.392 206 145.5C202.869 146.908 203.5 147.5 198.5 148C196.109 148.239 193.828 148.597 192 148.5C190.006 148.394 190.957 148.326 188 148.5L189.5 150.5L260.75 221.75H217.75L121.5 125.5Z" fill={`${isHovered ? "#00FF99" : "white"}`}/>
        </svg>
      </a>
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
        <div onClick={handleClick} className='md:hidden w-[20px] sm:w-[30px] cursor-pointer text-white hover:text-accent-default transition-colors duration-100'>
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
