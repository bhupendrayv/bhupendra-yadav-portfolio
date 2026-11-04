import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import {
    FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
    FaSalesforce, FaGitAlt, FaGithub, FaBrain
} from 'react-icons/fa';
import {
    SiCplusplus, SiOracle, SiMongodb, SiMysql, SiOpenai, SiExpress,
    SiTailwindcss, SiFlask, SiOpencv
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SkillCategory = ({ title, subtitle, skills, delay, borderAccent }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 dark:border-slate-700/80 transition-all flex flex-col justify-between relative overflow-hidden group"
    >
        {/* Subtle accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${borderAccent}`} />

        <div>
            <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/70 border border-slate-200/60 dark:border-slate-600/60 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-sky-400 hover:bg-sky-50/50 dark:hover:bg-slate-650"
                    >
                        <span className="text-base sm:text-lg shrink-0">{skill.icon}</span>
                        <span>{skill.name}</span>
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    const skillData = [
        {
            title: "AI, Machine Learning & Vision",
            subtitle: "Neural architectures & intelligent systems",
            borderAccent: "from-sky-500 to-indigo-500",
            skills: [
                { name: "Deep Learning", icon: <FaBrain className="text-purple-500" /> },
                { name: "Machine Learning", icon: <FaBrain className="text-blue-500" /> },
                { name: "CNN Architectures", icon: <FaBrain className="text-pink-500" /> },
                { name: "OpenCV", icon: <SiOpencv className="text-red-500" /> },
                { name: "Generative AI", icon: <SiOpenai className="text-emerald-500" /> },
                { name: "Prompt Engineering", icon: <span className="text-amber-400">✨</span> },
            ]
        },
        {
            title: "Full Stack & Web Technologies",
            subtitle: "Frontend, APIs & responsive interfaces",
            borderAccent: "from-cyan-400 to-blue-600",
            skills: [
                { name: "React", icon: <FaReact className="text-cyan-400" /> },
                { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express", icon: <SiExpress className="text-slate-600 dark:text-slate-300" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
                { name: "HTML5 / CSS3", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "Flask", icon: <SiFlask className="text-slate-700 dark:text-white" /> },
            ]
        },
        {
            title: "Programming Languages",
            subtitle: "Algorithms, OOP & system programming",
            borderAccent: "from-amber-400 to-orange-500",
            skills: [
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "Python", icon: <FaPython className="text-blue-500" /> },
                { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
                { name: "C", icon: <span className="font-extrabold text-blue-600 text-sm">C</span> },
            ]
        },
        {
            title: "Databases & Storage",
            subtitle: "Relational data & NoSQL stores",
            borderAccent: "from-emerald-400 to-teal-600",
            skills: [
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
            ]
        },
        {
            title: "Cloud & Enterprise Platforms",
            subtitle: "Cloud services & CRM workflows",
            borderAccent: "from-indigo-500 to-purple-600",
            skills: [
                { name: "Oracle Cloud (OCI)", icon: <SiOracle className="text-red-600" /> },
                { name: "Salesforce CRM", icon: <FaSalesforce className="text-blue-400" /> },
                { name: "Salesforce Flow", icon: <FaSalesforce className="text-sky-500" /> },
                { name: "Apex & SOQL", icon: <span className="font-bold text-indigo-400 text-xs">APEX</span> },
            ]
        },
        {
            title: "Developer Tools & Workflow",
            subtitle: "Version control & environment",
            borderAccent: "from-slate-400 to-slate-600",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-slate-800 dark:text-white" /> },
                { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
            ]
        }
    ];

    return (
        <SectionContainer id="skills" className="bg-white dark:bg-slate-900 py-16">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 inline-block">
                    Technical Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">Technical Skills</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Categorized competencies across Artificial Intelligence, modern Full Stack development, and cloud environments.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {skillData.map((category, index) => (
                    <SkillCategory
                        key={index}
                        title={category.title}
                        subtitle={category.subtitle}
                        skills={category.skills}
                        borderAccent={category.borderAccent}
                        delay={index * 0.08}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

export default Skills;
