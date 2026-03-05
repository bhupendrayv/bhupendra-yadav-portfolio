import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import mediconnectImg from '../assets/mediconnect.png';

const ProjectCard = ({ title, description, tags, links, delay, image }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all group"
    >
        <div className="h-48 bg-gray-200 dark:bg-slate-700 flex items-center justify-center relative overflow-hidden">
            {/* Project Image or Placeholder */}
            {image ? (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </>
            ) : (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <FaFolderOpen className="text-6xl text-gray-400 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500" />
                </>
            )}

            <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white text-xl font-bold drop-shadow-md">{title}</h3>
            </div>
        </div>

        <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-xs font-medium dark:text-gray-300 rounded">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center mt-auto border-t border-gray-100 dark:border-slate-700 pt-4">
                <div className="flex gap-4">
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                        <FaGithub /> GitHub
                    </a>
                    <a href={links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "MediConnect-Assistant",
            description: "A modern MERN-stack healthcare platform enabling seamless patient–doctor connectivity with automated appointment scheduling, role-based dashboards, and an AI Health Assistant.",
            tags: ["MERN Stack", "React", "Node.js", "AI Integration", "MongoDB"],
            links: { github: "https://github.com/bhupendrayv/MediConnect-Assistant", live: "https://medi-connect-assistant.vercel.app" },
            image: mediconnectImg
        }
    ];

    return (
        <SectionContainer id="projects" className="bg-white dark:bg-slate-900">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} delay={index * 0.1} />
                ))}
            </div>
        </SectionContainer>
    );
};

export default Projects;
