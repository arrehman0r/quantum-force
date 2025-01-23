import React from 'react';
import {
    Code2,
    Globe,
    ShoppingCart,
    Database,
    ServerCog,
    Workflow, // or Workflow, depending on which icon you prefer
} from 'lucide-react';
const Services = () => {
    const services = [
        {
            icon: <Code2 className="h-12 w-12" />,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications with cutting-edge features and seamless user experience."
        },
        {
            icon: <Globe className="h-12 w-12" />,
            title: "Website Development",
            description: "Responsive websites and progressive web apps using modern frameworks and best practices."
        },
        {
            icon: <ShoppingCart className="h-12 w-12" />,
            title: "E-commerce Solutions",
            description: "Custom e-commerce platforms with secure payment integration, inventory management, and analytics."
        },
        {
            icon: <Database className="h-12 w-12" />,
            title: "Data Analytics & AI",
            description: "Data-driven solutions leveraging machine learning and analytics for business intelligence."
        },
        {
            icon: <ServerCog className="h-12 w-12" />,
            title: "Development Operation",
            description: "Continuous integration, deployment automation, and cloud infrastructure management."
        },
        {
            icon: <Workflow className="h-12 w-12" />,
            title: "Custom Software Solutions",
            description: "Tailored software solutions designed to meet your specific business requirements and goals."
        }
    ];

    return (
        <section id="features" className="mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our Services</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Comprehensive software solutions tailored to transform your business ideas into reality.
                </p>
            </div>

            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                {services.map((service, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            {service.icon}
                            <div className="space-y-2">
                                <h3 className="font-bold">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services