import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaJava, FaPython, FaReact, FaBrain, FaSalesforce, FaCode } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

const Hero = () => {
    return (
        <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-slate-900 dark:to-slate-800 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Text Content */}
                <div className="z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >

                        {/* Profile Image / Avatar Moved Here */}
                        <div className="my-6 flex justify-center relative font-normal">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 flex items-center justify-center relative bg-white p-2">
                                <img src="/profile_full_head.png" alt="Bhupendra Yadav" className="w-full h-full object-contain scale-110 brightness-110 contrast-110 saturate-110" style={{ filter: 'brightness(1.1) contrast(1.15) saturate(1.1)' }} />
                            </div>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold mb-4">
                            <span className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-300 mr-2">Hello, I'm</span>
                            <span className="text-gray-600 dark:text-gray-300">Bhupendra Yadav</span>
                        </h1>
                        <h3 className="text-3xl md:text-4xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                            Full Stack Developer
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Specializing in Generative AI, Cloud Computing, and Salesforce Development.
                            Building the future, one line of code at a time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary hover:bg-indigo-600 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-indigo-500/30">
                            View Resume
                        </a>
                        <Link to="projects" smooth={true} duration={500} className="px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-white font-medium rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer">
                            View Projects
                        </Link>
                    </motion.div>

                    {/* Tech Stack Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 flex gap-6 text-gray-400 dark:text-gray-500 justify-center"
                    >
                        <FaJava className="h-8 w-8 hover:text-[#007396] transition-colors" title="Java" />
                        <FaPython className="h-8 w-8 hover:text-[#3776AB] transition-colors" title="Python" />
                        <FaReact className="h-8 w-8 hover:text-[#61DAFB] transition-colors" title="React" />
                        <FaSalesforce className="h-8 w-8 hover:text-[#00A1E0] transition-colors" title="Salesforce" />
                        <SiOracle className="h-8 w-8 hover:text-[#F80000] transition-colors" title="Oracle" />
                        <FaBrain className="h-8 w-8 hover:text-purple-500 transition-colors" title="AI" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

