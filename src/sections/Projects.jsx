import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaHospital, FaCoffee, FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';
import mediconnectImg from '../assets/mediconnect.png';
import cafecoreImg from '../assets/cafecore.jpg';

/* ─── Projects Data ──────────────────────────────────────── */
const projects = [
  {
    id: 'mediconnect',
    title: 'MediConnect Assistant',
    badge: 'MERN + AI',
    tagline: 'Healthcare Connectivity Platform & AI Assistant',
    overview:
      'Full-stack healthcare portal enabling automated doctor appointment booking, secure role-based access, and an AI health assistant for instant symptom evaluation.',
    problemSolved:
      'Fragmented healthcare access, delayed consultation triage, and inefficient appointment scheduling.',
    contribution:
      'Engineered MERN architecture, JWT/RBAC auth, AI symptom evaluation assistant, Stripe checkout, and automated PDF receipts with verification QR codes.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe API', 'AI Integration'],
    keyFeatures: [
      'AI-driven natural language symptom analysis assistant',
      'Role-based access control (RBAC) & JWT authentication',
      'Stripe checkout for online consultation booking',
      'Automated PDF receipt generation with verification QR codes',
    ],
    status: 'Live',
    statusType: 'live',
    image: mediconnectImg,
    github: 'https://github.com/bhupendrayv/MediConnect-Assistant',
    live: 'https://medi-connect-assistant.vercel.app',
    icon: <FaHospital className="text-sky-400" />,
    accent: '#38bdf8',
  },
  {
    id: 'cafecore',
    title: 'CafeCore',
    badge: 'Production POS',
    tagline: 'Full-Stack POS & Business Management System',
    overview:
      'Point-of-sale platform handling multi-gateway orders and payments, live kitchen order dispatching, staff permissions, and dynamic sales analytics.',
    problemSolved:
      'Disorganized cafe orders, slow kitchen communication, and fragmented cash/digital billing tracking.',
    contribution:
      'Designed end-to-end full stack architecture, integrated multi-method billing (Stripe, UPI, Cash), built live kitchen order queue, and structured relational schemas.',
    technologies: ['JavaScript (ES6+)', 'Node.js', 'Express', 'SQLite / MySQL', 'Stripe API', 'HTML5 / CSS3'],
    keyFeatures: [
      'Multi-gateway payment processing (Stripe, UPI, Cash)',
      'Real-time kitchen order tracking with automated timers',
      'Visual sales analytics and business performance metrics',
      'Role-based controls for manager and cashier staff',
    ],
    status: 'Live',
    statusType: 'live',
    image: cafecoreImg,
    github: 'https://github.com/bhupendrayv/CafeCore',
    live: 'https://cafecore-frontend-liard.vercel.app/',
    icon: <FaCoffee className="text-amber-400" />,
    accent: '#f59e0b',
  },
  {
    id: 'spam-detection',
    title: 'Email & SMS Spam Detection',
    badge: 'ML & NLP',
    tagline: 'Intelligent Communication Classifier',
    overview:
      'End-to-end Natural Language Processing classification model that analyzes message linguistics to accurately detect phishing and unwanted spam messages.',
    problemSolved:
      'Phishing risks and spam clutter in digital communication channels.',
    contribution:
      'Built textual cleanup pipelines (tokenization, stemming, TF-IDF vectorization), evaluated supervised ML algorithms, and built an interactive prediction interface.',
    technologies: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'NumPy', 'Machine Learning'],
    keyFeatures: [
      'Automated NLP text preprocessing & TF-IDF feature extraction',
      'Comparative classifier model benchmarking (precision & recall)',
      'Instant spam/ham prediction on user-inputted communications',
      'Robust evaluation metrics against class-imbalanced datasets',
    ],
    status: 'Completed',
    statusType: 'completed',
    image: null,
    github: 'https://github.com/bhupendrayv',
    live: null,
    icon: <FaShieldAlt className="text-purple-400" />,
    accent: '#a855f7',
  },
];

/* ─── Compact & Perfectly Proportioned Project Card ──────── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
  >
    {/* Subtle top accent strip */}
    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, #6366f1)` }} />

    <div>
      {/* Scaled Visual Header (reduced height for clean compactness) */}
      <div className="relative h-36 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-1.5 shadow-inner"
              style={{ background: `${project.accent}15`, color: project.accent }}
            >
              {project.icon}
            </div>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {project.badge}
            </span>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          {project.statusType === 'live' ? (
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/90 text-white shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 dark:bg-slate-800/90 text-slate-200 border border-slate-700 shadow-sm backdrop-blur-sm">
              <FaCheckCircle className="text-emerald-400 text-[10px]" />
              {project.status}
            </span>
          )}
        </div>

        {/* Floating Category Pill */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
            {project.badge}
          </span>
        </div>
      </div>

      {/* Content Section with Tight Padding */}
      <div className="p-4 sm:p-5">
        {/* Title & Tagline */}
        <div className="mb-2.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 mt-0.5 truncate">
            {project.tagline}
          </p>
        </div>

        {/* Overview */}
        <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-3 line-clamp-2">
          {project.overview}
        </p>

        {/* Problem Solved Callout */}
        <div className="mb-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-750/50 border border-slate-200/70 dark:border-slate-700/60 text-[11px]">
          <p className="text-slate-700 dark:text-slate-300 leading-snug">
            <strong className="text-slate-900 dark:text-white font-semibold">Problem: </strong>
            {project.problemSolved}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
            Key Features
          </p>
          <ul className="space-y-1">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5 leading-snug">
                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actual Contribution */}
        <div className="mb-3.5 p-2.5 rounded-lg bg-sky-50/70 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40 text-[11px]">
          <p className="text-slate-700 dark:text-slate-300 leading-snug">
            <strong className="text-sky-700 dark:text-sky-400 font-semibold">Contribution: </strong>
            {project.contribution}
          </p>
        </div>

        {/* Technology Badges */}
        <div>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Footer Link Buttons */}
    <div className="p-4 sm:p-5 pt-0">
      <div className="flex gap-2 pt-3 border-t border-slate-200 dark:border-slate-700/70">
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <FaExternalLinkAlt className="text-[10px]" />
            <span>Live Demo</span>
          </motion.a>
        )}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-650 transition-colors cursor-pointer ${
            project.live ? 'flex-1' : 'w-full'
          }`}
        >
          <FaGithub className="text-xs" />
          <span>GitHub</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

/* ─── Main Section ───────────────────────────────────────── */
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-14 sm:py-16 w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-1.5 inline-block">
            Featured Builds
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Projects{' '}
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto rounded-full mb-3" />
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Production full-stack web applications and machine learning classification systems.
          </p>
        </div>

        {/* Proportional 3-column Grid on desktop, 2-column on tablet, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
