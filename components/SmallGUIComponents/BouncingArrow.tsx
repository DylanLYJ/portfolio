import React from 'react'

const BouncingArrow = () => {
  return (
    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center'>
        <p className='py-3'>Scroll down to explore my portfolio brief!</p>
        <svg className='w-7 h-9 text-blue-500 animate-bounce' fill='none' stroke='currentcolor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M19 11l-9 9-9-9"></path>
        </svg>
    </div>
  )
}

export default BouncingArrow