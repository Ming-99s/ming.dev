import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FaGraduationCap, FaBriefcase, FaPaintBrush, FaSchool } from 'react-icons/fa'
import { MdVolunteerActivism } from 'react-icons/md'

gsap.registerPlugin(ScrollTrigger)

const timelineData = [
    {
        type: 'section',
        label: 'Education',
        icon: FaGraduationCap,
    },
    {
        type: 'item',
        title: 'Hun Sen Sereypheap High School',
        period: '~2020 - 2022',
        icon: FaSchool,
        description: 'A fun experience full of great memories. This is where curiosity about technology first sparked.',
        tags: ['High School', 'Khmer', 'Foundation'],
        box: {
            highlight: 'Good memories & a fun experience',
            detail: 'Graduated from Hun Sen Sereypheap High School, building the academic foundation that led to pursuing Computer Science.'
        }
    },
    {
        type: 'item',
        title: 'Cambodia Academy of Digital Technology (CADT)',
        period: '2023 - 2027',
        icon: FaGraduationCap,
        description: 'Bachelor of Computer Science. Expected Graduation: 2027.',  
        tags: ['B.Sc Computer Science', 'Expected 2027'],                          
        box: {
            highlight: 'Bachelor of Computer Science',
            detail: 'Studying at CADT with a focus on mobile development, frontend technologies, and UI/UX design principles.'
        }
    },
    {
        type: 'section',
        label: 'Experience',
        icon: FaBriefcase,
    },
    {
        type: 'item',
        title: 'Graphic Design Intern — BookMeBus',
        period: 'Nov 2025 - Present',
        icon: FaPaintBrush,
        description: 'Designed social media posts, posters, and branding materials.',
        tags: ['Internship', 'Graphic Design', 'UI/UX'],
        box: {
            highlight: 'BookMeBus | Nov 2025 – Present',
            detail: 'Applied strong visual hierarchy and UI/UX principles. Worked with clients to understand requirements and deliver creative solutions. Improved design thinking that supports frontend development.'
        }
    },
    {
        type: 'item',
        title: 'T-Shirt Design & Small Business',
        period: 'April 2022',
        icon: FaPaintBrush,
        description: 'Designed Sangkran T-shirts for sale to all students in high school.',
        tags: ['Entrepreneurial', 'Design'],
        box: {
            highlight: 'Entrepreneurial Experience',
            detail: 'Designed and sold Sangkran T-shirts to students — an early taste of turning creative skill into real-world impact.'
        }
    },
    {
        type: 'section',
        label: 'Volunteer',
        icon: MdVolunteerActivism,
    },
    {
        type: 'item',
        title: 'CSA Member — Media Team',
        period: 'April 2025 - Present',
        icon: MdVolunteerActivism,
        description: 'Joined CSA as a media team member in the role of graphic designer.',
        tags: ['Volunteer', 'Media', 'Design'],
        box: {
            highlight: 'CSA Media Team',
            detail: 'Contributing as a graphic designer for CSA, producing visual content for events and promotions.'
        }
    },
    {
        type: 'item',
        title: 'ITC Marketing Member',
        period: 'April 2024',
        icon: MdVolunteerActivism,
        description: 'Joined Sangkran ITC marketing team and created posters for merchandise promotion.',
        tags: ['Volunteer', 'Marketing'],
        box: {
            highlight: 'ITC Marketing Team',
            detail: 'Designed promotional posters for Sangkran ITC, combining marketing strategy with visual communication.'
        }
    },
]

const TimelineSection = ({ label}) => {
    const ref = useRef(null)

    useEffect(() => {
        gsap.fromTo(ref.current,
            { opacity: 0, x: -30 },
            {
                opacity: 1, x: 0, duration: 0.6,
                scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none reverse' }
            }
        )
    }, [])
    return (
        <div ref={ref} className="flex items-center gap-3 mt-10 mb-4">

            <span className="text-2xl uppercase tracking-[0.3em] text-foreground font-light">{label}</span>
        </div>
    )
}

