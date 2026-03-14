import React from 'react'

function Navbar() {
  return (
      <div class="dark overflow-x-hidden">
          <nav class="fixed top-0 w-full z-50 glass-card py-4" data-purpose="main-nav">
              <div class="container mx-auto px-6 flex justify-between items-center">
                  <div class="text-2xl font-bold tracking-tighter text-white">PL<span class="text-primary">.</span></div>
                  <div class="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-gray-300">
                      <a class="hover:text-primary transition-colors" href="#about">About</a>
                      <a class="hover:text-primary transition-colors" href="#skills">Skills</a>
                      <a class="hover:text-primary transition-colors" href="#experience">Experience</a>
                      <a class="hover:text-primary transition-colors" href="#projects">Projects</a>
                      <a class="hover:text-primary transition-colors" href="#contact">Contact</a>
                  </div>
              </div>
          </nav>
      </div>
  )
}

export default Navbar