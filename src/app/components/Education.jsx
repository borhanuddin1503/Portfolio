'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { poppins } from '../layout'
import { FaGraduationCap, FaBookOpen, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export default function Education() {
  const educationList = [
    {
      title: 'Diploma in Computer Science & Technology',
      institute: 'Feni Polytechnic Institute',
      year: '2023 – Present',
      description:
        'Currently pursuing a diploma with a focus on modern web development, backend systems, and software solutions. Building strong foundations in programming, database management, and full-stack application development.',
      icon: '🎓',
      location: 'Feni, Bangladesh',
      courses: [
        'Web Development',
        'Database Management',
        'Object-Oriented Programming',
        'Data Structures',
      ],
    },
    {
      title: 'Secondary School Certificate (SSC) - Science',
      institute: 'Uttar Alipur School and College',
      year: '2022',
      description:
        'Completed SSC with GPA 4.83 in Science under Comilla Board. Developed strong foundations in Mathematics, Physics, and Computer Applications.',
      icon: '📘',
      location: 'Comilla, Bangladesh',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Studies'],
    },
  ]

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#0a0a0f] py-2"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0ea5e9] opacity-5 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#7c3aed] opacity-5 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-[#e2c97e] opacity-5 blur-[100px]" />
      </div>

      {/* ── Dot-grid texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Timeline decorative line (hidden on mobile) ── */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-[#7c3aed]/20 via-[#e2c97e]/20 to-transparent md:block" />

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
            Academic Journey
          </span>
        </motion.div>

        {/* ── Section Heading ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className={`text-4xl font-black leading-tight tracking-tight text-white md:text-5xl ${poppins.className}`}
          >
            My{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Education
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 h-px w-24 bg-gradient-to-r from-[#7c3aed] via-[#0ea5e9] to-transparent"
          />
        </motion.div>

        {/* ── Education Cards Grid ── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#e2c97e]/30 hover:shadow-2xl hover:shadow-[#7c3aed]/10">
                {/* Glowing gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 via-transparent to-[#0ea5e9]/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Icon and Year row */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#0ea5e9]/20 text-3xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:from-[#7c3aed]/30 group-hover:to-[#0ea5e9]/30">
                      {edu.icon}
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-[#e2c97e]/20 bg-[#e2c97e]/5 px-3 py-1">
                      <FaCalendarAlt className="h-3 w-3 text-[#e2c97e]" />
                      <span className="text-xs font-medium text-[#e2c97e]/80">
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`mb-2 text-xl font-bold text-white md:text-2xl ${poppins.className}`}
                  >
                    {edu.title}
                  </h3>

                  {/* Institute with location */}
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <p className="text-sm font-medium text-[#a78bfa]">
                      {edu.institute}
                    </p>
                    {edu.location && (
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="h-3 w-3 text-white/30" />
                        <span className="text-xs text-white/30">
                          {edu.location}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-white/50">
                    {edu.description}
                  </p>

                  {/* Courses / Key Subjects */}
                  {edu.courses && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                        Key Subjects
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05, duration: 0.35 }}
                            viewport={{ once: true }}
                            className="rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-3 py-1 text-xs font-medium text-[#a78bfa] backdrop-blur-sm"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden">
                  <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-r from-[#7c3aed]/20 to-[#0ea5e9]/20" />
                </div>

                {/* Bottom gradient bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7c3aed]/0 via-[#e2c97e]/50 to-[#0ea5e9]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Additional Info / Stats ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#0ea5e9]/20">
                <FaGraduationCap className="text-2xl text-[#e2c97e]" />
              </div>
              <div>
                <p className="text-sm text-white/40">Current Status</p>
                <p className="font-medium text-white">
                  Actively pursuing Diploma in CSE
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-white/5 md:h-12 md:w-px" />

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#0ea5e9]/20">
                <FaBookOpen className="text-2xl text-[#e2c97e]" />
              </div>
              <div>
                <p className="text-sm text-white/40">CGPA / GPA</p>
                <p className="font-medium text-white">SSC: 4.83 | Diploma: Ongoing</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}