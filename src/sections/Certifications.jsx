import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { SiOracle, SiMongodb } from 'react-icons/si';
import { FaExternalLinkAlt, FaTimes, FaSalesforce, FaLaptopCode } from 'react-icons/fa';

const Certifications = () => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [activeCert, setActiveCert] = useState(null);
    const [imgLoaded, setImgLoaded] = useState(false);

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
        },
        {
            title: "MongoDB Certified Associate Developer",
            subtitle: "Database Engineering",
            description: "Demonstrated knowledge and skills in MongoDB database development, data modeling, and query optimization.",
            icon: SiMongodb,
            iconColor: "text-green-500",
            date: "2026",
            certificatePath: "/mongodb_cert.pdf"
        }
    ];

    const handleViewCertificate = (cert) => {
        setImgLoaded(false);
        setActiveCert(cert);
        // Public folder files are served at root — use path directly (no BASE_URL manipulation)
        setPreviewUrl(cert.certificatePath);
        setFileType(cert.certificatePath.toLowerCase().endsWith('.pdf') ? 'pdf' : 'image');
    };

    const closeModal = () => {
        setPreviewUrl(null);
        setFileType(null);
        setActiveCert(null);
        setImgLoaded(false);
    };

    return (
        <SectionContainer id="certifications" className="bg-white dark:bg-slate-900">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 dark:text-white">Certifications</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-800 p-5 md:p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <cert.icon className="text-7xl text-gray-500" />
                        </div>

                        <div className="flex flex-col items-center gap-4 relative z-10 text-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm p-3 flex-shrink-0">
                                <cert.icon className={`text-4xl ${cert.iconColor}`} />
                            </div>

                            <div className="flex-1 text-center">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-base text-primary font-medium mb-2">{cert.subtitle}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug max-w-sm mx-auto">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-1 shrink-0 mt-2 items-center w-full">
                                <button
                                    onClick={() => handleViewCertificate(cert)}
                                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold bg-primary text-white rounded-lg hover:bg-indigo-600 active:scale-95 transition-all shadow-md cursor-pointer w-full md:w-auto"
                                >
                                    View Certificate <FaExternalLinkAlt className="text-[9px]" />
                                </button>
                                <span className="inline-flex items-center justify-center gap-1 px-2.5 py-1 text-[10px] font-medium bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded w-full md:w-auto">
                                    Issued: {cert.date}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {previewUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl relative max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="px-5 py-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center flex-shrink-0">
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                                        {activeCert?.title}
                                    </h3>
                                    <p className="text-xs text-primary mt-0.5">{activeCert?.subtitle}</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-full transition-colors flex-shrink-0 ml-4"
                                    aria-label="Close certificate preview"
                                >
                                    <FaTimes size={16} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-gray-50 dark:bg-slate-900/50 min-h-[300px]">
                                {fileType === 'pdf' ? (
                                    <iframe
                                        src={previewUrl}
                                        className="w-full rounded"
                                        style={{ minHeight: '70vh' }}
                                        title="Certificate Preview"
                                    />
                                ) : (
                                    <div className="relative w-full flex items-center justify-center">
                                        {/* Loading spinner */}
                                        {!imgLoaded && (
                                            <div className="flex flex-col items-center justify-center gap-3 py-16">
                                                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                                                <p className="text-xs text-gray-500 dark:text-slate-400">Loading certificate…</p>
                                            </div>
                                        )}
                                        <img
                                            src={previewUrl}
                                            alt={`${activeCert?.title} Certificate`}
                                            onLoad={() => setImgLoaded(true)}
                                            className={`w-full h-auto max-h-[78vh] object-contain rounded-lg shadow-lg transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="px-5 py-3 border-t border-gray-200 dark:border-slate-700 flex justify-end flex-shrink-0">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-xs font-semibold text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionContainer>
    );
};

export default Certifications;
