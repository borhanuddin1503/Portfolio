'use client'
import React from 'react'
import Image from 'next/image'
import { Fraunces } from "next/font/google";
import { motion } from 'framer-motion';

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["normal", "italic"],
});

export default function AboutMe() {
  return (
    <section id="about" className="relative bg-gray-50 overflow-hidden sm:py-15 py-10 ">
      {/* Background gradient shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-25 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400 via-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-25 -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/borhan.png"
            alt="Borhan Uddin"
            width={380}
            height={380}
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col gap-5"
        >
          <h2 className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 ${fraunces.className}`}>
            About Me
          </h2>

          <p className="text-gray-700  leading-6">
            My programming journey started during my <span className="font-semibold text-blue-600">Diploma in Computer Science</span>,
            where curiosity turned into a deep passion for creating digital experiences. From my first “Hello World” to building dynamic projects
            with <span className="font-semibold text-purple-600">React</span>, <span className="font-semibold text-purple-600">Next.js</span>,
            and <span className="font-semibold text-purple-600">Tailwind CSS</span>, I’ve enjoyed every step of learning and growing as a developer.
          </p>

          <p className="text-gray-700  leading-6">
            I love working on <span className="font-semibold text-blue-600">modern, responsive, and visually appealing</span> web applications
            that blend creativity with functionality. Writing clean, maintainable code and transforming ideas into seamless user experiences
            is something that truly excites me.
          </p>

          <p className="text-gray-700 leading-6">
            Outside of coding, I’m an active person who enjoys <span className="font-semibold text-blue-600">football</span> and <span className="font-semibold text-blue-600">badminton</span>,
            and I’m passionate about <span className="font-semibold text-purple-600">photography</span> and <span className="font-semibold text-purple-600">digital art</span>.
            These hobbies keep my creativity alive and help me maintain a balanced mindset.
          </p>

          <p className="text-gray-700  leading-6">
            As a developer, I aim to combine <span className="font-semibold text-blue-600">technical precision</span>
            with <span className="font-semibold text-purple-600">creative design</span>, building applications that are not only functional but also inspiring —
            just like the people who use them.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
