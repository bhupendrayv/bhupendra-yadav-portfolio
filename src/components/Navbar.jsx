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
        <nav className="fixed w-full z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand / Monogram */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="flex items-center gap-2 cursor-pointer font-bold text-lg text-slate-800 dark:text-white hover:text-sky-500 transition-colors"
                    >
                        <span className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-sky-500/30">
                            BY
                        </span>
                        <span className="hidden sm:inline font-display text-xl tracking-wide uppercase">
                            Bhupendra <span className="text-sky-500">Yadav</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-1 lg:space-x-2">
                            {menuItems.map((item) => (
                                item.isLink ? (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Right Controls: Theme + Socials */}
                    <div className="hidden md:flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark/light theme"
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all cursor-pointer"
                        >
                            {theme === 'dark' ? <FaSun className="h-4 w-4 text-amber-400" /> : <FaMoon className="h-4 w-4 text-slate-600" />}
                        </button>
                        <a
                            href="https://github.com/bhupendrayv"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        >
                            <FaGithub className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bhupendra-yadav-a968632b5"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </a>
                    </div>

                    {/* Mobile Hamburger & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle dark/light theme"
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {theme === 'dark' ? <FaSun className="h-5 w-5 text-amber-400" /> : <FaMoon className="h-5 w-5 text-slate-600" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle mobile menu"
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all">
                    <div className="px-4 pt-3 pb-4 space-y-1">
                        {menuItems.map((item) => (
                            item.isLink ? (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                                    className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
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
