import { PROJECTS } from '@/data/portfolio'
import { FaProjectDiagram } from 'react-icons/fa'
import React from 'react'
import ProjectCard from '../components/ui/ProjectCard'
function Projects() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="mb-4 flex gap-1.5 font-poppins text-4xl md:text-5xl font-bold dark:bg-gradient-to-r dark:from-slate-300 dark:to-slate-500 dark:bg-clip-text dark:text-transparent bg-clip-text p-5"><FaProjectDiagram className='dark:text-gray-300' />Projects</h1>
             <div className="flex flex-col gap-4">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
    </div>
  )
}

export default Projects