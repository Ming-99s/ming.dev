import React from 'react'

const SecondSection = () => {
  return (
      <section className="py-24 px-6 min-h-screen" data-purpose="skills-section" id="skills">
          <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 flex items-center justify-center md:justify-start">
                  <span className="text-primary mr-4 font-mono">02.</span> Tech Stack
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <div className="text-primary mb-3 transform group-hover:scale-110 transition-transform">
                          <svg className="w-10 h-10" fill="currentColor" viewbox="0 0 24 24"><path d="M14.33 10l-2.83-2.83L14.33 4.34l2.83 2.83-2.83 2.83zM6.59 8.17l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83zM14.33 21.66l-2.83-2.83 2.83-2.83 2.83 2.83-2.83 2.83zM18.83 14.34l-2.83-2.83 2.83-2.83 2.83 2.83-2.83 2.83z"></path></svg>
                      </div>
                      <span className="font-bold text-sm">Flutter</span>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <span className="text-primary text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">JS</span>
                      <span className="font-bold text-sm">JavaScript</span>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <span className="text-primary text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">R</span>
                      <span className="font-bold text-sm">React</span>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <span className="text-primary text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">N</span>
                      <span className="font-bold text-sm">Node.js</span>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <span className="text-primary text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">G</span>
                      <span className="font-bold text-sm">Git</span>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <span className="text-primary text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">Ps</span>
                      <span className="font-bold text-sm">Photoshop</span>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <span className="text-primary text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">Ai</span>
                      <span className="font-bold text-sm">Illustrator</span>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center justify-center rounded-custom hover:border-primary transition-all group">
                      <span className="text-primary text-2xl font-bold mb-3 group-hover:scale-110 transition-transform">Ae</span>
                      <span className="font-bold text-sm">After Effects</span>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default SecondSection