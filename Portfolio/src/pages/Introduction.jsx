import React from 'react'
import { Mail, FileText, MessageCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PERSONAL } from '../data/portfolio'
function Introduction() {
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

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Anandhu</h1>
        <p className="text-lg text-muted-foreground mb-6">
          {PERSONAL.bio}
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          When I'm not coding, you can find me exploring the latest tech trends.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${PERSONAL.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Mail size={16} />
            Get in Touch
          </a>

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
        </div>

    </div>
    </div>
  )
}

export default Introduction