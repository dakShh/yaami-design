import clsx from 'clsx'
import React from 'react'

const Input = ({ register, name, options, className, errorMessage, ...rest }) => {
  return (
    <div className={'relative w-full'}>
      <input
        {...(register ? register(name, options) : {})}
        {...rest}
        className={clsx(
          'py-3 px-5 block w-full  rounded-full text-sm focus:border-neutral-500 focus:ring-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-white bg-transparent border border-neutral-500 placeholder:text-neutral-500 ',
          errorMessage ? 'border-red-600 focus:border-red-600' : '',
          `${className}`
        )}
      ></input>
      {errorMessage && (
        <p className='absolute text-xs left-5 bottom-[-18px] text-red-600 font-bold'>
          {errorMessage ?? ''}
        </p>
      )}
    </div>
  )
}

export default Input
