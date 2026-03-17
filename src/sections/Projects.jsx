import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar.jsx'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: '01',
    title: 'My App Dart',
    description: 'A Flutter mobile app with real-time features, clean UI, and smooth animations built with Dart and Firebase.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    platform: 'App Store',
    github: 'https://github.com/you/project',
    media: '/project1.png',
    type: 'image',
  },
  {
    id: '02',
    title: 'E-Commerce Platform',
    description: 'Full-stack shopping experience with real-time inventory, Stripe payments, and an admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    live: 'https://yourproject.com',
    github: 'https://github.com/you/project',
    media: '/project2.mp4',
    type: 'video',
  },
  {
    id: '03',
    title: 'AI Chat Interface',
    description: 'Conversational UI on top of LLM APIs with streaming responses and markdown rendering.',
    tags: ['Next.js', 'TypeScript', 'OpenAI'],
    live: 'https://yourproject.com',
    github: 'https://github.com/you/project',
    media: '/project3.png',
    type: 'image',
  },
]

const ProjectsSection = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    // ← force initial state FIRST before anything else
    containerRef.current.querySelectorAll('.project-text').forEach((el, i) => {
      gsap.set(el, { opacity: i !== 0 ? 0 : 1, y: i !== 0 ? 10 : 0 })
    })

    // heading entrance
    gsap.fromTo('.projects-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    function setActive(index) {
      containerRef.current.querySelectorAll('.project-text').forEach((el, i) => {
        if (i === index) {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
        } else {
          gsap.to(el, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.in' })
        }
      })
    }

    projects.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: `.media-item-${i}`,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
    })

    setActive(0)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }

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

              {/* desktop header — outside the loop, renders once */}
              <h2 className="projects-heading text-3xl font-light mb-2 uppercase">
                Projects
              </h2>
              <hr className="border-t border-border mb-12" />

              {/* text cards — stacked, switched by GSAP */}
              <div className="relative">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="project-text absolute top-0 left-0 w-full"
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

                {/* spacer — gives the relative container height */}
                <div className="invisible pointer-events-none">
                  <span className="text-xs mb-4 block">00/00</span>
                  <h3 className="text-4xl mb-4">placeholder title here</h3>
                  <p className="text-sm mb-6">placeholder description here for height reference only</p>
                  <div className="flex gap-2 mb-8"><span className="text-xs px-3 py-1">tag one</span><span className="text-xs px-3 py-1">tag two</span></div>
                  <div className="flex gap-6"><span className="text-xs">Live ↗</span><span className="text-xs">GitHub ↗</span></div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — scrolling media */}
          <div className="flex-1 flex flex-col gap-12 lg:gap-0 py-24">
            {projects.map((project, i) => (
              <div key={project.id} className={`media-item-${i} lg:my-28`}>

                {/* mobile text */}
                <div className="lg:hidden mb-6 px-6">
                  <span className="text-xs font-light text-muted uppercase tracking-widest mb-2 block">
                    {project.id}
                  </span>
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
                        className="text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors font-light">
                        Live ↗
                      </a>
                    ) : project.platform ? (
                      <span className="text-xs px-3 py-1 border border-border text-muted font-light uppercase">
                        {project.platform}
                      </span>
                    ) : null}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors font-light">
                      GitHub ↗
                    </a>
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
      </div>
    </section>
  )
}

export default ProjectsSection