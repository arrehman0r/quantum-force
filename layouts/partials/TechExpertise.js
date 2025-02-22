'use client';

import React from 'react';

const TechExpertise = () => {
    const technologies = [
        {
            category: "MERN Stack",
            items: [
                { name: "MongoDB", proficiency: "95%" },
                { name: "Express.js", proficiency: "90%" },
                { name: "React.js", proficiency: "95%" },
                { name: "Node.js", proficiency: "92%" }
            ]
        },
        {
            category: "Python Ecosystem",
            items: [
                { name: "Django", proficiency: "88%" },
                { name: "Flask", proficiency: "85%" },
                { name: "FastAPI", proficiency: "90%" },
                { name: "Data Science", proficiency: "85%" }
            ]
        },
        {
            category: "Cloud Services",
            items: [
                { name: "AWS", proficiency: "90%" },
                { name: "Azure", proficiency: "85%" },
                { name: "Docker", proficiency: "92%" },
                { name: "Kubernetes", proficiency: "88%" }
            ]
        }
    ];

    return (
        <section className="relative  overflow-hidden p-10">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#01AD9F]/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#01AD9F]/5 rounded-full blur-[120px]"></div>
            </div>
            <div className="max-w-4xl mx-auto px-5 bg-gradient-to-r">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
                    <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 p-5">
                        Our Technology Expertise
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {technologies.map((tech, index) => (
                        <div key={index} className="group">
                            <h3 className="text-xl font-semibold text-[#01AD9F] mb-4">
                                {tech.category}
                            </h3>
                            <div className="space-y-4">
                                {tech.items.map((item, i) => (
                                    <div key={i} className="relative">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-white group-hover:text-[#01AD9F] transition-colors duration-300">
                                                {item.name}
                                            </span>
                                            <span className="text-gray-400">
                                                {item.proficiency}
                                            </span>
                                        </div>
                                        <div className="h-1.5 w-full bg-[#2A2A2A] rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#01AD9F] rounded-full transition-all duration-500 ease-out
                                                    group-hover:bg-gradient-to-r from-[#01AD9F] to-[#018F84]"
                                                style={{ width: item.proficiency }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechExpertise;