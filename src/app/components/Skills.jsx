'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiFigma,
  SiAdobeillustrator, SiAdobephotoshop,
} from 'react-icons/si'
import { MdCode } from 'react-icons/md'
import SkillsBar from './SkillsBar'
import { poppins } from '../layout'

const skills = {
  Frontend: [
    { name: 'HTML',        level: 90, icon: <SiHtml5        size={18} className="text-orange-500" /> },
    { name: 'CSS',         level: 85, icon: <SiCss3         size={18} className="text-blue-400"   /> },
    { name: 'JavaScript',  level: 85, icon: <SiJavascript   size={18} className="text-yellow-400" /> },
    { name: 'React',       level: 80, icon: <SiReact        size={18} className="text-cyan-400"   /> },
    { name: 'Next.js',     level: 75, icon: <SiNextdotjs    size={18} className="text-white"      /> },
    { name: 'Tailwind CSS',level: 85, icon: <SiTailwindcss  size={18} className="text-teal-400"   /> },
  ],
  Backend: [
    { name: 'Node.js',    level: 70, icon: <SiNodedotjs size={18} className="text-green-500" /> },
    { name: 'Express.js', level: 65, icon: <SiExpress   size={18} className="text-white/60"  /> },
    { name: 'MongoDB',    level: 60, icon: <SiMongodb   size={18} className="text-green-400" /> },
  ],
  Tools: [
    { name: 'Git',               level: 85, icon: <SiGit              size={18} className="text-red-400"     /> },
    { name: 'VS Code',           level: 90, icon: <MdCode             size={18} className="text-blue-400"    /> },
    { name: 'Adobe Photoshop',   level: 70, icon: <SiAdobephotoshop   size={18} className="text-[#31A8FF]"   /> },
    { name: 'Adobe Illustrator', level: 70, icon: <SiAdobeillustrator size={18} className="text-[#FF9A00]"   /> },
  ],
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0f] py-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-[#7c3aed] opacity-[0.07] blur-[130px]" />
        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#0ea5e9] opacity-[0.07] blur-[130px]" />
      </div>

      {/* ── Dot-grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-20">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#e2c97e]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2c97e]">
            Skills
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className={`mb-4 text-4xl font-black tracking-tight text-white md:text-5xl ${poppins.className}`}
        >
          My{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Expertise
          </span>
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-14 max-w-lg text-[15px] leading-7 text-white/40"
        >
          A snapshot of the technologies and tools I work with daily to build
          modern, performant web applications.
        </motion.p>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          className="mb-14 h-px w-24 bg-gradient-to-r from-[#7c3aed] via-[#0ea5e9] to-transparent"
        />

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {Object.entries(skills).map(([category, list], idx) => (
            <SkillsBar key={idx} category={category} list={list} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}