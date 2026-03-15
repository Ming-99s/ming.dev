import React from "react"
import { FaReact, FaNodeJs, FaGitAlt ,FaJava} from "react-icons/fa"
import {
    SiTailwindcss,
    SiFlutter,
    SiDart,
    SiMysql,

} from "react-icons/si"
import { TbBrandWindows, TbApi, TbBrandVscode } from "react-icons/tb"
import { BiLogoAdobe } from 'react-icons/bi'
import { MdMovieEdit } from 'react-icons/md'

const skills = {
    frontend: [
        { name: "React.js", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss }
    ],
    backend: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Java", icon: FaJava },
        { name: "MySQL", icon: SiMysql },
        { name: "REST API", icon: TbApi }
    ],
    mobile: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Dart", icon: SiDart }
    ],
    tools: [
        { name: "Git", icon: FaGitAlt },
        { name: "VS Code", icon: TbBrandVscode },
        { name: 'Photoshop', icon: BiLogoAdobe },       // generic adobe
        { name: 'Illustrator', icon: BiLogoAdobe },
        { name: 'After Effects', icon: MdMovieEdit },
        { name: "Windows", icon: TbBrandWindows }
    ]
}

const SecondSection = () => {
    return (
        <section className="py-24 px-6 min-h-screen" id="skills">
            <div className="container mx-auto">

                <h2 className="text-3xl font-light mb-2 uppercase text-center md:text-left">
                    Skills
                </h2>

                <hr className="border-t border-gray-400 mb-8" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-5">

                    {Object.entries(skills).map(([category, list]) => (
                        <div key={category}>
                            <h3 className="text-2xl text-gray-400 uppercase mb-4">
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {list.map((skill) => {
                                    const Icon = skill.icon

                                    return (
                                        <div
                                            key={skill.name}
                                            className="flex flex-col items-center gap-2 p-4 border rounded-xl hover:border-blue-500 transition"
                                        >
                                            <Icon size={28} />
                                            <span className="text-xs">{skill.name}</span>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default SecondSection