'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { poppins } from '@/app/layout'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaServer, 
  FaCode, 
  FaExclamationTriangle,
  FaLightbulb,
  FaInfoCircle
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const projects = [
  {
    id: 'project-ichat',
    name: 'I Chat - Real Time Messaging Platform',
    image: '/images/i-chat-thumbnail.PNG',
    stack: [
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'Next Auth',
      'MongoDB',
      'mongoose',
      'Socket.IO',
      'WebRTC',
    ],
    description:
      'I Chat is a modern real-time messaging platform built with Next.js that supports instant messaging, audio/video calling, voice messaging, image sharing, active status tracking, and live typing indicators. The application delivers a smooth real-time communication experience using Socket.IO and WebRTC technologies.',
    liveLink: 'https://i-chat-bice.vercel.app/',
    github: 'https://github.com/borhanuddin1503/i-chat-client',
    server_repo: 'https://github.com/borhanuddin1503/i-chat-server',
    challenges:
      'Implementing stable real-time communication with Socket.IO, managing WebRTC peer connections for audio/video calls, handling incoming call UI with ringtone functionality, synchronizing active status and typing indicators in real time, optimizing message updates without unnecessary re-renders, and maintaining secure authentication and socket connections.',
    extra_info:
      'The platform includes real-time active status, live typing indicators, image sharing, voice messaging, audio/video calling with incoming call interface, call ringtone system, message delivery updates, profile management, and responsive UI for both desktop and mobile users.',
    future:
      'Planned improvements include group chats, screen sharing during calls, message reactions, read receipts, push notifications, message search functionality, and end-to-end encrypted communication.',
  },
  {
    id: 'project-roytech',
    name: 'RoyTech E-Commerce',
    image: '/images/roytech-ecommerce.png',
    stack: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'Socket.IO',
      'SSLCommerz',
      'Tailwind CSS',
      'Next Auth',
    ],
    description:
      'RoyTech is a full-featured e-commerce platform built with Next.js where frontend and backend are handled in the same project. It supports secure payments, real-time live chat, cart management, and a powerful admin dashboard.',
    liveLink: 'https://roy-tech-e-commerce.vercel.app',
    github: 'https://github.com/borhanuddin1503/RoyTech-Ecommerce-Website',
    challenges:
      'Implementing secure admin access on both client and API, integrating SSLCommerz payment gateway, managing real-time live chat with Socket.IO on a separate server, handling product CRUD with multiple images, and building a scalable admin dashboard.',
    extra_info:
      'Admin access is protected. Socket.IO server is hosted separately on Railway for real-time chat support.',
    future:
      'Planned improvements include advanced order analytics, role-based staff management, improved SEO with Next.js optimization, and AI-powered product recommendations.',
  },
  {
    id: 'project3',
    name: 'CoreX Gym',
    image: '/images/coreX-gym.png',
    stack: [
      'React',
      'Tailwind CSS',
      'Firebase',
      'Express Js',
      'Mongo DB',
      'React Query',
    ],
    description:
      'CoreX Gym is a modern fitness platform with user, trainer, and admin roles, featuring secure authentication, payments, and responsive design for a seamless experience.',
    liveLink: 'https://core-x-gym.netlify.app',
    github: 'https://github.com/borhanuddin1503/core-x-gym',
    server_repo: 'https://github.com/borhanuddin1503/core-x-server',
    challenges:
      'Admin Role, Trainer Role, User Role Implementation Admin Functionality, trainer functionality, payment system, review, Payment Stats for Admin, Theme toggle, profile Update',
    extra_info: 'admin_email: ne@loy.com, password: 123456',
    future:
      'Enhancing scalability and integrating AI features to provide intelligent insights and improve user experience across the website.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <section className="relative min-h-screen bg-[#0a0a0f] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8"
          >
            <FaExclamationTriangle className="mx-auto mb-4 text-5xl text-red-400" />
            <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
            <p className="mt-2 text-white/60">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/#projects"
              className="mt-6 inline-block rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-6 py-2 text-white transition-all hover:scale-105"
            >
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f] py-20 md:py-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#7c3aed] opacity-10 blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0ea5e9] opacity-10 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] rounded-full bg-[#e2c97e] opacity-5 blur-[100px]" />
      </div>

      {/* ── Dot-grid texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 backdrop-blur-sm transition-all hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Main Content - Image with text flowing beside and below */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {/* Image and Title Row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            {/* Left Side - Image */}
            <motion.div
              variants={fadeUp}
              className="relative md:w-2/5 lg:w-2/5"
            >
              {/* Image Container */}
              <div className="relative z-10 overflow-hidden rounded-2xl bg-[#0a0a0f] p-[3px]">
                <div className="relative overflow-hidden rounded-[calc(1rem-3px)]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={500}
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

              {/* Tech Stack Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#13131a]/90 px-4 py-2 shadow-xl backdrop-blur-sm"
              >
                <FaCode className="text-lg text-[#e2c97e]" />
                <span className="text-xs font-medium text-white/80">
                  {project.stack.length} Technologies
                </span>
              </motion.div>
            </motion.div>



            {/* Right Side - Basic Info (beside image) */}
            <motion.div variants={fadeUp} className="flex-1 md:w-3/5">
              {/* Title */}
              <h1
                className={`text-3xl font-black leading-tight tracking-tight text-white md:text-4xl lg:text-5xl ${poppins.className}`}
              >
                {project.name}
              </h1>
              <div className="mt-3 flex items-center gap-2">
                <MdVerified className="text-[#e2c97e]" />
                <span className="text-sm text-white/40">Full Stack Application</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-[15px] leading-7 text-white/60">
                {project.description}
              </p>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-gradient-to-r from-[#7c3aed] via-[#0ea5e9] to-transparent" />
              
            </motion.div>
          </div>

          {/* Full Details Section (flows under the image) */}
          <motion.div variants={fadeUp} className="mt-4">
            {/* Full Tech Stack (if needed) */}
            {project.stack.length > 6 && (
              <div className="mb-6">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#e2c97e]">
                  <FaCode className="h-3.5 w-3.5" />
                  Complete Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + idx * 0.03, duration: 0.35 }}
                      className="rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-3 py-1.5 text-xs font-medium text-[#a78bfa] backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Two Column Layout for Details */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Challenges */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                  <FaExclamationTriangle className="h-3.5 w-3.5" />
                  Key Challenges
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{project.challenges}</p>
              </div>

              {/* Future Improvements */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  <FaLightbulb className="h-3.5 w-3.5" />
                  Future Improvements
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{project.future}</p>
              </div>
            </div>

            {/* Extra Info */}
            {project.extra_info && (
              <div className="mt-6 rounded-xl border border-[#e2c97e]/20 bg-[#e2c97e]/5 p-5">
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#e2c97e]">
                  <FaInfoCircle className="h-3.5 w-3.5" />
                  Additional Information
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{project.extra_info}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-6 py-3 font-semibold text-white shadow-lg shadow-[#7c3aed]/20 transition-all hover:shadow-xl hover:shadow-[#7c3aed]/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  Live Demo
                </span>
                <motion.span
                  className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20"
                  animate={{ translateX: ['-100%', '200%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
              >
                <FaGithub className="h-4 w-4" />
                Client Repo
              </motion.a>

              {project.server_repo && (
                <motion.a
                  href={project.server_repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
                >
                  <FaServer className="h-4 w-4" />
                  Server Repo
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}