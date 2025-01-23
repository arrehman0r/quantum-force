
const FAQs = () => {
    return (
      <div className="relative w-full bg-slate-50 px-6 pt-10 pb-8 mt-16 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequently asked questions</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            {[
              {
                q: "What types of businesses do you work with?",
                a: "We work with businesses of all sizes, from startups to enterprises, across various industries including e-commerce, healthcare, finance, and technology sectors."
              },
              {
                q: "What is your development process?",
                a: "We follow an agile methodology with regular sprints, client check-ins, and iterative development. This ensures transparency and allows for feedback throughout the project lifecycle."
              },
              {
                q: "Do you provide post-development support?",
                a: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, updates, security patches, and feature enhancements."
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity. Simple websites take 4-8 weeks, while complex applications may take 3-6 months. We'll provide a detailed timeline during project scoping."
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes, we sign NDAs to protect your intellectual property and ensure confidentiality throughout our collaboration."
              },
              {
                q: "What technologies do you specialize in?",
                a: "We specialize in modern tech stacks including React, Node.js, Python, AWS, and various cloud services. We choose the best technology based on your project needs."
              }
            ].map((item, i) => (
              <div key={i} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>{item.q}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" 
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">{item.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default FAQs