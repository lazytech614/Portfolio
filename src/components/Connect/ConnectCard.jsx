import React from 'react'

const ConnectCard = (props) => {
  return (
    <div className='flex items-center gap-2'>
        <img className='w-[20px]' src={props.image} alt={props.name} />
        <p>{props.description}</p>
    </div>
  )
}

export default ConnectCard