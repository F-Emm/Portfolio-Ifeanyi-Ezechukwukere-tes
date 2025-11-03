
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PlaceholderSection from './components/PlaceholderSection';

const App: React.FC = () => {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    resume: useRef<HTMLDivElement>(null),
    testimonial: useRef<HTMLDivElement>(null),
    clients: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 font-sans leading-relaxed text-gray-300">
      <Header scrollToSection={scrollToSection} />
      <main>
        <div ref={sections.home}>
          <Hero scrollToContacts={() => scrollToSection('contacts')} />
        </div>
        <div ref={sections.features}>
          <Features />
        </div>
        <div ref={sections.portfolio}>
          <Portfolio />
        </div>
        <div ref={sections.resume}>
          <Resume />
        </div>
        <div ref={sections.testimonial}>
          <PlaceholderSection title="Testimonial" message="What clients are saying about my work." />
        </div>
        <div ref={sections.clients}>
           <PlaceholderSection title="Clients" message="I've had the pleasure of working with these amazing companies." />
        </div>
        <div ref={sections.pricing}>
           <PlaceholderSection title="Pricing" message="Flexible pricing plans to suit your needs." />
        </div>
        <div ref={sections.blog}>
           <PlaceholderSection title="Blog" message="My latest thoughts and articles on tech and security." />
        </div>
        <div ref={sections.contacts}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
