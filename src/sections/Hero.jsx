import React from 'react'
import Navbar from './Navbar.jsx'
import Image from '../assets/Myimage.png'
const words = [
    { text: 'Mobile Developer', },
    { text: 'Frontend Developer' },
    { text: 'Graphic Designer' }
];
function Hero() {

    return (
        <div>



            <Navbar />

            <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden" data-purpose="hero-section" id="hero">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="container mx-auto">
                    <div className='flex flex-col md:flex lg:flex'>
                        <div className="max-w-3xl ">
                            <h2 className="text-primary font-mono mb-4 text-lg tracking-widest ">Hi, my name is</h2>
                            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">Pheng Lyming<span className="text-primary">.</span></h1>
                            <h3 className="text-3xl md:text-5xl font-bold text-gray-400 mb-2">
                                <span>I am a </span>
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text}> {word.text}</span>
                                        ))}
                                    </span>

                                </span>

                            </h3>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
                                A Computer Science student at CADT with a passion for building exceptional digital experiences that bridge the gap between aesthetics and functionality.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a className="px-8 py-4 bg-primary text-white font-bold rounded-custom hover:bg-opacity-90 transition-all transform hover:-translate-y-1" href="#projects">
                                    View Projects
                                </a>
                                <a className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-custom hover:bg-primary/10 transition-all transform hover:-translate-y-1" href="#contact">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                        <div className='absolute top-32 max-w-40 right-5 md:relative md:max-w-xl md:bottom-96 lg:absolute lg:bottom-0 lg:top-auto lg:max-w-2xl'>
                            <div className='relative'>
                                <img src={Image} alt="" />

                                <span className='w-[70%] h-[1px] bg-primary absolute bottom-0 -right-2 md:hidden'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-surface" data-purpose="about-section" id="about">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold mb-8 flex items-center">
                                <span className="text-primary mr-4 font-mono">01.</span> About Me
                            </h2>
                            <div className="text-gray-400 space-y-4 text-lg">
                                <p>
                                    Hello! I'm Lyming, a dedicated Computer Science student at the Cambodia Academy of Digital Technology (CADT). My journey in tech is fueled by a profound interest in how users interact with digital platforms.
                                </p>
                                <p>
                                    I specialize in <span className="text-white">Mobile Development</span> and <span className="text-white">Frontend Web Technologies</span>, but my creative side keeps me deeply rooted in UI/UX and Graphic Design. I believe that a great application should not only function flawlessly but also inspire through its visual language.
                                </p>
                                <p>
                                    Whether it's architecting a mobile app in Flutter or crafting pixel-perfect interfaces in React, I strive for clean code and intuitive design.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative group">
                                <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-primary rounded-custom absolute top-4 left-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                <img alt="Pheng Lyming" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-custom grayscale hover:grayscale-0 transition-all duration-500 bg-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEJ7x_skNuRG5lcE6lVWfFSYiIjvnjMGgfA7uvLnPvJO38yNtdzZei2AWfxbZ7e9eep3qtplSnv1U5j1iKDMuLtSuognb3E9Ie18No-VzG0rKi09avsL4VgVHTj8P8T3DHxKSHp_4bxtnC6XUaMpm7C45wVMrMHRhWKmmsBuvGzcVt1VWTgUOUvGHSZ52PV9A_z4-SuVzRizkmPqGrZey84OMl2SGCaF4bdGFCv-Sc5Ux0oYZVaBnxpb21zB0zg5AMyUw4UCRx2D32" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-6" data-purpose="skills-section" id="skills">
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
            <footer className="py-10 text-center border-t border-white/5" data-purpose="footer">
                <div className="container mx-auto px-6">
                    <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
                        Designed &amp; Built by Pheng Lyming © 2023
                    </p>
                </div>
            </footer>




        </div>

    )
}

export default Hero
