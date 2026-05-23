'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { poppins } from '../layout'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

const paragraphs = [
  <>
    My programming journey started during my{' '}
    <span className="font-semibold text-[#e2c97e]">Diploma in Computer Science</span>, where
    curiosity turned into a deep passion for creating digital experiences. From my first "Hello
    World" to building dynamic projects with{' '}
    <span className="font-semibold text-[#e2c97e]">React</span>,{' '}
    <span className="font-semibold text-[#e2c97e]">Next.js</span>, and{' '}
    <span className="font-semibold text-[#e2c97e]">Tailwind CSS</span>, I've enjoyed every step of
    learning and growing.
  </>,
  <>
    I love working on{' '}
    <span className="font-semibold text-[#e2c97e]">modern, responsive, and visually appealing</span>{' '}
    web applications that blend creativity with functionality. Writing clean, maintainable code and
    transforming ideas into seamless user experiences is something that truly excites me.
  </>,
  <>
    Outside of coding, I enjoy{' '}
    <span className="font-semibold text-[#e2c97e]">football</span> and{' '}
    <span className="font-semibold text-[#e2c97e]">badminton</span>, and I'm passionate about{' '}
    <span className="font-semibold text-[#e2c97e]">photography</span> and{' '}
    <span className="font-semibold text-[#e2c97e]">digital art</span>. These hobbies keep my
    creativity alive and help me maintain a balanced mindset.
  </>,
  <>
    As a developer, I aim to combine{' '}
    <span className="font-semibold text-[#e2c97e]">technical precision</span> with{' '}
    <span className="font-semibold text-[#e2c97e]">creative design</span>, building applications
    that are not only functional but also inspiring — just like the people who use them.
  </>,
]

const stats = [
  { value: '1+', label: 'Years Coding' },
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
]

export default function AboutMe() {
  const [show, setShow] = useState(false)

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0f] py-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >


      {/* ── Dot-grid texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-20">
        {/* ── Section label ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#e2c97e]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2c97e]">
            About Me
          </span>
        </motion.div>

        <div className="flex flex-col-reverse items-center gap-18 md:flex-row md:items-start">
          {/* ══ LEFT — Image Card ══ */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex w-full flex-col items-center gap-8 md:w-2/5"
          >
            {/* Image frame */}
            <div className="relative">
              {/* Glowing ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-[3px] rounded-3xl"
                style={{
                  background:
                    'conic-gradient(from 0deg, #7c3aed, #0ea5e9, #e2c97e, #7c3aed)',
                  borderRadius: '1.5rem',
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 overflow-hidden rounded-3xl bg-[#0a0a0f] p-[3px]">
                <Image
                  src="/images/Borhan-2.png"
                  alt="Borhan Uddin"
                  width={360}
                  height={400}
                  className="rounded-[calc(1.5rem-3px)] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#13131a] px-4 py-2 shadow-xl"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-white/80">
                  Available for work
                </span>
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="flex w-full justify-around gap-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-1 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-center backdrop-blur-sm"
                >
                  <span className="text-2xl font-bold text-[#e2c97e]">{s.value}</span>
                  <span className="text-[11px] text-white/40">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ══ RIGHT — Text ══ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex w-full flex-col gap-6 md:w-3/5"
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-5xl font-black leading-tight tracking-tight text-white md:text-6xl ${poppins.className}`}
            >
              Crafting Digital
              <br />
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Experiences
              </span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-px w-24 bg-gradient-to-r from-[#7c3aed] via-[#0ea5e9] to-transparent"
            />

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              {/* First paragraph always visible */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className="text-[15px] leading-7 text-white/60"
              >
                {paragraphs[0]}
              </motion.p>

              {/* Remaining paragraphs toggle */}
              <AnimatePresence initial={false}>
                {show &&
                  paragraphs.slice(1).map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeInOut' }}
                      className="overflow-hidden text-[15px] leading-7 text-white/60"
                    >
                      {para}
                    </motion.p>
                  ))}
              </AnimatePresence>
            </div>

            {/* See more / less */}
            <motion.button
              onClick={() => setShow(!show)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-fit items-center gap-2 text-sm font-medium text-[#e2c97e] transition-opacity hover:opacity-80"
            >
              {show ? 'See less' : 'Read more'}
              <motion.span
                animate={{ y: show ? -2 : 2 }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.6 }}
              >
                {show ? <FaAngleUp /> : <FaAngleDown />}
              </motion.span>
            </motion.button>

            {/* Skill chips */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
              className="mt-2 flex flex-wrap gap-2"
            >
              {['Next.js', 'React', 'javascript', 'Tailwind CSS', 'Socket Io', 'Express js', 'MongoDB', 'Mongoose', 'Webrtc', 'html', 'css'].map(
                (skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08, backgroundColor: 'rgba(124,58,237,0.25)' }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
                    viewport={{ once: true }}
                    className="cursor-default rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5 text-xs font-medium text-[#a78bfa] backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}