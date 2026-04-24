
import { SiReact, SiJavascript, SiDocker, SiPython, SiTailwindcss, SiHtml5,SiDjango,SiBootstrap, SiGit, SiGithub, SiPostman, SiCss, SiMysql } from "react-icons/si";
export const SECTIONS = [
  { id: 'introduction', label: 'Introduction', path: '/' },
  { id: 'about',        label: 'About Me',     path: '/about' },
  { id: 'projects',     label: 'Projects',     path: '/projects' },
  { id: 'skills',       label: 'Skills & Tools', path: '/skills' },
  { id: 'experience',   label: 'Experience',   path: '/experience' },
  { id: 'education',    label: 'Education',    path: '/education' },
  { id: 'certifications', label: 'Certifications', path: '/certifications' },
  // { id: 'contact',      label: 'Contact',      path: '/contact' },
  // { id: 'stats',        label: 'Stats',        path: '/stats' },
  
]

export const PERSONAL = {
  name:       'Anandhu S',
  title:      'Full Stack Developer',
  tagline:    'A coder by day, problem-solver by night!',
  bio:        `I enjoy coding and building software that solves real problems. I have experience working with Python, Django, PHP, React, and .NET Web API, and I’m genuinely interested in creating applications that are practical, scalable, and useful. I’m always looking to improve my skills and learn better ways to build software.`,
  email:      'anandhu0403@gmail.com',
  github:     'Anandhu0403',
  whatsapp:   'https://wa.me/+918590071731',
  instagram:  'https://www.instagram.com/anandhu0403/',
  linkedin:   'https://www.linkedin.com/in/anandhu-s-a572791bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  resumeUrl:  'resume/Anandhu_S_Resume.pdf',
  location:   'Kochi, Kerala, India',
  image:      'images/Profile.jpg',
  about: `My journey with computer science started long before college. Ever since I was young, I was fascinated by how technology works, and how simple lines of code could turn ideas into real, working solutions. That curiosity slowly grew into a genuine passion for building software and solving problems through programming.

During my B.Tech in Computer Science Engineering, I had the opportunity to deepen that passion and strengthen my technical foundation. Through academic projects, hands-on development, and continuous learning, I explored different areas of software development and gained practical experience in building real applications.

As I progressed, I focused on full stack development, working with technologies like Django, React, SQL, and modern web development practices. I learned how to create responsive frontend interfaces, scalable backends, and connect everything into complete, functional applications.

My professional journey began as a Software Trainer, where I guided students in programming concepts and development practices. Teaching helped me sharpen both my technical understanding and communication skills, while also giving me the satisfaction of helping others grow in their careers.

Today, I work as a Software Developer, building and maintaining .NET applications and contributing to real business solutions through software. This role has expanded my experience in enterprise application development, API integration, database management, and production-level problem solving.

My core specialization includes Django, .NET, PHP, SQL, and React, with a strong focus on developing efficient, scalable, and user-focused applications. I enjoy turning complex requirements into practical solutions and continuously improving my skills as technology evolves.`
// hobbies: [
//     'Web Development and Programming',
//     'Reading Tech Blogs and Documentation',
//     '',
}

export const PROJECTS = [
  {
    id: 'Electro',
    title: 'Electro | Electronics E commerce Store',
    image:'projectimage/ElectroHome.jpg',
    description:
      'Ecommerce website for electronics built with Django, HTML, and Bootstrap CSS, featuring a clean design and responsive layout. Integrated Razorpay API for secure and seamless payment processing, providing users with a smooth shopping experience.',
    tags: ['Django', 'Bootstrap CSS', 'HTML', 'CSS','Razorpay API'],
    github: 'https://github.com/Anandhu0403/Electro',
    live:   'https://anandhu0403.pythonanywhere.com/',
  },
  {
    id: 'SocialHub',
    title: 'SocialHub | Instagram Inspired Social Media App',
    image:'projectimage/Login.png',
    description:
      'A social media platform inspired by Instagram, built with Django, HTML, and Bootstrap CSS. It allows users to create profiles, share posts, follow others, and engage with content with a responsive interface.',
    tags: ['Django', 'Bootstrap CSS', 'HTML', 'CSS'],
    github: 'https://github.com/Anandhu0403/DjangoProjects/tree/master/Instaclone/instaclone',
    live:   'http://anandhu200204.pythonanywhere.com/',
  },
  {
    id: 'E-Hospitality',
    title: 'E-Hospitality | Online Doctor Booking Platform',
    image:'projectimage/HospitalityHome.png',

    description:
      'A web application for booking doctor appointments online, built with Django and Bootstrap CSS.',
    tags: ['Django', 'Bootstrap CSS', 'HTML', 'CSS'],
    github: 'https://github.com/Anandhu0403/E_Hospitality',
  },
 
 
]

export const SKILLS = [
    {name:"Python" , icon:SiPython},{name:"React" , icon:SiReact},{name:"JavaScript" , icon:SiJavascript},{name:"Tailwind CSS" , icon:SiTailwindcss},
    {name:"HTML", icon:SiHtml5},{name:"CSS", icon:SiCss},{name:"Bootstrap CSS", icon:SiBootstrap},{name:"Django", icon:SiDjango},{name:"Git",icon:SiGit},{name:"Github",icon:SiGithub},{name:"PostMan",icon:SiPostman},{name:"MySQL",icon:SiMysql},{name:"VS Code"}
]

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
    tags: ['.NET WinForms','.NET Web API', 'SQL Server', 'Software Development', 'Team Collaboration'],
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
  },
  {
    id: 'cert-6',
    title:'Introduction to Generative AI',
    issuer:'Coursera',
    date:'Issued April 2026',
    description:'An introduction to generative AI concepts and applications.',
    tags: ['Generative AI', 'Coursera'],
    link:'certifications/GenerativeAI.pdf',
  },
  {
    id: 'cert-7',
    title:'Introduction to Claude',
    issuer:'Anthropic',
    date:'Issued April 2026',
    description:'An introduction to Claude, an AI assistant developed by Anthropic, covering its features, capabilities, and applications.',
    tags: ['Claude', 'Anthropic'],
    link:'certifications/claude101.pdf', 
  },
  {
    id: 'cert-8',
    title:'Introduction to Claude Code', 
    issuer:'Anthropic',
    date:'Issued April 2026',
    description:'An introduction to Claude Code, a Ai Assistant in terminal designed for AI development by Anthropic, covering its features and applications.',
    tags: ['Claude Code', 'Anthropic'],
    link:'certifications/claudecode.pdf',
  }
]