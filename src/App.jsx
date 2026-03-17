import { Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import ScrollToTop from './components/scrollTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    
    </>
  )
}

export default App

