import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                            Bhupendra Yadav
                        </span>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            AI/ML Engineer & Full Stack Developer · Turning ideas into impact.
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/bhupendrayv"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-sky-500 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                        >
                            <FaGithub className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bhupendra-yadav-a968632b5"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:bhupendrayadav2077@gmail.com"
                            aria-label="Send Email"
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-500 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                        >
                            <FaEnvelope className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 dark:border-slate-800/80 pt-6 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} Bhupendra Yadav. Built with React, Tailwind CSS, & Vite. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
