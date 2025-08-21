import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './Components/Navbar'
import Join from './pages/Join'
import Footer from './Components/Footer.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import Contact from './pages/Contact.jsx'
import CommunityPage from './pages/Community.jsx'
import Login from './Components/auth/Login.jsx'
import Signup from './Components/auth/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Success from './pages/Success.jsx'
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<h1 className='flex justify-center mt-48 font-extrabold text-7xl'>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
