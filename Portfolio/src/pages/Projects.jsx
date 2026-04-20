import { PROJECTS } from '@/data/portfolio'
import { FaProjectDiagram } from 'react-icons/fa'
import React from 'react'
import ProjectCard from '../components/ui/ProjectCard'
function Projects() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4 flex gap-1.5"><FaProjectDiagram />Projects</h1>
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