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
function Education() {
  return (
     <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Education</h1>
       <div className="flex flex-col gap-4">
        {EDUCATION.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </div>
  )
}

          

export default Education