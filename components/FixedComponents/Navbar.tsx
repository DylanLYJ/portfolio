import React from 'react'
import { RefObject } from 'react'

export const Navbar = ({isMobile, profileBriefDiv, educationBriefDiv, skillBriefDiv, projectBriefDiv, contactBriefDiv} : 
               {isMobile : Boolean; profileBriefDiv : React.RefObject<HTMLDivElement | null>; educationBriefDiv : React.RefObject<HTMLDivElement | null>; 
                skillBriefDiv : React.RefObject<HTMLDivElement | null>; projectBriefDiv: React.RefObject<HTMLDivElement | null>;
                contactBriefDiv : React.RefObject<HTMLDivElement | null>;}) => {

    function scrollToDiv(targetRef : RefObject<HTMLDivElement | null>) {
      targetRef.current?.scrollIntoView({behavior:"smooth"})
    }

  return (
    <nav className={`fixed bg-darkblack text-white flex justify-between items-center px-4 py-3 w-full z-500`}>
      <div className= {isMobile ? "ml-auto" : "space-x-4 ml-auto px-3"} >
        <button onClick={() => scrollToDiv(profileBriefDiv)} className="hover:text-blue-400 px-6 py-1 font-mono">About</button>
        <button onClick={() => scrollToDiv(educationBriefDiv)} className="hover:text-blue-400 px-6 py-1 font-mono">Education</button>
        <button onClick={() => scrollToDiv(skillBriefDiv)} className="hover:text-blue-400 px-6 py-1 font-mono">Skill</button>
        <button onClick={() => scrollToDiv(projectBriefDiv)} className="hover:text-blue-400 px-6 py-1 font-mono">Project</button>
        <button onClick={() => scrollToDiv(contactBriefDiv)} className="hover:text-black px-6 py-1 bg-blue-500 font-mono rounded-md">Contact</button>
      </div>
    </nav>
  )
}

export default Navbar