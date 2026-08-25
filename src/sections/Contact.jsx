import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import Toast from '../components/Toast';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpaeplo';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [toast, setToast] = useState(null); // { message, type }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setToast({ message: 'Message sent successfully!', type: 'success' });
            } else {
                const data = await response.json();
                setStatus('error');
                const errorMessage = data?.errors?.[0]?.message || 'Failed to send message.';
                setToast({ message: errorMessage, type: 'error' });
            }
        } catch (err) {
            console.error('Formspree submit error:', err);
            setStatus('error');
            setToast({ message: 'Failed to send message. Please try again.', type: 'error' });
        }
    };

    return (
        <SectionContainer id="contact" className="bg-white dark:bg-slate-900">
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Let's build something amazing together.</p>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2"
                >
                    <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        I'm currently looking for full-time opportunities or internships in Software Engineering, AI, and Cloud Development.
                        Feel free to reach out!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <FaEnvelope className="text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                                <p className="font-medium dark:text-white">bhupendrayadav2077@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                <FaMapMarkerAlt className="text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                <p className="font-medium dark:text-white text-sm">SRM UNIVERSITY AP, Amravati, Andhra Pradesh</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                <FaPhone className="text-xl" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Call Me</p>
                                <p className="font-medium dark:text-white">+91 99421 99618</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
