import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython,
  FaCode, FaRocket, FaHospital, FaShoppingCart, FaTasks, FaLock
} from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiRedux, SiStripe } from 'react-icons/si';
import { MdBolt } from 'react-icons/md';
import mediconnectImg from '../assets/mediconnect.png';

/* ─── Safe viewport ─────────────────────────────────────── */
const VP = { once: true, amount: 0, margin: '0px 0px -60px 0px' };

/* ─── Data ───────────────────────────────────────────────── */
const realProjects = [
  {
    id: 'mediconnect',
    title: 'MediConnect Assistant',
    subtitle: 'Healthcare Platform',
    description:
      'A modern MERN-stack healthcare platform enabling seamless patient–doctor connectivity with automated appointment scheduling, role-based dashboards, and an AI Health Assistant powered by natural language.',
    tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'AI Integration'],
    tagColors: ['#3b82f6', '#61dafb', '#68a063', '#47a248', '#8b5cf6'],
    github: 'https://github.com/bhupendrayv/MediConnect-Assistant',
    live: 'https://medi-connect-assistant.vercel.app',
    image: mediconnectImg,
    accentColor: '#3b82f6',
    icon: <FaHospital />,
    status: 'live',
  },
];

const upcomingProjects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce app with product browsing, secure authentication, cart management, and Stripe payment gateway integration.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    tagColors: ['#61dafb', '#68a063', '#f97316', '#47a248', '#6772e5'],
    accentColor: '#818cf8',
    icon: <FaShoppingCart />,
    progressValue: '75%',
    progressText: 'Backend: 90% | Frontend: 60%',
  },
  {
    id: 'taskapp',
    title: 'Task Management App',
    description:
      'Collaborative Kanban-style task manager with real-time updates, drag-and-drop boards, and team workspaces for enhanced productivity.',
    tags: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
    tagColors: ['#61dafb', '#f59e0b', '#7c3aed', '#06b6d4'],
    accentColor: '#f59e0b',
    icon: <FaTasks />,
    progressValue: '45%',
    progressText: 'Core UI: 80% | Firebase: 10%',
  },
];

/* ─── Featured Real Project Card ─────────────────────────── */
const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-transparent border border-gray-200 dark:border-transparent shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col"
    style={{
      ...(typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? { border: `1px solid ${project.accentColor}30` } : {}),
    }}
    onHoverStart={e => {
      e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.15), 0 0 30px ${project.accentColor}30`;
    }}
    onHoverEnd={e => {
      e.currentTarget.style.boxShadow = '';
    }}
  >
    {/* Top accent bar */}
    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accentColor}, #8b5cf6, #06b6d4)` }} />
    
    {/* Project Image */}
    <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-slate-800">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent dark:from-slate-900/80 dark:via-slate-900/20 dark:to-transparent" />

      {/* Status badge */}
      <div className="absolute top-2 left-2 z-10">
        <span
          className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
          style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.5)', color: '#34d399' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Bottom title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-sm" style={{ color: project.accentColor }}>{project.icon}</span>
          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{project.subtitle}</span>
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white">{project.title}</h3>
      </div>
    </div>

    {/* Card body */}
    <div className="p-4 bg-gray-50 dark:bg-slate-900/85 backdrop-blur-sm flex-1 flex flex-col">
      <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed mb-3">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{
              background: `${project.tagColors[i] || '#3b82f6'}18`,
              border: `1px solid ${project.tagColors[i] || '#3b82f6'}40`,
              color: project.tagColors[i] || '#3b82f6',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-slate-700/50 mt-auto">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.12] text-gray-700 dark:text-slate-200"
        >
          <FaGithub className="w-3 h-3" /> GitHub
        </motion.a>
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}cc, #8b5cf6cc)`,
            boxShadow: `0 3px 10px ${project.accentColor}40`,
          }}
        >
          <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
);

