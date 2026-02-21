import React from 'react'
import BouncingArrow from '../SmallGUIComponents/BouncingArrow'

const ProfileBrief = () => {
  return (
          <section className='relative h-screen py-8 px-17' >
            <div className='flex'>
              <p className='text-xl border-1 rounded-2xl px-2 py-0.5'>About me</p>
              <a href="/resources/Dylan Lim Yi Jie_Resume.pdf" className=' text-blue-300 hover:underline ml-auto text-xl'> My resume →</a>
            </div>
            
            <div>
              <section>
                <div className='text-4xl px-20 pt-20 space-y-2'>
                    <h1>Dylan Lim Yi Jie</h1>
                    <h1>Computer Science Student</h1>
                </div>
                <p className='text-xl px-20 pt-5'> A software development and AI enthusiasm</p>
              </section>
              <aside>
              </aside>
            </div>
    
            <BouncingArrow/>
          </section>
  )
}

export default ProfileBrief