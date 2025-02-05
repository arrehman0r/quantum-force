'use client';

const WebAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01AD9F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#01AD9F" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Generate web lines */}
        {[...Array(10)].map((_, i) => (
          <g key={i} className="web-line animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
            <path
              d={`M${500 + i * 50},0 L${1000},${500 + i * 50}`}
              stroke="url(#webGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
            <path
              d={`M0,${500 + i * 50} L${500 + i * 50},1000`}
              stroke="url(#webGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-draw"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          </g>
        ))}
        {/* Circular connections */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx={500}
            cy={500}
            r={100 + i * 100}
            stroke="url(#webGradient)"
            strokeWidth="0.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-12 bg-[#111111] sm:pt-16">
      {/* Background image container with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          className="w-full h-full object-cover opacity-5" 
          src="https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Background" 
        />
        <div className="absolute inset-0 bg-[#111111] opacity-60"></div>
      </div>

      {/* Web Animation */}
      <WebAnimation />

      {/* Content */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight animate-fade-up">
            Redefining Innovations
          </p>
          <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-400 font-inter animate-fade-up" style={{ animationDelay: '200ms' }}>
            Providing AI-powered solutions and services to the world's leading businesses to redefine their objectives with automation and innovation.
          </h1>
          <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9 pb-12 md:pb-16 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="/contact" 
              title=""
              className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-[#01AD9F] border-2 border-transparent sm:w-auto rounded-xl hover:bg-[#018F84] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01AD9F]"
              role="button"
            >
              Contact us
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-[#01AD9F] hover:text-white transition-all duration-200 bg-[#1A1A1A] border-2 border-[#01AD9F] sm:w-auto rounded-xl hover:bg-[#018F84] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01AD9F]"
              role="button"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;