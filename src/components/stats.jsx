import React from 'react'
import { stats } from '../constants'


const Stats = () => {
  return (
    <section className='flex flex-row justify-between items-center sm:mb-20  flex-wrap mb-10 mt-[-90%] sm:mt-10'>
        {
          stats.map((stat) => {
            return(
              <div key={stat.id} className='flex justify-start flex-row m-3 items-center font-poppins gap-3'>
                  <span className='xs:text-[40px] text-[30px] text-white font-semibold  '>{stat.value}</span>
                  <span className='text-gradient xs:text-[20px] text-[15px] font-semibold uppercase'>{stat.title}</span>
              </div>
            )
          })
        }
    </section>
  )
}

export default Stats