import React, {useState} from 'react'
import { connectLinks } from '../../constants/connectLinks'
import ConnectCard from './ConnectCard'
import { connectDetails } from '../../constants/connectDetails'
import { useMediaQuery } from 'react-responsive';

const Connect = () => {
  const [isHovered, setIsHovered] = useState(false)

  const formAccessKey = import.meta.env.VITE_FORM_ACCESS_KEY;

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    
        formData.append("access_key", formAccessKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
  } 

  return (
    <section id='connect' className='flex flex-col md:flex-row gap-20 my-20 px-5 sm:px-10 md:px-20'>
        <div className='md:w-[40%] flex flex-col gap-6'>
            <p className='moving-grad text-[24px] sm:text-[32px] md:text-[52px] text-accent-default font-semibold'>Let's connect</p>
            <p className='text-[12px] sm:text-[14px]'>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can connect anytime.</p>
            <div className='text-[10px] sm:text-[12px] flex flex-col gap-2'>
                {connectLinks.map(link => <ConnectCard key={link.id} description={link.description} image={link.image} name={link.name}/>)}
            </div>
        </div>
        <div className=' md:w-[60%] rounded-lg'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {connectDetails.map(detail => 
                    <div key={detail.id} className='flex flex-col gap-2'>
                        <label htmlFor={detail.name} className='text-[12px] sm:text-[14px]'>{detail.label}</label>
                        <input 
                        id={detail.name} 
                        type={detail.type} 
                        name={detail.name}
                        required
                        className=' w-[100%] h-[40px] bg-[#27272c] outline-none border-none rounded-sm px-4'
                        />
                    </div>
                )}
                <div className='flex flex-col gap-2'>
                <label htmlFor="message" className='text-[12px] sm:text-[14px]'>Write your message here</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="8" 
                    required
                    className='rounded-sm bg-[#27272c] outline-none border-none p-4'>
                </textarea>
                </div>
                <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='w-fit flex gap-2 items-center bg-accent-default sm:hover:bg-black text-black sm:hover:text-white duration-200 border border-accent-default sm:hover:border-white text-[12px] sm:text-[16px] lg:text-[20px] font-semibold px-6 sm:px-8 lg:px-10
                py-2 lg:py-4 rounded-full'>
                    <span>Submit</span> 
                    <svg className='send-plane w-[16px] lg:w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${isHovered && !isSmallScreen ? "white" : "black"}`}><path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path></svg>
                </button>
            </form>
        </div>
    </section>
  )
}

export default Connect