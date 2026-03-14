import React from 'react'
import Navbar from './Navbar.jsx'
import Image from '../assets/Myimage2.png'
import FirstSection from './firstSection.jsx';
import SecondSection from './SecondSection.jsx'
import ForthSection from './ForthSection.jsx';
import GetInTouch from './GetInTouch.jsx';
import Footer from './Footer.jsx'

const words = [
    { text: 'Mobile Developer' },
    { text: 'Frontend Developer' },
    { text: 'Graphic Designer' }
];

function Hero() {
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

                    <div className="container mx-auto pl-5 ">
                        <div className="flex flex-col-reverse md:flex lg:flex">
                            <div className="max-w-3xl flex-col items-center">
                                <div className='flex flex-col justify-center items-center lg:items-start'>
                                    
                                    <h1 className="text-3xl md:text-7xl font-extralight uppercase mb-1 tracking-tight text-foreground">
                                        Pheng Lyming
                                    </h1>
                                    <h3 className="text-xl md:text-2xl ml-2 font text-muted mb-2">
                                        <span className="slide">
                                            <span className="wrapper">
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
                                
                                <FirstSection />

                            </div>
                            
                            <div className='relative right-10 lg:max-w-2xl lg:absolute lg:right-0 lg:bottom-0'>
                                <img src={Image} alt="pheng lyming" />

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
