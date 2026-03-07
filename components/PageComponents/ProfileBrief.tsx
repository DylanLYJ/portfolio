'use client'

import React, { useEffect, useState } from 'react'
import BouncingArrow from '../SmallGUIComponents/BouncingArrow'


const ProfileBrief = ({isMobile} : {isMobile: boolean}) => {


  return (
          <section className={isMobile ? 'brief-section-mobile py-5' : 'brief-section-desktop py-5'} >
            <div className='flex text-xl' >
              <p className='rounded-border-label'>About me</p>
              <a href="/pdf/Dylan Lim Yi Jie_Resume.pdf" className='link-label ml-auto text-xl'> My resume →</a>
            </div>
            
                <div className={isMobile ? 'image-description-mobile items-center' : 'image-description-desktop items-center'}>
                  <section className='max-w-140 space-y-2'>
                    <div className={isMobile ? 'text-2xl space-y-2': 'text-4xl space-y-2'}>
                        <h1>Dylan Lim Yi Jie</h1>
                        <h1>Computer Science Student</h1>
                    </div>
                    <p className={isMobile ? 'text-lg text-justify' : 'text-xl text-justify'}> A computer science student currently pursuing a bachelor degree, passionate in software and web development. Experienced with Java, database management and UI/UX design concepts. </p>
                  </section>
                  <img src="/img/me.png" alt='error occured' className={isMobile ? 'w-50 h-70 object-cover rounded-lg ' : 'w-80 h-100 object-cover rounded-lg '}/>
                </div>
    
            <BouncingArrow/>
          </section>
  )
}

export default ProfileBrief