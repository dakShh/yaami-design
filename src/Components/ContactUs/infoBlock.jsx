import React from 'react'

const InfoBlock = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center text-3xl font-medium'>
      {icon && icon}
      <div className='font-bold mb-2 text-2xl'>{title}</div>
      <p className='text-sm text-center font-light text-white/60'>{description}</p>
    </div>
  )
}

export default InfoBlock
