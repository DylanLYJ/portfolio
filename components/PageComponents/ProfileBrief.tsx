'use client'

import React, { useEffect, useState } from 'react'
import BouncingArrow from '../SmallGUIComponents/BouncingArrow'

const ProfileBrief = ({isMobile} : {isMobile: boolean}) => {


  return (
          <section className={isMobile ? 'relative min-h-screen py-8 px-12' : 'relative min-h-screen py-8 px-17'} >
            <div className='flex text-xl' >
              <p className='border rounded-2xl px-2 py-0.5'>About me</p>
              <a href="/pdf/Dylan Lim Yi Jie_Resume.pdf" className=' text-blue-300 hover:underline ml-auto text-xl'> My resume →</a>
            </div>
            
            <div>
                <aside className={isMobile ? 'flex items-center space-x-10 pt-10' : 'flex items-center space-x-40 pt-10 pl-30'}>
                  <section className='max-w-140 space-y-2'>
                    <div className={isMobile ? 'text-2xl space-y-2': 'text-4xl space-y-2'}>
                        <h1>Dylan Lim Yi Jie</h1>
                        <h1>Computer Science Student</h1>
                    </div>
                    <p className={isMobile ? 'text-lg' : 'text-xl'}> A Software Development and Artificial Intelligence Enthusiasm</p>
                  </section>
                  <img src="/img/placeholder.png" alt='error occured' className={isMobile ? 'w-50 h-70 object-cover rounded-lg ' : 'w-80 h-100 object-cover rounded-lg '}/>
                </aside>
            </div>
    
            <BouncingArrow/>
          </section>
  )
}

export default ProfileBrief