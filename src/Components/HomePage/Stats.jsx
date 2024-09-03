import React from 'react'

// ** Third party import
import clsx from 'clsx'

// ** Background image
import Stats1 from '../../assets/stats/stats-1.jpg'
const Stats = () => {
  return (
    <section className='bg-secondary'>
      <div
        style={{ backgroundImage: `url(${Stats1})` }}
        className={clsx('relative', 'h-[400px] bg-center', 'flex flex-col justify-center items-center')}
      >
        <div className='w-full h-full bg-black/60 absolute'></div>
        <div className='font-semibold text-xl z-50 ' data-aos='fade-down' data-aos-delay='300'>
          Transforming spaces
        </div>
        <div
          className='font-extrabold text-5xl z-50 text-center capitalize'
          data-aos='fade-down'
          data-aos-delay='500'
        >
          One number at a time
        </div>
      </div>
      <div className='px-5 w-full' data-aos='zoom-in' data-aos-delay='100'>
        <div
          className={clsx(
            'z-[100] relative',
            'container mx-auto',
            'grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-6',
            'py-10 px-5 mt-[-70px] w-full',
            'bg-neutral-800 text-white'
          )}
        >
          <div
            className={clsx(
              'flex flex-col lg:flex-row gap-x-1',
              'text-center items-center lg:text-left lg:items-start'
            )}
          >
            <div data-aos='fade-up' data-aos-delay='500' className='font-extrabold text-5xl md:text-6xl'>
              154
            </div>
            <div
              data-aos='fade-up'
              data-aos-delay='700'
              className='max-w-[80px] text-md md:text-base text-white/60 font-extralight py-2'
            >
              Projects Completed
            </div>
          </div>
          <div
            className={clsx(
              'flex flex-col lg:flex-row gap-x-1',
              'text-center items-center lg:text-left lg:items-start'
            )}
          >
            <div data-aos='fade-up' data-aos-delay='500' className='font-extrabold text-5xl md:text-6xl'>
              120
            </div>
            <div
              data-aos='fade-up'
              data-aos-delay='700'
              className='max-w-[80px] text-md md:text-base text-white/60 font-extralight py-2'
            >
              Our Happy Clients
            </div>
          </div>
          <div
            className={clsx(
              'flex flex-col lg:flex-row gap-x-1',
              'text-center items-center lg:text-left lg:items-start'
            )}
          >
            <div data-aos='fade-up' data-aos-delay='500' className='font-extrabold text-5xl md:text-6xl'>
              10+
            </div>
            <div
              data-aos='fade-up'
              data-aos-delay='700'
              className='max-w-[80px] text-md md:text-base text-white/60 font-extralight py-2'
            >
              Years of experience
            </div>
          </div>
          <div
            className={clsx(
              'flex flex-col lg:flex-row gap-x-1',
              'text-center items-center lg:text-left lg:items-start'
            )}
          >
            <div data-aos='fade-up' data-aos-delay='500' className='font-extrabold text-5xl md:text-6xl'>
              10
            </div>
            <div
              data-aos='fade-up'
              data-aos-delay='700'
              className='max-w-[80px] text-md md:text-base text-white/60 font-extralight py-2'
            >
              On Going Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
