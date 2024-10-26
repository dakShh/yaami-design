import React, { useEffect, useState } from 'react'

// ** Data import
import { servicesData } from '../../Utils/data'

// ** Third party imports
import clsx from 'clsx'
import HomepageCard from './Card/homepageCard'

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

  return (
    <section className={clsx('py-10 md:py-16', 'relative', 'bg-secondary')}>
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
              <HomepageCard
                key={index}
                title={service.title}
                imgSrc={service.imageUrl}
                windowWidth={windowWidth}
                serviceList={service.serviceList}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Service
