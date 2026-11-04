import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import Toast from '../components/Toast';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone, FaShieldAlt, FaBriefcase, FaCalendarCheck } from 'react-icons/fa';

// Primary endpoint configured via environment variable with documented fallback
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xnpaeplo';

// Client-side rate-limiting config (allow at most 1 submission every 45 seconds)
const COOLDOWN_SECONDS = 45;
const RATE_LIMIT_KEY = 'portfolio_last_contact_ts';

const INQUIRY_TYPES = [
    { id: 'full-time', label: 'Full-Time Role', icon: <FaBriefcase className="text-xs" /> },
    { id: 'internship', label: 'Internship Opportunity', icon: <FaBriefcase className="text-xs" /> },
    { id: 'interview', label: 'Interview Invitation', icon: <FaCalendarCheck className="text-xs" /> },
    { id: 'general', label: 'General Technical Inquiry', icon: <FaEnvelope className="text-xs" /> },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        inquiryType: 'full-time',
        message: '',
        _gotcha: '',
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [toast, setToast] = useState(null); // { message, type }

    // Input sanitization and validation helper
    const validate = () => {
        const errs = {};
        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMsg = formData.message.trim();

        if (!trimmedName || trimmedName.length < 2) {
            errs.name = 'Please enter your name (at least 2 characters).';
        } else if (trimmedName.length > 80) {
            errs.name = 'Name must be under 80 characters.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!trimmedEmail) {
            errs.email = 'Email address is required.';
        } else if (!emailRegex.test(trimmedEmail)) {
            errs.email = 'Please provide a valid email address.';
        }

        if (!trimmedMsg || trimmedMsg.length < 10) {
            errs.message = 'Message must be at least 10 characters long.';
        } else if (trimmedMsg.length > 2000) {
            errs.message = 'Message must be under 2000 characters.';
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear field-specific error as user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Honeypot check: If invisible _gotcha bot trap is populated, silently drop submission
        if (formData._gotcha) {
            setStatus('success');
            setToast({ message: 'Message sent successfully!', type: 'success' });
            return;
        }

        // 2. Strict client-side validation
        if (!validate()) {
            setToast({ message: 'Please fix the errors in the form before submitting.', type: 'error' });
            return;
        }

        // 3. Client-side Rate Limiting check
        const lastSent = localStorage.getItem(RATE_LIMIT_KEY);
        const now = Date.now();
        if (lastSent && now - parseInt(lastSent, 10) < COOLDOWN_SECONDS * 1000) {
            const remaining = Math.ceil((COOLDOWN_SECONDS * 1000 - (now - parseInt(lastSent, 10))) / 1000);
            setToast({
                message: `Please wait ${remaining} seconds before sending another message.`,
                type: 'error',
            });
            return;
        }

        setStatus('sending');

        try {
            // Strip honeypot field and format payload
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                company: formData.company.trim() || 'Not specified',
                inquiryType: formData.inquiryType,
                message: formData.message.trim(),
            };

            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    inquiryType: 'full-time',
                    message: '',
                    _gotcha: '',
                });
                localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
                setToast({ message: 'Thank you! Your inquiry was sent successfully. I will respond promptly.', type: 'success' });
            } else {
                const data = await response.json();
                setStatus('error');
                const errorMessage = data?.errors?.[0]?.message || 'Failed to send message.';
                setToast({ message: errorMessage, type: 'error' });
            }
        } catch (err) {
            console.error('Submission error:', err);
            setStatus('error');
            setToast({ message: 'Network error. Please try again or email directly.', type: 'error' });
        }
    };

    return (
        <SectionContainer id="contact" className="bg-white dark:bg-slate-900 py-16">
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
            <div className="text-center mb-12 md:mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 inline-block">
                    Recruiter &amp; Placement Contact
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">Get In Touch</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto rounded-full mt-3"></div>
                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Interested in interviewing, hiring, or discussing technical roles? Reach out directly using the form below.
                </p>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Left Column: Direct Contact Details */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 flex flex-col justify-between"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Actively interviewing for 2026/2027 placements</span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 dark:text-white">Direct Channels</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
                            Looking forward to discussing full-stack development, AI/ML engineering, or research roles. Verified response time within 24 hours.
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-500 shrink-0">
                                    <FaEnvelope className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email</p>
                                    <a
                                        href="mailto:bhupendrayadav2077@gmail.com"
                                        className="font-semibold text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-sm sm:text-base"
                                    >
                                        bhupendrayadav2077@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 shrink-0">
                                    <FaMapMarkerAlt className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location</p>
                                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                                        SRM University AP, Andhra Pradesh, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 shrink-0">
                                    <FaPhone className="text-lg" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Phone</p>
                                    <a
                                        href="tel:+919942199618"
                                        className="font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-colors text-sm"
                                    >
                                        +91 99421 99618
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security & Recruiter SLA Box */}
                    <div className="mt-8 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <FaShieldAlt className="text-sky-500 text-lg shrink-0" />
                        <span>Recruiter inquiries are routed to a priority inbox. Protected with rate limiting and bot honeypots.</span>
                    </div>
                </motion.div>

                {/* Right Column: Recruiter Inquiry Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 bg-slate-50 dark:bg-slate-800/90 p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200/80 dark:border-slate-700"
                >
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        {/* Honeypot field (hidden bot trap) */}
                        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                            <label htmlFor="_gotcha">Leave this empty</label>
                            <input
                                type="text"
                                id="_gotcha"
                                name="_gotcha"
                                tabIndex="-1"
                                autoComplete="off"
                                value={formData._gotcha}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Inquiry Type Radio / Pill Selector */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                                Inquiry Type
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {INQUIRY_TYPES.map((type) => (
                                    <button
                                        type="button"
                                        key={type.id}
                                        onClick={() => setFormData((prev) => ({ ...prev, inquiryType: type.id }))}
                                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left ${formData.inquiryType === type.id ? 'bg-sky-500 text-white border-sky-500 shadow-sm' : 'bg-white dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-sky-400'}`}
                                    >
                                        {type.icon}
                                        <span className="truncate">{type.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Name & Company Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    maxLength={80}
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-700/80 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all dark:text-white text-xs sm:text-sm`}
                                    placeholder="e.g. Jane Smith"
                                />
                                {errors.name && <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                                    Organization / Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    maxLength={100}
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all dark:text-white text-xs sm:text-sm"
                                    placeholder="e.g. Google / Startup"
                                />
                            </div>
                        </div>

                        {/* Email input */}
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                maxLength={120}
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-700/80 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all dark:text-white text-xs sm:text-sm`}
                                placeholder="recruiter@company.com"
                            />
                            {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
                        </div>

                        {/* Message input */}
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                                Message / Role Description *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                required
                                maxLength={2000}
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-700/80 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all dark:text-white text-xs sm:text-sm resize-none`}
                                placeholder="Details regarding interview, job requirements, timeline, or inquiries..."
                            ></textarea>
                            {errors.message && <p className="text-[11px] text-red-500 mt-0.5">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-xs sm:text-sm tracking-wide"
                        >
                            {status === 'sending' ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Sending inquiry...</span>
                                </>
                            ) : (
                                <>
                                    <span>Submit Recruiter Inquiry</span>
                                    <FaPaperPlane className="text-xs" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
