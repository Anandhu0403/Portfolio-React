import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'
function CertificationCard({ cert }) {
  return (
    <div>
            <div className={cn(
              'group rounded-xl border border-border bg-card overflow-hidden',
              'flex flex-col md:flex-row',          // column on mobile, row on desktop
              'hover:border-border/80 transition-colors duration-200'
            )}>
                <div className="flex flex-col justify-center p-5 flex-1">

        {/* Location badge */}

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
          border border-border text-muted-foreground text-xs w-fit mb-3">
          {cert.issuer}
        </div>

        {/* Institution name */}
        <h4 className="text-foreground font-bold text-sm mb-1">
          {cert.title}
        </h4>

       

        {/* Meta row — period + degree */}
        <div className="flex flex-wrap gap-3 mb-4">
         
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          
            {cert.description}
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
             {cert.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            </span>
        <p>
            <Badge asChild variant="outline" className="text-xs mt-4">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate <ArrowUpRight data-icon="inline-end" />
              </a>
            </Badge>
        </p>
    
    </div>
    </div>
    </div>
  )
}

export default CertificationCard