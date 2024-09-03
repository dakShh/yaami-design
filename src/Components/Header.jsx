import React, { useState } from 'react'

// ** Third party import
import clsx from 'clsx'

// ** Components import
import Nav from './Nav'

// ** Icons Import
import { FaBars } from 'react-icons/fa'
import NavMobile from './NavMobile'
import Logo from './logo'

const Header = () => {
  const [navMobile, setNavMobile] = useState(false)
  return (
    <header className='z-50 absolute w-full mt-5 ' data-aos='fade-down' data-aos-delay='900'>
      <nav className='bg-transparent relative'>
        <div className={clsx('container mx-auto')}>
          <div className={clsx('flex items-center justify-between', 'px-8')}>
            <div className=''>
              <Logo />
            </div>

            <div className='md:block hidden'>
              <Nav />
            </div>
            <div
              className='md:hidden text-2xl text-white cursor-pointer '
              onClick={() => setNavMobile((prevState) => !prevState)}
            >
              <FaBars />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            `${navMobile ? 'max-h-60' : 'max-h-0'} bg-neutral-800`,
            'block lg:hidden',
            'bg-accent-tertiary',
            'overflow-hidden',
            'w-full font-bold rounded transition-all',
            'absolute top-[75px]',
            'z-[300]',
            'text-center'
          )}
        >
          <NavMobile />
        </div>
      </nav>
    </header>
  )
}

export default Header
