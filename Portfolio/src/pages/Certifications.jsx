import React from 'react'
import { CERTIFICATIONS } from '../data/portfolio'
import CertificationCard from '../components/ui/CertificationCard'
import { GrCertificate } from 'react-icons/gr'
function Certifications() {
  return (
    <div>
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4 flex gap-1.5"><GrCertificate /> Certifications</h1>
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