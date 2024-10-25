import React from 'react'

const InfoBlock = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center text-3xl font-medium'>
      {icon && icon}
      <div className='mb-4'>{title}</div>
      <p className='text-base font-light text-center text-gray-300/60'>{description}</p>
    </div>
  )
}

export default InfoBlock
