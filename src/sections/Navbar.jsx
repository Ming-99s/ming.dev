import React, { useState, useRef } from 'react'
import ThemeToggle from '../components/ThemeToggle.jsx'
import { Copyright, Menu, X } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navRef = useRef(null)
    const themeRef = useRef(null)
    const copyrightRef = useRef(null)
    const mobileMenuRef = useRef(null)

    const links = [
        { to: '/', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/GetInTouch', label: 'Contact' },
    ]


    useGSAP(() => {
        gsap.from(navRef.current, {
            xPercent: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            delay: 0.5
        })



        gsap.from(themeRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'expo.out',
            delay: 1.8
        })

        gsap.from(copyrightRef.current, {
            opacity: 0,
            y: 10,
            duration: 0.8,
            ease: 'expo.out',
            delay: 2
        })
    }, [])

    useGSAP(() => {
        if (menuOpen && mobileMenuRef.current) {
            gsap.from(mobileMenuRef.current, {
                opacity: 0,
                y: -10,
                duration: 0.4,
                ease: 'expo.out'
            })

            gsap.from(mobileMenuRef.current.querySelectorAll('a'), {
                opacity: 0,
                x: -15,
                duration: 0.4,
                ease: 'expo.out',
                stagger: 0.07,
                delay: 0.1
            })
        }
    }, [menuOpen])

    return (
        <>
            <nav
                ref={navRef}
                className="bg-background w-full max-h-14 fixed lg:fixed lg:max-w-7xl lg:bg-transparent top-0 z-50 py-4 border-b-2 lg:border-b-0"
            >
                <div className="relative container mx-auto px-6 flex items-center justify">

                    {/* Desktop nav */}
                    <div className=" md:flex lg:flex-col lg:h-full lg:justify-evenly items-start gap-4  text-sm font-medium uppercase text-muted">
                        {links.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                
                                className="hidden md:block lg:block relative group duration-200 lg:mt-10 md:mt-0"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 bg-foreground h-[2px] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        {/* Theme toggle */}
                    <div ref={themeRef} className="fixed top-3 right-5 z-50 lg:relative lg:pl-5 lg:mt-10">
                        <ThemeToggle />
                    </div>
                    </div>






                    {/* Mobile menu button */}
                    <div className=" md:hidden ">
                        <button
                            onClick={() => setMenuOpen(o => !o)}
                            className="text-foreground"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                    </div>

                </div>
            </nav>





            {/* Copyright */}
            <div
                ref={copyrightRef}
                className="fixed bottom-5 left-5 hidden lg:flex items-center text-xs"
            >
                <Copyright size={20} />
                <span className="ml-1">Pheng Lyming</span>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="fixed z-50 md:hidden top-14 w-full px-6 pt-4 pb-6 flex flex-col gap-4 text-sm font-medium uppercase tracking-widest text-muted bg-card border-t border-border"
                >
                    {links.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-primary transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}

                    <div className="text-xs mt-1">
                        <div className="flex items-center">
                            <Copyright size={20} />
                            <span>Pheng Lyming</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar