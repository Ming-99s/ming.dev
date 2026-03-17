import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar.jsx'
import { useRef, useState, useEffect } from 'react'
import { IoMdArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const projects = [
  {
    id: '01',
    title: 'Steady',
    description: 'A habit tracking mobile app built with Flutter. Steady helps you build consistency by tracking your hobbies and daily tasks — complete your schedule every day to keep your streak alive.',
    tags: ['Flutter', 'Dart'],
    platform: '',
    github: 'https://github.com/Ming-99s/Steady---flutter_final_Project.git',
    media: '/project/Steady.webm',
    type: 'video',
  },
  {
    id: '02',
    title: 'PaPaN Porsche',
    description: "This project is part of an end-of-course assignment, designed to demonstrate skills in web development and UI/UX design. The website's aesthetic and structure are inspired by Porsche's design philosophy, focusing on minimalism, precision, and high performance.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://2nd-year-term1-web-project.vercel.app/',
    github: 'https://github.com/SeaHuyty/porsche-car-dealership-website.git',
    media: '/project/papaN.webp',
    type: 'image',
  },
  {
    id: '03',
    title: 'Door of the truth',
    description: 'Door of Truth is an action puzzle platformer developed using Unity. The game challenges players to answer multiple-choice questions under time pressure by selecting the correct door while navigating a collapsing environment.',
    tags: ['C#', 'Unity', 'Photoshop'],
    live: '',
    github: 'https://github.com/ChethaNavid/door-of-truth-game',
    media: '/project/door.webp',
    type: 'image',
  },
  {
    id: '04',
    title: 'Small Weather App',
    description: 'A clean, responsive weather app built with vanilla HTML, CSS, and JavaScript using the OpenWeatherMap API. Search any city to get current weather forecast.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    live: 'https://weather-app-small.vercel.app/',
    github: 'https://github.com/Ming-99s/weather_app_small.git',
    media: '/project/weatherApp.webp',
    type: 'image',
  },
  {
    id: '05',
    title: 'Grid learning',
    description: 'Just Practice grid',
    tags: ['HTML', 'CSS'],
    live: 'https://grid-project-mu.vercel.app/',
    github: 'https://github.com/Ming-99s/grid.git',
    media: '/project/grid.webp',
    type: 'image',
  },
]

const posterGroups = [
  {
    company: 'CSA',
    year: '2025 - 2026',
    direction: 'ltr',
    duration: 20,
    posters: [
      { src: '/poster/CSA/7jan.webp', title: '7Jan Poster' },
      { src: '/poster/CSA/agenda copy.webp', title: 'Agenda Sangkran' },
      { src: '/poster/CSA/cadtMovieNight.webp', title: 'CADT Movie Night' },
      { src: '/poster/CSA/CIW-Theme.webp', title: 'CIW Theme' },
      { src: '/poster/CSA/KeyChain_Ciw_Mockup4.webp', title: 'KeyChain MockUp' },
      { src: '/poster/CSA/Halloween.webp', title: 'Halloween Poster' },
      { src: '/poster/CSA/neverForgotten.webp', title: 'Soldier Poster' },
      { src: '/poster/CSA/pchumben2.webp', title: 'PhcumBen Poster' },
      { src: '/poster/CSA/queen copy.webp', title: 'Queen Poster' },
      { src: '/poster/CSA/T-mockup5-black copy.webp', title: 'T-shirt MockUp' },
      { src: '/poster/CSA/Ciw-Agenda (2).webp', title: 'Ciw Agenda' },
    ],
  },
  {
    company: 'BookMeBus',
    year: '2025 - Present',
    direction: 'rtl',
    duration: 25,
    posters: [
      { src: '/poster/BMB/BSDiscount.webp', title: 'BS Discount' },
      { src: '/poster/BMB/busSRPP.webp', title: 'Bus SRPP' },
      { src: '/poster/BMB/chinese-new-year.webp', title: 'Chinese New Year' },
      { src: '/poster/BMB/CYNDay2.webp', title: 'CYN Day 2' },
      { src: '/poster/BMB/EquinoxAngkor.webp', title: 'Equinox Angkor' },
      { src: '/poster/BMB/EvgoPosterSmallSizie.webp', title: 'Evgo Poster' },
      { src: '/poster/BMB/Ferry-Discount.webp', title: 'Ferry Discount' },
      { src: '/poster/BMB/fishEvent.webp', title: 'Fish Event' },
      { src: '/poster/BMB/goldPost.webp', title: 'Gold Post' },
      { src: '/poster/BMB/IBUS-Discount.webp', title: 'IBUS Discount' },
      { src: '/poster/BMB/IbusPoster.webp', title: 'Ibus Poster' },
      { src: '/poster/BMB/IBusVan.webp', title: 'IBus Van' },
      { src: '/poster/BMB/KimSengExpressDiscount.webp', title: 'Kim Seng Discount' },
      { src: '/poster/BMB/kimSengGas.webp', title: 'Kim Seng Gas' },
      { src: '/poster/BMB/KohrongDiscount.webp', title: 'Kohrong Discount' },
      { src: '/poster/BMB/LoungeDiscount.webp', title: 'Lounge Discount' },
      { src: '/poster/BMB/Mey-Hong-Transport.webp', title: 'Mey Hong Transport' },
      { src: '/poster/BMB/MultiDiscountBMB.webp', title: 'Multi Discount' },
      { src: '/poster/BMB/newYear.webp', title: 'New Year' },
      { src: '/poster/BMB/propmoCode.webp', title: 'Promo Code' },
    ],
  },
]

// ─────────────────────────────────────────────
// POSTER CARD
// ─────────────────────────────────────────────

const PosterCard = ({ poster, onOpen }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="poster-card cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(poster)}
    >
      <img
        src={poster.src}
        alt={poster.title}
        className="poster-img"
        style={{ filter: hovered ? 'brightness(1.05)' : 'brightness(0.75)' }}
      />
      <div className="poster-label" style={{ opacity: hovered ? 1 : 0 }}>
        {poster.title}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────

const Lightbox = ({ poster, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={poster.src}
          alt={poster.title}
          className="w-full h-auto object-contain"
          style={{ maxHeight: '85vh' }}
        />
        <p className="text-white text-xs uppercase tracking-widest font-light mt-4 text-center">
          {poster.title}
        </p>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 text-white text-lg w-8 h-8 flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// MARQUEE ROW
// ─────────────────────────────────────────────

const MarqueeRow = ({ posters, duration, direction, onOpen }) => {
  const [paused, setPaused] = useState(false)
  const [itemWidth, setItemWidth] = useState(0)
  const firstRef = useRef(null)
  const secondRef = useRef(null)

  useEffect(() => {
    if (!firstRef.current || !secondRef.current) return

    const measure = () => {
      if (secondRef.current) setItemWidth(secondRef.current.offsetLeft)
    }

    const imgs = firstRef.current.querySelectorAll('img')
    if (imgs.length === 0) { measure(); return }

    let loaded = 0
    const onLoad = () => { loaded++; if (loaded === imgs.length) measure() }
    imgs.forEach(img => img.complete ? onLoad() : img.addEventListener('load', onLoad))

    const ro = new ResizeObserver(measure)
    ro.observe(document.documentElement)
    return () => ro.disconnect()
  }, [])

  const trackStyle = itemWidth === 0 ? {} : {
    '--marquee-dist': `-${itemWidth}px`,
    animationName: direction === 'rtl' ? 'marquee-rtl' : 'marquee-ltr',
    animationDuration: `${duration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: paused ? 'paused' : 'running',
  }

  const posterSet = (refProp) => (
    <div ref={refProp} className="marquee-set">
      {posters.map((poster, i) => (
        <PosterCard key={i} poster={poster} onOpen={onOpen} />
      ))}
    </div>
  )

  return (
    <div
      className="marquee-overflow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="fade-left" />
      <div className="fade-right" />
      <div className="marquee-track" style={trackStyle}>
        {posterSet(firstRef)}
        {posterSet(secondRef)}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// POSTER MARQUEE
// ─────────────────────────────────────────────

const PosterMarquee = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      {lightbox && (
        <Lightbox poster={lightbox} onClose={() => setLightbox(null)} />
      )}

      {posterGroups.map((group) => (
        <div key={group.company} className="pb-20">
          <div className="mb-4">
            <span className="uppercase text-foreground text-xl mr-2">{group.company}</span>
            <span className="text-muted text-sm">{group.year}</span>
          </div>
          <MarqueeRow
            posters={group.posters}
            duration={group.duration}
            direction={group.direction}
            onOpen={setLightbox}
          />
        </div>
      ))}
    </>
  )
}

// ─────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────

const ProjectsSection = () => {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useGSAP(() => {

    // ── 1. "Projects" heading ───────────────────────────────────
    gsap.fromTo('.projects-heading',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // ── 2. Each media item — fade + slide up ───────────────────
    projects.forEach((_, i) => {
      gsap.fromTo(`.media-item-${i}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.media-item-${i}`,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // ── 3. Sticky left panel — track active project ────────────
    const triggers = []
    projects.forEach((_, i) => {
      const t = ScrollTrigger.create({
        trigger: `.media-item-${i}`,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      })
      triggers.push(t)
    })

    // ── 4. "Graphic Design" heading ────────────────────────────
    gsap.fromTo('.graphic-heading',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.graphic-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // ── 5. Poster group labels — stagger in ────────────────────
    gsap.fromTo('.poster-group-label',
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.poster-group-label',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.from('.thank-you',
      {
      
        opacity: 0,
        y: 100,
      
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.thank-you',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => triggers.forEach(t => t.kill())

  }, { scope: containerRef })

  return (
    <section>
      <Navbar />
      <div ref={containerRef} className="container lg:pl-40" id="projects">

        {/* mobile header */}
        <h2 className="lg:hidden projects-heading text-3xl font-light mb-2 uppercase pt-24 px-6">
          Projects
        </h2>
        <hr className="lg:hidden border-t border-border mb-12 mx-6" />

        <div className="flex gap-12 lg:gap-20">

          {/* LEFT — sticky panel */}
          <div className="hidden lg:block w-80 xl:w-96 shrink-0">
            <div className="sticky top-36">
              <h2 className="projects-heading text-3xl font-light mb-2 uppercase">
                Projects
              </h2>
              <hr className="border-t border-border mb-12" />

              <div className="relative">
                {projects.map((project, i) => (
                  <div
                    key={project.id}
                    className="project-text absolute top-0 left-0 w-full transition-all duration-300"
                    style={{
                      opacity: activeIndex === i ? 1 : 0,
                      transform: activeIndex === i ? 'translateY(0)' : 'translateY(10px)',
                      pointerEvents: activeIndex === i ? 'auto' : 'none',
                    }}
                  >
                    <span className="text-xs font-light text-muted uppercase tracking-widest mb-4 block">
                      {project.id} / {String(projects.length).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl xl:text-4xl font-light text-foreground mb-4 uppercase">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 border border-border text-muted font-light uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 font-light">
                          Live ↗
                        </a>
                      ) : project.platform ? (
                        <span className="text-xs px-3 py-1 border border-border text-muted font-light uppercase tracking-wide">
                          {project.platform}
                        </span>
                      ) : null}
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200 flex items-center gap-2 font-light">
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                ))}

                {/* invisible spacer to hold panel height */}
                <div className="invisible pointer-events-none">
                  <span className="text-xs mb-4 block">00/00</span>
                  <h3 className="text-4xl mb-4">placeholder title here</h3>
                  <p className="text-sm mb-6">placeholder description here for height reference only</p>
                  <div className="flex gap-2 mb-8">
                    <span className="text-xs px-3 py-1">tag one</span>
                    <span className="text-xs px-3 py-1">tag two</span>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-xs">Live ↗</span>
                    <span className="text-xs">GitHub ↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — scrolling media */}
          <div className="flex-1 flex flex-col gap-12 lg:gap-0 py-24">
            {projects.map((project, i) => (
              <div key={project.id} className={`media-item-${i} lg:my-28`}>

                {/* mobile info */}
                <div className="lg:hidden mb-6 px-6">
                  <span className="text-xs font-light text-muted uppercase tracking-widest mb-2 block">{project.id}</span>
                  <h3 className="text-2xl font-light text-foreground uppercase mb-2">{project.title}</h3>
                  <p className="text-sm text-muted font-light leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 border border-border text-muted font-light uppercase">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors font-light">Live ↗</a>
                    ) : project.platform ? (
                      <span className="text-xs px-3 py-1 border border-border text-muted font-light uppercase">{project.platform}</span>
                    ) : null}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors font-light">GitHub ↗</a>
                  </div>
                </div>

                {/* media */}
                <div className="w-full aspect-video bg-card border border-border overflow-hidden">
                  {project.type === 'video' ? (
                    <video src={project.media} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={project.media} alt={project.title} className="w-full h-full object-cover" />
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Graphic Design heading */}
        <div className="graphic-heading mb-16 lg:pt-40">
          <h2 className="text-3xl font-light mb-2 uppercase">Graphic Design</h2>
          <hr className="border-t border-border" />
        </div>

        {/* Poster marquee — add class to each label in PosterMarquee */}
        <PosterMarquee />

        {/* Thank you */}
        <section className="min-h-screen uppercase flex justify-center items-center">
          <h1 className="text-3xl thank-you ">thank you for visiting</h1>
        </section>

      </div>
        <div className='flex justify-end items-center pr-10'>

          <Link to='/contact' className='bottom flex text-foreground pb-10  hover:text-gray-400 transition duration-300'>
            <h1 className='text-2xl'>Contact</h1>
            <IoMdArrowForward size={32} className='font-thin' />
          </Link>
        </div>
    </section>
  )
}

export default ProjectsSection