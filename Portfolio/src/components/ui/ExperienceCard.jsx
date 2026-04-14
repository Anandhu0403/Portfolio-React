import { MapPin, Calendar, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CircleSmall, BriefcaseBusiness } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
export default function ExperienceCard({ exp }) {
  return (
    <div className={cn(
      'group rounded-xl border border-border bg-card overflow-hidden',
      'flex flex-col md:flex-row',          // column on mobile, row on desktop
      'hover:border-border/80 transition-colors duration-200'
    )}>

      {/* ── Image block with overlapping title ── */}
      <div className="relative md:w-60 md:shrink-0 h-45 md:h-auto bg-muted">

        {/* Your actual image — swap src */}
         
          <div className="w-full h-full flex items-center justify-center">
            <BriefcaseBusiness size={48} className="text-muted-foreground/20" />
          </div>

        {/* Gradient overlay with title on top of image */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-base leading-tight">
            {exp.role}
          </h3>
          <p className="text-white/70 text-xs mt-1">{exp.period}</p>
        </div>
      </div>

      {/* ── Info block ── */}
      <div className="flex flex-col justify-center p-5 flex-1">

        {/* Location badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
          border border-border text-muted-foreground text-xs w-fit mb-3">
          <MapPin size={11} />
          {exp.location}
        </div>

        {/* Institution name */}
        <h4 className="text-foreground font-bold text-sm mb-1">
          {exp.company}
        </h4>

        {/* Description */}
        {exp.description && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {exp.description.map((line, index) => (
              <span key={index} className="block">
                <CircleSmall size={12} className="inline-block mr-2" />
                {line}
              </span>
            ))}
          </p>
        )}

        {/* Meta row — period + degree */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} />
            {exp.period}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BriefcaseBusiness size={12} />
            {exp.type}
          </span>
        </div>
        {/* Subjects/skills tags */}
        {exp.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}


      </div>
    </div>
  )
}