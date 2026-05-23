'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMessageCircle, FiSend, FiUser, FiMail as FiMailIcon, FiEdit2 } from 'react-icons/fi'
import { poppins } from '../layout'
import { sendEmail } from '../actions/sendEmail'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.subject.trim() === '' || formData.message.trim() === '') {
            return
        }

        setIsSubmitting(true)
        try {
            const newFormData = new FormData();
            newFormData.append('name', formData.name)
            newFormData.append('email', formData.email)
            newFormData.append('subject', formData.subject)
            newFormData.append('message', formData.message)


            const res = await sendEmail(newFormData);
            if (res.success) {
                setShowSuccess(true)
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })
            }

            setTimeout(() => {
                setShowSuccess(false)
            }, 3000);
        } finally {
            setIsSubmitting(false)
        }

    }

    const contactMethods = [
        {
            icon: FiMail,
            title: 'Email',
            value: 'borhanuddin1503@gmail.com',
            link: 'mailto:borhanuddin1503@gmail.com',
            color: 'from-purple-500 to-pink-500',
            delay: 0,
        },
        {
            icon: FiPhone,
            title: 'Phone',
            value: '+880 1641670628',
            link: 'tel:+8801641670628',
            color: 'from-blue-500 to-cyan-500',
            delay: 0.1,
        },
        {
            icon: FiMessageCircle,
            title: 'WhatsApp',
            value: '+880 1641670628',
            link: 'https://wa.me/8801641670628',
            color: 'from-green-500 to-emerald-500',
            delay: 0.2,
        },
    ]

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#0a0a0f] py-20"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* ── Ambient blobs ── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#7c3aed] opacity-5 blur-[140px]" />
                <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0ea5e9] opacity-5 blur-[140px]" />
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
                        Connect With Me
                    </span>
                </motion.div>

                {/* ── Section Heading ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-12 text-center lg:text-left"
                >
                    <h2
                        className={`text-4xl font-black leading-tight tracking-tight text-white md:text-5xl ${poppins.className}`}
                    >
                        Get In{' '}
                        <span
                            style={{
                                backgroundImage:
                                    'linear-gradient(90deg, #7c3aed, #0ea5e9, #e2c97e)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Touch
                        </span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-[#7c3aed] via-[#0ea5e9] to-transparent lg:mx-0"
                    />
                    <p className="mt-4 text-white/50">
                        Feel free to reach out for collaborations, projects, or just a friendly hello!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* ══ LEFT — Contact Methods ══ */}
                    <div className="space-y-6">
                        {contactMethods.map((method, idx) => (
                            <motion.a
                                key={method.title}
                                href={method.link}
                                target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                custom={idx}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, x: 8 }}
                                className="group block"
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#e2c97e]/30 hover:shadow-2xl hover:shadow-[#7c3aed]/10">
                                    <div className="flex items-center gap-5">
                                        {/* Icon Container */}
                                        <div
                                            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} bg-opacity-20 shadow-lg transition-all duration-300 group-hover:scale-110`}
                                        >
                                            <method.icon className="text-2xl text-white" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white">{method.title}</h3>
                                            <p className="text-sm text-white/60">{method.value}</p>
                                        </div>

                                        {/* Arrow indicator */}
                                        <div className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#e2c97e]">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                className="h-5 w-5"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Hover gradient overlay */}
                                    <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/5 to-[#0ea5e9]/5" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Availability Badge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={3}
                            viewport={{ once: true }}
                            className="mt-8 rounded-2xl border border-dashed border-[#e2c97e]/20 bg-[#e2c97e]/5 p-4 text-center"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>
                                <span className="text-sm font-medium text-white/70">
                                    Usually responds within 24 hours
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* ══ RIGHT — Contact Form ══ */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={4}
                        viewport={{ once: true }}
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8">
                            {/* Form Header */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#0ea5e9]/20">
                                    <FiEdit2 className="text-lg text-[#e2c97e]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Send a Message</h3>
                                    <p className="text-xs text-white/40">Fill out the form below</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Field */}
                                <div className="group">
                                    <label className="mb-2 block text-xs font-medium text-white/60">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <FiUser className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-[#e2c97e]" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-[#e2c97e]/50 focus:bg-white/[0.06] focus:shadow-lg focus:shadow-[#7c3aed]/10"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="group">
                                    <label className="mb-2 block text-xs font-medium text-white/60">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <FiMailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-[#e2c97e]" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-[#e2c97e]/50 focus:bg-white/[0.06] focus:shadow-lg focus:shadow-[#7c3aed]/10"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="group">
                                    <label className="mb-2 block text-xs font-medium text-white/60">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <FiEdit2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-[#e2c97e]" />
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-[#e2c97e]/50 focus:bg-white/[0.06] focus:shadow-lg focus:shadow-[#7c3aed]/10"
                                            placeholder="Project Collaboration / Job Opportunity"
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="group">
                                    <label className="mb-2 block text-xs font-medium text-white/60">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-[#e2c97e]/50 focus:bg-white/[0.06] focus:shadow-lg focus:shadow-[#7c3aed]/10"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#7c3aed]/30 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {/* Shimmer sweep */}
                                    <motion.span
                                        className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20"
                                        animate={!isSubmitting ? { translateX: ['-100%', '200%'] } : {}}
                                        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
                                    />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="h-4 w-4 animate-spin"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Opening Email...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                Send Message
                                            </>
                                        )}
                                    </span>
                                </motion.button>

                                {/* Success Message */}
                                <AnimatePresence>
                                    {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-center text-sm text-emerald-400"
                                        >
                                            ✨ Successfully sent! I'll get back to you soon. ✨
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </form>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden">
                                <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-r from-[#7c3aed]/20 to-[#0ea5e9]/20" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}