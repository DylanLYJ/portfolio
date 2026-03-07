'use client'

import React from 'react'
import Contact from '@/components/FixedComponents/Contact'
import Navbar from '@/components/FixedComponents/Navbar'
import {useState, useEffect, useRef, RefObject} from 'react'
import ProfileBrief from '@/components/PageComponents/ProfileBrief'
import EducationBrief from '@/components/PageComponents/EducationBrief';
import SkillBrief from '@/components/PageComponents/SkillBrief';
import ProjectBrief from '@/components/PageComponents/ProjectBrief';
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

  const profileBriefDiv = useRef<HTMLDivElement>(null);
  const educationBriefDiv = useRef<HTMLDivElement>(null);
  const skillBriefDiv = useRef<HTMLDivElement>(null);
  const projectBriefDiv = useRef<HTMLDivElement>(null);
  const contactBriefDiv = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar isMobile={isMobile} profileBriefDiv={profileBriefDiv} educationBriefDiv={educationBriefDiv} skillBriefDiv={skillBriefDiv} projectBriefDiv={projectBriefDiv} contactBriefDiv={contactBriefDiv}/>
      <div className="py-7"/>
      <motion.div ref={profileBriefDiv} initial={{opacity:0}} whileInView={{ opacity: 1 }} viewport={{amount: 0.4}} transition={{duration:1}}>
        <ProfileBrief isMobile={isMobile}/>
      </motion.div>
      <motion.div ref={educationBriefDiv} initial={{opacity:0}} whileInView={{ opacity: 1 }} viewport={{amount: 0.4}} transition={{duration:1}}>
        <EducationBrief isMobile={isMobile}/>
      </motion.div>
      <motion.div ref={skillBriefDiv} initial={{opacity:0}} whileInView={{ opacity: 1 }} viewport={{amount: 0.2}} transition={{duration:1}}>
        <SkillBrief isMobile={isMobile}/>
      </motion.div>
      <motion.div ref={projectBriefDiv} initial={{opacity:0}} whileInView={{ opacity: 1 }} viewport={{amount: 0.1}} transition={{duration:1}}>
        <ProjectBrief isMobile={isMobile}/>
      </motion.div>
      <div ref={contactBriefDiv}>
        <Contact/>
      </div>
    </div>
  )
}

export default page