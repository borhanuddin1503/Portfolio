'use client'
import React from 'react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { poppins } from '../layout'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f] p-6 md:p-0"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#7c3aed] opacity-10 blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0ea5e9] opacity-10 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-[#e2c97e] opacity-5 blur-[100px]" />
      </div>

      {/* ── Dot-grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Thin top accent line ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 h-[2px] w-full origin-left"
        style={{
          background: 'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
        }}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-20 md:gap-12 px-6 md:flex-row md:justify-between md:px-20">

        {/* ══ LEFT — Text ══ */}
        <div className="flex flex-col gap-7 md:w-1/2">

          {/* Label pill */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-widest text-[#e2c97e] uppercase backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.2)}>
            <h1
              className={`text-5xl font-black leading-[1.1] tracking-tight text-white md:text-7xl ${poppins.className}`}
            >
              Hi, I'm{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Borhan
              </span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex items-center gap-1 text-xl font-semibold text-white/70 md:text-2xl"
          >
            <Typewriter
              words={['Creative Web Designer', 'MERN Stack Developer', 'Next.js Enthusiast']}
              loop={0}
              cursor={false}
              typeSpeed={75}
              deleteSpeed={45}
              delaySpeed={2500}
            />
            <motion.span
              className="text-[#e2c97e]"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.45)}
            className="max-w-md text-[15px] leading-7 text-white/50"
          >
            I craft elegant and responsive web applications using{' '}
            <span className="font-semibold text-[#e2c97e]">Next.js</span>,{' '}
            <span className="font-semibold text-[#e2c97e]">React</span>, and{' '}
            <span className="font-semibold text-[#e2c97e]">Tailwind CSS</span> — turning
            ideas into seamless digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-4">
            {/* Primary — Download Resume */}
            <motion.a
              href="/Resume/borhan_resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
              }}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20"
                animate={{ translateX: ['−100%', '200%'] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path d="M12 3v13m0 0l-4-4m4 4l4-4M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
              </svg>
              Download Resume
            </motion.a>

            {/* Secondary — View Work */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm transition-colors hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
            >
              View My Work
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.65)} className="flex items-center gap-4 relative z-10">
            <span className="text-xs text-white/30 uppercase tracking-widest">Find me on</span>
            <span className="h-px w-6 bg-white/10" />
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -3, color: '#e2c97e' }}
                className="text-white/30 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ══ RIGHT — Image ══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center md:w-1/2 md:justify-end z-5"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #7c3aed22, #0ea5e922, #e2c97e44, #7c3aed22)',
              borderRadius: '50%',
              filter: 'blur(1px)',
            }}
          />

          {/* Glowing halo */}
          <div
            className="absolute inset-8 rounded-full opacity-40 blur-2xl"
            style={{
              background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
            }}
          />

          {/* Image frame */}
          <div className="relative z-10">
            {/* Conic border */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-[3px] rounded-[2rem]"
              style={{
                background: 'conic-gradient(from 0deg, #7c3aed, #0ea5e9, #e2c97e, #7c3aed)',
                borderRadius: '2rem',
              }}
            />
            <div className="relative overflow-hidden rounded-[calc(2rem-3px)] bg-[#0a0a0f] p-[3px]">
              <Image
                src="/images/borhan.png"
                alt="Borhan Uddin"
                width={420}
                height={460}
                className="rounded-[calc(2rem-6px)] object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle overlay gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[calc(2rem-6px)]"
                style={{
                  background:
                    'linear-gradient(to top, #0a0a0f55 0%, transparent 50%)',
                }}
              />
            </div>

            {/* Floating tech badge — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring' }}
              className="absolute -right-6 top-8 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#13131a]/90 px-4 py-2 shadow-xl backdrop-blur-sm"
            >
              <span className="text-lg">⚡</span>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] text-white/40">Stack</span>
                <span className="text-xs font-semibold text-white/80">Next.js + React</span>
              </div>
            </motion.div>

            {/* Floating experience badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
              className="absolute -left-6 bottom-10 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#13131a]/90 px-4 py-2 shadow-xl backdrop-blur-sm"
            >
              <span className="text-lg">🚀</span>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] text-white/40">Experience</span>
                <span className="text-xs font-semibold text-white/80">2+ Years</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-5 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-[#e2c97e]" />
        </motion.div>
      </motion.div>
    </section>
  )
}