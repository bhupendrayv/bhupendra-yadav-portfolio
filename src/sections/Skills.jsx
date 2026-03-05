import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSalesforce, FaGitAlt, FaGithub, FaBrain } from 'react-icons/fa';
import { SiCplusplus, SiOracle, SiMongodb, SiMysql, SiOpenai } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow"
    >
        <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillData = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "Python", icon: <FaPython className="text-blue-500" /> },
                { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "C", icon: <span className="font-bold text-blue-600">C</span> },
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            ]
        },
        {
            title: "Cloud & Platforms",
            skills: [
                { name: "Oracle Cloud", icon: <SiOracle className="text-red-600" /> },
                { name: "Salesforce", icon: <FaSalesforce className="text-blue-400" /> },
            ]
        },
        {
            title: "AI & Data",
            skills: [
                { name: "Generative AI", icon: <SiOpenai className="text-green-600" /> },
                { name: "LLMs", icon: <FaBrain className="text-purple-500" /> },
                { name: "Prompt Eng.", icon: <span className="text-lg">✨</span> },
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
                { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
            ]
        }
    ];

    return (
        <SectionContainer id="skills" className="bg-gray-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Technical Skills</h2>
                <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">A comprehensive toolkit for modern software engineering.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillData.map((category, index) => (
                    <SkillCategory
                        key={index}
                        title={category.title}
                        skills={category.skills}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default Skills;
