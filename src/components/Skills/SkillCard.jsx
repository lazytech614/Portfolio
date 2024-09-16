import React, {useState} from 'react'
import diagArrow from '/diagonalArrow.svg'
import doubleArrowRight from '/doubleArrowRight.svg'

const SkillCard = ({skill}) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false)
  return (
    <div onMouseEnter={() => setIsMouseEntered(true)} onMouseLeave={() => setIsMouseEntered(false)} className='group relative flex flex-col gap-y-2 hover:text-accent-default duration-200'>
        <div className='flex justify-between'>
            <span className='text-[18px] sm:text-[28px] md:text-[40px] font-semibold text-accent-default'>0{skill.id}</span>
            <div className='w-[24px] sm:w-[44px] h-[24px] sm:h-[44px] p-1 sm:p-2 bg-accent-default rounded-[100%]'>
                <img className='w-[40px] group-hover:rotate-[-45deg] transition-all duration-200' src={diagArrow} alt='' />
            </div>
        </div>
        <div className='text-[18px] sm:text-[28px] md:text-[40px] font-bold'>{skill.skill}</div>
        <div className='flex gap-y-4 flex-col md:flex-row md:justify-start items-start md:items-center mb-4 sm:mb-0'>
            <p className='md:w-[35%] text-[12px] md:text-[14px]'>Knowledge meter</p>
            <div className='relative w-[100%] md:w-[65%] h-[30px] overflow-x-hidden'>
                <div className={`absolute left-0 top-[50%] translate-y-[-50%] h-[2px] bg-accent-default translate-x-[-100%] group-hover:translate-x-0 transition-all duration-200`} style={{ width: `${skill.meterRate}%`}}></div>
                <div className='absolute top-[50%] translate-y-[-50%] z-2 w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] rounded-[100%] flex justify-center items-center text-black text-[8px] sm:text-[12px] bg-accent-default'>
                    {isMouseEntered ? `${skill.meterRate}%` : <img className='w-[20px]' src={doubleArrowRight} alt='' /> } 
                </div>
            </div>
        </div>
        <div className='w-full h-[1px] bg-gray-400 mt-4'></div>
    </div>
  )
}

export default SkillCard