// ─────────────────────────────────────────────────────────────────
//  portfolio.js  –  Edit this file to personalise your portfolio
// ─────────────────────────────────────────────────────────────────

export const SECTIONS = [
  { id: 'introduction', label: 'Introduction', path: '/' },
  { id: 'about',        label: 'About Me',     path: '/about' },
  { id: 'projects',     label: 'Projects',     path: '/projects' },
  { id: 'skills',       label: 'Skills & Tools', path: '/skills' },
  { id: 'experience',   label: 'Experience',   path: '/experience' },
  { id: 'education',    label: 'Education',    path: '/education' },
  { id: 'contact',      label: 'Contact',      path: '/contact' },
  { id: 'stats',        label: 'Stats',        path: '/stats' },
]

export const PERSONAL = {
  name:       'Anandhu S',
  title:      'Full Stack Developer',
  tagline:    'A coder by day, problem-solver by night!',
  bio:        `I am a dedicated Software Engineer specialising in full‑stack application
development. I enjoy crafting responsive web solutions using modern
technologies like , React, Tailwind CSS, Node.js, Express, and
MongoDB, while also applying DevOps practices — continuously aiming to
deliver high‑quality, user‑centric software.`,
  email:      'anandhu0403@gmail.com',
  github:     'yourusername',
  linkedin:   'https://linkedin.com/in/yourprofile',
  resumeUrl:  '/resume.pdf',
  location:   'City, Country',
}

export const PROJECTS = [
  {
    id: 'nike-redesign',
    title: 'Nike Reimagined | Modern Redesign Concept',
    description:
      'A sleek and modern redesign of Nike\'s official web experience built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/yourusername/nike-redesign',
    live:   'https://nike-redesign.vercel.app',
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio | Personal Site',
    description:
      'A dynamic portfolio showcasing projects, skills, and contributions using the latest web technologies.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/portfolio',
    live:   'https://yourportfolio.dev',
  },
  {
    id: 'news-hub',
    title: 'News Hub | Real‑Time News Platform',
    description:
      'A real‑time news platform delivering the latest headlines across various categories using the News API.',
    tags: ['React', 'News API', 'Redux'],
    github: 'https://github.com/yourusername/news-hub',
    live:   'https://news-hub.vercel.app',
  },
  {
    id: 'freshmart',
    title: 'Freshmart Store | Modern Grocery Web App',
    description:
      'A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.',
    tags: ['React', 'Redux', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/freshmart',
    live:   'https://freshmart.vercel.app',
  },
  {
    id: 'github-viewer',
    title: 'GitHub Profile Viewer | Instant GitHub Insights',
    description:
      'An interactive web app to instantly view GitHub profiles with a clean UI built using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub API'],
    github: 'https://github.com/yourusername/github-viewer',
    live:   'https://github-viewer.vercel.app',
  },
]

export const SKILLS = {
  'Frontend': [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vite',
  ],
  'Backend': [
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL',
  ],
  'DevOps & Tools': [
    'Git', 'Docker', 'GitHub Actions', 'Vercel', 'Linux', 'Nginx',
  ],
  'Other': [
    'Firebase', 'Supabase', 'Figma', 'Postman', 'VS Code',
  ],
}

export const EXPERIENCE = [
  {
    id: 'exp-1',
    role: 'Frontend Developer Intern',
    company: 'Company Name',
    period: 'Jun 2024 – Sep 2024',
    location: 'Remote',
    description: [
      'Built and maintained React components for a customer-facing dashboard.',
      'Improved page load time by 30% through code splitting and lazy loading.',
      'Collaborated with design team to implement pixel-perfect UI from Figma.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
]

export const EDUCATION = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Computer Science',
    institution: 'Your University',
    period: '2021 – 2025',
    location: 'City, Country',
    grade: 'CGPA: 8.5 / 10',
    description: 'Focused on software engineering, data structures, and web technologies.',
  },
]
