import React from 'react'

import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import logoDark from '../../assets/logo/logo-black-transparent.png'
import logoLight from '../../assets/logo/logo-white-transparent.png'

const Logo = (props) => {
  const navigate = useNavigate()
  const { type } = props

  return (
    <div className={clsx('flex gap-x-2 cursor-pointer')} onClick={() => navigate('/')}>
      <img
        src={type ? (type == 'dark' ? logoDark : logoLight) : logoLight}
        className='h-14'
        alt='yaami designs'
      />
      <div className='self-center text-2xl font-semibold w-4 leading-none text-accent-primary'>
        YAAMI DESIGNS
      </div>
    </div>
  )
}

export default Logo
