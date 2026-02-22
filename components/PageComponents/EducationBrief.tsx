import React from 'react'

const EducationBrief = ({isMobile} : {isMobile: boolean}) => {
  return (
    <section className={isMobile? 'brief-section-mobile py-8' : 'brief-section-desktop py-8'}>
      <p className='rounded-border-label'>Education</p>

      <div>

      </div>
    </section>
  )
}

export default EducationBrief