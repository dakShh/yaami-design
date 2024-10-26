import React from 'react'
import clsx from 'clsx'
import Header from '../Components/Header'

import Banner1 from '../assets/contact/banner-3.jpg'

import { useForm } from 'react-hook-form'
import PrimaryButton from '../Components/Buttons/primary-button'
import Footer2 from '../Components/Footer2'

import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { MdOutlineContactSupport } from 'react-icons/md'
import InfoBlock from '../Components/ContactUs/infoBlock'

const ContactUs = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      number: ''
    }
  })
  console.log('error: ', form.formState.errors)
  const onSubmit = (values) => {
    console.log('values: ', values)
  }

  return (
    <div className='bg-secondary'>
      <Header />
      <div
        data-aos='zoom-in-up'
        data-aos-delay='400'
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundPositionY: '44%',
          backgroundPositionX: '30%',
          backgroundRepeat: 'repeat'
        }}
        className={clsx('relative', 'h-[450px]', 'flex flex-col justify-center items-center', 'mb-5')}
      >
        <div className='w-full h-full bg-black/70 absolute'></div>

        <div
          className='font-extrabold text-5xl z-50 text-center mb-3'
          data-aos='fade-down'
          data-aos-delay='200'
        >
          Contact us
        </div>
        <div className='font-thin text-md z-50 ' data-aos='fade-down' data-aos-delay='300'>
          {/* Home / Contact US */}
        </div>
      </div>

      <div className='container mx-auto mt-[-80px] z-50 relative '>
        <div className='mx-auto max-w-md bg-neutral-800 shadow-xl py-10 px-12 rounded-xl'>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-4 items-center'>
            <input
              defaultValue='test'
              {...form.register('name', { required: true })}
              className={clsx(
                'w-full ',
                'py-3 px-5 block w-full  rounded-full text-sm focus:border-neutral-500 focus:ring-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-white bg-transparent border border-neutral-500 '
              )}
              placeholder={'Eg: Daksh Khatri'}
              autoComplete='off'
            />
            <input
              type={'number'}
              {...form.register('number', { required: true })}
              className={clsx(
                'w-full',
                'py-3 px-5 block w-full  rounded-full text-sm focus:border-neutral-500 focus:ring-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-white bg-transparent border border-neutral-500'
              )}
              placeholder='+91-8888888888'
            />
            <div className='mt-8'>
              <PrimaryButton type='submit' content={'Get a quote'} />
            </div>
          </form>
        </div>
        <div className='grid grid-cols-3 my-24 gap-x-16 px-4'>
          <InfoBlock
            icon={<MdEmail />}
            title={'Email us'}
            description={
              'Have a project in mind or need more information about our interior design services? Send us an email, and we’ll be happy to assist.'
            }
          />
          <InfoBlock
            icon={<IoCall />}
            title={'Speak with Us'}
            description={
              'Want to discuss your design ideas or need a quick consultation? Give us a call to connect directly with our team. We’re here to provide personalized advice and guidance for your space.'
            }
          />
          <InfoBlock
            icon={<MdOutlineContactSupport />}
            title={'Customer Support'}
            description={
              'For ongoing projects, technical assistance, or other inquiries, visit our support center. Explore FAQs, design tips, or submit a ticket for specialized help from our team.'
            }
          />
        </div>
        <Footer2 />
      </div>
    </div>
  )
}

export default ContactUs