const TimelineItem = ({ item }) => {
    const wrapperRef = useRef(null)
    const dotRefDesktop = useRef(null)
    const lineRefDesktop = useRef(null)
    const leftRefDesktop = useRef(null)
    const rightRefDesktop = useRef(null)

    const dotRefMobile = useRef(null)
    const lineRefMobile = useRef(null)
    const leftRefMobile = useRef(null)
    const rightRefMobile = useRef(null)

    const ItemIcon = item.icon

    useGSAP(() => {
        const animate = (dot, line, left, right) => {
            if (!dot.current) return
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current, start: window.innerWidth >= 768 ? 'top 80%' : 'top 70%' ,
                    toggleActions: 'play none none reverse'

                 }
            })
            tl.fromTo(dot.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }
            )
                .fromTo(line.current,
                    { scaleY: 0, transformOrigin: 'top' },
                    { scaleY: 1, duration: 1, ease: 'power2.out' }, '-=0.1'
                )
                .fromTo(left.current,
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.5 }, '-=0.3'
                )
                .fromTo(right.current,
                    { opacity: 0, x: 20 },
                    { opacity: 1, x: 0, duration: 0.5 }, '-=0.4'
                )
        }

        animate(dotRefMobile, lineRefMobile, leftRefMobile, rightRefMobile)
        animate(dotRefDesktop, lineRefDesktop, leftRefDesktop, rightRefDesktop)

    }, { scope: wrapperRef })

    return (
        <div ref={wrapperRef} className="relative mb-6">

            {/* MOBILE */}
            <div className="flex md:hidden gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                    <div ref={dotRefMobile} className="w-9 h-9 rounded-full border-1 border-foreground border flex items-center justify-center z-10">
                        <ItemIcon size={14} className="text-foreground" />
                    </div>
                    <div ref={lineRefMobile} className="w-[1.5px] flex-1 bg-foreground mt-1" />
                </div>
                <div className="flex flex-col gap-3 pb-6 flex-1">
                    <div ref={leftRefMobile}>
                        <p className="text-xs text-foreground font-medium tracking-widest uppercase mb-1">{item.period}</p>
                        <h4 className="text-sm font-normal text-foreground leading-snug">{item.title}</h4>
                        <p className="text-xs text-muted mt-1 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] px-2 py-0.5 border border-border rounded-full text-muted">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div ref={rightRefMobile} className="glass-card rounded-xl p-4 border border-border hover:border-foreground transition-all duration-300">
                        <p className="text-xs font-semibold text-foreground mb-1">{item.box.highlight}</p>
                        <p className="text-xs text-muted leading-relaxed">{item.box.detail}</p>
                    </div>
                </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-[1fr_auto_2fr] gap-4">
                <div ref={leftRefDesktop} className="text-left pr-6">
                    <p className="text-xs text-foreground font-light tracking-widest uppercase mb-1">{item.period}</p>
                    <h4 className="text-sm font-normal text-foreground leading-snug">{item.title}</h4>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2 justify-start">
                        {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 border border-border rounded-full text-muted">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div ref={dotRefDesktop} className="w-9 h-9 rounded-full border-1 border border-foreground text-foreground bg-card flex items-center justify-center z-10 flex-shrink-0">
                        <ItemIcon size={14} className="text-foreground" />
                    </div>
                    <div ref={lineRefDesktop} className="w-[1.5px] flex-1 bg-foreground mt-1" />
                </div>
                <div ref={rightRefDesktop} className="pl-6 pb-6">
                    <div className="glass-card rounded-xl p-4 border border-border hover:border-foreground text transition-all duration-300">
                        <p className="text-xs font-semibold text-foreground mb-1">{item.box.highlight}</p>
                        <p className="text-xs text-muted leading-relaxed">{item.box.detail}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

const ForthSection = () => {

    return (
        <section className="py-24 px-6" id="experience">
            <div className=" container mx-auto">
                <div className='head'>
                    <h2 className="timeline-title text-3xl font-light mb-2 uppercase text-center md:text-start ">
                        Journey
                    </h2>
                    <hr className="border-t border-gray-400 mb-12" />

                </div>

                <div className="relative">
                    {timelineData.map((entry, i) =>
                        entry.type === 'section'
                            ? <TimelineSection key={i} {...entry} />
                            : <TimelineItem key={i} item={entry}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ForthSection