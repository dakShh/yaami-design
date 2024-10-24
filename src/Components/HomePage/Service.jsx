import React, { useEffect, useState } from 'react'

// ** Data import
import { servicesData } from '../../Utils/data'

// ** Third party imports
import clsx from 'clsx'

// import { FaCircle } from 'react-icons/fa'

// import Wave1 from '../../assets/svgs/waves-1.svg'
const Service = () => {
  const { title, subTitle, services, serviceList } = servicesData
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // console.log(windowWidth)

  return (
    <section className={clsx('py-10 md:py-16', 'relative')}>
      {/* <div
        className={clsx('bg-no-repeat bg-cover w-full h-[600px] absolute bg-left')}
        style={{ backgroundImage: `url(${Wave1})` }}
      ></div> */}
      <div className='z-10 relative container mx-auto px-4 sm:px-0'>
        <div className='mb-8 sm:mb-16 lg:mb-24'>
          <div
            data-aos='zoom-in-up'
            data-aos-delay='300'
            className={clsx('text-xl sm:text-2xl lg:text-3xl font-semibold', 'mb-5')}
          >
            {title}
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-delay='500'
            className={clsx('lg:text-6xl sm:text-5xl text-3xl font-bold', 'max-w-lg')}
          >
            {subTitle}
          </div>
        </div>
        <div className={clsx('grid md:grid-cols-3 grid-cols-2 gap-8 ', 'mx-auto', 'mb-4')}>
          {services.map((service, index) => {
            return (
              <div key={index} className={clsx(' bg-yellow-600 rounded-2xl shadow overflow-hidden')}>
                <img
                  className='flex object-cover object-center h-56 lg:h-80 w-full'
                  src={service.imageUrl}
                  alt=''
                />
                <div className='px-5 pt-2 lg:pb-5 pb-3'>
                  <h5 className='text-center text-base md:text-lg lg:text-2xl font-normal tracking-tight text-white '>
                    {service.title}
                  </h5>
                </div>
              </div>
            )
          })}
          <div
            className={clsx(
              'flex flex-col w-full gap-y-1 col-span-2 md:col-span-1',
              'bg-yellow-600',
              'rounded-xl',
              'mx-auto px-3 pt-2 lg:px-5 lg:pt-4'
            )}
          >
            <div className='text-neutral-700 font-bold text-xl lg:text-3xl'>What we offer</div>
            <div className='w-20 border-t'></div>
            <div
              className={clsx(`${windowWidth < 800 ? 'grid grid-cols-3 gap-x-5 gap-y-2 mb-8' : 'mb-8'}`)}
            >
              {serviceList.map((service, index) => {
                return (
                  <div key={index} className={clsx('text-white', 'rounded-xl')}>
                    <div className={clsx('text-xs sm:text-sm lg:text-lg font-normal mb-0')}>
                      {service}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
