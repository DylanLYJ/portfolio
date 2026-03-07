import React from 'react'
import ProjectCardImages from '../SmallGUIComponents/ProjectCardImages'
import ProjectCard from '../SmallGUIComponents/ProjectCard'

type projectCard = {
  projectName: string
  projectImages : string[]
  projectSkills : string[]
  projectDescription: string
  projectGitLink: string
}

const ProjectBrief = ( {isMobile} : {isMobile:Boolean}) => {

  const data = [{ 
    projectName: "8 Puzzle Solver",
    projectImages: ["/img/aiproject/8puzzlestart.jpg", "/img/aiproject/8puzzletest.jpg", "/img/aiproject/8puzzlesolve.jpg"],
    projectSkills: ["Python", "Tkinter"],
    projectDescription: "This project Incorporate A* Algorithm using python to search for moves to solve a 8-puzzle optimally, it used Tkinter for user interface and animate 8-puzzle solutions. In addition, it have an option to let user play the 8-puzzle and compared the result with the optimal solution.",
    projectGitLink: "https://github.com/DylanLYJ/8-Puzzle-solver"
  }, 
  { 
    projectName: "Retail Application",
    projectImages: ["/img/retailproject/onlineRetailLogin.jpg", "/img/retailproject/onlineRetailMain.jpg", "/img/retailproject/onlineRetailProductManagement.jpg","/img/retailproject/onlineRetailProductManagement2.jpg", "/img/retailproject/onlineRetailProductManagement3.png", "/img/retailproject/onlineRetailOrderHistory.png", "/img/retailproject/onlineRetailOrderHistory2.png", "/img/retailproject/onlineRetailSales.png", "/img/retailproject/onlineRetailStoreCart.png"],
    projectSkills: ["SQLite", "Java", "JavaFX", "CSS"],
    projectDescription: "A JavaFX project that simulate online retail application with SQLite as storage. The project incorporated admin interface with CRUD control for products and admin status management, as well as user interface to inspect and add products to cart. It also included additional QOL features like category filtering, tags filtering and multithread loading.",
    projectGitLink: "https://github.com/DylanLYJ/Online-Retail-Application"
  },
  { 
    projectName: "Gold Price Tracker",
    projectImages: ["/img/bashproject/bashScriptInfoClean.png", "/img/bashproject/bashScriptSetup.png", "/img/bashproject/bashScriptDatabase1.png", "/img/bashproject/bashScriptDatabase2.png"],
    projectSkills: ["Bash Scripting", "mySQL"],
    projectDescription: "A project that uses bash scripting to fetch and clean web data from a gold-price tracking website, obtaining only the real-time gold-price data and log it into a mySQL database. This program was automated and will be executed at predefined time-intervals. Another bash script was incorporated to fetch data from the mySQL database and visualize it in a graph based on the any given time length.",
    projectGitLink: "https://github.com/Huayu05/COMP1314_gold_price_record"
  },
  { 
    projectName: "Sexual Healthcare Application (On going)",
    projectImages: ["/img/healthcareproject/wellnestmain.png", "/img/healthcareproject/wellnestprofile.png", "/img/healthcareproject/wellnestclinicfinder.png", "/img/healthcareproject/wellnestreminder.png",  "/img/healthcareproject/wellnestchatbot.png", "/img/healthcareproject/wellnestsetting.png"],
    projectSkills: ["SQLite", "Java", "JavaFX", "CSS"],
    projectDescription: "A team project that adapt agile project management workflow. The project is designed using JavaFX and CSS for interface, and SQLite for simple storage. The software aim to provide address-based clinic finder, appointment booking, information scripted chatbot and reminders tracking, it will also include interface for clinic POV for appointment handling. Certain features are incorporated with API services like Geoapify and Brevo.",
    projectGitLink: "Not available yet"
  },
  { 
    projectName: "Portfolio Website",
    projectImages: ["/img/portfolio/profile.png", "/img/portfolio/education.png", "/img/portfolio/skill.png", "/img/portfolio/projects.png"],
    projectSkills: ["React", "Next.js", "TailwindCSS"],
    projectDescription: "A portfolio website created using next.js framework. A learning project that uses various react components and functions to achieve different design effects for each section, it utilized react to achieve mobile compatability and conditional rendering.",
    projectGitLink: "https://github.com/DylanLYJ/portfolio"
  }]

  return (
    <div className={isMobile? 'brief-section-mobile py-8' : 'brief-section-desktop py-8'}>
        <p className='rounded-border-label'>Projects</p>
        <div className='flex flex-col space-y-30 pt-10'>
          {
            data.map((project, index) => (
              <ProjectCard key={index} projectName={project.projectName} projectDescription={project.projectDescription} projectGitLink={project.projectGitLink} projectImages={project.projectImages} projectSkills={project.projectSkills} isMobile={isMobile}/>
            ))
          }
        </div>
    </div>
  )
}

export default ProjectBrief