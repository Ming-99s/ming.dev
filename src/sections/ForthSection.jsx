import React from 'react'

const ForthSection = () => {
  return (
      <section className="py-24 px-6" data-purpose="projects-section" id="projects">
          <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-16 flex items-center">
                  <span className="text-primary mr-4 font-mono">04.</span> Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="glass-card rounded-custom overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                      <div className="h-48 bg-primary/20 overflow-hidden">
                          <img alt="Car Sale Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTbBOWzhcrTZ328yL4hxNtQm05dG0T4aq0bXgDMqqQ1fYCfwpfUY78U6I2G-6jbE0HhsH-OrYz679KvkJuk0yQq4Lvc4ZQ5pkbILX-_4Ybi98LPgV0dYeLkSSlrONIjBBqFjQvGA_Sbt2e4e54MCv-MCXYqNSxBWBwL379HCUXZs0LXu9K6eV20wX_RfAcryHeD_jD_snml_3ei4yzTqRbRN3joS2txFnYUNaAi0oxtHXpet3yZt7WpUZ5UcsQ2wYCT9YxZ6kRQtVX" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Car Sale Website</h3>
                          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                              A comprehensive marketplace platform for buying and selling vehicles with advanced filtering and dynamic inventory management.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">React</span>
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Node.js</span>
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Tailwind</span>
                          </div>
                      </div>
                  </div>
                  <div className="glass-card rounded-custom overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                      <div className="h-48 bg-primary/20 overflow-hidden">
                          <img alt="Habit Tracker Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqkgVIrQvOyee9i5yxX1XGutBBVGowU7e_mfaeGwRHAMXD0lY96vNQ0aN-t59jL0DOKuirzQ3s7BxHzAIrrchjNV-dY_c9JYbeL_T30_C_trxzHKrL-7_QpzQuPpIdR1-D14q5p6sNz6O_n34EqZ7YmIMQ5vAeWhh8hWcKTxEoa29YWJHui2o02pLqGHIp6p_-N9TVaQm5Y2fU51Qv0rBreG_xhpBBWgy6mAIy5529reKDeDXDQe-nV8gfrQ2nBeNuFJIfz97CBuGY" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Habit Tracker App</h3>
                          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                              A personal productivity tool designed to help users build and maintain long-term habits with data visualization and streaks.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Flutter</span>
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Firebase</span>
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">UI/UX</span>
                          </div>
                      </div>
                  </div>
                  <div className="glass-card rounded-custom overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                      <div className="h-48 bg-primary/20 overflow-hidden">
                          <img alt="Rental App Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAov-8NY6KAb7-bzEjgnmETqwmNV5U7Xz5lRSVqSmNYNIsftBuUq3pu_FbZ2_J1ZtoDwZvirdZNEvoYTpEJfvn0zxrWlj-e_YHUfnKuLXoWbMDZgG0WPFWL3ZkBVq2cxC5JpTQvDY_dwBDHQdt18JeI6CyyhpPxSg3cn_ewQ7oIAxd733k9xgXt2qEq-7ShpvPMe42Zc_O96C6nDR3WSqwShWDPgEWsb3NNfUDa_LKUktGHUbcfp9z_PEPKf4g_vsKI6g8Dh_yxjZ2Q" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Zoneer Rental App</h3>
                          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                              A rental solution for real estate, featuring interactive maps, booking management, and secure payment integrations.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Flutter</span>
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Rest API</span>
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Provider</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default ForthSection