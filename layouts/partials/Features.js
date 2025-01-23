import React from 'react';
import { Code2, Network, Database, Shield, Users, Workflow } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code2 size={48} />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies and best practices."
    },
    {
      icon: <Network size={48} />,
      title: "Scalable Architecture",
      description: "Future-proof systems that grow with your business needs."
    },
    {
      icon: <Database size={48} />,
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights using AI/ML."
    },
    {
      icon: <Shield size={48} />,
      title: "Security First",
      description: "Enterprise-grade security with regular audits and compliance checks."
    },
    {
      icon: <Users size={48} />,
      title: "Dedicated Teams",
      description: "Skilled developers working exclusively on your project."
    },
    {
      icon: <Workflow size={48} />,
      title: "Agile Process",
      description: "Flexible development methodology with regular deliverables."
    }
  ];

  return (
    <section id="features" className=" space-y-6 bg-slate-50 py-8 mx-auto md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Transform Your Business
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Innovative software solutions that drive growth and efficiency
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              {feature.icon}
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;