import React from 'react';
import { Medal, Target, Users } from 'lucide-react';
import SeoMeta from '@layouts/partials/SeoMeta';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <SeoMeta title="Quantum Force | About Us" />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Quantum Force</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since 2015, we&apos;ve been transforming ideas into powerful digital solutions,
              serving over 200+ clients across 20 countries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-secondary" />
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower businesses through innovative software solutions that drive
                growth and create lasting impact in the digital landscape.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Medal className="w-6 h-6 text-secondary" />
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the global leader in delivering transformative digital solutions
                that shape the future of technology and business.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Leadership Team</h3>
            <p className="text-gray-600 mb-8">
              Backed by decades of combined experience in software development and innovation
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Thompson",
                  role: "Chief Executive Officer",
                  image: "/api/placeholder/400/400"
                },
                {
                  name: "Sarah Chen",
                  role: "Chief Technology Officer",
                  image: "/api/placeholder/400/400"
                },
                {
                  name: "Michael Ross",
                  role: "Head of Innovation",
                  image: "/api/placeholder/400/400"
                }
              ].map((member, index) => (
                <div key={index} className="text-center bg-slate-50 hover:shadow-xl transition-shadow rounded-lg p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Clients Worldwide" },
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Expert Developers" },
              { number: "8+", label: "Years Experience" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow"
                aria-label={`${stat.number} ${stat.label}`}
              >
                <h4 className="text-3xl font-bold text-secondary mb-2">{stat.number}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;