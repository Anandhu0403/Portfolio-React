import React from 'react'
//import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Timeline,
  TimelineBody,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EDUCATION } from '../data/portfolio'
import EducationCard from '../components/ui/EducationCard'
import { FaUserGraduate } from 'react-icons/fa'
function Education() {
  return (
     <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className=" mb-4 flex gap-1.5 font-poppins text-4xl md:text-5xl font-bold
        dark:bg-gradient-to-r
    dark:from-slate-300
    dark:to-slate-500
    dark:bg-clip-text
    dark:text-transparent
            bg-clip-text 
             p-5"><FaUserGraduate className='dark:text-gray-300'/>Education</h1>
       <div className="flex flex-col gap-4">
        {EDUCATION.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </div>
  )
}

          

export default Education