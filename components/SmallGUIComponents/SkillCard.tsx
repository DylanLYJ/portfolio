import React from 'react'
import { useState } from 'react'
import SkillComponent from './SkillComponent';

type level = "Beginner" | "Intermediate" | "Advanced";

type SkillEntry = {
  subSkillName?: string;
  skillLevel: level;
};

type SkillCategory = {
  categoryName: string
  imagePath: string;
  subSkills: SkillEntry[];
};

type TopCategory = {
  categoryName: string; 
  categoryHeader: string;
  skills: SkillCategory[];
};

export const SkillCard = ( {categoryName, categoryHeader, skills} : TopCategory) => {
  function getColour(level : level) {
      switch (level) {
        case 'Beginner': return "bg-red-500"
        case 'Intermediate': return "bg-yellow-500"
        case 'Advanced': return "bg-green-500"
      }
  }

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <div className='w-75 bg-darkblack rounded-2xl pt-2 p-4' onClick={() => setShowDetails(!showDetails)}>
          <h1 className='text-2xl'>{categoryName}</h1>
          <p>{categoryHeader}</p>
          <div className='flex flex-row space-x-1'>
            {
              skills.map((skill, index) => (
                <div key={index}>
                  <div className='pt-2'>
                    <div className={`w-2 h-8 rounded-full ${getColour(skill.subSkills[0].skillLevel)}`}/>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      { showDetails &&
        <div className='absolute bg-darkblack rounded-2xl border-2 border-black space-y-10 pb-4 z-50'>
          {
            skills.map((skill,index) => (
            <SkillComponent key={index} categoryName={skill.categoryName} imagePath={skill.imagePath} subSkills={skill.subSkills} />))
          }
        </div>
    } 
    </div>
        
  )
}
