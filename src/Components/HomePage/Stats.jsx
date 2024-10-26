import React from 'react'

// ** Third party import
import clsx from 'clsx'

// ** Background image
import Stats1 from '../../assets/stats/stats-1.jpg'
import { companyStats } from '../../Utils/data'

const Stats = () => {
  return (
    <section className='bg-secondary'>
      <div
        style={{ backgroundImage: `url(${Stats1})` }}
        className={clsx('relative', 'h-[400px] bg-center', 'flex flex-col justify-center items-center')}
      >
        <div className='w-full h-full bg-black/60 absolute'></div>
        <div
          className={clsx('text-xl sm:text-2xl lg:text-3xl font-semibold', 'lg:mb-5 mb-2', 'z-50')}
          data-aos='fade-down'
          data-aos-delay='300'
        >
          Our Story
        </div>
        <div
          className={clsx(
            'lg:text-6xl sm:text-5xl text-3xl font-bold',
            'text-center max-w-sm sm:max-w-lg md:max-w-full',
            'z-50'
          )}
          data-aos='fade-down'
          data-aos-delay='500'
        >
          See how we&apos;ve helped others.
        </div>
      </div>
      <div className='px-5 w-full' data-aos='zoom-in' data-aos-delay='100'>
        <div
          className={clsx(
            'z-[100] relative',
            'container mx-auto',
            'grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-6',
            'py-10 px-5 mt-[-70px] w-full',
            'bg-neutral-800 text-white',
            'drop-shadow-xl'
          )}
        >
          {companyStats.map((stat, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  'flex flex-col lg:flex-row gap-x-1',
                  'text-center items-center lg:text-left lg:items-start'
                )}
              >
                <div
                  data-aos='fade-up'
                  data-aos-delay='500'
                  className='font-extrabold text-5xl md:text-6xl'
                >
                  {stat.value}
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay='700'
                  className='max-w-[80px] text-md md:text-base text-white/60 font-extralight py-2'
                >
                  {stat.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
