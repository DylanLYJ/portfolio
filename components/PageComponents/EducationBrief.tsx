import React from 'react'
import AcademicDropDown from '../SmallGUIComponents/AcademicDropDown'

const EducationBrief = ({isMobile} : {isMobile: boolean}) => {

  

  return (
    <section>
      <section className={isMobile? 'brief-section-mobile py-8' : 'brief-section-desktop py-8'}>
        <p className='rounded-border-label'>Education</p>
          <div className={isMobile ? 'image-description-mobile items-center' : 'image-description-desktop pl-0!'}>
            <div>
                </div>
                  <section className='max-w-140 space-y-2'>
                    <div className={isMobile ? 'text-2xl space-y-2': 'text-4xl space-y-2'}>
                      <h1>High-School</h1>
                      <h1>SMK Taman Bukit Indah</h1>
                    </div>
                  <div className="horizontally-placed-cards">
                      <div>
                        <div className="flex flex-row">
                          <p className="text-5xl"> 8A </p>
                          <p className="text-5xl pl-3 text-blue-300">+</p>
                        </div>
                        <h2>in SPM</h2>
                      </div>
                      <div>
                        <p className="text-5xl"> 2023 </p>
                        <h2>Graduated</h2>
                      </div>
                  </div>
                </section>
                <img src="/img/highschool.jpeg" alt='error occured' className={isMobile ? 'w-42 h-42 object-cover rounded-lg ' : 'w-50 h-50 object-cover rounded-lg translate-x-30'}/>
          </div>
      </section>

      <div className='py-5'></div>
      
      <section className={isMobile? 'brief-section-mobile py-8' : 'brief-section-desktop py-8'}>
        {isMobile && <img src="/img/unilogo.jpeg" alt='error occured' className='w-120 h-25 object-cover rounded-lg'/>}
        <div className={isMobile ? 'image-description-mobile items-center' : 'image-description-desktop items-center'}>
            
              {!isMobile && <img src="/img/unilogo.jpeg" alt='error occured' className='w-120 h-30 object-cover rounded-lg '/>}

                    <div className={isMobile ? 'text-2xl space-y-2': 'text-4xl space-y-2'}>
                      <h1>University of Southampton Malaysia</h1>
                      <AcademicDropDown></AcademicDropDown>
                    </div>
          </div>
      </section>
    </section>
  )
}

export default EducationBrief