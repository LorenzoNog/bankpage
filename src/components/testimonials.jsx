import React from 'react'
import TestimonialCard from "./testimonialCard"
import { feedback } from '../constants'


const Testimonials = () => {
  return (
    <section className='flex flex-col justify-center items-center sm:py-16 py-6'>
        <div className='flex flex-col sm:flex-row justify-center items-center sm:py-16 py-6' >
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-[100%] sm:w-[70%]'>
                Lo que la gente esta diciendo sobre nosotros
            </h2>
            <p className='text-[#d8d8e4] font-poppins font-normal text-[15px] text-justify w-[100%] sm:w-[40%] mt-6 sm:mt-0 sm:border-b-[1px] '>
                Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer tu negocio en cualquier parte del planeta.
            </p>
        </div>
        <div className='flex flex-wrap sm:justify-start w-full relative z-[1] mr-0 mt-5 gap-[6%]'>
            {
                feedback.map((feedback) => {
                    return(
                        <TestimonialCard key={feedback.id} {...feedback}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Testimonials