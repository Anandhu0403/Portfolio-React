import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ExternalLink, ArrowUpRight, X, Sun, Moon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SECTIONS, PERSONAL } from '@/data/portfolio'
import { Drawer } from 'vaul'
import { DrawerContent, DrawerTrigger } from '../ui/drawer'
import { FaGithub } from "react-icons/fa"
import { useTheme } from '@/components/theme-provider'

function Sidebar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
   
    <header className="fixed top-0 left-0 right-0 z-50 h-14
    border-b border-border/60 bg-background/45 supports-backdrop-filter:bg-background/30 backdrop-blur-xl flex items-center px-4">

      {/* ── Logo ── */}
      <Link
        to="/"
        className="flex items-center gap-2 text-sm font-semibold
          hove    r:text-primary transition-colors shrink-0"
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
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href={`https://github.com/${PERSONAL.github}`}
            target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} />
          </a>
        </Button> 

        {/* ── Mobile menu (Sheet) ── */}

          <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button className="p-2 border lg:hidden"><Menu size={16} /></button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className=" fixed inset-0 bg-black/60" />

        <Drawer.Content
          className="fixed bottom-0 left-0 right-0 rounded-t-xl border border-border bg-card p-4 text-card-foreground dark:bg-black"
        >
          <button
  className="absolute top-3 right-3 p-1 lg:hidden"
  onClick={() => setOpen(false)}
>
  <X size={18} />
</button>
          <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-muted-foreground/30" />

          <h2 className="text-lg text-center pb- font-semibold">Sections</h2>

        <nav className="flex flex-col gap-0.5 flex-1">
                  {SECTIONS.map((section) => (
                    <NavLink
                      key={section.id}
                      to={section.path}
                      end={section.path === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors duration-150',
                          isActive
                            ? 'bg-accent text-foreground font-medium border-l-2 border-primary pl-2.5'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        )
                      }
                    >
                      {section.label}
                    </NavLink>
                  ))}
                </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
      
      </div>

    </header>
   
    )
}

export default Sidebar