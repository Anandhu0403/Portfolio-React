import ExperienceCard from '@/components/ui/ExperienceCard'
import React from 'react'
import { EXPERIENCE } from '../data/portfolio'
import { LiaSuitcaseSolid } from 'react-icons/lia'
function Experience() {
  return (
    <div>
       <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className=" mb-4 flex gap-1.5 font-poppins text-4xl md:text-5xl font-bold
              dark:bg-gradient-to-r
    dark:from-slate-300
    dark:to-slate-500
    dark:bg-clip-text
    dark:text-transparent
            bg-clip-text 
             p-5"> <LiaSuitcaseSolid className='dark:text-gray-300' />Experience</h1>
             <div className="flex flex-col gap-4">
              {EXPERIENCE.map((exp) => (
                <ExperienceCard key={exp.id} exp={exp} />
              ))}
            </div>
          </div>
    </div>
  )
}

export default Experience