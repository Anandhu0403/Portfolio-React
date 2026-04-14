import React from 'react'
import { Button } from "@/components/ui/button"
import { Flag } from "lucide-react"
function PageNotFound() {
  return (
    <div>
       <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
          <Flag className="w-20 h-20 mx-auto" />
          <p
            variant="h1"
            color="blue-gray"
            className="mt-10 text-3xl! leading-snug! md:text-4xl! pb-10"
          >
            Error 404 <br /> It looks like page wasn't found.
          </p>
         
          <Button color="gray" className=" w-full px-4 md:w-[8rem]">
            <a href="/" className="">
              Go Home
            </a>
    
        
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound