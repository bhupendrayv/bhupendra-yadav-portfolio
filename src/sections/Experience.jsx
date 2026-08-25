import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCode, FaDatabase, FaCloud, FaGitAlt, FaBrain, FaEye,
  FaCheckCircle, FaExternalLinkAlt, FaCertificate, FaCalendarAlt,
  FaBuilding, FaMicroscope, FaChevronDown, FaChevronUp, FaTimes
} from 'react-icons/fa';
import { MdAutoAwesome, MdScience } from 'react-icons/md';

/* ─── Safe whileInView viewport config ───────────────────────
   amount:0  → triggers the instant ANY pixel enters the viewport
   margin    → starts animation 80px before the element reaches the edge
   once:true → animate only once (no re-trigger on scroll back)
─────────────────────────────────────────────────────────────── */
const VP = { once: true, amount: 0, margin: '0px 0px -80px 0px' };

/* ─── Data ───────────────────────────────────────────────── */
const experiences = [
  {
    id: 'smartbridge',
    role: 'Salesforce Developer Intern',
    company: 'SmartBridge',
    companyType: 'EdTech & Training',
    period: '2025',
    duration: '3 Months',
    type: 'internship',
    gradient: 'from-blue-500 via-cyan-400 to-blue-600',
    glowColor: 'rgba(59,130,246,0.35)',
    borderGlow: '#3b82f6',
    accentColor: '#60a5fa',
    logoIcon: <FaCloud className="w-5 h-5 text-blue-400" />,
    highlights: [
      { icon: <FaCode className="w-3.5 h-3.5" />, text: 'Developed Salesforce CRM solutions using Apex, SOQL, Flow Builder, and Lightning Components.' },
      { icon: <MdAutoAwesome className="w-3.5 h-3.5" />, text: 'Automated business processes using Salesforce Flow, reducing manual effort significantly.' },
      { icon: <FaDatabase className="w-3.5 h-3.5" />, text: 'Customized objects, fields, validation rules, and reports to meet business requirements.' },
      { icon: <FaBuilding className="w-3.5 h-3.5" />, text: 'Collaborated in Agile development cycles with sprint planning and daily standups.' },
      { icon: <FaGitAlt className="w-3.5 h-3.5" />, text: 'Worked with Git version control and Salesforce deployment tools.' },
    ],
    tech: [
      { label: 'Salesforce', color: '#3b82f6' },
      { label: 'Apex', color: '#8b5cf6' },
      { label: 'SOQL', color: '#06b6d4' },
      { label: 'Flow Builder', color: '#3b82f6' },
      { label: 'Lightning', color: '#f59e0b' },
      { label: 'Git', color: '#f97316' },
    ],
    certificatePath: '/salesforce_cert.png',
    hasProject: false,
  },
  {
    id: 'srm',
    role: 'Research Intern',
    company: 'SRM University AP',
    companyType: 'Academic Research',
    period: '2026',
    duration: '2 Months',
    type: 'research',
    gradient: 'from-purple-500 via-violet-500 to-pink-500',
    glowColor: 'rgba(139,92,246,0.35)',
    borderGlow: '#8b5cf6',
    accentColor: '#a78bfa',
    logoIcon: <MdScience className="w-5 h-5 text-purple-400" />,
    projectTitle: 'Malaria Detection from Blood Smear Images',
    highlights: [
      { icon: <FaBrain className="w-3.5 h-3.5" />, text: 'Built a deep learning pipeline to classify blood smear images as malaria-infected or uninfected using the NIH dataset (27,558 images)' },
      { icon: <MdScience className="w-3.5 h-3.5" />, text: 'Designed and compared 4 architectures — Custom CNN, VGG19, ResNet50, and CNN-BiLSTM' },
      { icon: <MdAutoAwesome className="w-3.5 h-3.5" />, text: 'Achieved 96.84% accuracy and 0.99 AUC-ROC with a custom CNN, outperforming transfer-learning models' },
      { icon: <FaDatabase className="w-3.5 h-3.5" />, text: 'Implemented the full ML workflow — preprocessing, augmentation, training, and evaluation (accuracy, precision, recall, F1, AUC-ROC)' },
      { icon: <FaCloud className="w-3.5 h-3.5" />, text: 'Deployed a Flask web app for real-time malaria prediction and conducted error analysis via confusion matrices' },
    ],
    tech: [
      { label: 'Python', color: '#3b82f6' },
      { label: 'OpenCV', color: '#06b6d4' },
      { label: 'Machine Learning', color: '#8b5cf6' },
      { label: 'Deep Learning', color: '#ec4899' },
      { label: 'CNN', color: '#f59e0b' },
      { label: 'Image Processing', color: '#10b981' },
    ],
    certLink: null,
    hasProject: true,
  },
];

