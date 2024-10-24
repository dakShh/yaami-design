import React from 'react'

// ** Third party imports
import clsx from 'clsx'

const PrimaryButton = ({ onClick, content }) => {
  function handleAction() {
    onClick()
  }
  return (
    <div>
      <button
        onClick={handleAction}
        className={clsx(
          'min-w-[150px]',
          'transition-all',
          'text-stone-200 bg-yellow-600 text-lg',
          'text-white font-bold  text-lg',
          'px-5 py-3 text-center',
          'border-0 hover: border-stone-800 font-bold rounded-full'
        )}
      >
        {content}
      </button>
    </div>
  )
}

export default PrimaryButton
