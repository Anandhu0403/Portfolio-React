import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Introduction from "./pages/Introduction"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Certifications from "./pages/Certifications"
import PageNotFound from "./pages/PageNotFound"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react'
function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Layout>
    <Routes>
    
        <Route path="/" element={<Introduction />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
         <Route path="*" element={<PageNotFound />} /> 
      
    </Routes>
    </Layout>
    </ThemeProvider>
    <Analytics />
    </>
  )
}

export default App