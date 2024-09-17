import React, {useState} from 'react'
import copyright from '/copyright.svg'
import { social } from '../../constants/social'
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer className='mt-10 mb-6 px-5 sm:px-10 md:px-20'>
        <div className='flex justify-between items-center'>
            <div>
                <svg className='h-[20px] sm:h-[30px] md:h-[40px] mb-2' viewBox="0 0 261 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M145.132 99.4494C146.355 100.398 147.145 101.258 147.5 102H62L173.599 221.75H130.884L24.8036 102H24.4206L0 74H45.5H121.5L145.132 99.4494Z" fill="#00ff99"/>
                <path d="M121.5 125.5H164.5H173.599C177.4 125.5 181 125.5 184.5 124.5C192.5 121 195.496 115.28 196.496 111.78L200 100.5C200 88.5 196.667 78.8333 195.5 74C189.9 63.2 185.167 54.5 183 51.5L173.599 41.5L159.5 31.5C153.1 28.7 140.5 27.3333 135 27L119.5 26H62C43.6 20.4 43 12.1667 38.5 9L33 0.734491L144.5 0.734497C148.982 1.78734 153.079 1.44905 156 1.99997C163.245 3.36639 170.838 4.69346 173 6.00001C176.033 7.83334 185.5 11 195.5 19.5L200 23.5L204 28.5C206.236 30.9756 208.611 34.9372 208.709 35.2522C211.337 38.4492 213.547 41.8754 215.5 44.5C218.804 48.9398 220.551 54.944 221.5 57L225 65L228 74L229.5 81.5L230.5 88.5V94V102L229.5 107.5L227 118L223.5 125.5C223.26 127.054 220.677 130.992 219.5 133L219.078 133.759C218.41 135.019 217.861 136.291 217 137.5C215.626 139.43 214 140.5 212 142C210 143.5 208.466 144.392 206 145.5C202.869 146.908 203.5 147.5 198.5 148C196.109 148.239 193.828 148.597 192 148.5C190.006 148.394 190.957 148.326 188 148.5L189.5 150.5L260.75 221.75H217.75L121.5 125.5Z" fill="white"/>
                </svg>
                <p className='text-[10px] sm:text-[12px] md:text-[14px]'><span className='text-accent-default capitalize'>Full stack web developer</span> from Roorkee, Uttarakhand</p>
            </div>
            <a onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#home' className='w-[50px] sm:w-[60px] md:w-[100px] h-[50px] sm:h-[60px] md:h-[100px] rounded-[100%] bg-accent-default sm:hover:bg-black border border-accent-default sm:hover:border-white flex justify-center items-center cursor-pointer sm:hover:scale-[0.8] duration-200'>
                <svg className='w-[10px] sm:w-[40px]' xmlns="http://www.w3.org/2000/svg" fill={`${isHovered && !isSmallScreen ? "white" : "black"}`} viewBox="0 0 22 22" class="fill-pictonBlue-500 w-9 h-9"><path d="m16.885 2.564.354.051c.55.087 1.166.233 1.544.612.38.38.526.995.613 1.545l.051.353c.116.834.146 1.928-.051 3.142-.389 2.395-1.664 5.252-4.866 7.466q-.022.246-.015.492l.015.498c.01.332.004.663-.088.98-.174.606-.795 1.005-1.375 1.29l-.284.135-.367.162-.25.1c-.648.248-1.43.421-1.941-.091-.232-.232-.34-.547-.426-.863l-.042-.157a16 16 0 0 0-.52-1.645 3 3 0 0 1-.181.2c-.5.498-1.177.75-1.855.944l-.45.124-.449.119-.438.11-.396.092-.474.1-.296.058a.925.925 0 0 1-1.079-1.079l.102-.505.118-.53.114-.467.206-.775c.204-.751.453-1.526 1.008-2.08l.091-.088-.7-.25-.702-.243c-.412-.136-.845-.279-1.144-.577-.546-.547-.314-1.4-.042-2.07l.152-.354.126-.276c.29-.618.703-1.33 1.36-1.518.317-.092.648-.097.98-.089l.498.017c.165.002.33 0 .492-.016 2.213-3.202 5.071-4.477 7.467-4.866a10.7 10.7 0 0 1 3.14-.05m-2.847 1.86c-2.015.328-4.463 1.407-6.374 4.28-.232.35-.623.515-1.022.578a4 4 0 0 1-.68.046l-.686-.01q-.17-.002-.342.006c-.278.37-.473.81-.618 1.247l1.375.5.565.213c1.034.406 2.035.896 2.805 1.666 1.297 1.297 1.956 2.994 2.433 4.727.418-.146.838-.334 1.194-.6l.005-.342-.01-.684c0-.227.01-.455.046-.682.062-.399.229-.79.577-1.022 2.874-1.91 3.953-4.359 4.28-6.374a8.9 8.9 0 0 0 .045-2.597 5 5 0 0 0-.177-.82 5 5 0 0 0-.82-.176 8.9 8.9 0 0 0-2.596.045m-7.575 9.817c-.321.387-.47.896-.59 1.4l-.1.43-.05.206.636-.149c.504-.12 1.014-.27 1.4-.591a.917.917 0 1 0-1.296-1.296m5.185-6.481a1.833 1.833 0 1 1 2.593 2.594 1.833 1.833 0 0 1-2.593-2.595"></path></svg>
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