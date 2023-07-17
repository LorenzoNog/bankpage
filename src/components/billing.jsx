import React from 'react'
import { apple,bill,google } from '../assets'

const Billing = () => {
  return (
    <section id='product' className='flex md:flex-row flex-col sm:py-16 py-6  '>
        <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
            <img src={bill} className='w-[100%] h-[100%] relative z-[5]'/>
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white_gradient animate-pulse'/>
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink_gradient animate-pulse'/>
        </div>
        <div className='flex-1 flex justify-center items-center sm:items-start flex-col gap-10'>
            <h3 className='font-poppins text-white text-[30px] sm:text-[50px] font-bold'> 
                Controle fácilmente<br/>su facturación.
            </h3>
            <p className='text-[#d8d8e4] font-poppins font-light text-justify text-[13px] sm:text-[20px] w-[90%] sm:w-[80%] tracking-wider'>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
            <div className='flex flex-row gap-8'>
                <img src={apple} className='w-100px h-100px' />
                <img src={google} className='w-100px h-100px'/>
            </div>
        </div>
    </section>
  )
}

export default Billing