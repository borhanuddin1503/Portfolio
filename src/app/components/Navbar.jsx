'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiAward, FiBookOpen, FiMail } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: 'hero', icon: FiHome },
  { name: 'About', path: 'about', icon: FiUser },
  { name: 'Skills', path: 'skills', icon: FiCode },
  { name: 'Projects', path: 'projects', icon: FiCode },
  { name: 'Education', path: 'education', icon: FiBookOpen },
  { name: 'Certification', path: 'certification', icon: FiAward },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  // Detect scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const pathName = usePathname()

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      height: 0,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
             'bg-[#0a0a0f]/95 backdrop-blur-xl shadow-2xl shadow-[#7c3aed]/10 border-b border-white/5' 
        }`}
        ref={navRef}
      >
        {/* Animated gradient border on scroll */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#e2c97e] to-transparent"
          />
        )}

        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 md:px-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#0ea5e9] to-[#e2c97e] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60" />
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="relative h-10 w-auto object-contain"
                />
              </div>
              <span className="hidden font-bold text-white md:inline-block">
                Borhan<span className="text-[#e2c97e]">.</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                {pathName === '/' ? (
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    spy={true}
                    activeClass="active-nav-link"
                    className="group relative cursor-pointer px-4 py-2 text-sm font-medium text-white/60 transition-all duration-300 hover:text-[#e2c97e]"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                  </ScrollLink>
                ) : (
                  <Link
                    href={`/#${link.path}`}
                    className="group relative px-4 py-2 text-sm font-medium text-white/60 transition-all duration-300 hover:text-[#e2c97e]"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="ml-4"
            >
              {pathName === '/' ? (
                <ScrollLink to="contact" smooth={true} duration={600} offset={-70}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c3aed]/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <FiMail className="h-3.5 w-3.5" />
                      Contact Me
                    </span>
                    <motion.span
                      className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20"
                      animate={{ translateX: ['-100%', '200%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </motion.button>
                </ScrollLink>
              ) : (
                <Link href="/#contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c3aed]/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <FiMail className="h-3.5 w-3.5" />
                      Contact Me
                    </span>
                    <motion.span
                      className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20"
                      animate={{ translateX: ['-100%', '200%'] }}
                      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm">
              {menuOpen ? (
                <FiX className="h-5 w-5 text-white" />
              ) : (
                <FiMenu className="h-5 w-5 text-white" />
              )}
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-[72px] z-40 overflow-hidden md:hidden"
          >
            <div className="mx-4 rounded-2xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {pathName === '/' ? (
                      <ScrollLink
                        to={link.path}
                        smooth={true}
                        duration={600}
                        offset={-70}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-[#e2c97e]"
                      >
                        <link.icon className="h-4 w-4" />
                        {link.name}
                      </ScrollLink>
                    ) : (
                      <Link
                        href={`/#${link.path}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-[#e2c97e]"
                      >
                        <link.icon className="h-4 w-4" />
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-2 pt-2 border-t border-white/10"
                >
                  {pathName === '/' ? (
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={600}
                      offset={-70}
                      onClick={() => setMenuOpen(false)}
                    >
                      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/20 transition-all duration-300">
                        <FiMail className="h-4 w-4" />
                        Contact Me
                      </button>
                    </ScrollLink>
                  ) : (
                    <Link href="/#contact" onClick={() => setMenuOpen(false)}>
                      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/20 transition-all duration-300">
                        <FiMail className="h-4 w-4" />
                        Contact Me
                      </button>
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add global styles for active nav link */}
      <style jsx global>{`
        .active-nav-link {
          color: #e2c97e !important;
        }
        .active-nav-link span:last-child {
          width: 100% !important;
          left: 0 !important;
        }
      `}</style>
    </>
  )
}