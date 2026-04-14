import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from'../Navbar/Sidebar'
function Layout({children}) {
  return (
    <div className="min-h-screen bg-bg text-txt-primary font-sans">
  
      <Sidebar/>
      <Navbar/>

      <main className="lg:ml-[10px] pt-[40px] min-h-[calc(100vh-57px)]">
        {children}
        </main>
    </div>
  )
}

export default Layout