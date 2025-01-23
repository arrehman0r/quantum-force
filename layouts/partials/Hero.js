const Hero = () => {
    return (
        <section className="relative pt-12 bg-gray-50 sm:pt-16">
            {/* Background image container with overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img 
                    className="w-full h-full object-cover opacity-10" 
                    src="https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Background" 
                />
            </div>

            {/* Content */}
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                        Redefining Innovations
                    </p>
                    <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
                        Providing AI-powered solutions and services to the world's leading businesses to redefine their objectives with automation and innovation.
                    </h1>
                    <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9 pb-12 md:pb-16">
                        <a href="/contact" title=""
                            className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">
                            Contact us
                        </a>
                        <a href="/contact"
                            className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">
                            Book a demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero