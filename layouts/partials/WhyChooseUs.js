'use client';

import React from 'react';
import { ShieldCheck, Clock, Code2, Users, Target, Zap } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Industry Expertise",
            description: "10+ years delivering enterprise-grade solutions across fintech, healthcare, and e-commerce sectors."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Rapid Development",
            description: "Our agile methodology and pre-built components accelerate development without compromising quality."
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Technical Excellence",
            description: "Expert team using cutting-edge tech stack: React, Node.js, Python, AWS, and modern cloud architecture."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Dedicated Support",
            description: "24/7 technical support with direct access to our development team throughout project lifecycle."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Result-Driven Approach",
            description: "93% client satisfaction rate with focus on measurable business outcomes and ROI."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Innovation Focus",
            description: "Proactive integration of AI, ML, and emerging technologies to future-proof your solutions."
        }
    ];

    return (
        <section className="relative bg-[#111111] py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#01AD9F]/5 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#01AD9F]/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-5">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                        Why Choose Us
                    </h2>
                    <p className="max-w-[85%] text-lg sm:text-xl text-gray-400 mt-4">
                        Transforming businesses with innovative software solutions and unmatched expertise
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mt-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-4 items-start group">
                            <span className="text-white bg-[#01AD9F] p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                                {feature.icon}
                            </span>
                            <div>
                                <h3 className="font-semibold text-xl text-white group-hover:text-[#01AD9F] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;