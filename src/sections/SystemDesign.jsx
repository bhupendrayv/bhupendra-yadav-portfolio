import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { FaSitemap, FaDatabase, FaNetworkWired } from 'react-icons/fa';

const DiagramCard = ({ title, type, icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700 cursor-pointer"
    >
        <div className="h-64 bg-gray-100 dark:bg-slate-700 flex items-center justify-center p-8 group-hover:bg-gray-200 dark:group-hover:bg-slate-600 transition-colors">
            {/* Placeholder for actual diagram image */}
            <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-6xl text-gray-400 dark:text-slate-500 mb-4 block mx-auto">{icon}</span>
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">Click to Zoom</span>
            </div>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 relative z-10">
            <h3 className="text-lg font-bold dark:text-white">{title}</h3>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{type}</span>
        </div>
    </motion.div>
);

const SystemDesign = () => {
    const diagrams = [
        {
            title: "eCommerce Microservices",
            type: "Architecture Diagram",
            icon: <FaNetworkWired />,
        },
        {
            title: "User Auth Flow",
            type: "UML Sequence",
            icon: <FaSitemap />,
        },
        {
            title: "Hospital Management DB",
            type: "ER Diagram",
            icon: <FaDatabase />,
        }
    ];

    return (
        <SectionContainer id="system-design" className="bg-gray-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">System Design</h2>
                <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Visualizing complex systems and architectures.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {diagrams.map((diagram, index) => (
                    <DiagramCard key={index} {...diagram} delay={index * 0.1} />
                ))}
            </div>
        </SectionContainer>
    );
};

export default SystemDesign;
