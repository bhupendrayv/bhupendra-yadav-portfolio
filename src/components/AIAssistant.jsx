import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

// Knowledge base synthesized directly from Bhupendra Yadav's verified resume and project portfolio
const KNOWLEDGE_BASE = [
  {
    triggers: ['who', 'about', 'bio', 'intro', 'profile', 'bhupendra', 'yadav', 'education', 'background', 'srm'],
    answer:
      "Bhupendra Yadav is a B.Tech Computer Science & Engineering student at SRM University AP (expected graduation 2028, CGPA 7.80) specializing as an AI/ML Engineer and Full Stack Developer. His focus spans deep learning, computer vision research (malaria detection with 96.84% accuracy), MERN-stack architecture, and Salesforce cloud development."
  },
  {
    triggers: ['skill', 'stack', 'tech', 'language', 'tools', 'python', 'react', 'java', 'c++'],
    answer:
      "Bhupendra's technical stack includes:\n• Languages: Python, Java, C++, C, JavaScript (ES6+), SQL\n• AI/ML: Deep Learning, CNN, Computer Vision, OpenCV, Generative AI, LLMs\n• Full Stack: React.js, Node.js, Express.js, Flask, Tailwind CSS, HTML5/CSS3\n• Databases: MongoDB, MySQL, SQLite\n• Cloud & Platforms: Oracle Cloud Infrastructure (OCI), Salesforce (Apex, LWC, Flows)\n• Developer Tools: Git, GitHub, VS Code, Stripe API"
  },
  {
    triggers: ['project', 'mediconnect', 'cafecore', 'spam'],
    answer:
      "Key featured projects by Bhupendra:\n1. MediConnect Assistant (MERN + AI): Healthcare portal with AI symptom analysis, doctor appointments, Stripe payments, and QR receipts.\n2. CafeCore (POS): Cafe management system with multi-gateway payments and live kitchen tracking.\n3. Email & SMS Spam Detection: NLP pipeline using TF-IDF and supervised ML classifiers."
  },
  {
    triggers: ['experience', 'intern', 'work', 'job', 'research', 'smartbridge', 'malaria'],
    answer:
      "Work Experience:\n• University Research Intern (SRM University AP, 2026): Designed a deep learning pipeline (custom CNN, ResNet50, VGG19, CNN-BiLSTM) on 27,558 blood smear images for malaria detection (96.84% accuracy) and deployed a Flask web app.\n• Salesforce Developer Intern (SmartBridge, 2025): Developed Apex, SOQL, Flow Builder, and Lightning Web Components (LWC) automating business processes."
  },
  {
    triggers: ['cert', 'oracle', 'mongodb', 'walmart', 'credentials', 'qualification'],
    answer:
      "Industry Certifications:\n• Oracle Cloud Infrastructure (OCI) 2025 Certified Generative AI Professional\n• MongoDB Certified Associate Developer (2026)\n• Salesforce Developer AgentBlazer Champion Program (2025)\n• Walmart Global Tech Advanced Software Engineering Simulation (2025)"
  },
  {
    triggers: ['contact', 'hire', 'email', 'phone', 'interview', 'recruiter', 'location', 'reach'],
    answer:
      "You can contact Bhupendra directly:\n• Email: bhupendrayadav2077@gmail.com\n• Phone: +91 99421 99618\n• Location: SRM University AP, Andhra Pradesh, India\n• LinkedIn: linkedin.com/in/bhupendra-yadav-a968632b5\n• GitHub: github.com/bhupendrayv\nHe is actively interviewing for Full-Time and Internship positions."
  },
  {
    triggers: ['resume', 'cv', 'pdf', 'ats'],
    answer:
      "You can view and print Bhupendra's ATS-compliant single-page resume anytime via the 'Download Resume' button in the hero section or by navigating to /resume.html directly."
  }
];

const QUICK_PROMPTS = [
  { label: 'Core Skills', query: 'What are your core technical skills?' },
  { label: 'Featured Projects', query: 'Tell me about your featured projects' },
  { label: 'Work Experience', query: 'What is your professional and research experience?' },
  { label: 'Recruiter Contact', query: 'How can recruiters contact you for interviews?' },
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Hello! I am Bhupendra's AI Portfolio Assistant. Ask me anything about his technical skills, projects, research, or interview availability.",
    },
  ]);
  const [input, setInput] = useState('');

  const generateAnswer = (query) => {
    const q = query.toLowerCase().trim();
    for (const item of KNOWLEDGE_BASE) {
      if (item.triggers.some((trig) => q.includes(trig))) {
        return item.answer;
      }
    }
    return (
      "Bhupendra is an AI/ML Engineer and Full Stack Developer with hands-on experience in MERN, deep learning (malaria detection research), Oracle GenAI, and Salesforce automation. Feel free to ask about his specific skills, projects (MediConnect, CafeCore, Spam Detection), or check the contact section to reach out directly!"
    );
  };

  const handleSend = (userQuery) => {
    const textToSend = userQuery || input;
    if (!textToSend.trim()) return;

    const userMessage = { sender: 'user', text: textToSend };
    const botResponse = { sender: 'assistant', text: generateAnswer(textToSend) };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    if (!userQuery) setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999999] pointer-events-auto">
      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden max-h-[560px]"
          >
            {/* Header */}
            <div className="px-5 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <FaRobot className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">AI Portfolio Assistant</h4>
                  <p className="text-[10px] text-sky-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    Trained on Bhupendra's verified credentials
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                aria-label="Close Assistant"
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Message Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/60 dark:bg-slate-900/60 text-xs sm:text-sm max-h-[320px]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-sky-500 text-white rounded-br-none shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Inquiry Suggestions */}
            <div className="px-3 pt-2 pb-1.5 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((item, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleSend(item.query)}
                  className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-sky-500 rounded-lg whitespace-nowrap transition-colors shrink-0 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* User Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-slate-800 flex items-center gap-2 border-t border-slate-100 dark:border-slate-700"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, research..."
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-100 dark:bg-slate-700/70 text-slate-800 dark:text-white rounded-xl outline-none focus:ring-1 focus:ring-sky-500"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl shadow-md transition-colors cursor-pointer shrink-0"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle AI Portfolio Assistant"
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-full shadow-2xl shadow-sky-500/40 border border-white/20 cursor-pointer font-medium text-xs sm:text-sm tracking-wide hover:scale-105 active:scale-95 transition-all select-none"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <FaRobot className="text-sm text-white" />
          </div>
          <span className="font-semibold">{isOpen ? 'Close Assistant' : 'Ask AI Assistant'}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
