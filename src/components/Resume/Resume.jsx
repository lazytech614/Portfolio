import React, {useState} from 'react'
import { resumeFeatures } from '../../constants/resumefeatures'
import ResumeDetails from './ResumeDetails'

const Resume = () => {
  const [selectedFeat, setSelectedFeat] = useState("Education")
  const handleClick = (e) => {
    const newVal = e.target.innerText;
    setSelectedFeat(newVal)
  }
  return (
    <section id='resume' className='min-h-[80vh] mb-40 px-5 sm:px-10 md:px-20'>
        <div className='text-[32px] sm:text-[52px] font-semibold mb-16'>
            Resume
        </div>
        <div className='flex flex-col md:flex-row justify-start gap-4 xl:gap-20'>
            <div className='flex flex-col gap-4 self-center md:self-auto w-full md:w-auto'>
                {resumeFeatures.map(feature => <div key={feature.id} onClick={handleClick} className={`${selectedFeat === feature.feat ? "bg-accent-default text-black" : "bg-[#27272c] text-white"} w-full md:w-[220px] xl:w-[320px] h-[50px] flex justify-center 
                items-center rounded-md hover:bg-accent-default hover:text-black cursor-pointer duration-200`}>
                    <p>{feature.feat}</p>
                </div>)}
            </div>
            <ResumeDetails feat={selectedFeat}/>
        </div>
    </section>
  )
}

export default Resume