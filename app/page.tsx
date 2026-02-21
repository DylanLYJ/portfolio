'use client'

import React from 'react'
import {useState, useEffect} from 'react'
import ProfileBrief from '@/components/PageComponents/ProfileBrief'
import { isMap } from 'util/types';

const page = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    handleResize();
    window.addEventListener("resize", handleResize)
  })

  return (
    <div>
      <ProfileBrief isMobile={isMobile}/>
    </div>
  )
}

export default page