import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ExternalLink, ArrowUpRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SECTIONS, PERSONAL } from '@/data/portfolio'
function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14
      bg-background/80 backdrop-blur-md border-b border-border
      flex items-center px-4 gap-4">

      {/* ── Logo ── */}
      <Link
        to="/"
        className="flex items-center gap-2 text-sm font-semibold
          hover:text-primary transition-colors shrink-0"
      >
        <span className="w-5 h-5 rounded border border-primary
          flex items-center justify-center">
          <ArrowUpRight size={11} className="text-primary" />
        </span>
        <span className="font-mono">{PERSONAL.github}.dev</span>
      </Link>

      {/* ── Desktop nav links ── */}
      <nav className="hidden md:flex items-center gap-1 ml-2">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1">
            LinkedIn <ExternalLink size={12} />
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={PERSONAL.resumeUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1">
            Resume <ExternalLink size={12} />
          </a>
        </Button>
      </nav>

      {/* ── Right side icons ── */}
      <div className="ml-auto flex items-center gap-1">
        <Button variant="ghost" size="icon" asChild>
          <a href={`https://github.com/${PERSONAL.github}`}
            target="_blank" rel="noopener noreferrer">
            {/* <Github size={16} /> */}
          </a>
        </Button>

        {/* ── Mobile menu (Sheet) ── */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu size={18} />
            </Button>
          </SheetTrigger>

          <SheetContent side="bottom"  className="h-[60vh] bg-background/90 backdrop-blur-md rounded-t-xl p-0">
            <div className="flex justify-center pt-2">
  <div className="w-10 h-1.5 bg-muted rounded-full"></div>
</div>
            <div className="flex flex-col h-full pt-14 px-3 py-4">
              <p className="px-3 mb-2 text-[11px] font-semibold tracking-widest
                uppercase text-muted-foreground">
                Sections
              </p>
              <nav className="flex flex-col gap-0.5">
                {SECTIONS.map((section) => (
                  <NavLink
                    key={section.id}
                    to={section.path}
                    end={section.path === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center px-3 py-2 rounded-md text-sm transition-colors',
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
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </header>
    )
}

export default Sidebar