import { MapPin, Calendar, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from "@/components/ui/badge"
export default function EducationCard({ edu }) {
  return (
    <div className={cn(
      'group rounded-xl border border-border bg-card overflow-hidden',
      'flex flex-col md:flex-row',          // column on mobile, row on desktop
      'hover:border-border/80 transition-colors duration-200'
    )}>

      {/* ── Image block with overlapping title ── */}
      <div className="relative md:w-65 md:shrink-0 h-45 md:h-auto bg-muted">

        {/* Your actual image — swap src */}
        {edu.image ? (
          <img
            src={edu.image}
            alt={edu.institution}
            className="w-full h-full object-cover"
          />
        ) : (
          // Placeholder when no image — shows institution initials
          <div className="w-full h-full flex items-center justify-center">
            <GraduationCap size={48} className="text-muted-foreground/20" />
          </div>
        )}

        {/* Gradient overlay with title on top of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-base leading-tight">
            {edu.degree}
          </h3>
          <p className="text-white/70 text-xs mt-1">{edu.period}</p>
        </div>
      </div>

      {/* ── Info block ── */}
      <div className="flex flex-col justify-center p-5 flex-1">

        {/* Location badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
          border border-border text-muted-foreground text-xs w-fit mb-3">
          <MapPin size={11} />
          {edu.location}
        </div>

        {/* Institution name */}
        <h4 className="text-foreground font-medium text-sm mb-1">
          {edu.institution}
        </h4>

        {/* Description */}
        {edu.description && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {edu.description}
          </p>
        )}

        {/* Meta row — period + degree */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} />
            {edu.period}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <GraduationCap size={12} />
            {edu.degree}
          </span>
        </div>
        {/* Subjects/skills tags */}
        {edu.Subjects && (
          <div className="flex flex-wrap gap-2 mb-4">
            {edu.Subjects.map((subject, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        )}


        {/* CGPA */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            Grade
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold font-mono text-foreground">
              {edu.grade}
            </span>
            <span className="text-xs text-muted-foreground"></span>
          </div>
        </div>
      </div>
    </div>
  )
}