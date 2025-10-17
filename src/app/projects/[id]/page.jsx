'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import { Fraunces } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "900"] });

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

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) return <p className="text-center py-10">Project not found!</p>;

    return (
        <section className="bg-gray-50 px-6 py-10 md:py-20">
            <div className='max-w-6xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-10"
                >
                    {/* Left Side - Image */}
                    <div className="md:w-1/2 flex justify-center items-center">
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={500}
                            height={400}
                            className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right Side - Info */}
                    <div className="md:w-1/2 flex flex-col gap-4">
                        <h1 className={`text-4xl md:text-5xl font-bold ${fraunces.className} text-purple-600`}>
                            {project.name}
                        </h1>
                        <p className="text-gray-700 text-lg">{project.description}</p>

                        <div>
                            <h3 className="text-purple-600 font-semibold text-lg mb-1">Tech Stack:</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-600"><strong>Challenges:</strong> {project.challenges}</p>
                        <p className="text-gray-600"><strong>Future Improvements:</strong> {project.future}</p>

                        {project.server_repo && (
                            <p className="text-gray-600"><strong>Server Repo:</strong> <Link href={project.server_repo} target="_blank" className="text-blue-500 underline">{project.server_repo}</Link></p>
                        )}

                        {project.extra_info && (
                            <p className="text-gray-600"><strong>Extra Info:</strong> {project?.extra_info}</p>
                        )}

                        <div className="flex gap-4 mt-4 flex-wrap">
                            <Link href={project.liveLink} target="_blank" className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                                Live Project
                            </Link>
                            <Link href={project.github} target="_blank" className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                                GitHub Repo
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
