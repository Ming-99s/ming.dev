import React from 'react'

const ProjectCard = ({ project, index }) => {
    return (

        <div
            className={`project-card group relative border border-border bg-card p-6 md:p-8
        hover:border-primary transition-colors duration-300 cursor-default`}
        >
            {/* Index number */}
            <span className="absolute top-6 right-6 text-xs font-light text-muted opacity-40 select-none">
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Year */}
            <p className="text-xs font-light text-muted mb-4 uppercase tracking-widest">{project.year}</p>

            {/* Title */}
            <h3 className="text-xl font-light text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-3 py-1 border border-border text-muted font-light uppercase tracking-wide"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
                {project.live ? (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-widest text-foreground hover:text-primary
      transition-colors duration-200 flex items-center gap-2 font-light"
                    >
                        Live
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                            ↗
                        </span>
                    </a>
                ) : null}

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-muted hover:text-foreground
    transition-colors duration-200 flex items-center gap-2 font-light"
                >
                    GitHub
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                        ↗
                    </span>
                </a>
            </div>
            {/* Hover accent line */}
            < div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 ease-out" />
        </div>

    )
}

export default ProjectCard