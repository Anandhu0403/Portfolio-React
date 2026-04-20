import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from'../Navbar/Sidebar'
function Layout({children}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
  
      <Sidebar/>
      <Navbar/>

      <main className="lg:ml-60 xl:ml-1 pt-10 min-h-[calc(100vh-30px)]">
        {children}  
        </main>
    </div>
  )
}

export default Layout