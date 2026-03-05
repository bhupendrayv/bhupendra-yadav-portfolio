import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Portfolio
                        </span>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Building the future with AI & Cloud.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/bhupendrayv" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                            <FaGithub className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:bhupendrayadav2077@gmail.com" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                            <FaEnvelope className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-100 dark:border-slate-800 pt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Software Engineer Student. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
