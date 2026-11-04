import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import { FaJava, FaPython, FaReact, FaBrain, FaSalesforce } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 pt-20 sm:pt-24 lg:pt-20 pb-8 transition-colors duration-300"
        >
            {/* Ambient background glow accents */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                    {/* Left Column: Brand, Name, Tagline, Bio & Actions */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pl-0 sm:pl-4 lg:pl-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Status / Welcome Pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-medium mb-4 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Available for Software Engineering & AI Roles</span>
                        </div>

                        {/* Large Headline */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase font-display select-none">
                            <span className="text-slate-800 dark:text-slate-100 font-extrabold mr-3">
                                BHUPENDRA
                            </span>
                            <span className="text-sky-500 dark:text-sky-400 font-bold">
                                YADAV
                            </span>
                        </h1>

                        {/* Professional Sub-Banner Tagline with explicit Role Badge */}
                        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                            <span className="px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                                AI/ML Engineer
                            </span>
                            <span className="text-slate-400 dark:text-slate-600">|</span>
                            <span className="px-3 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                                Full Stack Developer
                            </span>
                        </div>

                        {/* Professional Bio */}
                        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
                            Engineering intelligent, scalable systems across full-stack architectures and deep learning pipelines.
                            Equipped with proven experience in computer vision research, Salesforce enterprise automation, and cloud deployments.
                        </p>

                        {/* Action Buttons: Resume Download, Projects, Contact */}
                        <div className="mt-8 flex flex-wrap gap-3.5 items-center justify-center lg:justify-start">
                            <a
                                href={`${import.meta.env.BASE_URL}resume.html`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm tracking-wide"
                            >
                                <FaFileDownload className="text-sm" />
                                <span>Download Resume</span>
                            </a>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide"
                            >
                                View Projects
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="px-6 py-3 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide inline-flex items-center gap-2"
                            >
                                <FaEnvelope className="text-xs" />
                                <span>Contact Me</span>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-3">
                            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mr-1">Connect:</span>
                            <a
                                href="https://github.com/bhupendrayv"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-sky-500 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:scale-105"
                            >
                                <FaGithub className="text-lg" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bhupendra-yadav-a968632b5"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#0A66C2] text-slate-700 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:scale-105"
                            >
                                <FaLinkedinIn className="text-base" />
                            </a>
                        </div>

                        {/* Tech Stack Subtle Row */}
                        <div className="mt-7 pt-5 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400 dark:text-slate-500">
                            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Core Stack:</span>
                            <div className="flex items-center gap-4 text-xl">
                                <FaJava className="hover:text-[#007396] transition-colors" title="Java" />
                                <FaPython className="hover:text-[#3776AB] transition-colors" title="Python" />
                                <FaReact className="hover:text-[#61DAFB] transition-colors" title="React" />
                                <FaSalesforce className="hover:text-[#00A1E0] transition-colors" title="Salesforce" />
                                <SiOracle className="hover:text-[#F80000] transition-colors" title="Oracle" />
                                <FaBrain className="hover:text-purple-500 transition-colors" title="AI/ML" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Refined Profile Photo Presentation */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="relative group">
                            {/* Decorative ambient gradient backdrop ring */}
                            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500 via-indigo-500 to-cyan-400 rounded-3xl blur-xl opacity-30 dark:opacity-40 group-hover:opacity-60 transition duration-700 group-hover:duration-300 pointer-events-none" />

                            {/* Elevated Card with Rounded Borders and subtle rim */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-700/80 shadow-2xl bg-slate-100 dark:bg-slate-800">
                                <img
                                    src={`${import.meta.env.BASE_URL}profile_photo.jpg`}
                                    alt="Bhupendra Yadav - AI/ML Engineer & Full Stack Developer"
                                    className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="eager"
                                />
                                {/* Bottom vignette gradient for contrast */}
                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Focus Badge */}
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-xl px-4 py-2 flex items-center gap-3 backdrop-blur-md">
                                <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold text-lg">
                                    <FaBrain />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Specialization</p>
                                    <p className="text-xs font-bold text-slate-800 dark:text-white">AI/ML & Full Stack</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
