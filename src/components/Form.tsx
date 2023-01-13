import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormProps {
  className ?: string
}

type Inputs = {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  image: FileList,
};

const Form:FC<FormProps> = ({ className }) => {

  const { handleSubmit, register, formState: {errors} } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${className} bg-white bg-opacity-70 space-y-4 p-5 pt-8 shadow-md flex-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-slate-50 w-[33rem] `}>
      
      <div className='flex space-x-2'>
        <div className='flex flex-col justify-start items-start w-1/2'>
          <label htmlFor="firstname" className='text-lg font-semibold text-gray-600'>Firstname</label>
          <input {...register('firstname',{required: true,minLength: 2})} name='firstname' type="text" className='w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none' placeholder='Enter you firstname' />
          {errors.firstname && <p className='text-red-500 text-sm mt-1'>field is required and min lenght is 2 chars</p>}
        </div>

        <div className='flex flex-col justify-start items-start w-1/2'>
          <label htmlFor="email" className='text-lg font-semibold text-gray-600'>Lastname</label>
          <input {...register('lastname',{required: true})}  type="text" className='w-full bg-white p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none' placeholder='Enter you lastname' />
          {errors.lastname && <p className='text-red-500 text-sm mt-1'>field is required</p>}
        </div>
      </div>

      <div className='flex space-x-2'>
        <div className='flex flex-col justify-start items-start w-1/2'>
          <label htmlFor="email" className='text-lg font-semibold text-gray-600'>email</label>
          <input {...register('email',{required: true,minLength: 2})} name='email' type="text" className='w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none' placeholder='Enter you email' />
          {errors.email && <p className='text-red-500 text-sm mt-1'>field is required</p>}
        </div>

        <div className='flex flex-col justify-start items-start w-1/2'>
          <label htmlFor="image" className='text-lg font-semibold text-gray-600'>Fille</label>
          <input {...register('image',{required: true})}  type="file" className='w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none' placeholder='Enter you lastname' />
          {errors.image && <p className='text-red-500 text-sm mt-1'>field is required</p>}
        </div>
      </div>

      <div className='flex flex-col justify-start items-start'>
        <label htmlFor="email" className='text-lg font-semibold text-gray-600'>Passeword</label>
        <input {...register('password',{required: true})}  type="password" className='w-full p-2 mt-2 ring-0 focus:right-0 outline-none focus:outline-none' placeholder='Passeword' />
        {errors.password && <p className='text-red-500 text-sm mt-1'>field is required</p>}
      </div>

      <div>
        <button className='px-4 py-2 mt-4 font-semibold bg-gray-800 hover:bg-slate-900 w-full rounded-md text-white uppercase'>connexion</button>
      </div>

    </form>
  )
}

export default Form