/* ─── Floating Orb ───────────────────────────────────────── */
const FloatingOrb = ({ style, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none dark:opacity-10 opacity-5"
    style={{ background: color, filter: 'blur(70px)', ...style }}
    animate={{ y: [0, -25, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  />
);

/* ─── Tech Badge ─────────────────────────────────────────── */
// Uses `animate` (not whileInView) because it lives inside a card that
// already triggered its own scroll animation — nested IntersectionObservers
// can race and miss the trigger, leaving badges invisible.
const TechBadge = ({ label, color, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.7, y: 8 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.35, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.1, y: -2 }}
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold cursor-default select-none"
    style={{
      background: `${color}18`,
      border: `1px solid ${color}45`,
      color: color,
      boxShadow: `0 0 8px ${color}25`,
    }}
  >
    {label}
  </motion.span>
);

/* ─── Highlight Row ──────────────────────────────────────── */
// Same rationale: uses `animate` + transition delay instead of whileInView.
const HighlightRow = ({ icon, text, accentColor, delay }) => (
  <motion.li
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-start gap-3 group"
  >
    <span
      className="mt-0.5 p-1.5 rounded-md shrink-0 transition-all duration-300 group-hover:scale-110"
      style={{ background: `${accentColor}20`, color: accentColor }}
    >
      {icon}
    </span>
    <span className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-slate-200 transition-colors duration-200">
      {text}
    </span>
  </motion.li>
);

/* ─── Experience Card ────────────────────────────────────── */
const ExperienceCard = ({ exp, index, onViewCert }) => {
  const [expanded, setExpanded] = useState(false);

  const [period, setPeriod] = useState(exp.period);
  const [isEditingYear, setIsEditingYear] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.25 + 0.15, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="relative rounded-xl overflow-hidden cursor-default group flex flex-col h-full bg-white dark:bg-slate-900/75 backdrop-blur-xl border border-gray-200 dark:border-transparent shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300"
      style={{
        borderColor: undefined,
      }}
      onHoverStart={e => {
        if (!e?.currentTarget) return;
        e.currentTarget.style.boxShadow = `0 12px 35px rgba(0,0,0,0.15), 0 0 20px ${exp.glowColor}`;
        e.currentTarget.style.borderColor = `${exp.borderGlow}60`;
      }}
      onHoverEnd={e => {
        if (!e?.currentTarget) return;
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = '';
      }}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`} />

      {/* Inner glow */}
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 0%, ${exp.borderGlow}12 0%, transparent 70%)` }}
      />

      <div className="p-4 sm:p-5 md:p-6 relative flex flex-col flex-1">
        {/* Icon + Badge Row */}
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.3, type: 'spring', stiffness: 200 }}
            className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: `linear-gradient(135deg, ${exp.borderGlow}40, ${exp.borderGlow}20)`,
              border: `2px solid ${exp.borderGlow}60`,
              boxShadow: `0 0 12px ${exp.glowColor}`,
            }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {exp.logoIcon}
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ border: `1.5px solid ${exp.borderGlow}`, borderRadius: '50%' }}
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.25 + 0.3 }}
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
            style={{
              background: `${exp.accentColor}15`,
              border: `1px solid ${exp.accentColor}30`,
              color: exp.accentColor,
            }}
          >
            {exp.type === 'internship' ? <FaBuilding className="w-2.5 h-2.5" /> : <FaMicroscope className="w-2.5 h-2.5" />}
            {exp.type === 'internship' ? 'Internship' : 'Research'}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.25 + 0.4 }}
            className="ml-auto flex items-center gap-2"
          >
            {isEditingYear ? (
              <input
                type="text"
                value={period}
                autoFocus
                onBlur={() => setIsEditingYear(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === 'Escape') {
                    setIsEditingYear(false);
                  }
                }}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-16 px-2 py-0.5 text-xs font-semibold text-center rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary bg-white dark:bg-slate-800 text-gray-800 dark:text-white"
                style={{ borderColor: exp.borderGlow }}
              />
            ) : (
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditingYear(true)}
                title="Click to change year"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg cursor-pointer transition-colors"
                style={{
                  background: `${exp.borderGlow}18`,
                  border: `1px solid ${exp.borderGlow}35`,
                  color: exp.accentColor,
                }}
              >
                <FaCalendarAlt className="w-3 h-3" />
                {period}
              </motion.button>
            )}
            <span className="text-[11px] text-slate-500 font-medium">{exp.duration}</span>
          </motion.div>
        </div>

        {/* Title & Company */}
        <h3
          className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-0.5 leading-tight"
          style={{ textShadow: `0 0 15px ${exp.accentColor}30` }}
        >
          {exp.role}
        </h3>

        {exp.projectTitle && (
          <p className="text-xs font-medium mb-0.5" style={{ color: exp.accentColor }}>
            📌 {exp.projectTitle}
          </p>
        )}

        <p className="text-gray-500 dark:text-slate-400 text-xs font-medium mb-4">
          {exp.company}
          <span className="mx-1.5 text-gray-400 dark:text-slate-600">·</span>
          <span className="text-gray-400 dark:text-slate-500">{exp.companyType}</span>
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase mb-3 w-full"
            style={{ color: exp.accentColor }}
            whileHover={{ x: 2 }}
          >
            <span className="w-3 h-px" style={{ background: exp.accentColor }} />
            Key Highlights
            <motion.span
              animate={{ rotate: expanded ? 0 : -90 }}
              transition={{ duration: 0.25 }}
              className="ml-auto opacity-60"
            >
              {expanded ? <FaChevronUp className="w-2.5 h-2.5" /> : <FaChevronDown className="w-2.5 h-2.5" />}
            </motion.span>
          </motion.button>

          <div
            style={{
              overflow: 'hidden',
              maxHeight: expanded ? '500px' : '0px',
              opacity: expanded ? 1 : 0,
              transition: 'max-height 0.35s ease, opacity 0.3s ease',
            }}
          >
            <ul className="space-y-2">
              {exp.highlights.map((h, i) => (
                <HighlightRow
                  key={i}
                  icon={h.icon}
                  text={h.text}
                  accentColor={exp.accentColor}
                  delay={index * 0.25 + i * 0.08 + 0.3}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold tracking-wider uppercase text-gray-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
            <span className="w-3 h-px bg-gray-300 dark:bg-slate-600" />
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t, i) => (
              <TechBadge
                key={i}
                label={t.label}
                color={t.color}
                delay={index * 0.15 + i * 0.05 + 0.5}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons — pushed to bottom */}
        <div className="flex flex-wrap gap-2.5 pt-3 border-t mt-auto" style={{ borderColor: `${exp.borderGlow}20` }}>
          {exp.certificatePath && (
            <motion.button
              type="button"
              onClick={() => onViewCert && onViewCert(exp)}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${exp.borderGlow}30, ${exp.borderGlow}15)`,
                border: `1px solid ${exp.borderGlow}50`,
                color: exp.accentColor,
                boxShadow: `0 2px 10px ${exp.glowColor}`,
              }}
            >
              <FaCertificate className="w-3.5 h-3.5" />
              View Certificate
              <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-60" />
            </motion.button>
          )}
          {exp.hasProject && (
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
              style={{
                background: `linear-gradient(135deg, ${exp.borderGlow}30, ${exp.borderGlow}15)`,
                border: `1px solid ${exp.borderGlow}50`,
                color: exp.accentColor,
                boxShadow: `0 2px 10px ${exp.glowColor}`,
              }}
            >
              <FaEye className="w-3.5 h-3.5" />
              View Project
              <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-60" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ───────────────────────────────────────── */
const Experience = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeCert, setActiveCert] = useState(null);

  const handleViewCert = (exp) => {
    if (exp.certificatePath) {
      setActiveCert(exp);
      const fullPath = exp.certificatePath.startsWith('/')
        ? `${import.meta.env.BASE_URL}${exp.certificatePath.slice(1)}`
        : exp.certificatePath;
      setPreviewUrl(fullPath);
    }
  };

  const closeModal = () => {
    setPreviewUrl(null);
    setActiveCert(null);
  };

  return (
    <section
      id="experience"
      className="relative py-16 w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#070c1a] dark:via-[#0d1229] dark:to-[#070c1a] transition-colors duration-300"
    >
      {/* Background Orbs */}
      <FloatingOrb style={{ width: 400, height: 400, top: '-10%', left: '-15%' }} color="#3b82f6" />
      <FloatingOrb style={{ width: 350, height: 350, bottom: '5%', right: '-10%' }} color="#8b5cf6" />
      <FloatingOrb style={{ width: 250, height: 250, top: '40%', right: '25%' }} color="#06b6d4" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block text-[11px] font-bold uppercase tracking-widest mb-2 text-primary dark:text-blue-400"
          >
            Professional Journey
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Work{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 mx-auto rounded-full origin-center mb-4"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />

          <p className="text-gray-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Hands-on internships and research work that shaped my technical skills and problem-solving mindset.
          </p>
        </motion.div>

        {/* Horizontal Grid — both cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} onViewCert={handleViewCert} />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {activeCert?.role} - {activeCert?.company} Certificate
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-slate-700 rounded-full transition-colors cursor-pointer"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="p-2 flex-1 overflow-auto flex items-center justify-center">
                <img
                  src={previewUrl}
                  alt="Certificate Preview"
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
