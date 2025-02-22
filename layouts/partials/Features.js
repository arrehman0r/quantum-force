'use client';

import React, { useRef } from 'react';
import { Code2, Network, Database, Shield, Users, Workflow } from 'lucide-react';

const Features = () => {
    const sectionRef = useRef(null);

    const features = [
        {
            icon: <Code2 size={48} className="text-[#01AD9F]" />,
            title: "Custom Development",
            description: "Tailored solutions built with cutting-edge technologies and best practices."
        },
        {
            icon: <Network size={48} className="text-[#01AD9F]" />,
            title: "Scalable Architecture",
            description: "Future-proof systems that grow with your business needs."
        },
        {
            icon: <Database size={48} className="text-[#01AD9F]" />,
            title: "Data Analytics",
            description: "Transform raw data into actionable business insights using AI/ML."
        },
        {
            icon: <Shield size={48} className="text-[#01AD9F]" />,
            title: "Security First",
            description: "Enterprise-grade security with regular audits and compliance checks."
        },
        {
            icon: <Users size={48} className="text-[#01AD9F]" />,
            title: "Dedicated Teams",
            description: "Skilled developers working exclusively on your project."
        },
        {
            icon: <Workflow size={48} className="text-[#01AD9F]" />,
            title: "Agile Process",
            description: "Flexible development methodology with regular deliverables."
        }
    ];

    return (
        <section 
            ref={sectionRef}
            className="relative mx-auto px-4 space-y-12 bg-[#111111] py-16 md:py-24 lg:py-32 overflow-hidden"
        >
            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#01AD9F]/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#01AD9F]/5 rounded-full blur-[120px]"></div>
            </div>

            {/* Section Header */}
            <div className="relative mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Transform Your Business
                </h2>
                <p className="max-w-[85%] text-lg sm:text-xl text-gray-400 mt-4">
                    Innovative software solutions that drive growth and efficiency
                </p>
            </div>

            {/* Features Grid */}
            <div className="relative mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className="group relative bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] p-6
                            hover:border-[#01AD9F] transition-all duration-500 ease-out
                            hover:shadow-lg hover:shadow-[#01AD9F]/10
                            hover:-translate-y-1 hover:scale-[1.02]"
                    >
                        {/* Card Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between gap-6">
                            <div className="transform transition-transform duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#01AD9F] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                        
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#01AD9F]/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;