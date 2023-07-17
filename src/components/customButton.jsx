import React from 'react'

const CustomButton = ({styles,title}) => {
  return (
    <button className={`py-4 px-6 bg-blue-gradient outline-none ${styles}`}>
        <span className='font-poppins font-medium text-lg'>
            {title}
        </span>
    </button>
  )
}

export default CustomButton