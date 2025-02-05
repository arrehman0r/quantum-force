'use client';

import React, { useEffect, useState } from 'react';
import { Code2, Network, Database, Shield, Users, Workflow } from 'lucide-react';

const WebAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01AD9F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#01AD9F" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Diagonal lines */}
        {[...Array(8)].map((_, i) => (
          <g key={i} className="web-line">
            <path
              d={`M${400 + i * 50},0 L${1000},${400 + i * 50}`}
              stroke="url(#webGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
            <path
              d={`M0,${400 + i * 50} L${400 + i * 50},1000`}
              stroke="url(#webGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          </g>
        ))}
        {/* Circular connections */}
        {[...Array(4)].map((_, i) => (
          <circle
            key={i}
            cx={500}
            cy={500}
            r={80 + i * 80}
            stroke="url(#webGradient)"
            strokeWidth="0.5"
            fill="none"
            className="animate-pulse-soft"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

    const section = document.getElementById('features-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const features = [
    {
      icon: <Code2 size={48} className="text-[#01AD9F] group-hover:scale-110 transition-transform duration-300" />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies and best practices."
    },
    {
      icon: <Network size={48} className="text-[#01AD9F] group-hover:scale-110 transition-transform duration-300" />,
      title: "Scalable Architecture",
      description: "Future-proof systems that grow with your business needs."
    },
    {
      icon: <Database size={48} className="text-[#01AD9F] group-hover:scale-110 transition-transform duration-300" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights using AI/ML."
    },
    {
      icon: <Shield size={48} className="text-[#01AD9F] group-hover:scale-110 transition-transform duration-300" />,
      title: "Security First",
      description: "Enterprise-grade security with regular audits and compliance checks."
    },
    {
      icon: <Users size={48} className="text-[#01AD9F] group-hover:scale-110 transition-transform duration-300" />,
      title: "Dedicated Teams",
      description: "Skilled developers working exclusively on your project."
    },
    {
      icon: <Workflow size={48} className="text-[#01AD9F] group-hover:scale-110 transition-transform duration-300" />,
      title: "Agile Process",
      description: "Flexible development methodology with regular deliverables."
    }
  ];

  return (
    <section id="features-section" className="relative space-y-6 bg-[#111111] py-8 mx-auto md:py-12 lg:py-24 overflow-hidden">
      {/* Web Animation Background */}
      <WebAnimation />
      
      <div className={`mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center transition-all duration-700 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">
          Transform Your Business
        </h2>
        <p className="max-w-[85%] leading-normal text-gray-400 sm:text-lg sm:leading-7">
          Innovative software solutions that drive growth and efficiency
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`group relative overflow-hidden rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-2 
              hover:shadow-lg hover:shadow-teal-900/20 hover:border-[#01AD9F] 
              transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div className="flex h-[220px] flex-col justify-between rounded-md p-6 relative z-10">
              {feature.icon}
              <div className="space-y-2">
                <h3 className="font-bold text-white group-hover:text-[#01AD9F] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#01AD9F]/0 to-[#01AD9F]/0 
              group-hover:from-[#01AD9F]/5 group-hover:to-transparent transition-all duration-300">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;