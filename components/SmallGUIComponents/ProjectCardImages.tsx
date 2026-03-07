import React from 'react'
import { useState } from 'react'

type projectCard = {
  projectImages : string[]
  projectSkills : string[]
  projectDescription: string
  projectGitLink: string
}

const ProjectCardImages = ( { projectImages, isMobile} : { projectImages:string[], isMobile:Boolean } ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const nextIndex = (currentIndex+1) % projectImages.length;
  const next2Index = (currentIndex+2) % projectImages.length;

  function uponClick() {
    if (isSwapping) return;
    setIsSwapping(true);

    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsSwapping(false);
    }, 500)
  }

  return (
    <div className={isMobile ? 'relative cursor-pointer w-120 h-75' : 'relative cursor-pointer w-140 h-75'} onClick={() => uponClick()}>
      <img key={1} src={projectImages[next2Index]} className={` ${isSwapping ? 'animate-mid swappable-image': 'animate-back swappable-image' }`}/>
      <img key={2} src={projectImages[nextIndex]} className={` ${isSwapping ? 'animate-front swappable-image': 'animate-mid swappable-image' }`}/>
      <img key={3} src={projectImages[currentIndex]} className={` ${isSwapping ? 'animate-shuffle swappable-image': 'animate-front swappable-image' }`}/>
    </div>
  )
}

export default ProjectCardImages