import React from 'react'
import { CERTIFICATIONS } from '../data/portfolio'
import CertificationCard from '../components/ui/CertificationCard'
import { GrCertificate } from 'react-icons/gr'
function Certifications() {
  return (
    <div>
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className=" mb-4 flex gap-1.5 font-poppins text-4xl md:text-5xl font-bold 
             dark:bg-gradient-to-r
    dark:from-slate-300
    dark:to-slate-500
    dark:bg-clip-text
    dark:text-transparent
            bg-clip-text 
             p-5"><GrCertificate className='dark:text-gray-300' /> Certifications</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CERTIFICATIONS.map((cert) => (
                      <CertificationCard key={cert.id} cert={cert} />
                    ))}
                  </div>
          </div>
    </div>
  )
}

export default Certifications