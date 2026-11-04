import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaAward, FaDatabase, FaFileAlt } from 'react-icons/fa';

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
            title: "MongoDB Certified",
            desc: "Associate Developer (2026)"
        }
    ];

    return (
        <SectionContainer id="about" className="bg-slate-50/50 dark:bg-slate-900/60 py-16">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 inline-block">
                    Get To Know Me
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                {/* Left Column: Narrative Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-7 flex flex-col justify-center"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4">
                        Passionate Engineer building at the intersection of <span className="text-sky-500">AI</span> & <span className="text-indigo-500">Scalable Web Systems</span>.
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-left sm:text-justify text-sm sm:text-base">
                        Hi, I'm <strong className="text-slate-900 dark:text-white">Bhupendra Yadav</strong>, a B.Tech Computer Science & Engineering student at SRM University AP. My technical journey began deeply rooted in <strong className="text-slate-900 dark:text-white">Full Stack Web Development</strong>, creating responsive, intuitive applications that prioritize performance and clean user experiences.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-left sm:text-justify text-sm sm:text-base">
                        Driven by curiosity for intelligence systems, I expanded my focus to <strong className="text-slate-900 dark:text-white">AI and Deep Learning</strong>. During my <strong className="text-slate-900 dark:text-white">University Research Internship</strong>, I spearheaded a computer vision system analyzing over 27,000 microscopic blood smear images for malaria detection, achieving 96.84% classification accuracy.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-left sm:text-justify text-sm sm:text-base">
                        Complemented by practical experience as a <strong className="text-slate-900 dark:text-white">Salesforce Developer Intern</strong> automating business workflows and multiple industry certifications, I enjoy turning intricate technical challenges into impactful, real-world solutions.
                    </p>

                    {/* Stats Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-center">
                            <span className="block text-2xl sm:text-3xl font-extrabold text-sky-500 mb-1">Production</span>
                            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Web & AI Projects</span>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-center">
                            <span className="block text-2xl sm:text-3xl font-extrabold text-indigo-500 mb-1">4+</span>
                            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Industry Certifications</span>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center md:justify-start">
                        <a
                            href={`${import.meta.env.BASE_URL}resume.html`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 text-sm gap-2"
                        >
                            <FaFileAlt className="text-xs" />
                            <span>Preview Full Resume</span>
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Key Credentials / Highlights */}
                <div className="md:col-span-5 flex flex-col gap-3.5 w-full">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-4 bg-white dark:bg-slate-800/90 rounded-2xl shadow-sm border border-slate-200/70 dark:border-slate-700/70 flex items-center gap-4 hover:shadow-md hover:border-sky-400/40 transition-all duration-300"
                        >
                            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default About;
