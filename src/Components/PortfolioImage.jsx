import React, { useState } from 'react'

// ** Third party import
import clsx from 'clsx'

const PortfolioImage = ({ image_src, name, index }) => {
  const [hoverState, setHoverState] = useState(false)

  function changeHoverState(state) {
    setHoverState(state)
  }

  return (
    <div
      key={index}
      data-aos='fade-up'
      data-aos-delay={`${index * 100}`}
      data-aos-offset={`200`}
      onMouseOver={() => changeHoverState(true)}
      onMouseLeave={() => changeHoverState(false)}
      className={clsx(
        'relative',
        ' w-full ',
        'aspect-square',
        'overflow-hidden',
        'cursor-pointer',
        'rounded-md'
      )}
    >
      <div
        className={`${'transition-opacity duration-[390ms] ease-out opacity-0 hover:opacity-100'} w-full h-full z-50 ${
          hoverState ? 'bg-black/70' : 'hidden'
        } absolute`}
      >
        <div
          data-aos='fade-up'
          data-aos-delay='100'
          className={clsx(
            'flex justify-center items-center h-full',
            'text-3xl md:text-xl font-extrabold'
          )}
        >
          {name ?? ''}
        </div>
      </div>
      <img
        src={image_src}
        alt='#'
        className={clsx(
          `${hoverState ? 'scale-110' : ''}`,
          'w-full h-full object-cover transition-all duration-[700ms]',
          '-z-20'
        )}
      />
    </div>
  )
}

export default PortfolioImage
