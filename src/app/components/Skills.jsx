'use client'
import React from 'react'
import { fraunces } from "../components/About";

import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiFigma, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { MdCode } from 'react-icons/md';
import SkillsBar from './SkillsBar';


// Skills data with icons
const skills = {
    Frontend: [
        { name: 'HTML', level: 90, icon: <SiHtml5 size={24} className="text-orange-500" /> },
        { name: 'CSS', level: 85, icon: <SiCss3 size={24} className="text-blue-500" /> },
        { name: 'JavaScript', level: 85, icon: <SiJavascript size={24} className="text-yellow-400" /> },
        { name: 'React', level: 80, icon: <SiReact size={24} className="text-blue-400" /> },
        { name: 'Next.js', level: 75, icon: <SiNextdotjs size={24} className="text-gray-800" /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss size={24} className="text-teal-400" /> },
    ],
    Backend: [
        { name: 'Node.js', level: 70, icon: <SiNodedotjs size={24} className="text-green-500" /> },
        { name: 'Express.js', level: 65, icon: <SiExpress size={24} className="text-gray-700" /> },
        { name: 'MongoDB', level: 60, icon: <SiMongodb size={24} className="text-green-600" /> },
    ],
    Tools: [
        { name: 'Git', level: 85, icon: <SiGit size={24} className="text-red-500" /> }, 
        { name: 'VS Code',level: 90,icon: <MdCode size={24} className="text-blue-600" />},
        { name: 'Adobe Photoshop', level: 70,icon: <SiAdobephotoshop size={24} className="text-[#31A8FF]" /> },
        { name: 'Adobe Illustrator', level: 70,icon: <SiAdobeillustrator size={24} className="text-[#FF9A00]" /> },
    ],
};

export default function SkillsSectionWithIcons() {
    return (
        <section id="skills" className="relative bg-gray-50 overflow-hidden sm:py-15 py-10">

            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className={`text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ${fraunces.className}`}
                >
                    My Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {Object.entries(skills).map(([category, list], idx) => (
                        <SkillsBar key={idx} category={category} list={list} idx={idx}></SkillsBar>
                    ))}
                </div>
            </div>
        </section>
    )
}
