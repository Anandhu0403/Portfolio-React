
import React from 'react'
import { MapPin, Calendar, GraduationCap, ExternalLink } from "lucide-react"
import { cn } from '@/lib/utils'
import { Badge } from "@/components/ui/badge"
import { SiGithub } from 'react-icons/si'
function ProjectCard({ project }) {
  return (
    <div>
      <div className={cn(
            'group rounded-xl border border-border bg-card overflow-hidden',
            'flex flex-col md:flex-row',          // column on mobile, row on desktop
            'hover:border-border/80 transition-colors duration-200'
          )}>
      
            {/* ── Image block with overlapping title ── */}
            <div className="relative md:w-60 md:shrink-0 h-45 md:h-auto bg-muted">
      
              {/* Your actual image — swap src */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                // Placeholder when no image — shows institution initials
                <div className="w-full h-full flex items-center justify-center">
                  <GraduationCap size={48} className="text-muted-foreground/20" />
                </div>
              )}
      
              {/* Gradient overlay with title on top of image */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-base leading-tight">
                  {project.title}
                </h3>
               
              </div>
            </div>
      
            {/* ── Info block ── */}
            <div className="flex flex-col justify-center p-5 flex-1">
      
           
      
              {/* Description */}
              {project.description && (
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              )}
      
              
              {/* Subjects/skills tags */}
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
      
      
              {/* CGPA */}
              <div className="flex items-center justify-end gap-4 pt-3 border-t border-border">
                
                {project.github && (
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                  >
                    <SiGithub/> View on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                  >
                    View Live<ExternalLink size={12} className="inline-block" />
                  </a>
                )}

              </div>
            </div>
          </div>
    </div>
  )
}

export default ProjectCard