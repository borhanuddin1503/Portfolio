'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';
import {fraunces} from './About'

export default function Contact() {
    return (
        <section id="contact" className="relative bg-gray-50 overflow-hidden py-10 sm:py-15">
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col items-center lg:items-start gap-6">
                <h2 className={`text-4xl md:text-5xl font-extrabold ${fraunces.className} text-purple-600 `}>
                    Get in Touch
                </h2>
                <p className="text-gray-600 md:text-lg text-center lg:text-left">
                    Feel free to reach out for collaborations, projects, or just a friendly hello!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col items-center bg-white/50 backdrop-blur-md shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform duration-300 h-full">
                            <FiMail size={36} className="text-purple-500 mb-4" />
                            <h3 className={`text-xl text-black font-bold ${fraunces.className} mb-2`}>Email</h3>
                            <p className="text-gray-700">borhanuddin1503@gmail.com</p>
                        </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex flex-col items-center bg-white/50 backdrop-blur-md shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform duration-300 h-full">
                            <FiPhone size={36} className="text-purple-500 mb-4" />
                            <h3 className={`text-xl text-black font-bold ${fraunces.className} mb-2`}>Phone</h3>
                            <p className="text-gray-700">+880 1641670628</p>
                        </div>
                    </motion.div>

                    {/* WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex flex-col items-center bg-white/50 backdrop-blur-md shadow-2xl rounded-xl p-6 hover:scale-105 transition-transform duration-300 h-full">
                            <FiMessageCircle size={36} className="text-purple-500 mb-4" />
                            <h3 className={`text-xl text-black font-bold ${fraunces.className} mb-2`}>WhatsApp</h3>
                            <p className="text-gray-700">+880 1641670628</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
