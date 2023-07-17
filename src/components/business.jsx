import React from 'react'
import CustomButton from './customButton'
import { features } from '../constants'

const FeatureCard = ({icon,title,content,index}) => {
    return(
        <div className={`flex flex-row p-6 gap-5 items-center rounded-xl ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
            <div className='w-[64px] h-[64px] rounded-full flex justify-center items-center bg-[#00131a]'>
                <img src={icon} className='w-[50%] h-[50%] object-contain '/>
            </div>
            <div className='flex flex-col flex-1 gap-3'>
                <h3 className='font-poppins text-white text-[20px] font-bold'>{title}</h3>
                <p className='text-[#d8d8e4] font-poppins font-light text-justify'>
                    {content}
                </p>
            </div>
        </div>
    )
}


const Business = () => {
  return (
    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
        <div className='flex-1 flex justify-start items-start flex-col gap-5'>
            <h2 className='font-poppins font-bold text-[30px] sm:text-[50px] text-white'>
                Usted hace el negocio, nosotros manejamos el dinero.
            </h2>
            <p className='text-[#d8d8e4] font-poppins font-light text-justify text-[13px] sm:text-[20px] w-[90%] sm:w-[80%] tracking-wider'>
                Con la tarjeta de crédito adecuada, puede mejorar su situación financiera creando crédito, ganando recompensas y ahorrando dinero. Pero con cientos de tarjetas de crédito en el mercado.
            </p>
            <CustomButton styles='rounded-xl mt-10 hover:scale-[1.05]' title='Comienza ahora'/>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
            {
                features.map((feature, index) => {
                    return(
                        <FeatureCard key={feature.id} {...feature} index={index}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Business