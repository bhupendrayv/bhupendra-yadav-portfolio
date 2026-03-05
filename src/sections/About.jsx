import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaAward } from 'react-icons/fa';

const About = () => {
    const highlights = [
        {
            icon: (
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FaAward className="text-3xl text-yellow-500" />
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
                    <FaLaptopCode className="text-3xl text-blue-500" />
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
                    <FaGraduationCap className="text-3xl text-green-500" />
                </motion.div>
            ),
            title: "Walmart Forage",
            desc: "Advanced Software Engineering"
        }
    ];

    return (
        <SectionContainer id="about" className="bg-white dark:bg-slate-900">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 dark:text-white">
                        Driven by Data, Powered by AI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        I am a B.Tech CSE student passionate about bridging the gap between complex backend logic and intuitive user experiences.
                        My journey involves deep diving into Cloud Computing and Generative AI, while honing my skills in full-stack development.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        With hands-on experience in Salesforce Development and enterprise-level problem solving through the Walmart Advanced Engineering program,
                        I am ready to tackle real-world challenges.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-primary mb-1">2+</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</span>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-secondary mb-1">3+</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Certifications</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
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

                <div className="grid gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 flex items-center gap-6 hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-full">
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
