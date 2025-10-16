'use client'
import React from 'react';
import Image from 'next/image';
import { Fraunces } from "next/font/google";
import { Typewriter } from 'react-simple-typewriter';
import { easeInOut, motion } from 'framer-motion'; // for smooth animation

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["400", "900"],
    style: ["normal", "italic"],
});

export default function Hero() {
    return (
        <section className='relative bg-gray-50 overflow-hidden'>
            <div
                id="hero"
                className="max-w-7xl mx-auto md:py-30 flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-10 gap-5"
            >
                {/* Left Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex flex-col gap-6"
                >
                    <div>
                        <h1 className={`text-5xl md:text-6xl font-extrabold mb-2 ${fraunces.className} bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500`}>
                            Hi, I'm Borhan
                        </h1>

                        <div className="text-2xl md:text-3xl font-semibold flex items-center gap-1">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                <Typewriter
                                    words={['Creative Web Designer', 'Frontend Developer', 'Next.js Enthusiast']}
                                    loop={0}
                                    cursor={false} // cursor disabled inside
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2500}
                                />
                            </span>
                            {/* Separate cursor with normal color */}
                            <motion.span
                                className="text-blue-500"
                                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                            >
                                |
                            </motion.span>

                        </div>

                    </div>

                    <p className="text-lg md:text-xl text-gray-600 leading-6">
                        I craft elegant and responsive web applications using Next.js, React, and Tailwind CSS, turning ideas into seamless digital experiences.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-6"
                    >

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                             text-white rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
                        >
                            Download Resume
                        </a>

                    </motion.div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
                >
                    <Image
                        src="/images/borhan.png"
                        alt="Borhan Uddin"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </section >
    );
}
