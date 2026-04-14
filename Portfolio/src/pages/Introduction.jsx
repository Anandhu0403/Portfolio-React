import React from 'react'
import { Button } from '../components/ui/button'
import { PERSONAL } from '../data/portfolio'
function Introduction() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Anandhu</h1>
        <p className="text-lg text-muted-foreground mb-6">
          I'm a passionate software developer with a knack for crafting elegant and efficient solutions. With a strong foundation in JavaScript and experience in React, Node.js, and MongoDB, I thrive on building user-centric applications that make a difference. I enjoy collaborating on open-source projects and continuously learning new technologies to stay at the forefront of the industry.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or sharing my knowledge through blogging and mentoring.
        </p>
        <Button variant="outline" size="lg" asChild>
          <a href={`mailto:${PERSONAL.email}`} target="_blank" rel="noopener noreferrer">
            Get in Touch
          </a>
        </Button> 
    </div>
    </div>
  )
}

export default Introduction