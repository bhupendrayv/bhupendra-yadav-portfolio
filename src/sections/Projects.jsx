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
    gradientFrom: '#1e1b4b',
    gradientTo: '#312e81',
    accentColor: '#818cf8',
    glowColor: 'rgba(99,102,241,0.3)',
    icon: <FaShoppingCart />,
    techIcons: [<FaReact className="text-cyan-400" />, <FaNodeJs className="text-green-400" />, <SiMongodb className="text-green-500" />, <SiStripe className="text-indigo-400" />],
  },
  {
    id: 'taskapp',
    title: 'Task Management App',
    description:
      'Collaborative Kanban-style task manager with real-time updates, drag-and-drop boards, and team workspaces for enhanced productivity.',
    tags: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
    tagColors: ['#61dafb', '#f59e0b', '#7c3aed', '#06b6d4'],
    gradientFrom: '#1a1a2e',
    gradientTo: '#16213e',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.3)',
    icon: <FaTasks />,
    techIcons: [<FaReact className="text-cyan-400" />, <SiFirebase className="text-amber-400" />, <SiRedux className="text-purple-400" />, <FaCode className="text-blue-400" />],
  },
];

/* ─── Animated code lines (decorative) ──────────────────── */
const CodeLine = ({ width, delay, color }) => (
  <motion.div
    className="h-1.5 rounded-full"
    style={{ width, background: color, opacity: 0.25 }}
    animate={{ opacity: [0.15, 0.4, 0.15], scaleX: [1, 1.05, 1] }}
    transition={{ duration: 2.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

/* ─── Featured Real Project Card ─────────────────────────── */
const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-transparent border border-gray-200 dark:border-transparent shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
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
      <div className="absolute top-2 left-2">
        <span
          className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
          style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.5)', color: '#34d399' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Bottom title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-sm" style={{ color: project.accentColor }}>{project.icon}</span>
          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{project.subtitle}</span>
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white">{project.title}</h3>
      </div>
    </div>

    {/* Card body */}
    <div className="p-4 bg-gray-50 dark:bg-slate-900/85 backdrop-blur-sm">
      <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed mb-3">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
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
      <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-slate-700/50">
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
    whileHover={{ y: -5, transition: { duration: 0.25 } }}
    className="group relative rounded-2xl overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
      border: `1px solid ${project.accentColor}25`,
      boxShadow: `0 8px 32px rgba(0,0,0,0.35)`,
      transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      minHeight: '280px',
    }}
    onHoverStart={e => {
      e.currentTarget.style.boxShadow = `0 20px 55px rgba(0,0,0,0.5), 0 0 25px ${project.glowColor}`;
      e.currentTarget.style.borderColor = `${project.accentColor}50`;
    }}
    onHoverEnd={e => {
      e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.35)`;
      e.currentTarget.style.borderColor = `${project.accentColor}25`;
    }}
  >
    {/* Animated gradient orb */}
    <motion.div
      className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
      style={{ background: project.accentColor, filter: 'blur(60px)', opacity: 0.08 }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.13, 0.06] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Top accent bar */}
    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

    {/* In Development badge */}
    <div className="absolute top-4 right-4 z-10">
      <motion.span
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
        style={{
          background: `${project.accentColor}20`,
          border: `1px solid ${project.accentColor}45`,
          color: project.accentColor,
        }}
      >
        <MdBolt className="w-3 h-3" />
        In Development
      </motion.span>
    </div>

    <div className="p-4 relative z-10 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-2.5 mb-3">
        <div
          className="p-2 rounded-lg text-base"
          style={{ background: `${project.accentColor}20`, color: project.accentColor }}
        >
          {project.icon}
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h3>
          <p className="text-[10px] text-slate-500 mt-0.5">Coming Soon</p>
        </div>
      </div>

      {/* Animated code-line decorations */}
      <div className="space-y-1.5 mb-3">
        <CodeLine width="75%" delay={0} color={project.accentColor} />
        <CodeLine width="55%" delay={0.4} color={project.accentColor} />
        <CodeLine width="65%" delay={0.8} color={project.accentColor} />
      </div>

      {/* Description */}
      <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed mb-3">{project.description}</p>

      {/* Tech icons row */}
      <div className="flex items-center gap-2.5 mb-3">
        {project.techIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="text-base"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{
              background: `${project.tagColors[i] || project.accentColor}18`,
              border: `1px solid ${project.tagColors[i] || project.accentColor}35`,
              color: project.tagColors[i] || project.accentColor,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Locked buttons */}
      <div className="flex gap-2 pt-3 border-t mt-auto" style={{ borderColor: `${project.accentColor}15` }}>
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold opacity-40 cursor-not-allowed select-none"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
        >
          <FaLock className="w-2.5 h-2.5" /> GitHub
        </div>
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold opacity-40 cursor-not-allowed select-none"
          style={{ background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}25`, color: project.accentColor }}
        >
          <FaLock className="w-2.5 h-2.5" /> Live Demo
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

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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

        <p className="text-gray-500 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto">
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


      {/* Live project row */}
      <div className="mb-8">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Live Projects
        </motion.p>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-xl gap-6">
          {realProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Coming soon row */}
      <div>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2"
        >
          <MdBolt className="text-amber-400 animate-pulse" />
          In Development
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingProjects.map((project, i) => (
            <ComingSoonCard key={project.id} project={project} index={i} />
          ))}
        </div>
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
