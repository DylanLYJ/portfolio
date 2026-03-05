import React from 'react'

const ProjectBrief = ( {isMobile} : {isMobile:Boolean}) => {
  return (
    <div className={isMobile? 'brief-section-mobile py-8' : 'brief-section-desktop py-8'}>
        <p className='rounded-border-label'>Projects</p>
    </div>
  )
}

export default ProjectBrief