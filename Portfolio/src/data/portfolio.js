
export const SECTIONS = [
  { id: 'introduction', label: 'Introduction', path: '/' },
  { id: 'about',        label: 'About Me',     path: '/about' },
  { id: 'projects',     label: 'Projects',     path: '/projects' },
  { id: 'skills',       label: 'Skills & Tools', path: '/skills' },
  { id: 'experience',   label: 'Experience',   path: '/experience' },
  { id: 'education',    label: 'Education',    path: '/education' },
  { id: 'certifications', label: 'Certifications', path: '/certifications' },
  { id: 'contact',      label: 'Contact',      path: '/contact' },
  // { id: 'stats',        label: 'Stats',        path: '/stats' },
  
]

export const PERSONAL = {
  name:       'Anandhu S',
  title:      'Full Stack Developer',
  tagline:    'A coder by day, problem-solver by night!',
  bio:        `I enjoy coding and building software that solves real problems. I have experience working with Python, Django, PHP, React, and .NET Web API, and I’m genuinely interested in creating applications that are practical, scalable, and useful. I’m always looking to improve my skills and learn better ways to build software.`,
  email:      'anandhu0403@gmail.com',
  github:     'Anandhu0403',
  whatsapp:   'https://wa.me/8590071731',
  linkedin:   'https://www.linkedin.com/in/anandhu-s-a572791bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  resumeUrl:  'resume/Anandhu_S_Resume.pdf',
  location:   'Kochi, Kerala, India',
}

export const PROJECTS = [
  {
    id: 'nike-redesign',
    title: 'Nike Reimagined | Modern Redesign Concept',
    description:
      'A sleek and modern redesign of Nike\'s official web experience built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Anandhu0403/nike-redesign',
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
  'Other': [
    'Firebase', 'Supabase', 'Figma', 'Postman', 'VS Code',
  ],
}

export const EXPERIENCE = [
  {
    id: 'exp-3',
    role:'Junior Software Developer',
    company:'Nas Info Solutions',
    period:'November 2025 – Present',
    location:'Koratty,Infopark,Kerala, India',
    type:'Full-time',
    description:[
      'Currently working as a Junior Developer contributing to the development of a custom ERP system built with .NET WinForms and SQL Server. ',
      'Collaborating with cross-functional teams to design and implement new features, optimize performance, and ensure the delivery of high-quality software solutions.',
    ],
  },
  {
    id: 'exp-2',
    role:'Software Trainer',
    company: 'Progressive Cybernetics',
    period: 'February 2025 – November 2025',
    location: 'Muvattupuzha, India',
    type: 'Full-time',
    description: [
      'Worked as a Software Trainer, mentoring students in developing their academic software projects using PHP and Django.',
      'Provided hands-on support in building functional web applications, helping students understand core programming concepts, web development workflows, and best practices in software development.',
     
    ],
    tags: ['PHP', 'Django', 'Mentorship', 'Training','Bootstrap CSS'],
  },
  {
    id: 'exp-1',
    role: 'Full Stack Developer Intern',
    company: 'Luminar TechnoLab',
    period: 'July 2024 – February 2025',
    location: 'Kakkanad, India',
    type: 'Internship',
    description: [
      'Completed a course on Full Stack Web Development where I built and deployed web applications using Django, React, and Git.',
      'The program focused on designing backend APIs with Django, creating responsive user interfaces with React, managing version control using Git, and deploying applications to the web using PythonAnywhere',
      'Through this course, I gained practical experience in building complete end-to-end web applications, integrating frontend and backend systems, and deploying production-ready projects.',
    ],
    tags: ['React', 'Django', 'Bootstrap CSS', 'Git', 'PythonAnywhere'],
  },
 
]

export const EDUCATION = [
  {
    id: 'edu-1',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Viswajyothi College of Engineering and Technology, Vazhakulam',
    period: '2020 – 2024',
    location: 'Vazhakulam, India',
    grade: '7.22 / 10',
    description: 'During my time at VJCET, I have built a strong foundation in computer science, focusing on software development, problem-solving, and real world applications. Engaging in hands-on projects has helped me enhance my technical and analytical skills.',
    Subjects: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Software Engineering',
      'Web Development',
    ],
    image:'images/viswajyothi.jpg',

    
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Education',
    institution: 'Nirmala Public  School, Muvattupuzha',
    period: '2018 – 2020',
    location: 'Muvattupuzha, India',
    grade: '79.6%',
    description: 'Completed my Higher Secondary Education with a strong focus on science and mathematics, developing a solid academic foundation for my engineering studies.',
    Subjects: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology'
    ],
    image:'images/nirmala.jpg',
  }
]
export const CERTIFICATIONS = [
  {
    id: 'cert-1',
    title:'Fundamentals of Agents',
    issuer:'Hugging Face',
    date:'Issued Feb 2026',
    description:'Fundamentals of Agents is a comprehensive course offered by Hugging Face that provides an in-depth understanding of artificial intelligence agents, covering their design, implementation, and applications across various domains.',
    tags: ['AI', 'Agents', 'Hugging Face'], 
    link:'certifications/huggingface.pdf',
  },
  {
    id: 'cert-2',
    title:'Generative AI: Prompt Engineering Basics',
    issuer:'Coursera',
    date:'Issued April 2026',
    description:'Learn the fundamentals of prompt engineering for generative AI applications.',
    tags: ['AI', 'Prompt Engineering', 'Coursera'],
    link:'certifications/Coursera-DP11E0T2ICN1.pdf',
  },
  {
    id: 'cert-3',
    title:'Programming for Everybody (Getting Started with Python)',
    issuer:'Coursera',
    date:'Issued January 2021',
    description:'A comprehensive introduction to the fundamentals of Python programming.',
    tags: ['Python', 'Programming', 'Coursera'],
    link:'certifications/Coursera-EA7WJURH78B3.pdf',
  },
  {
    id: 'cert-4',
    title:'Introduction to Artificial Intelligence (AI)',
    issuer:'Coursera',
    date:'Issued March 2026',
    description:'An introduction to the field of artificial intelligence and its applications.',
    tags: ['AI', 'Artificial Intelligence', 'Coursera'],
    link:'certifications/Coursera-GCSKNVQ4F21U.pdf',
  },
  {
    id: 'cert-5',
    title:'Introduction to Software Engineering',
    issuer:'Coursera',
    date:'Issued May 2026',
    description:'An introduction to the principles and practices of software engineering.',
    tags: ['Software Engineering', 'Coursera','SDLC'],
    link:'certifications/Coursera-GKTVJZDQ5J51.pdf',
  }

]