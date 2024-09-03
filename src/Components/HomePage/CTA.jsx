import React from 'react'

// ** Third party imports
import clsx from 'clsx'

import Wave1 from '../../assets/svgs/waves-1.svg'
import PrimaryButton from '../Buttons/primary-button'
const CTA = () => {
  return (
    // <section
    //   className={clsx('relative overflow-hidden bg-cover bg-no-repeat w-full')}
    //   style={{ backgroundImage: `url(${Wave1})` }}
    // >
    //   {/* <div className={clsx(' bg-cover w-full h-[600px] absolute bg-left')}></div> */}
    //   <div className='container mx-auto z-10 relative'>
    //     <div className='h-92'>this is cta</div>
    //   </div>
    // </section>
    <section className='bg-secondary'>
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
        {/* <button
          type='button'
          className='items-center text-secondary bg-accent-primary font-semibold rounded-lg text-2xl px-5 py-3 text-center'
        >
          Request a Quote
        </button> */}
        <PrimaryButton content='Get a quote' />
      </div>
    </section>
  )
}

export default CTA
