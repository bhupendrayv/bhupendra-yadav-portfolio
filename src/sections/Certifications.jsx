import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { SiOracle } from 'react-icons/si';
import { FaExternalLinkAlt, FaTimes, FaSalesforce, FaLaptopCode } from 'react-icons/fa';

const Certifications = () => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileType, setFileType] = useState(null);

    const certifications = [
        {
            title: "Oracle Cloud Infrastructure 2025",
            subtitle: "Generative AI Professional",
            description: "Validated proficiency in Large Language Models (LLMs), OCI Generative AI Service, and Prompt Engineering.",
            icon: SiOracle,
            iconColor: "text-[#F80000]",
            date: "2025",
            certificatePath: "/oracle_genai_cert.png"
        },
        {
            title: "Salesforce Developer",
            subtitle: "AgentBlazer Champion Program",
            description: "Comprehensive training in Salesforce Development, including Apex, Lightning Web Components, and platform administration.",
            icon: FaSalesforce,
            iconColor: "text-[#00A1E0]",
            date: "2025",
            certificatePath: "/salesforce_cert.png"
        },
        {
            title: "Walmart Global Tech",
            subtitle: "Advanced Software Engineering",
            description: "Completed the Advanced Software Engineering Job Simulation focusing on enterprise-level problem solving and architectural patterns.",
            icon: FaLaptopCode,
            iconColor: "text-blue-600",
            date: "2025",
            certificatePath: "/walmart_cert.png"
        }
    ];

    const [activeCert, setActiveCert] = useState(null);

    const handleViewCertificate = (cert) => {
        if (cert.certificatePath) {
            setActiveCert(cert);
            setPreviewUrl(cert.certificatePath);
            setFileType('image');
        }
    };

    const closeModal = () => {
        setPreviewUrl(null);
        setFileType(null);
        setActiveCert(null);
    };

    return (
        <SectionContainer id="certifications" className="bg-white dark:bg-slate-900">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Certifications</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 relative overflow-hidden mb-8 last:mb-0"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <cert.icon className="text-9xl text-gray-500" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-md p-4 flex-shrink-0">
                                <cert.icon className={`text-6xl ${cert.iconColor}`} />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-xl text-primary font-medium mb-4">{cert.subtitle}</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {cert.description}
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <button
                                        onClick={() => handleViewCertificate(cert)}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-indigo-600 transition-colors shadow-lg cursor-pointer"
                                    >
                                        View Certificate <FaExternalLinkAlt className="text-sm" />
                                    </button>
                                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-lg">
                                        Issued: {cert.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {previewUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl relative max-w-5xl w-full max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {activeCert?.title} - {activeCert?.subtitle}
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-slate-700 rounded-full transition-colors"
                                >
                                    <FaTimes size={20} />
                                </button>
                            </div>
                            <div className="p-2 flex-1 overflow-hidden flex items-center justify-center">
                                {fileType?.includes('pdf') ? (
                                    <iframe
                                        src={previewUrl}
                                        className="w-full h-full min-h-[500px] md:min-h-[700px]"
                                        title="Certificate Preview"
                                    />
                                ) : (
                                    <img
                                        src={previewUrl}
                                        alt="Certificate Preview"
                                        className="w-full h-auto max-h-[85vh] object-contain"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionContainer>
    );
};

export default Certifications;
