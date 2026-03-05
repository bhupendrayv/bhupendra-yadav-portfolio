import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { FaBookOpen, FaMedium } from 'react-icons/fa';

const Blog = () => {
    const articles = [
        {
            title: "Demystifying Generative AI: From Transformers to LLMs",
            summary: "A deep dive into the architecture behind modern AI models and how they are changing software engineering.",
            link: "#",
            readTime: "5 min read"
        },
        {
            title: "Mastering Salesforce LWC: Best Practices",
            summary: "Tips and tricks for building scalable and maintainable Lightning Web Components.",
            link: "#",
            readTime: "7 min read"
        },
        {
            title: "Designing Scalable Systems: A Student's Perspective",
            summary: "Learnings from designing high-traffic systems and understanding microservices.",
            link: "#",
            readTime: "4 min read"
        }
    ];

    return (
        <SectionContainer id="blog" className="bg-gray-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Learning Journey</h2>
                <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Sharing knowledge and experiences along the way.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700 flex flex-col h-full">
                        <div className="flex items-center gap-2 text-primary mb-3">
                            <FaMedium /> <span className="text-sm font-medium">Blogging</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 dark:text-white hover:text-primary transition-colors cursor-pointer">
                            <a href={article.link}>{article.title}</a>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                            {article.summary}
                        </p>
                        <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-500">
                            <span>{article.readTime}</span>
                            <a href={article.link} className="flex items-center gap-1 hover:text-primary transition-colors">
                                Read Article <FaBookOpen />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Blog;
