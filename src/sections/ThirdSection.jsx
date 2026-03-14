import React from 'react'

const ThirdSection = () => {
  return (
      <section className="py-24 px-6 bg-surface" data-purpose="experience-section" id="experience">
          <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-16 flex items-center">
                  <span className="text-primary mr-4 font-mono">03.</span> Experience
              </h2>
              <div className="relative border-l-2 border-primary/30 ml-3">
                  <div className="mb-12 ml-8 relative">
                      <div className="timeline-dot"></div>
                      <span className="text-sm font-mono text-primary mb-2 block uppercase tracking-wider italic">Present</span>
                      <h3 className="text-2xl font-bold text-white mb-1">Mobile Developer Intern</h3>
                      <h4 className="text-lg text-primary mb-4 font-medium">BookMeBus</h4>
                      <ul className="text-gray-400 list-disc list-inside space-y-2 leading-relaxed">
                          <li>Contributing to the development of mobile ticketing systems.</li>
                          <li>Collaborating with senior developers to implement new features in Flutter.</li>
                          <li>Optimizing app performance and fixing critical UI bugs.</li>
                      </ul>
                  </div>
                  <div className="mb-12 ml-8 relative">
                      <div className="timeline-dot"></div>
                      <span className="text-sm font-mono text-primary mb-2 block uppercase tracking-wider italic">2022 - 2023</span>
                      <h3 className="text-2xl font-bold text-white mb-1">Graphic Designer &amp; Media Member</h3>
                      <h4 className="text-lg text-primary mb-4 font-medium">CSA Media Team</h4>
                      <ul className="text-gray-400 list-disc list-inside space-y-2 leading-relaxed">
                          <li>Designed digital assets for university events and social media campaigns.</li>
                          <li>Managed video production and motion graphics using After Effects.</li>
                          <li>Maintained consistent branding across all digital platforms.</li>
                      </ul>
                  </div>
                  <div className="ml-8 relative">
                      <div className="timeline-dot"></div>
                      <span className="text-sm font-mono text-primary mb-2 block uppercase tracking-wider italic">2021 - 2022</span>
                      <h3 className="text-2xl font-bold text-white mb-1">Marketing Assistant</h3>
                      <h4 className="text-lg text-primary mb-4 font-medium">ITC Marketing</h4>
                      <ul className="text-gray-400 list-disc list-inside space-y-2 leading-relaxed">
                          <li>Supported market research and campaign analysis.</li>
                          <li>Coordinated promotional activities for student outreach.</li>
                          <li>Drafted visual content for internal communications.</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default ThirdSection