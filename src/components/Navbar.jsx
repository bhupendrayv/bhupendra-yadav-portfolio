import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const menuItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
        { name: 'Resume', to: `${import.meta.env.BASE_URL}resume.html`, isLink: true },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Brand removed as requested */}
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                item.isLink ? (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                        </button>
                        <a href="https://github.com/bhupendrayv" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                            <FaGithub className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                            <FaLinkedin className="h-5 w-5" />
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            item.isLink ? (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800"
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
