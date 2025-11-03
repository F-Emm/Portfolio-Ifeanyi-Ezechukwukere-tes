
import React from 'react';
import { SocialIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Contact Me</h2>
          <p className="text-lg text-gray-400 mt-2">Let's connect and build something great together.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-4 text-gray-400">
                <p>
                    <strong>Ifeanyi David Ebere Ezechukwukere</strong><br/>
                    Cybersecurity Analyst & Risk Consultant
                </p>
                <p>
                    I am available for freelance work and full-time opportunities. Connect with me via phone or email.
                </p>
                <p>
                    <strong>Phone:</strong><br/> +2348037066747 <br/> +2348119191237
                </p>
                <p>
                    <strong>Email:</strong><br/> 
                    <a href="mailto:ifeanyidavid2@gmail.com" className="text-indigo-400 hover:underline">ifeanyidavid2@gmail.com</a>
                </p>
                <p>
                    <strong>Location:</strong><br/> Rivers State, Nigeria
                </p>
            </div>
             <div className="mt-6">
                <h4 className="font-semibold text-white mb-2">Find me on</h4>
                <div className="flex space-x-4">
                    <SocialIcon href="https://www.linkedin.com/in/ifeanyi-davidezechukwukere" />
                </div>
            </div>
          </div>
          <div className="lg:w-2/3 bg-gray-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Project Inquiry" />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your message here..."></textarea>
              </div>
              <div className="mt-6">
                 <button type="submit" className="w-full px-8 py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300">
                    Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
