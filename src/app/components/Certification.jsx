'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { poppins } from '../layout'
import { FaCertificate, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Certification = () => {
  return (
    <section
      id="certification"
      className="relative overflow-hidden bg-[#0a0a0f] py-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0ea5e9] opacity-5 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#7c3aed] opacity-5 blur-[120px]" />
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
            Credentials
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          {/* ══ LEFT — Certificate Image ══ */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative w-full lg:w-2/5"
          >
            {/* Glowing ring behind image 1 */}
            <motion.div
              className="absolute -inset-[6px] rounded-2xl overflow-hidden"
            >

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-25 rounded-2xl"
                style={{
                  background:
                    'conic-gradient(from 0deg, #7c3aed, #0ea5e9, #e2c97e, #7c3aed)',
                  borderRadius: '1rem',
                  zIndex: 0,
                }}
              >

              </motion.div>
            </motion.div>


            {/* Image container */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-[#0a0a0f] p-[3px]">
              <div className="relative overflow-hidden rounded-[calc(1rem-3px)]">
                <Image
                  src="/images/certificate.PNG"
                  alt="MERN Stack Development Certificate"
                  width={500}
                  height={380}
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, #0a0a0f55 0%, transparent 30%)',
                  }}
                />
              </div>
            </div>

            {/* Floating badge - Certificate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#13131a]/90 px-4 py-2 shadow-xl backdrop-blur-sm"
            >
              <FaCertificate className="text-lg text-[#e2c97e]" />
              <span className="text-xs font-medium text-white/80">
                Verified Certificate
              </span>
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — Certificate Info ══ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-4xl font-black leading-tight tracking-tight text-white md:text-5xl ${poppins.className}`}
            >
              MERN Stack Web
              <br />
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Development Certification
              </span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="my-6 h-px w-24 bg-gradient-to-r from-[#7c3aed] via-[#0ea5e9] to-transparent"
            />

            {/* Details Grid */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
              >
                <FaUserGraduate className="text-lg text-[#e2c97e]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    Issued by
                  </p>
                  <p className="text-sm font-medium text-white/80">
                    Programming Hero
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
              >
                <FaCalendarAlt className="text-lg text-[#e2c97e]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    Issued Date
                  </p>
                  <p className="text-sm font-medium text-white/80">2025</p>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
              className="text-[15px] leading-7 text-white/60"
            >
              Successfully completed the comprehensive{' '}
              <span className="font-semibold text-[#e2c97e]">
                MERN Stack Web Development
              </span>{' '}
              course, mastering{' '}
              <span className="font-semibold text-[#e2c97e]">React</span>,{' '}
              <span className="font-semibold text-[#e2c97e]">JavaScript</span>,{' '}
              <span className="font-semibold text-[#e2c97e]">Node.js</span>,{' '}
              <span className="font-semibold text-[#e2c97e]">Express.js</span>,{' '}
              <span className="font-semibold text-[#e2c97e]">MongoDB</span>, and{' '}
              <span className="font-semibold text-[#e2c97e]">Tailwind CSS</span>.
              Through project-based learning and real-world assignments, I've
              gained the skills to build modern, responsive, and full-featured
              web applications.
            </motion.p>


          </motion.div>
        </div>
      </div>
    </section >
  )
}

export default Certification