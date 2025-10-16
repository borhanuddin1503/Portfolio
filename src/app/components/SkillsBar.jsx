'use client'
import React from 'react'
import { fraunces } from "../components/About";
import { motion } from 'framer-motion';


export default function SkillsBar({ category, list, idx }) {
    return (
        <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            viewport={{ once: false }}
            className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
        >
            <h3 className={`text-2xl font-bold mb-6 text-blue-600 ${fraunces.className}`}>
                {category}
            </h3>
            <div className="flex flex-col gap-5">
                {list.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-1">
                            {skill.icon}
                            <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                                className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
