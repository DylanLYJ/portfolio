import { useScroll } from 'framer-motion'
import React, { useEffect } from 'react'
import {useState} from 'react'

type level = "Beginner" | "Intermediate" | "Advanced"

const BarComponent = ({level} : {level : level}) => {
    const [width, setWidth] = useState(0);

    const levelPercent = () => {
        switch(level) {
            case 'Beginner': return 50
            case 'Intermediate': return 75
            case 'Advanced': return 100
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => setWidth(levelPercent), 50);
        return () => clearTimeout(timeout);
    }, [])
    
  return (
    <div className='w-75 h-2 bg-gray-300 rounded-full'>
        <div className="top-0 left-0 h-full rounded-full bg-blue-500 transition-all duration-500"
        style={{ width: `${width}%`}}/>
        <div className={`top-2 transform rounded w-full flex shadow justify-end`}>
            <span>{level}</span>
        </div>
    </div> 
  ) 
}

export default BarComponent