import React from 'react'

// ** Third Party
import { useNavigate } from 'react-router-dom'

// ** Data import
import { navData } from '../Utils/data'

const Nav = () => {
  const navigate = useNavigate()

  return (
    <div>
      <ul className='flex gap-x-12'>
        {navData.map((item, index) => {
          return (
            <li
              key={index}
              className='text-white text-sm font-medium cursor-pointer'
              onClick={() => navigate(item.href)}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
