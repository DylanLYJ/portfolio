import React from 'react'

const CustomSVG = ( {width, height, shape} : {width:number; height:number ; shape:string} ) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2">
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={shape}
    />
    </svg>
  )
}

export default CustomSVG