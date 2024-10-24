import clsx from 'clsx'
import React from 'react'

const HomepageCard = (props) => {
  const { key, imgSrc, title, windowWidth, serviceList } = props
  return (
    <div key={key} className={clsx(' bg-yellow-600 rounded-2xl shadow overflow-hidden')}>
      <img className='flex object-cover object-center h-56 lg:h-80 w-full' src={imgSrc} alt='' />
      <div className='px-5 pt-2 lg:pb-5 pb-3'>
        <h5 className='text-center text-base md:text-lg lg:text-2xl font-bold tracking-tight text-white mb-7 '>
          {title}
        </h5>
        <div
          className={clsx(
            'grid grid-cols-2 gap-x-5 gap-y-2 mb-8'
            // `${windowWidth < 800 ? 'grid grid-cols-2 gap-x-5 gap-y-2 mb-8' : 'mb-8'}`
          )}
        >
          {serviceList.map((service, index) => {
            return (
              <div key={index} className={clsx('text-white')}>
                <div
                  className={clsx(
                    'text-xs sm:text-sm  font-normal mb-0',
                    'max-w-lg whitespace-nowrap text-ellipsis overflow-hidden '
                  )}
                >
                  {`• ${service}`}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomepageCard
