import React, { useRef, useState } from 'react'
import Navbar from './Navbar.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaSquareFacebook, FaSquareInstagram, FaLinkedin } from 'react-icons/fa6'
import { BsBoxArrowUpRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger)

// ─── info ────────────────────────────────────────────────────────
const INFO = {
    location: 'Kandal, Cambodia',
    phone: '+855 98 32 38 78',
    telegram: '@LeMinggg',
    telegramLink: 'https://t.me/LeMinggg',
    github: 'Ming-99s',
    githubLink: 'https://github.com/Ming-99s',
    instagram: '@lyminggg_',
    instagramLink: 'https://www.instagram.com/lyminggg_/',
    facebook: 'Ming',
    facebookLink: 'https://www.facebook.com/ming.123142',
    linkedin: 'Pheng Lyming',
    linkedinLink: 'https://www.linkedin.com/in/pheng-lyming-67a2bb372/',
}

// ─── data ────────────────────────────────────────────────────────
const infoRows = [
    { label: 'Based in', value: INFO.location },
    { label: 'Phone', value: INFO.phone, href: `tel:${INFO.phone}` },
    { label: 'Telegram', value: INFO.telegram, href: INFO.telegramLink },
]

const connectLinks = [
    { href: INFO.githubLink, icon: FaGithub, label: 'GitHub', username: INFO.github },
    { href: INFO.instagramLink, icon: FaSquareInstagram, label: 'Instagram', username: INFO.instagram },
    { href: INFO.facebookLink, icon: FaSquareFacebook, label: 'Facebook', username: INFO.facebook },
    { href: INFO.linkedinLink, icon: FaLinkedin, label: 'LinkedIn', username: INFO.linkedin },
]

// ─── reusable components ─────────────────────────────────────────

const InfoRow = ({ label, value, href }) => (
    <div className="contact-info-item">
        <p className="text-xs uppercase tracking-widest text-muted font-light mb-2">{label}</p>
        {href ? (
            <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-xl font-light text-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-3"
            >
                {value}
                {href.startsWith('http') && <span className="text-muted text-sm"><BsBoxArrowUpRight size={12}/></span>}
            </a>
        ) : (
            <p className="text-xl font-light text-foreground">{value}</p>
        )}
    </div>
)

const ConnectItem = ({ href, icon, label, username }) => {
    const Icon = icon
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 connect-item group flex items-center justify-between py-6 border-b border-border sm:flex-1 hover:px-4 transition-all duration-300"
        >
            <div className="flex items-center gap-5">
                <Icon size={32} />
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-muted font-light">{label}</span>
                    <span className="text-lg font-light text-foreground group-hover:text-foreground transition-colors duration-200">
                        {username}
                    </span>
                </div>
            </div>
            <span className="text-muted group-hover:text-foreground transition-colors duration-200 text-lg"><BsBoxArrowUpRight size={12} /></span>
        </a>
    )
}

// ─── main component ───────────────────────────────────────────────

const GetInTouch = () => {
    const containerRef = useRef(null)
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(false)

        const res = await fetch('https://formspree.io/f/mpqykaqb', {
            method: 'POST',
            body: new FormData(e.target),
            headers: { Accept: 'application/json' },
        })

        res.ok ? setSent(true) : setError(true)
        setLoading(false)
    }

    useGSAP(() => {
        gsap.fromTo('.contact-heading',
            { opacity: 0, x: -30 },
            {
                opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: '.contact-heading', start: 'top 85%', toggleActions: 'play none none reverse' }
            }
        )
        gsap.fromTo('.contact-info-item',
            { opacity: 0, y: 24 },
            {
                opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
                scrollTrigger: { trigger: '.contact-info-item', start: 'top 85%', toggleActions: 'play none none reverse' }
            }
        )
        gsap.fromTo('.contact-form',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: '.contact-form', start: 'top 85%', toggleActions: 'play none none reverse' }
            }
        )
        gsap.fromTo('.connect-item',
            { opacity: 0, y: 16 },
            {
                opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
                scrollTrigger: { trigger: '.connect-item', start: 'top 80%', toggleActions: 'play none none reverse' }
            }
        )
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="min-h-screen pb-32" id="contact">
            <Navbar />

            <div className="container lg:pl-40 px-6 py-24 lg:pt-36">

                {/* heading */}
                <div className="contact-heading mb-16">
                    <h2 className="text-3xl font-light uppercase mb-2">Contact</h2>
                    <hr className="border-t border-border" />
                </div>

                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

                    {/* form */}
                    <div className="contact-form border border-muted p-10">
                        <p className="text-2xl uppercase tracking-widest text-muted font-light mb-8">
                            Send me a message
                        </p>

                        {sent ? (
                            <div className="flex flex-col gap-4 py-16">
                                <span className="text-3xl font-light uppercase text-foreground">Message sent.</span>
                                <p className="text-sm text-muted font-light">I'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-muted font-light">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        className="bg-transparent border-b border-border text-foreground text-sm font-light py-3 outline-none placeholder:text-muted focus:border-foreground transition-colors duration-200 w-full"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-muted font-light">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="your@email.com"
                                        className="bg-transparent border-b border-border text-foreground text-sm font-light py-3 outline-none placeholder:text-muted focus:border-foreground transition-colors duration-200 w-full"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-muted font-light">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="What's on your mind..."
                                        className="bg-transparent border-b border-border text-foreground text-sm font-light py-3 outline-none placeholder:text-muted focus:border-foreground transition-colors duration-200 resize-none w-full"
                                    />
                                </div>

                                {error && (
                                    <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-2 self-start text-xs uppercase tracking-widest font-light px-8 py-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-40"
                                >
                                    {loading ? 'Sending...' : 'Send' }
                                </button>

                            </form>
                        )}
                    </div>

                    {/* info */}
                    <div className="flex flex-col gap-10 mt-10">
                        {infoRows.map((row, i) => (
                            <React.Fragment key={row.label}>
                                <InfoRow {...row} />
                                {i < infoRows.length - 1 && <hr className="border-t border-border" />}
                            </React.Fragment>
                        ))}
                    </div>

                </div>

                {/* connect */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-muted font-light mb-2">
                        Connect with me
                    </p>
                    <hr className="border-t border-border" />
                    <div className="flex flex-col sm:flex-row">
                        {connectLinks.map((link, i) => (
                            <React.Fragment key={link.label}>
                                <ConnectItem {...link} />
                                {i < connectLinks.length - 1 && <div className="hidden sm:block w-px bg-border" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GetInTouch