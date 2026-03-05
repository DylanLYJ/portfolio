'use client'

import React from 'react'
import {useState, useEffect} from 'react'
import ProfileBrief from '@/components/PageComponents/ProfileBrief'
import EducationBrief from '@/components/PageComponents/EducationBrief';
import SkillBrief from '@/components/PageComponents/SkillBrief';
import { motion, AnimatePresence } from "framer-motion"

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
      <motion.div initial={{opacity:0}} whileInView={{ opacity: 1 }} viewport={{amount: 0.4}} transition={{duration:1}}>
        <ProfileBrief isMobile={isMobile}/>
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{ opacity: 1 }} viewport={{amount: 0.4}} transition={{duration:1}}>
        <EducationBrief isMobile={isMobile}/>
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{ opacity: 1 }} viewport={{amount: 0.2}} transition={{duration:1}}>
        <SkillBrief isMobile={isMobile}/>
      </motion.div>
    </div>
  )
}

export default page