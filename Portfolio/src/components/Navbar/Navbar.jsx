import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { SECTIONS } from '@/data/portfolio'
function Navbar() {
  return (
    <div>
       <aside className="
      hidden lg:flex              
      fixed top-14 left-0         
      h-[calc(100vh-56px)] w-[240px]
      flex-col
      border-r border-border
      bg-background
    ">
      <div className="flex flex-col h-full px-3 py-6">

        {/* Label */}
        <p className="px-3 mb-2 text-[11px] font-semibold tracking-widest
          uppercase text-muted-foreground">
          Sections
        </p>

        {/* Nav links */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {SECTIONS.map((section) => (
            <NavLink
              key={section.id}
              to={section.path}
              end={section.path === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors duration-150',
                  isActive
                    ? 'bg-accent text-foreground font-medium border-l-2 border-primary pl-[10px]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )
              }
            >
              {section.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 flex flex-col gap-1">
          <div className="h-px bg-border mb-3" />
          <p className="text-[11px] font-mono text-muted-foreground">v1.0.0</p>
        </div>

      </div>
    </aside>
    </div>
  )
}

export default Navbar