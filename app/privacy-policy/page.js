import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <div className="space-y-4 text-gray-600">
            <h3 className="font-semibold text-black">1.1 Personal Information</h3>
            <p>When you use our services, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Business details</li>
              <li>Payment information</li>
              <li>Project requirements and specifications</li>
            </ul>
            
            <h3 className="font-semibold text-black">1.2 Technical Data</h3>
            <p>We automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Usage data and interaction with our services</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <div className="space-y-4 text-gray-600">
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process payments and transactions</li>
              <li>Communicate about projects and updates</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <div className="space-y-4 text-gray-600">
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage and transmission</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
          <div className="space-y-4 text-gray-600">
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers and partners</li>
              <li>Legal authorities when required</li>
              <li>Third parties with your consent</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <div className="space-y-4 text-gray-600">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data correction</li>
              <li>Request data deletion</li>
              <li>Withdraw consent</li>
              <li>Object to data processing</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <div className="space-y-4 text-gray-600">
            <p>For privacy-related inquiries, contact us at:</p>
            <div className="bg-gray-50 p-4 rounded">
              <p>Email: privacy@quantumforce.dev</p>
              <p>Address: 721 Tech Street, AWT, Lahore, Pakistan</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
          <div className="space-y-4 text-gray-600">
            <p>We may update this privacy policy periodically. Last updated: January 2024</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;