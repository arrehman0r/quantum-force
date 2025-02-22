'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FloatingElement = ({ children, delay = 0, yOffset = 20 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    gsap.to(element, {
      y: yOffset,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: delay
    });
  }, [delay, yOffset]);

  return <div ref={elementRef}>{children}</div>;
};

const SpiderWebAnimation = () => {
  const webRef = useRef(null);

  useEffect(() => {
    const paths = webRef.current.querySelectorAll('path');
    const circles = webRef.current.querySelectorAll('circle');

    gsap.fromTo(paths, 
      { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 },
      { 
        strokeDashoffset: 0,
        opacity: 0.3,
        duration: 2,
        stagger: 0.1,
        ease: "power2.inOut"
      }
    );

    gsap.fromTo(circles,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 0.6,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );

    circles.forEach((circle, i) => {
      gsap.to(circle, {
        scale: 1.5,
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });
  }, []);

  const points = [
    { x: 200, y: 100 }, { x: 800, y: 100 },
    { x: 100, y: 500 }, { x: 900, y: 500 },
    { x: 200, y: 900 }, { x: 800, y: 900 },
    { x: 500, y: 500 }, // Center point
    { x: 300, y: 300 }, { x: 700, y: 300 }, // Additional points
    { x: 300, y: 700 }, { x: 700, y: 700 }
  ];

  const generateWebLines = () => {
    const lines = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (Math.random() > 0.3) {
          lines.push({
            id: `line-${i}-${j}`,
            x1: points[i].x,
            y1: points[i].y,
            x2: points[j].x,
            y2: points[j].y
          });
        }
      }
    }
    return lines;
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg ref={webRef} className="absolute w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01AD9F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#01AD9F" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {generateWebLines().map((line) => (
          <path
            key={line.id}
            d={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
            stroke="url(#webGradient)"
            strokeWidth="0.5"
            fill="none"
          />
        ))}

        {points.map((point, i) => (
          <circle
            key={`point-${i}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#01AD9F"
          />
        ))}
      </svg>
    </div>
  );
};

const Hero = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.fromTo(titleRef.current,
      { 
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );

    gsap.fromTo(contentRef.current,
      { 
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }
    );

    gsap.fromTo(".hero-button",
      { 
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      }
    );

    gsap.fromTo(statsRef.current.children,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen pt-24 pb-32 overflow-hidden bg-[#111111]"
    >
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#01AD9F]/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#01AD9F]/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0} yOffset={30}>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-[#01AD9F]/30 to-transparent rounded-full blur-sm"></div>
        </FloatingElement>
        <FloatingElement delay={0.5} yOffset={-20}>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-[#01AD9F]/20 to-transparent rounded-full blur-sm"></div>
        </FloatingElement>
        <FloatingElement delay={1} yOffset={25}>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-[#01AD9F]/25 to-transparent rounded-full blur-sm"></div>
        </FloatingElement>
      </div>

      {/* Spider Web Animation */}
      <SpiderWebAnimation />

      {/* Content */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mt-20 md:mt-32">
          <h1 
            ref={titleRef}
            className="max-w-4xl mx-auto mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Redefining Innovations
          </h1>
          <p 
            ref={contentRef}
            className="max-w-2xl mx-auto px-6 text-xl text-gray-400 font-inter mb-12"
          >
            Providing AI-powered solutions and services to the world's leading businesses to redefine their objectives with automation and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/contact" 
              className="hero-button w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#01AD9F] to-[#018F84] border-2 border-transparent rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#01AD9F]/20"
              role="button"
            >
              Contact us
            </a>
            <a 
              href="/contact"
              className="hero-button w-full sm:w-auto px-8 py-4 text-lg font-bold text-[#01AD9F] bg-[#1A1A1A] border-2 border-[#01AD9F] rounded-xl hover:bg-[#01AD9F] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              role="button"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "50+", label: "Global Partners" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#1A1A1A] to-[#1A1A1A]/80 rounded-xl border border-[#01AD9F]/20 hover:border-[#01AD9F]/40 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold text-[#01AD9F] mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;