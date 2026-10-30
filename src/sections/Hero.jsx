import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaFileAlt } from 'react-icons/fa';
import { FaJava, FaPython, FaReact, FaBrain, FaSalesforce } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 pt-20 sm:pt-24 lg:pt-20 pb-0 transition-colors duration-300"
        >
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

                    {/* Left Column: Brand, Name, Tagline, Bio & Actions */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pl-0 sm:pl-4 lg:pl-8 xl:pl-10"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >

                        {/* Large Headline: First Name dark, Last Name bright cyan/sky blue */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase font-display select-none">
                            <span className="text-slate-800 dark:text-slate-100 font-extrabold mr-3">
                                BHUPENDRA
                            </span>
                            <span className="text-sky-500 dark:text-sky-400 font-bold">
                                YADAV
                            </span>
                        </h1>

                        {/* Bold Uppercase Sub-Banner Tagline */}
                        <div className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base tracking-wider uppercase font-semibold text-slate-500 dark:text-slate-400">
                            <span>TURNING IDEAS INTO IMPACT WITH </span>
                            <span className="text-sky-500 dark:text-sky-400 font-bold">AI & FULL STACK</span>
                        </div>

                        {/* Description Paragraph with clean modern typography */}
                        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
                            Full Stack Developer and AI/ML specialist with Salesforce and medical imaging research experience.
                            Leveraging modern frameworks, deep learning, and intuitive user experiences to engineer scalable, high-impact digital solutions.
                        </p>

                        {/* Social Circle Icon Pills (Facebook/Twitter/LinkedIn/GitHub) */}
                        <div className="mt-8 flex items-center gap-3.5">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-700 hover:bg-sky-500 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:shadow-sky-500/40"
                            >
                                <FaLinkedinIn className="text-base sm:text-lg" />
                            </a>
                            <a
                                href="https://github.com/bhupendrayv"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-700 hover:bg-slate-900 dark:hover:bg-sky-500 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:shadow-sky-500/40"
                            >
                                <FaGithub className="text-base sm:text-lg" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-700 hover:bg-sky-400 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:shadow-sky-400/40"
                            >
                                <FaTwitter className="text-base sm:text-lg" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-700 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:shadow-blue-600/40"
                            >
                                <FaFacebookF className="text-sm sm:text-base" />
                            </a>
                        </div>

                        {/* Quick CTA Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                            <a
                                href={`${import.meta.env.BASE_URL}resume.html`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm tracking-wide"
                            >
                                <FaFileAlt className="text-xs" />
                                <span>VIEW RESUME</span>
                            </a>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="px-7 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide"
                            >
                                VIEW PROJECTS
                            </Link>
                        </div>

                        {/* Tech Stack Subtle Row */}
                        <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-5 text-slate-400 dark:text-slate-500">
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

                    {/* Right Column: Circular Portrait (adjusted slightly leftward) */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center lg:justify-end items-start self-start order-1 lg:order-2 lg:mr-2 -mt-2 sm:-mt-4 lg:-mt-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Decorative circular ambient back-glow */}
                            <div className="absolute inset-0 bg-sky-400/25 dark:bg-sky-500/20 rounded-full blur-2xl transform scale-110 pointer-events-none"></div>

                            {/* Circle frame displaying your original authentic photo */}
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-sky-400/40 dark:border-sky-500/40 shadow-2xl bg-white dark:bg-slate-800">
                                <img
                                    src={`${import.meta.env.BASE_URL}profile_photo.jpg`}
                                    alt="Bhupendra Yadav"
                                    className="w-full h-full object-cover object-top select-none transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;


