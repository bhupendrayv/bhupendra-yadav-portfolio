import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { FaBriefcase, FaSalesforce, FaBuilding } from 'react-icons/fa';

const ExperienceItem = ({ role, company, period, description, tags, icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-slate-700 last:pb-0"
    >
        <div className="absolute -left-[11px] top-0 p-1 bg-white dark:bg-slate-900 border-2 border-primary rounded-full">
            {icon}
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold dark:text-white">{role}</h3>
                    <h4 className="text-lg font-medium text-primary">{company}</h4>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-slate-700 text-sm rounded-full text-gray-600 dark:text-gray-300">
                    {period}
                </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Salesforce Developer Virtual Intern",
            company: "Salesforce",
            period: "Virtual Internship",
            icon: <FaSalesforce className="text-blue-500 w-4 h-4" />,
            description: [
                "Developed custom solutions using Apex and Lightning Web Components (LWC).",
                "Automated business processes using Salesforce CRM automation tools.",
                "Solved real-world use cases enhancing CRM functionality."
            ],
            tags: ["Apex", "LWC", "CRM", "Automation"]
        },
        {
            role: "Advanced Software Engineering Virtual Experience",
            company: "Walmart USA (Forage)",
            period: "Virtual Experience",
            icon: <FaBuilding className="text-orange-500 w-4 h-4" />,
            description: [
                "Implemented a Java Heap Data Structure for efficient data management.",
                "Designed detailed UML Class Diagrams for system architecture.",
                "Created ER Diagrams for robust database modeling.",
                "Tackled enterprise-level problem solving scenarios."
            ],
            tags: ["Java", "Data Structures", "UML", "Database Design"]
        }
    ];

    return (
        <SectionContainer id="experience" className="bg-gray-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Experience</h2>
                <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} delay={index * 0.2} />
                ))}
            </div>
        </SectionContainer>
    );
};

export default Experience;
