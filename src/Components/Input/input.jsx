import clsx from 'clsx'
import React from 'react'

const Input = ({ register, name, options, className, ...rest }) => {
  return (
    <input
      {...(register ? register(name, options) : {})}
      {...rest}
      className={clsx(
        'py-3 px-5 block w-full  rounded-full text-sm focus:border-neutral-500 focus:ring-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-white bg-transparent border border-neutral-500 placeholder:text-neutral-500 ',
        `${className}`
      )}
    ></input>
  )
}

export default Input
