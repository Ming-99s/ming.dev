import React from 'react'

const FirstSection = () => {
  return (
      <section className="mt-5 px-5 lg:mt-20 lg:mr-20" data-purpose="about-section" id="about">
          <div className="container ">
              <div className="">
                  <div className="order-2 md:order-1">
                      <h2 className="text-3xl font-light mb-2 flex items-center">
                         About Me
                      </h2>
                      <hr className='mb-8 border-t-1 border-gray-400'></hr>
                      <div className="text-gray-400 space-y-4 text-sm">
                          <p>
                              Hello! I'm Lyming, a dedicated Computer Science student at the Cambodia Academy of Digital Technology (CADT). My journey in tech is fueled by a profound interest in how users interact with digital platforms.
                          </p>
                          <p>
                              I specialize in <span className="text-foreground">Mobile Development</span> and <span className="text-foreground">Frontend Web Technologies</span>, but my creative side keeps me deeply rooted in UI/UX and Graphic Design. I believe that a great application should not only function flawlessly but also inspire through its visual language.
                          </p>
                          <p>
                              Whether it's architecting a mobile app in Flutter or crafting pixel-perfect interfaces in React, I strive for clean code and intuitive design.
                          </p>
                      </div>
                  </div>
                 
              </div>
          </div>
      </section>
  )
}

export default FirstSection