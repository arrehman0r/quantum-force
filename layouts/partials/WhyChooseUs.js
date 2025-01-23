import React from 'react';
import { ShieldCheck, Clock, Code2, Users, Target, Zap } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Industry Expertise",
            description: "10+ years delivering enterprise-grade solutions across fintech, healthcare, and e-commerce sectors."
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Rapid Development",
            description: "Our agile methodology and pre-built components accelerate development without compromising quality."
        },
        {
            icon: <Code2 className="w-5 h-5" />,
            title: "Technical Excellence",
            description: "Expert team using cutting-edge tech stack: React, Node.js, Python, AWS, and modern cloud architecture."
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Dedicated Support",
            description: "24/7 technical support with direct access to our development team throughout project lifecycle."
        },
        {
            icon: <Target className="w-5 h-5" />,
            title: "Result-Driven Approach",
            description: "93% client satisfaction rate with focus on measurable business outcomes and ROI."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Innovation Focus",
            description: "Proactive integration of AI, ML, and emerging technologies to future-proof your solutions."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-5 mt-16">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Why Choose Us</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Transforming businesses with innovative software solutions and unmatched expertise</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        <span className="text-white bg-primary p-3 rounded-full">
                            {feature.icon}
                        </span>
                        <div>
                            <h3 className="font-semibold text-xl">{feature.title}</h3>
                            <p className="mt-1 text-gray-500">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;