import React from 'react'

const GetInTouch = () => {
  return (
      <section className="py-32 px-6" data-purpose="contact-section" id="contact">
          <div className="container mx-auto text-center max-w-2xl">
              <h2 className="text-primary font-mono mb-4 tracking-widest uppercase">05. What's Next?</h2>
              <h1 className="text-5xl font-bold mb-8">Get In Touch</h1>
              <p className="text-gray-400 text-lg mb-12">
              </p>
              <div className="glass-card p-8 rounded-custom mb-8 space-y-6">
                  <div className="flex items-center justify-center space-x-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                      <a className="text-xl font-medium hover:text-primary transition-colors" href="mailto:Lyming4999@gmail.com">Lyming4999@gmail.com</a>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                      <span className="text-xl font-medium">+855 (Contact Info)</span>
                  </div>
              </div>
              <a className="inline-block px-10 py-5 border-2 border-primary text-primary font-bold text-lg rounded-custom hover:bg-primary/10 transition-all" href="mailto:Lyming4999@gmail.com">
                  Say Hello
              </a>
          </div>
      </section>
  )
}

export default GetInTouch