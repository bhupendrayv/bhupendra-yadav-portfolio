import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { FaTrophy, FaMedal, FaHackerrank } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            title: "Best Innovation Award",
            event: "Smart India Hackathon 2024",
            icon: <FaTrophy className="text-yellow-500" />,
            date: "2024"
        },
        {
            title: "5 Star Gold Badge",
            event: "HackerRank Problem Solving",
            icon: <FaHackerrank className="text-green-500" />,
            date: "2023"
        },
        {
            title: "Top 5% Performer",
            event: "Global Coating Challenge",
            icon: <FaMedal className="text-blue-500" />,
            date: "2023"
        }
    ];

    return (
        <SectionContainer id="achievements" className="bg-white dark:bg-slate-900">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Achievements</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {achievements.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-700">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">{item.title}</h3>
                        <p className="text-primary font-medium">{item.event}</p>
                        <span className="text-xs text-gray-500 mt-2">{item.date}</span>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Achievements;
