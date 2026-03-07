import React from 'react'
import ProjectCardImages from './ProjectCardImages'
import Link from 'next/link';

type projectCard = {
  projectName: string
  projectImages : string[]
  projectSkills : string[]
  projectDescription: string
  projectGitLink: string
  isMobile: Boolean
}

const ProjectCard = ( {projectName, projectImages, projectSkills, projectDescription, projectGitLink, isMobile} : projectCard ) => {

  return (
    <div className={isMobile ? 'flex flex-col space-y-10'  : 'flex flex-row space-x-30'}>
      <ProjectCardImages projectImages={projectImages} isMobile={isMobile}/>
      <div className='flex flex-col space-y-4 max-w-150'>
        <h1 className='text-3xl'>{projectName}</h1>
        <div className='flex flex-row space-x-5'>
          {
            projectSkills.map((skill, index) => (
              <p key={index} className='rounded-2xl px-3 py-0.5 bg-darkblack'>{skill}</p>
            ))
          }
        </div>
        <p>{projectDescription}</p>
        <div className='pt-5'>
          <Link href={projectGitLink}>
            <button className=' border-b flex flex-row hover:border-blue-500 active:bg-darkblack'>View Github   
              <svg className="w-3 h-3 translate-x-2" viewBox="320 6439 24 20">
                <polygon className="fill-white" points="324 6457.602 325.393 6458.997 342 6442.349 342 6453 344 6453 344 6439 329.907 6439 329.877 6441 340.634 6441" fill="currentColor"/>
              </svg>
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard