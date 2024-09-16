import React from 'react'

const ConnectInput = ({label, name, type}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor={name} className='text-[12px] sm:text-[14px]'>{label}</label>
        <input 
          id={name} 
          type={type} 
          name={name}
          className=' w-[100%] h-[40px] bg-[#27272c] outline-none border-none rounded-sm px-4'
        />
    </div>
  )
}

export default ConnectInput