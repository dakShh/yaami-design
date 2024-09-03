import React from 'react'

// ** Third Party imports
import clsx from 'clsx'

import { navData } from '../Utils/data'

import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className='bg-stone-800 text-accent-primary z-10 relative'>
      <div className={clsx('container mx-auto ', 'py-20 px-20')}>
        <div className={clsx('flex flex-col lg:flex-row w-full')}>
          <div
            data-aos='flip-up'
            data-aos-delay='200'
            className='text-5xl mb-16 lg:mb-0 font-bold text-center md:text-left'
          >
            <span className='font-thin'>Yaami</span> Designs
          </div>
          <div className='w-full flex flex-col gap-y-6'>
            <div className='mb-8'>
              <div>
                <ul className='flex flex-col md:flex-row gap-x-12 md:gap-y-0 gap-y-5 text-center md:text-left'>
                  {navData.map((item, index) => {
                    return (
                      <li
                        key={index}
                        data-aos='fade-up'
                        data-aos-delay={`${200 * index}`}
                        className='text-white font-bold text-xl cursor-pointer'
                        onClick={() => navigate(`${item.href}`)}
                      >
                        {item.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className={clsx('flex w-full items-center')}>
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                className='text-3xl md:mb-0 mb-6 font-extrabold w-full md:w-[320px] lg:w-[620px] text-center md:text-left'
              >
                Start a conversation
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='400'
                className='border border-red-400 h-[1px] w-full hidden md:block'
              ></div>
            </div>
            <div
              className={clsx('w-full flex flex-row justify-center md:justify-start gap-x-2', 'lg:px-2')}
            >
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                className='flex md:flex-row flex-col gap-x-2 gap-y-2 items-center'
              >
                <AiOutlineWhatsApp className='text-4xl ' />
                {/* <div className="font-light text-accent-primary/80">+91-9769642166</div> */}
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='300'
                className='flex gap-x-2 md:flex-row flex-col items-center'
              >
                <AiOutlineFacebook className='text-4xl ' />
                {/* <div className="font-light text-accent-primary/80">
                  www.facebook.com/yaami-designs
                </div> */}
              </div>
              <div
                data-aos='fade-up'
                data-aos-delay='400'
                className='flex gap-x-2 md:flex-row flex-col items-center'
              >
                <AiOutlineInstagram className='text-4xl ' />
                {/* <div className="font-light text-accent-primary/80">@yaami_designs</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={clsx("container mx-auto", "bg-stone-700", "text-center", "py-4")}>
        BACK TO TOP
      </div> */}
    </footer>
  )
}

export default Footer
