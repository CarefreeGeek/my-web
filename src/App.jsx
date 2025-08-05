import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './Components/Navbar'
import Join from './pages/Join'
import Footer from './Components/Footer'
import ProjectPage from './pages/ProjectPage'
import Contact from './pages/Contact'


function App() {
  return (
    < >
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/projectpage" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1 className='flex justify-center mt-48 font-extrabold text-7xl'>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
