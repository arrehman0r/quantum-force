"use client"
import React, { useState } from "react";
import { markdownify } from "@lib/utils/textConverter";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}wp-json/contact-form-7/v1/contact-forms/6490982/feedback`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      if (data.status === 'mail_sent') {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section bg-[#111111]">
      <div className="container max-w-[700px]">
        {markdownify(
          "Contact Quantum Force", 
          "h1", 
          "h2 mb-8 text-center text-white"
        )}
        <form
          className="contact-form"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="mb-2 block text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              className="form-input w-full bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-gray-500 focus:border-[#01AD9F] focus:ring-1 focus:ring-[#01AD9F] rounded-lg"
              name="name"
              type="text"
              required
              disabled={submitting}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-gray-500 focus:border-[#01AD9F] focus:ring-1 focus:ring-[#01AD9F] rounded-lg"
              name="email"
              type="email"
              required
              disabled={submitting}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-gray-300" htmlFor="subject">
              Subject
            </label>
            <input
              className="form-input w-full bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-gray-500 focus:border-[#01AD9F] focus:ring-1 focus:ring-[#01AD9F] rounded-lg"
              name="subject"
              type="text"
              required
              disabled={submitting}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-textarea w-full bg-[#1A1A1A] border-[#2A2A2A] text-white placeholder-gray-500 focus:border-[#01AD9F] focus:ring-1 focus:ring-[#01AD9F] rounded-lg"
              name="message"
              rows="7"
              required
              disabled={submitting}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="mb-4 text-green-400">
              Message sent successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 text-red-400">
              Error sending message. Please try again.
            </div>
          )}

          <button
            className={`inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-[#01AD9F] border-2 border-transparent rounded-xl hover:bg-[#018F84] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01AD9F] ${
              submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Submit Now'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;