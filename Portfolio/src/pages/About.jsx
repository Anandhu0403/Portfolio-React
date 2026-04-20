import { PERSONAL } from '@/data/portfolio'
import React from 'react'

function About() {
  const blockImageActions = (event) => {
    event.preventDefault()
  }

  return (
    <div>
       <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="mb-6">
              <img
                src="images/Profile.jpg"
                alt="Profile"
                onContextMenu={blockImageActions}
                onDragStart={blockImageActions}
                draggable={false}
                className="mx-auto mb-4 h-70 w-70 rounded-3xl object-cover transition-transform duration-300 ease-out hover:scale-105 sm:h-52 sm:w-52 md:float-left md:mx-0 md:mr-6 md:mb-3 md:h-70 md:w-70"
              />
              <p className="text-lg text-muted-foreground mb-4 whitespace-pre-line">
                {PERSONAL.about}
              </p>
              <div className="clear-both" />
            </div>
            {/* <div>
              <h2 className="text-2xl font-semibold mb-3">Hobbies & Interests</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground">
                {PERSONAL.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div> */}
       </div>
    </div>
  )
}

export default About