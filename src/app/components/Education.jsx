'use client'
import React from 'react';
import { Fraunces } from 'next/font/google';
import { motion } from 'framer-motion';

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["400", "900"],
    style: ["normal", "italic"],
});

export default function Education() {
    const educationList = [
        {
            title: "Diploma in Computer Science & Technology",
            institute: "Feni Polytechnic Institute",
            year: "2023 – Present",
            description: "Currently pursuing a diploma with a focus on modern web development, backend systems, and software solutions.",
            icon: "🎓",
        },
        {
            title: "Secondary School Certificate (SSC) - Science",
            institute: "Uttar Alipur School and College",
            year: "2022",
            description: "Completed SSC with GPA 4.83 in Science under Comilla Board. Developed strong foundations in Mathematics, Physics, and Computer Applications.",
            icon: "📘",
        },
    ];

    return (
        <section id="education" className="relative bg-gray-50 overflow-hidden py-10  sm:py-15">
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col">
                <h2 className={`text-4xl md:text-5xl font-extrabold ${fraunces.className}  text-purple-600 mb-10`}>
                    My Education
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {educationList.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >
                            {/* Card */}
                            <div className="h-full bg-white/50 backdrop-blur-md shadow-lg rounded-xl p-6 hover:scale-103 transition-transform duration-300">
                                {/* Marker */}
                                <div className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-full shadow-lg text-2xl mb-4">
                                    {edu.icon}
                                </div>

                                <h3 className={`text-2xl md:text-3xl font-bold ${fraunces.className} text-purple-600`}>
                                    {edu.title}
                                </h3>
                                <p className="text-lg md:text-xl font-semibold text-gray-700">
                                    {edu.institute}
                                </p>
                                <p className="text-gray-500 italic">{edu.year}</p>
                                <p className="mt-2 text-gray-600 leading-6">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
