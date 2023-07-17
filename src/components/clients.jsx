import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className='my-4 flex justify-center items-center mt-10 animate-bounce' >
        <div className='flex flex-wrap w-full justify-between items-center '>
            {
                clients.map((client) => {
                    return(
                        <div key={client.id}>
                            <img className='sm:w-[192px] w-[100px] object-contain' src={client.logo}/>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Clients