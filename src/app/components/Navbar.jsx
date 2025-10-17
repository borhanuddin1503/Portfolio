'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = ['About', 'Skills', 'projects', 'education'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);


  // Detect clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const pathName = usePathname();

  return (
    <nav className="sticky w-full top-0 left-0 bg-white/90 backdrop-blur-md shadow-md z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto flex justify-between  items-center p-4">
        {/* Logo */}
        <div>
          <Link href={'/'}><img src="/images/logo.png" alt="Logo" className="h-10" /></Link>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center md:flex gap-8 font-medium text-gray-800">
          {navLinks.map((link, i) => (
            pathName === '/' ?
              <ScrollLink
                key={i}
                to={link.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-40}
                spy={true}
                className="relative cursor-pointer font-medium text-gray-800 
               transition-all duration-300 ease-in-out 
               hover:text-purple-600"
              >
                {link}
              </ScrollLink>
              :
              <Link key={i} href={`/#${link.toLowerCase()}`}>{link}</Link>
          ))}
          {pathName === '/' ?
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-40}
            >
              <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg w-full cursor-pointer">
                Contact Me
              </button>
            </ScrollLink> :
            <Link href={`/#contact`} className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg w-full cursor-pointer">Contact Me</Link>
          }
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div // Attach ref for outside click detection
          className="md:hidden absolute w-full border-t border-gray-400 text-center bg-white/95 backdrop-blur-2xl shadow-lg flex flex-col gap-4 p-6 font-medium text-gray-800"
        >
          {navLinks.map((link, i) => (
            pathName === '/' ?
              <ScrollLink
                key={i}
                to={link.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-40}
                spy={true}
                onClick={() => setMenuOpen(false)}
                className="relative cursor-pointer font-medium text-gray-800 "
              >
                {link}
              </ScrollLink>
              :
              <Link key={i} href={`/#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</Link>
          ))}
          {pathName === '/' ?
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              onClick={() => setMenuOpen(false)}
              offset={-40}
            >
              <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg w-full cursor-pointer">
                Contact Me
              </button>
            </ScrollLink> :
            <Link href={`/#contact`} className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg w-full cursor-pointer" onClick={() => setMenuOpen(false)}>Contact Me</Link>
          }
        </div>
      )}
    </nav>
  );
}
