import React from 'react'
import { Mail, FileText, Copy } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PERSONAL } from '../data/portfolio'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
function Introduction() {
  const [copyToastVisible, setCopyToastVisible] = React.useState(false)

  const whatsappHref =
    PERSONAL.whatsapp ||
    `https://wa.me/?text=${encodeURIComponent(`Hi ${PERSONAL.name}, I found your portfolio and wanted to connect.`)}`
  const resumeHref = `/${PERSONAL.resumeUrl}`

  const handleResumeClick = (event) => {
    event.preventDefault()

    // Try opening preview tab first (may be blocked by popup rules in some browsers).
    window.open(resumeHref, '_blank', 'noopener,noreferrer')

    // Then trigger download from the same user action.
    const downloadLink = document.createElement('a')
    downloadLink.href = resumeHref
    downloadLink.setAttribute('download', 'Anandhu_S_Resume.pdf')
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const showCopyToast = () => {
    setCopyToastVisible(true)
    window.setTimeout(() => {
      setCopyToastVisible(false)
    }, 1800)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email)
      showCopyToast()
    } catch {
      const fallbackInput = document.createElement('textarea')
      fallbackInput.value = PERSONAL.email
      fallbackInput.style.position = 'fixed'
      fallbackInput.style.opacity = '0'
      document.body.appendChild(fallbackInput)
      fallbackInput.focus()
      fallbackInput.select()
      document.execCommand('copy')
      document.body.removeChild(fallbackInput)
      showCopyToast()
    }
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-poppins text-5xl font-bold 
        dark:bg-gradient-to-r
    dark:from-slate-300
    dark:to-slate-500
    dark:bg-clip-text
    dark:text-transparent ">Hi, I'm Anandhu</h1>
        <p className="text-lg text-muted-foreground mb-6">
          {PERSONAL.bio}
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          When I'm not coding, you can find me exploring the latest tech trends.
        </p>
        <TooltipProvider>
          <div className="mt-6 flex flex-wrap gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Mail size={16} />
                  Get in Touch
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex items-center gap-2">
                  <span>{PERSONAL.email}</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 rounded border border-background/30 px-2 py-1 text-[11px] font-medium text-background transition-colors hover:bg-background/10"
                  >
                    <Copy size={12} />
                    
                  </button>
                </div>
              </TooltipContent>
            </Tooltip>
          <a
            href={`https://github.com/${PERSONAL.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>

          <a
            href={resumeHref}
            onClick={handleResumeClick}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FileText size={16} />
            Resume
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FaWhatsapp size={16} />
            WhatsApp
          </a>
          <a
            href={PERSONAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <FaInstagram size={16} />
            Instagram
          </a>
          </div>
        </TooltipProvider>

        <div
          className={`pointer-events-none fixed right-4 top-4 z-70 rounded-md bg-foreground px-3 py-2 text-sm text-background shadow-lg transition-all duration-200 ${copyToastVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
          role="status"
          aria-live="polite"
        >
          Email copied to clipboard
        </div>

    </div>
    </div>
  )
}

export default Introduction