import React from 'react'
import BarComponent from '../SmallGUIComponents/barComponent'
import SkillComponent from '../SmallGUIComponents/SkillComponent'
import { SkillCard } from '../SmallGUIComponents/SkillCard';

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

const SkillBrief = ( {isMobile} : {isMobile : Boolean}) => {

    const skillData: TopCategory[] = [
    {
        categoryName: "Programming",
        categoryHeader:"5 Programming Languages",
        skills: [{categoryName: "Python", imagePath: "/img/python.png", 
                    subSkills: [{ skillLevel: "Advanced" }],},
                {categoryName: "C Programming", imagePath: "/img/c.png",
                    subSkills: [{ skillLevel: "Beginner" }],},
                {categoryName: "Java", imagePath: "/img/java.png", 
                            subSkills: [{ skillLevel: "Advanced" }],},
                {categoryName: "C#", imagePath: "/img/Cslash.png",
                            subSkills: [{ skillLevel: "Beginner" }],},
                {categoryName: "Haskell", imagePath: "/img/haskell.png",
                            subSkills: [{ skillLevel: "Intermediate" }],},],
    },
    {
        categoryName: "Tools",
        categoryHeader: "4 Unique Tools",
        skills: [{categoryName: "Visual Studio Code", imagePath: "/img/vscode.png",
                    subSkills: [{ skillLevel: "Advanced" }],},
                {categoryName: "Intellij IDE", imagePath: "/img/intellij.png", 
                    subSkills: [{ skillLevel: "Advanced" }],},
                {categoryName: "Git", imagePath: "/img/git.png", 
                    subSkills: [{ skillLevel: "Intermediate" }],},
                {categoryName: "Unity", imagePath: "/img/unity.png",
                    subSkills: [{ skillLevel: "Beginner" }],},],
    },
    {
        categoryName: "Web Development",
        categoryHeader: "4 Tools & 1 Framework",
        skills: [{categoryName: "HTML", imagePath: "/img/html.png",
                    subSkills: [{ skillLevel: "Advanced" }],},
                {categoryName: "CSS", imagePath: "/img/css.png",
                    subSkills: [{ skillLevel: "Intermediate" }],},
                {categoryName: "JavaScript", imagePath: "/img/js.png",
                    subSkills: [{ skillLevel: "Intermediate" }],},
                {categoryName: "React, Next.js", imagePath: "/img/react.png",
                    subSkills: [{ skillLevel: "Intermediate" }],},],
    },
    {
        categoryName: "Language",
        categoryHeader: "3 Different Languages", 
        skills: [{categoryName: "Mandarin", imagePath: "/img/mandarin.png",
                    subSkills: [{subSkillName: "Speaking", skillLevel: "Advanced"}, {subSkillName: "Writing", skillLevel: "Intermediate"}]},
                {categoryName: "English", imagePath: "/img/english.png",
                    subSkills: [{subSkillName: "Speaking", skillLevel: "Advanced"}, {subSkillName: "Writing", skillLevel: "Advanced"}]},
                {categoryName: "Malay", imagePath: "/img/malay.png",
                    subSkills: [{subSkillName: "Speaking", skillLevel: "Intermediate"}, {subSkillName: "Writing", skillLevel: "Intermediate"}]}]
            
    },
    {
        categoryName: "Others",
        categoryHeader: "2 Other Skills",
        skills: [{categoryName: "mySQL", imagePath: "/img/mysql.png",
                    subSkills: [{skillLevel: "Advanced"}]},
                {categoryName: "Bash Scripting", imagePath: "/img/bash.png",
                    subSkills: [{skillLevel: "Intermediate"}]}],
    }
    ];


  return (
    <section className={isMobile? 'brief-section-mobile py-8' : 'brief-section-desktop py-8'}>
        <p className='rounded-border-label'>Skills</p>
        <div className='flex flex-wrap gap-8 mt-8'>
            {
                skillData.map((skillCategory) => 
                <SkillCard key={skillCategory.categoryName} categoryName={skillCategory.categoryName} categoryHeader={skillCategory.categoryHeader} skills={skillCategory.skills}/>
                )
            }
        </div>
    </section>
  )
}

export default SkillBrief