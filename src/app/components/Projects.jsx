'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { poppins } from '../layout'
import { FaGithub, FaExternalLinkAlt, FaServer } from 'react-icons/fa'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
    hover: {
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
}

export default function Projects() {
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
                'I Chat is a modern real-time messaging platform built with Next.js that supports instant messaging, audio/video calling, voice messaging, image sharing, active status tracking, and live typing indicators.',
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

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#0a0a0f] py-20"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* ── Ambient blobs ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#7c3aed] opacity-5 blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0ea5e9] opacity-5 blur-[140px]" />
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] rounded-full bg-[#e2c97e] opacity-5 blur-[100px]" />
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
                        Portfolio
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
                        Featured{' '}
                        <span
                            style={{
                                backgroundImage:
                                    'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Projects
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

                {/* ── Projects Grid ── */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, margin: '-50px' }}
                            className="h-full"
                        >
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#e2c97e]/30 hover:shadow-2xl hover:shadow-[#7c3aed]/10">
                                {/* Glowing gradient overlay on hover */}
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 via-transparent to-[#0ea5e9]/5" />
                                </div>

                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={400}
                                        height={250}
                                        className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Tech stack overlay on image */}
                                    <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full bg-gradient-to-t from-[#0a0a0f] to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.stack.slice(0, 4).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-full bg-[#7c3aed]/20 px-2 py-0.5 text-[10px] font-medium text-[#a78bfa] backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.stack.length > 4 && (
                                                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/50">
                                                    +{project.stack.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content - Takes remaining space */}
                                <div className="relative z-10 flex flex-1 flex-col p-6">
                                    <h3
                                        className={`mb-3 text-xl font-bold text-white ${poppins.className}`}
                                    >
                                        {project.name}
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/50">
                                        {project.description}
                                    </p>

                                    {/* Spacer to push buttons to bottom */}
                                    <div className="flex-1" />

                                    {/* Action Buttons - Always at bottom */}
                                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7c3aed]/30"
                                        >
                                            View Details
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                className="h-3.5 w-3.5"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>

                                        <div className="flex gap-2">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -2 }}
                                                className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white/40 transition-all duration-300 hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
                                                title="Client Repository"
                                            >
                                                <FaGithub className="h-4 w-4" />
                                            </motion.a>
                                            {project.server_repo && (
                                                <motion.a
                                                    href={project.server_repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ y: -2 }}
                                                    className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white/40 transition-all duration-300 hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
                                                    title="Server Repository"
                                                >
                                                    <FaServer className="h-4 w-4" />
                                                </motion.a>
                                            )}
                                            <motion.a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -2 }}
                                                className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white/40 transition-all duration-300 hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
                                                title="Live Demo"
                                            >
                                                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                                    <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-r from-[#7c3aed]/20 to-[#0ea5e9]/20" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── View More Link ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={projects.length}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#e2c97e]/40 hover:text-[#e2c97e]"
                    >
                        <span>Interested in more? Let's talk</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}