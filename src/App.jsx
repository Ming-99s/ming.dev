import { Routes, Route } from 'react-router-dom'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import ScrollToTop from './components/scrollTop.jsx'
import GetInTouch from './sections/GetInTouch.jsx'
function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />

      </Routes>
    
    </>
  )
}

export default App

