import React from 'react'

// ** Third party imports
// import clsx from 'clsx'

// import Wave1 from '../../assets/svgs/waves-1.svg'
import PrimaryButton from '../Buttons/primary-button'
const CTA = () => {
  return (
    <section className='bg-secondary '>
      <div className='gap-8 items-center py-40 mx-auto max-w-screen-xl flex justify-between'>
        <div className='mt-4 md:mt-0 max-w-xl'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-accent-primary '>
            Customised services
          </h2>
          <p className='mb-6 font-light text-accent-primary md:text-lg '>
            Can&apos;t find what you&apos;re looking for? We’ll design your home the way you like,
            keeping your needs and budget in mind.
          </p>
        </div>
        <PrimaryButton content='Get a quote' />
      </div>
    </section>
  )
}

export default CTA
