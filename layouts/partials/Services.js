'use client';

import React, { useEffect, useState } from 'react';
import {
    Code2,
    Globe,
    ShoppingCart,
    Database,
    ServerCog,
    Workflow,
} from 'lucide-react';
import Link from 'next/link';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set visibility after component mounts for initial animation
        setIsVisible(true);

        // Optional: Setup intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe the section
        const section = document.getElementById('services-section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const services = [
        {
            icon: <Code2 className="h-12 w-12 text-[#01AD9F] transition-transform group-hover:scale-110 duration-300" />,
            title: "Mobile & Web Apps",
            link: "post/mobile-app-development",
            description: "Native and cross-platform mobile applications with cutting-edge features and seamless user experience."
        },
        {
            icon: <ShoppingCart className="h-12 w-12 text-[#01AD9F] transition-transform group-hover:scale-110 duration-300" />,
            title: "E-commerce Solutions",
            link: "/post/web-development",
            description: "Custom e-commerce platforms with secure payment integration, inventory management, and analytics."
        },
        {
            icon: <Database className="h-12 w-12 text-[#01AD9F] transition-transform group-hover:scale-110 duration-300" />,
            title: "Data Analytics & AI",
            link: "/post/web-development",
            description: "Data-driven solutions leveraging machine learning and analytics for business intelligence."
        },
        {
            icon: <ServerCog className="h-12 w-12 text-[#01AD9F] transition-transform group-hover:scale-110 duration-300" />,
            title: "Development Operation",
            link: "/post/devops",
            description: "Continuous integration, deployment automation, and cloud infrastructure management."
        },
        {
            icon: <Workflow className="h-12 w-12 text-[#01AD9F] transition-transform group-hover:scale-110 duration-300" />,
            title: "UI/UX Designing",
            link: "post/custom-software-solutions",
            description: "Research-driven design creating intuitive & engaging user experiences."
        },
        {
            icon: <Workflow className="h-12 w-12 text-[#01AD9F] transition-transform group-hover:scale-110 duration-300" />,
            title: "Amazon A-Z",
            link: "post/our-amazon-services",
            description: "Smart PPC optimization for maximum ROAS & marketplace growth."
        }
    ];

    return (
        <section 
            id="services-section" 
            className="mx-auto px-4 space-y-6 bg-[#111111] py-8 md:py-12 lg:py-20 overflow-hidden"
        >
            <div 
                className={`mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center transition-all duration-700 transform 
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">
                    Our Services
                </h2>
                <p className="max-w-[85%] leading-normal text-gray-400 sm:text-lg sm:leading-7">
                    Comprehensive software solutions tailored to transform your business ideas into reality.
                </p>
            </div>

            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                {services.map((service, index) => (
                    <Link href={service?.link} key={index}>
                        <div 
                            className={`group relative overflow-hidden rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] select-none 
                                hover:shadow-lg hover:shadow-teal-900/20 hover:border-[#01AD9F] p-2 transition-all duration-500 
                                transform hover:-translate-y-1 hover:scale-[1.02]
                                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="flex h-[220px] flex-col justify-between rounded-md p-6 relative z-10">
                                <div className="transform transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-white group-hover:text-[#01AD9F] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#01AD9F]/0 to-[#01AD9F]/0 
                                group-hover:from-[#01AD9F]/5 group-hover:to-transparent transition-all duration-300">
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Services;