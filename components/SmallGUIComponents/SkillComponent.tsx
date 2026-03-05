import React from 'react'
import BarComponent from './barComponent'

type level = "Beginner" | "Intermediate" | "Advanced"
type SkillEntry = {
  subSkillName?: string;
  skillLevel: level;
};

type SkillCategory = {
  categoryName: string
  imagePath: string;
  subSkills: SkillEntry[];
};


const SkillComponent = ( {categoryName, imagePath, subSkills} : SkillCategory ) => {
  return (
    <div className='flex flex-col p-3 space-y-2'>
        <img src={imagePath} className='w-18 h-18 rounded-full object-cover'/>
        {
            subSkills.map(({ subSkillName, skillLevel}, index) => (
                    <div key={index}>
                        {subSkillName && <p>{subSkillName}</p>}
                        <BarComponent level= {skillLevel}/>
                    </div>
                ))
        }
    </div>
  )
}

export default SkillComponent