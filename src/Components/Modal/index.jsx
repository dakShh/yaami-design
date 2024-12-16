import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import Input from '../Input/input'
import PrimaryButton from '../Buttons/primary-button'

import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

const defaultValues = {
  name: '',
  number: ''
}

const templateId = import.meta.env.VITE_TEMPLATE_ID
const serviceId = import.meta.env.VITE_SERVICE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const Modal = ({ state, handleModal }) => {
  const [show, setShow] = useState(false)
  const form = useForm({
    defaultValues
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = form

  const formRef = useRef()

  const onSubmit = (values) => {
    let params = {
      name: values.name,
      number: values.number,
      to_name: 'Ritesh'
    }
    emailjs.send(serviceId, templateId, params, publicKey).then(
      (result) => {
        console.log('result', result)
        reset()
        setShow(false)
      },
      (error) => {
        reset()
        setShow(false)
        console.log('error', error)
      }
    )
  }

  useEffect(() => {
    setShow(state)
    if (show) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [show, state])

  return (
    <div
      id='crud-modal'
      aria-hidden='true'
      className={clsx(
        'bg-black/50 fixed overflow-hidden top-0 right-0 left-0 z-[999] flex justify-center items-center w-full md:inset-0 max-h-full'
      )}
    >
      <div className='relative w-full max-w-lg max-h-full'>
        <div className='relative bg-neutral-800 rounded-3xl shadow '>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-neutral-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Get your personalized quote
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='crud-modal'
              onClick={() => handleModal()}
            >
              X<span className='sr-only'>Close modal</span>
            </button>
          </div>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='p-4 md:p-5'>
            <div className='grid gap-7 mb-4 grid-cols-2'>
              <div className='col-span-2'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Name
                </label>
                <Input
                  name='name'
                  register={register}
                  options={{
                    required: 'Please enter your name',
                    minLength: {
                      value: 3,
                      message: 'Username must be at least 3 characters long'
                    }
                  }}
                  className={``}
                  placeholder={'Eg: Daksh khatri'}
                  errorMessage={errors?.name?.message ?? ''}
                  autoComplete='off'
                />
              </div>

              <div className='col-span-2'>
                <label
                  htmlFor='number'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Number
                </label>
                <Input
                  name='number'
                  register={register}
                  options={{
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\d{10}$/,
                      message: 'Please enter a valid phone number'
                    }
                  }}
                  className={`${errors.number && 'border-red-600 focus:border-red-600'}`}
                  type={'number'}
                  placeholder={'+91-XXXXXXXXXX'}
                  errorMessage={errors?.number?.message ?? ''}
                />
              </div>
            </div>
            <PrimaryButton
              type={'submit'}
              content={'Submit'}
              className={'mx-auto flex mt-10 justify-center'}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
