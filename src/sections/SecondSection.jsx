import React from "react"
import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaWindows, FaHtml5, FaCss3Alt } from "react-icons/fa"
import {
    SiTailwindcss,
    SiDart,
    SiMysql,

} from "react-icons/si"
import {  TbApi, } from "react-icons/tb"
import { DiPhotoshop, DiIllustrator, DiHtml53dEffects } from "react-icons/di";
import { BiLogoFlutter } from "react-icons/bi";
import { FaDartLang } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { useGSAP } from "@gsap/react";
import { IoLogoJavascript } from "react-icons/io5";
import gsap from "gsap";
const skills = {
    frontend: [
        { name: "React.js", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Javascript", icon: IoLogoJavascript },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt }


    ],
    backend: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Java", icon: FaJava },
        { name: "MySQL", icon: SiMysql },
        { name: "REST API", icon: TbApi }
    ],
    mobile: [
        { name: "Flutter", icon: BiLogoFlutter },
        { name: "Dart", icon: FaDartLang }
    ],
    tools: [
        { name: "Git", icon: FaGitAlt },
        { name: "VS Code", icon: VscVscode },
        { name: 'Photoshop', icon: DiPhotoshop },       // generic adobe
        { name: 'Illustrator', icon: DiIllustrator },
        { name: 'After Effects', icon: DiHtml53dEffects },
        { name: "Windows", icon: FaWindows }
    ]
}


const SecondSection = () => {

    useGSAP(() => {
        const head = document.querySelectorAll('.head');
        const skill = document.querySelectorAll('.skill');

        gsap.from(head, {
            xPercent: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            stagger: 0.3,
            scrollTrigger: {
                trigger: head,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        })

        gsap.from(skill, {
            xPercent: -100,
            opacity: 0,
            ease: 'expo.out',
            delay: 1,
            stagger: 0.08,
            scrollTrigger: {
                trigger: skill,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        })
        
    },[])
    return (
        <section className="pt-24 px-6 lg:min-h-screen" id="skills">
            <div className="container mx-auto">

                <h2 className="head text-3xl font-light mb-2 uppercase text-center md:text-left">
                    Skills
                </h2>

                <hr className="head border-t border-gray-400 mb-8" />

                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">

                    {Object.entries(skills).map(([category, list]) => (
                        <div key={category}>
                            <h3 className="head text-2xl text-gray-400 uppercase mb-4">
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-6">
                                {list.map((skill) => {
                                    const Icon = skill.icon

                                    return (
                                        <div
                                            key={skill.name}
                                            className="skill flex items-center gap-2 px-8 py-2 border border-foreground rounded-full text-gray-400  "
                                        >
                                            <Icon size={28} />
                                            <span className="text-xs text-foreground">{skill.name}</span>
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