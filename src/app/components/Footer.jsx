// src/app/components/Footer.jsx
'use client'
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const socialLinks = [
        { icon: <FaGithub />, href: 'https://github.com/borhanuddin1503', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/borhan-uddin-8a4867349/', label: 'LinkedIn' },
        { icon: <FaFacebook />, href: 'https://www.facebook.com/borhan.uddin.tanim.2024', label: 'Facebook' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 text-center">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
                {/* Social Icons */}
                <div className="flex gap-6 text-2xl">
                    {socialLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>

                {/* Text */}
                <p className="text-sm mt-2">
                    © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Borhan Uddin</span>. All rights reserved.
                </p>
                <p className="text-xs text-gray-500">
                    Designed & Developed with ❤️ using Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
