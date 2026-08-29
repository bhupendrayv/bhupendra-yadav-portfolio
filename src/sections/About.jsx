import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaAward, FaDatabase } from 'react-icons/fa';

const About = () => {
    const highlights = [
        {
            icon: (
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaAward className="text-2xl text-yellow-500" />
                </motion.div>
            ),
            title: "Oracle GenAI Certified",
            desc: "Generative AI Professional 2025"
        },
        {
            icon: (
                <motion.div
                    animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaLaptopCode className="text-2xl text-blue-500" />
                </motion.div>
            ),
            title: "Salesforce Intern",
            desc: "Real-world developer experience"
        },
        {
            icon: (
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaGraduationCap className="text-2xl text-green-500" />
                </motion.div>
            ),
            title: "Walmart Forage",
            desc: "Advanced Software Engineering"
        },
        {
            icon: (
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaDatabase className="text-2xl text-green-600" />
                </motion.div>
            ),
            title: "MongoDB Certified Associate Developer",
            desc: ""
        }
    ];

    return (
        <SectionContainer id="about" className="bg-white dark:bg-slate-900">
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative md:left-8 lg:left-16"
                >

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-left sm:text-justify">
                        Hi, I'm <strong className="text-gray-900 dark:text-white">Bhupendra Yadav</strong>, a B.Tech CSE student who loves turning ideas into real, working software. I started out deep in <strong className="text-gray-900 dark:text-white">Full Stack Development</strong> — especially the frontend side, building things that feel smooth and intuitive to use — and that curiosity has since pulled me toward <strong className="text-gray-900 dark:text-white">AI and Machine Learning</strong>, which is where I'm focused now.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-left sm:text-justify">
                        Along the way, I interned as a <strong className="text-gray-900 dark:text-white">Salesforce Developer</strong>, working with CRM automation and cloud-based apps, and later took on a <strong className="text-gray-900 dark:text-white">University Research Internship</strong> exploring <strong className="text-gray-900 dark:text-white">malaria detection from blood smear images</strong> using computer vision — a project that really sharpened how I think through problems.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left sm:text-justify">
                        I'm happiest when I'm learning something new and building with it. My goal is simple: keep growing as an engineer and create solutions that actually make a difference.
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-center">
                            <span className="block text-xl sm:text-2xl font-bold text-primary mb-1">4+</span>
                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Projects Completed</span>
                        </div>
                        <div className="p-3 sm:p-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-center">
                            <span className="block text-xl sm:text-2xl font-bold text-secondary mb-1">5+</span>
                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Certifications</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex justify-center md:justify-start"
                    >
                        <a
                            href={`${import.meta.env.BASE_URL}resume.html`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                        >
                            <FaLaptopCode className="mr-2" />
                            Preview Resume
                        </a>
                    </motion.div>
                </motion.div>

                <div className="grid gap-4 max-w-md w-full justify-self-center md:justify-self-end md:-mt-32 lg:-mt-40 md:-mr-4 lg:-mr-12 overflow-hidden">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-100 dark:border-slate-700 flex items-center gap-4 hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold dark:text-white">{item.title}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default About;
