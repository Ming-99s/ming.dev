import React, { useState } from 'react'
import ThemeToggle from '../components/ThemeToggle.jsx'
import { Copyright, Menu, X, } from 'lucide-react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ]


    return (
        <nav
            className="bg-background w-full  fixed lg:fixed lg:max-w-7xl lg:bg-transparent  top-0   z-50 pt-4"
            data-purpose="main-nav"
        >
            <div className="container mx-auto px-6 flex-col items-center ">


                {/* Desktop nav */}


                    <div className="hidden md:flex lg:flex-col lg:h-full lg:justify-evenly items-start space-x-8 lg:space-x-0 text-sm font-medium uppercase tracking-widest text-muted">
                        
                        {links.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="hover:text-primary transition-colors duration-200 mt-10"
                            >
                                {label}
                            </a>
                        ))}

                    </div>
                    <div className='fixed right-5 -mt-1 lg:mt-10 '>

                        <ThemeToggle/>
                </div>
                
                <div className='hidden lg:fixed bottom-5'>   
                    <div className='flex items-center'>

                        <Copyright size={20} className='inline' />
                        <span>Pheng Lyming</span>
                    </div>

                </div>




                {/* Mobile: toggle + hamburger */}
                <div className="flex md:hidden  gap-4">
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        className="text-foreground"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden px-6 pt-4 pb-6 flex flex-col gap-4 text-sm font-medium uppercase tracking-widest text-muted bg-card border-t border-border">
                    {links.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-primary transition-colors duration-200"
                        >
                            {label}
                        </a>
                    ))}
                    <div className='text-xs lg:fixed bottom-5 text-fr'>
                        <div className='flex items-center'>

                            <Copyright size={20} className='inline' />
                            <span>Pheng Lyming</span>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
