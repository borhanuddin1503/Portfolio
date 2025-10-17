'use client'
import React from 'react';
import { Fraunces } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["400", "900"],
    style: ["normal", "italic"],
});

export default function Projects() {
    const projects = [
        {
            id: 'project1',
            name: "CoreX Gym",
            image: "/images/coreX-gym.png",
            stack: ["React", "Tailwind CSS", "Firebase", "Express Js", "Mongo DB", "React Query"],
           description: "CoreX Gym is a modern fitness platform with user, trainer, and admin roles, featuring secure authentication, payments, and responsive design for a seamless experience.",
            liveLink: "https://core-x-gym.netlify.app",
            github: "https://github.com/borhanuddin1503/core-x-gym",
            server_repo: 'https://github.com/borhanuddin1503/core-x-server',
            challenges: "Admin Role, Trainer Role, User Role Implementation Admin Functionality, trainer functionality, payment system, review, Payment Stats for Admin, Theme toggle, profile Update",
            extra_info: 'admin_email: ne@loy.com, password: 123456',
            future: "Enhancing scalability and integrating AI features to provide intelligent insights and improve user experience across the website."
        },
        {
            id: 'project2',
            name: "My Blog Website",
            image: "/images/blog.PNG",
            stack: ["React", "Firebase", "Tailwind CSS", "React Router", "Mongo DB", "Express js"],
            description: "A fully responsive blog website where users can read, comment, and explore posts. The website features user authentication, dynamic content.",
            liveLink: "https://elegant-snickerdoodle-3d55a8.netlify.app/",
            github: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-borhanuddin1503",
            server_repo: "https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-borhanuddin1503",
            challenges: "Implementing dynamic content fetching, authentication, and managing state across multiple components. Wishlist, Comments, Add Blog Featured Blogs, theme toggle ",
            future: "Add admin dashboard for managing posts, implement better SEO, and enhance performance and accessibility."
        },
        {
            id: 'project3',
            name: "HobbyHub",
            image: "/images/hobby-hub.PNG",
            stack: ["React", "Firebase", "Tailwind CSS", "React Router", "Express", "MongoDB"],
            description: "HobbyHub is a platform for hobby enthusiasts to share and explore hobbies. Users can browse hobbies, add new hobbies, and interact with the community in a responsive and engaging interface.",
            liveLink: "https://vermillion-concha-e2c392.netlify.app/",
            github: "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-borhanuddin1503",
            server_repo: "https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-borhanuddin1503",
            challenges: "Implementing user authentication,theme toggle, CRUD operations for hobbies, and managing real-time interactions.",
            future: "Add search and filter functionality, improve UI/UX, and integrate more social features for community engagement."
        }

    ];
    return (
        <section id="projects" className="relative bg-gray-50 overflow-hidden py-10  sm:py-15">
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col gap-12">
                <h2 className={`text-4xl md:text-5xl font-extrabold ${fraunces.className}  text-purple-600`}>
                    My Projects
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: idx * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <div  className="bg-white/50 h-full backdrop-blur-md shadow-lg rounded-xl overflow-hidden hover:scale-102 transition-transform duration-300 flex flex-col justify-between">
                                <div>
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 flex flex-col gap-4">
                                        <h3 className={`text-2xl md:text-3xl font-bold ${fraunces.className} text-purple-600`}>
                                            {project.name}
                                        </h3>
                                        <p className="text-gray-600">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='p-6 pt-0'>
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