/* ─── Coming Soon Card ───────────────────────────────────── */
const ComingSoonCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-transparent border border-gray-200 dark:border-transparent shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col"
    style={{
      ...(typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? { border: `1px solid ${project.accentColor}30` } : {}),
    }}
    onHoverStart={e => {
      e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.15), 0 0 30px ${project.accentColor}20`;
    }}
    onHoverEnd={e => {
      e.currentTarget.style.boxShadow = '';
    }}
  >
    {/* Top accent bar */}
    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />
    
    {/* Project Image Placeholder */}
    <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-slate-800/80 flex items-center justify-center">
      {/* Wireframe Mockup */}
      <div className="absolute inset-0 p-4 grid grid-cols-4 gap-2 opacity-20 filter blur-[2px]">
        <div className="col-span-4 h-4 bg-slate-500 rounded"></div>
        <div className="col-span-1 h-20 bg-slate-500 rounded"></div>
        <div className="col-span-3 h-20 bg-slate-500 rounded"></div>
        <div className="col-span-2 h-10 bg-slate-500 rounded"></div>
        <div className="col-span-2 h-10 bg-slate-500 rounded"></div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-white/10 dark:from-slate-900/90 dark:via-slate-900/50 dark:to-slate-900/20" />

      {/* Status badge */}
      <div className="absolute top-2 left-2 z-10">
        <span
          className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
          style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}50`, color: project.accentColor }}
        >
          <MdBolt className="w-2.5 h-2.5 animate-pulse" />
          In Development
        </span>
      </div>

      {/* Bottom title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-sm" style={{ color: project.accentColor }}>{project.icon}</span>
          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Coming Soon</span>
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white">{project.title}</h3>
      </div>
    </div>

    {/* Card body */}
    <div className="p-4 bg-gray-50 dark:bg-slate-900/85 backdrop-blur-sm flex-1 flex flex-col">
      {/* Progress Indicator */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-slate-700/50 rounded-full overflow-hidden border border-gray-300 dark:border-slate-700">
          <div className="h-full rounded-full" style={{ width: project.progressValue, background: project.accentColor }}></div>
        </div>
        <span className="text-[10px] font-medium text-gray-500 dark:text-slate-400 whitespace-nowrap">{project.progressText}</span>
      </div>

      <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed mb-3">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{
              background: `${project.tagColors[i] || project.accentColor}18`,
              border: `1px solid ${project.tagColors[i] || project.accentColor}40`,
              color: project.tagColors[i] || project.accentColor,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons (Disabled state) */}
      <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-slate-700/50 mt-auto">
        <div
          title="Available on release"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-gray-400 dark:text-slate-500 cursor-not-allowed select-none"
        >
          <FaLock className="w-3 h-3 opacity-50" /> GitHub
        </div>
        <div
          title="Available on release"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] text-gray-400 dark:text-slate-500 cursor-not-allowed select-none"
        >
          <FaLock className="w-3 h-3 opacity-50" /> Live Demo
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Main Section ───────────────────────────────────────── */
const Projects = () => (
  <section
    id="projects"
    className="relative py-12 w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0f1e] dark:to-[#060b18] transition-colors duration-300"
  >
    {/* Subtle background orbs */}
    <motion.div
      className="absolute top-20 left-[-10%] w-96 h-96 rounded-full pointer-events-none dark:opacity-[0.05] opacity-[0.03]"
      style={{ background: '#3b82f6', filter: 'blur(80px)' }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 right-[-5%] w-72 h-72 rounded-full pointer-events-none dark:opacity-[0.06] opacity-[0.03]"
      style={{ background: '#8b5cf6', filter: 'blur(70px)' }}
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 0.8 }}
          className="inline-block text-xs font-bold uppercase tracking-widest mb-4 text-primary dark:text-blue-400"
        >
          Portfolio
        </motion.span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Projects
          </span>
        </h2>

        <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Real-world applications built with modern tech stacks — and more exciting projects on the way.
        </p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-20 h-1 mx-auto mt-6 rounded-full origin-left"
          style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
        />
      </motion.div>


      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {realProjects.map((project, i) => (
          <FeaturedCard key={project.id} project={project} index={i} />
        ))}
        {upcomingProjects.map((project, i) => (
          <ComingSoonCard key={project.id} project={project} index={realProjects.length + i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 dark:text-slate-500 text-sm mb-4">See all my work on GitHub</p>
        <motion.a
          href="https://github.com/bhupendrayv"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-gray-800 to-gray-700 dark:from-slate-800 dark:to-slate-700 border border-gray-300 dark:border-white/10 shadow-lg dark:shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-xl transition-all duration-300"
        >
          <FaGithub className="w-4 h-4" />
          View GitHub Profile
          <FaExternalLinkAlt className="w-3 h-3 opacity-60" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
