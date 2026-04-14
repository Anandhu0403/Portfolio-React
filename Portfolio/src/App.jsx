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
function App() {
  return (
    <>
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
      
    </Routes>
    </Layout>
    </>
  )
}

export default App