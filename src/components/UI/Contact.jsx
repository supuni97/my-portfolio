import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
        <div className='container'>
        <h2 className='font-[700] text-headingColor text-[2.5rem] mb-8'>Get in touch</h2>
        
        <div className='md:flex justify-center items-center'>
        <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
        <div className='w-full'>
        <div className='mb-5'>
        <h3 className='text-[1.2rem] font-[600]'>Name:</h3>
        <p className='text-[1rem]'>Supuni Sithara Bandara</p>
        </div>
        <div className='mb-5'>
        <h3 className='text-[1.2rem] font-[600]'>Address:</h3>
        <p className='text-[1rem]'>Sithara, Ethulgama, Thalathuoya, Kandy, Sri Lanka</p>
        </div>
        <div className='mb-5'>
        <h3 className='text-[1.2rem] font-[600]'>Phone:</h3>
        <p className='text-[1rem]'>+94 719 153 533</p>
        </div>
        <div className='mb-5'>
        <h3 className='text-[1.2rem] font-[600]'>Email:</h3>
        <p className='text-[1rem]'>sitharabandara1997@gmail.com</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Contact
