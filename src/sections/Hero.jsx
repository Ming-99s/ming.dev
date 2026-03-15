import React, { useRef } from 'react'
import Navbar from './Navbar.jsx'
import Image from '../assets/Myimage2.png'
import SecondSection from './SecondSection.jsx'
import ForthSection from './ForthSection.jsx';
import GetInTouch from './GetInTouch.jsx';
import Footer from './Footer.jsx'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { FaGithub, FaSquareFacebook, FaSquareInstagram, FaLinkedin } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const words = [
    { text: 'Mobile Developer' },
    { text: 'Frontend Developer' },
    { text: 'Graphic Designer' }
];

function Hero() {
    const imageRef = useRef(null);
    const containerRef = useRef(null)
    useGSAP(() => {
        const hereoSlipt = new SplitType('.title', { type: 'chars' });
        const icon = containerRef.current.querySelectorAll(".icon")
        const paragraphSlipt = document.querySelectorAll(".subtitle");



        gsap.from(hereoSlipt.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            opacity:0,
            delay:1
        })

        gsap.from(paragraphSlipt, {
            opacity: 0,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay:1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 100%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        })

        gsap.from(imageRef.current, {
            opacity: 0,
            x: 100,
            duration: 1.5,
            ease: 'expo.out',
            delay:1
        })

        gsap.from(icon, {
            opacity: 0,
            x: -50,
            duration: 1.2,
            ease: 'expo.Out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end:'bottom 20%',
                toggleActions: 'play none none none'
            }
            
        })

        
        


    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-background text-foreground transition-colors duration-300 lg:pl-40 ">

                <section

                    className="min-h-screen flex pt-28 relative overflow-hidden font-sans"
                    data-purpose="hero-section"
                    id="hero"
                >


                    {/* Ambient glow — adapts to theme */}
                    <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />

                    <div className="container mx-auto lg:pl-5 ">
                        <div className="flex flex-col-reverse md:flex lg:flex">
                            <div className="max-w-3xl flex-col items-center">
                                <div className='flex flex-col justify-center items-center lg:items-start'>
                                    
                                    <h1 className="title text-3xl md:text-7xl font-extralight uppercase mb-1 tracking-tight text-foreground">
                                        Pheng Lyming
                                    </h1>
                                    <h3 className=" text-xl md:text-2xl ml-2 font text-muted mb-2">
                                        <span className="slide">
                                            <span className="title wrapper text-center lg:text-start">
                                                {words.map((word) => {
                                                    const Icon = word.icon;
                                                    return (
                                                        <span key={word.text} className="flex items-center">
                                                            {word.text}
                                                        </span>
                                                    );
                                                })}
                                            </span>
                                        </span>
                                    </h3>
                                </div>
                                {/* <p className="text-sm text-muted mb-10 leading-relaxed max-w-lg">
                                        A Computer Science student at CADT with a passion for building exceptional digital experiences
                                        that bridge the gap between aesthetics and functionality.
                                    </p> */}
                                
                                <section className="mt-5 px-5 lg:px-0 lg:mt-20 lg:mr-20" data-purpose="about-section" id="about">
                                    <div className="container ">
                                        <div className="">
                                            <div className="subtitle">
                                                <h2 className="text-xl lg:text-2xl font-light mb-2 text-center w-full lg:text-start uppercase">
                                                    About Me
                                                </h2>
                                                <hr className='mb-8 border-t-1 border-gray-400'></hr>
                                                <div className="text-gray-400 space-y-4 text-sm ">
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
                                            <div ref={containerRef} className='relative flex flex-row justify-between px-2 gap-4 w-full items-center pt-10 lg:justify-end lg:gap-8'>
                                                <a href='#' className='icon'> <FaGithub size={32} className="text-foreground" /></a>
                                                <a href='#' className='icon'><FaSquareFacebook size={32} className="text-foreground" /></a>
                                                <a href='#' className='icon'><FaSquareInstagram size={32} className="text-foreground" /></a>
                                                <a href='#' className='icon'><FaLinkedin size={32} className="text-foreground" /></a>
                                                <a href='#' className='icon'><SiGmail size={32} className="text-foreground" /></a>
                                                
                                                
                                                
                                                
                                                

                                            </div>

                                        </div>
                                    </div>
                                </section>

                            </div>
                            
                            <div ref={imageRef} className='title relative right-8 lg:max-w-2xl lg:absolute lg:right-0 lg:bottom-0'>
                                <img  src={Image} alt="pheng lyming" />

                            </div>
                        </div>

                    </div>
                </section>
                <SecondSection />
                <ForthSection />
                <GetInTouch />
                <Footer />


            </div>
        </>

    )
}

export default Hero
