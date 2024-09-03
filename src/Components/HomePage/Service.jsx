import React from 'react'

// ** Data import
import { servicesData } from '../../Utils/data'

// ** Third party imports
import clsx from 'clsx'

// import { FaCircle } from 'react-icons/fa'

import Wave1 from '../../assets/svgs/waves-1.svg'
const Service = () => {
  const { title, subTitle, services, serviceList } = servicesData
  return (
    <section className={clsx('py-10 md:py-16', 'relative')}>
      <div
        className={clsx('bg-no-repeat bg-cover w-full h-[600px] absolute bg-left')}
        style={{ backgroundImage: `url(${Wave1})` }}
      ></div>
      <div className='z-10 relative container mx-auto'>
        <div className='mb-16 md:mb-24'>
          <div
            data-aos='zoom-in-up'
            data-aos-delay='300'
            className={clsx('text-3xl font-semibold', 'mb-5')}
          >
            {title}
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-delay='500'
            className={clsx('text-5xl md:text-6xl font-bold', 'max-w-lg')}
          >
            {subTitle}
          </div>
        </div>
        <div className={clsx('grid sm:grid-cols-3 gap-5 ', 'mx-auto md:p-0 px-10', 'mb-4')}>
          {services.map((service, index) => {
            return (
              <div key={index} className=' bg-accent-primary rounded-lg shadow '>
                <img
                  className='flex rounded-t-lg object-cover object-center h-72 w-full'
                  src={service.imageUrl}
                  alt=''
                />
                <div className='p-5'>
                  <h5 className='text-2xl font-bold tracking-tight text-secondary '>{service.title}</h5>
                </div>
              </div>
            )
          })}
          <div
            className={clsx(
              'flex flex-col w-full gap-y-2',
              'bg-accent-primary',
              'rounded-xl',
              'mx-auto px-5 pt-4'
            )}
          >
            <div className='text-accent-secondary font-bold text-xl'>What we offer</div>
            {serviceList.map((service, index) => {
              return (
                <div key={index} className={clsx('text-accent-secondary', 'rounded-xl')}>
                  <div className={clsx(' text-sm font-normal mb-0')}>{service}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
