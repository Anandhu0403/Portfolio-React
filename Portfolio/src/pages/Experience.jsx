import ExperienceCard from '@/components/ui/ExperienceCard'
import React from 'react'
import { EXPERIENCE } from '../data/portfolio'
import { LiaSuitcaseSolid } from 'react-icons/lia'
function Experience() {
  return (
    <div>
       <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4 flex gap-1.5"> <LiaSuitcaseSolid />Experience</h1>
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