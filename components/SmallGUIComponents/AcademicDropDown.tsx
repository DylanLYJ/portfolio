import { useState } from 'react'
import CustomSVG from './customSVG';

const AcademicDropDown = () => {

    type direction = "left" | "right"
    type YearKey = "Foundation" | "Year 1" | "Year 2";
    const [activeYear, setActiveYear] = useState<YearKey>('Foundation')
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setslideDirection] = useState("left")

    const data = {
        "Foundation" : {learnt: ["Python Programming", "Basic of SQL", "Computer Architecture", "Electric & Electronics"], 
            projects: ["Python music player", "Simple library management", "Python educational application"]},
        "Year 1" : {learnt: ["C Programming", "Object-Oriented Programming (Java)", "Advanced database management", "bash scripting", "Algorimiths", "Network and Security"], 
            projects: ["Retail Application (Java)", "Real-time gold price tracker"]},
        "Year 2" : {learnt: ["Haskell Programming", "Microcontroller", "Software Development Principles", "Artificial Intelligence"],
            projects: ["Digital Healthcare Application (Java)", "8-Puzzle solver"]}
        }

    function setSlidingTimeout(afterTimeOut : Function) {
        setIsSliding(true)
        setTimeout(() => {
            afterTimeOut();
            setIsSliding(false)
        }, 300)
    }
    
    function changeInformation(reversed : boolean) {
        setslideDirection(reversed ? "left" : "right");
        switch (activeYear) {
            case 'Foundation':
                setSlidingTimeout(() => setActiveYear(reversed ? "Year 2" : "Year 1"))
                break

            case 'Year 1':
                setSlidingTimeout(() => setActiveYear(reversed ? "Foundation" : "Year 2"))
                break

            case 'Year 2':
                setSlidingTimeout(() => setActiveYear(reversed ? "Year 1" : "Foundation"))
                break
        }
    }

  return (
    <div>
        <div className="flex flex-row space-x-25 pt-3 bg-darkblack px-6 py-3 justify-center">
            <button onClick={() => changeInformation(true)}>
                <CustomSVG width={24} height={24} shape="M12 19l-7-7 7-7"/>
            </button>
            <p className="text-blue-300 underline text-xl">{activeYear}</p>
            <button onClick={() => changeInformation(false)}>
                <CustomSVG width={24} height={24} shape="M12 19 l7 -7 -7 -7"/>
            </button>
        </div>

        <div className='flex flex-row space-x-20 text-xl pt-5 pl-10 bg-darkblack p-6 overflow-hidden'>
            <div className={`transform transition-all duration-300 ${isSliding ? slideDirection === "right" ? "-translate-x-150" : "translate-x-150" : "translate-x-0"}`}>
                <h2 className='pb-5 font-bold underline'>Modules</h2>
                <div>
                    {data[activeYear].learnt.map((item, id) => (
                        <li className="text-base" key={id}>{item}</li>
                    ))}
                </div>
            </div>
            <div className={`transform transition-all duration-300 ${isSliding ? slideDirection === "right" ? "-translate-x-150" : "translate-x-150" : "translate-x-0"}`}>
                <h2 className="pb-5 font-bold underline">Projects</h2>
                <div>
                    {data[activeYear].projects.map((item, id) => (
                        <li className="text-base" key={id}>{item}</li>
                    ))}
                </div>
            </div>
        </div>    
    </div>
  )
}


export default AcademicDropDown