import React from 'react'
import { SKILLS } from '../data/portfolio'
import { Button } from "@/components/ui/button"
import { FaTools } from 'react-icons/fa'
function Skills() {
  return (
    <div>
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4 flex gap-1.5"><FaTools />Skills</h1>
            <p className="text-lg text-muted-foreground mb-6">
              As a full-stack Software Engineer, I specialize in building scalable web applications using modern technologies such as Django React.js, and Tailwind CSS. I'm also expanding my expertise into Ai  to create efficient, maintainable, robust web solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Button
              key={index}
              variant="default"
              className="rounded-lg text-sm px-4 py-2 transition-transform duration-300 ease-out hover:scale-115"
            >
              {Icon && <Icon size={16} />}
              {skill.name}
            </Button>
          );
        })}
      </div>
            </div>
    </div>
  )
}

export default Skills