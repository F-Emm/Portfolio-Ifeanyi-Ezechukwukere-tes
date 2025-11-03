import React from 'react';
import { CybersecurityIcon, ITSupportIcon, BusinessStrategyIcon } from './Icons';

const features = [
  {
    icon: <CybersecurityIcon />,
    title: 'Cybersecurity Analysis',
    description: 'Protecting digital assets through threat assessment, risk mitigation, vulnerability scanning, network security, and security awareness training.',
  },
  {
    icon: <ITSupportIcon />,
    title: 'IT Support',
    description: 'Expert-level guidance and hands-on support to keep your systems running efficiently and securely, whether servers, networks, or cloud environments.',
  },
  {
    icon: <BusinessStrategyIcon />,
    title: 'Business Strategy',
    description: 'Providing services that help you make informed decisions, improve efficiency, and build for the future with a deep background in tech and business ops.',
  },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-2 transition-all duration-300 group">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <div className="mt-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Learn More &rarr;
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">What I Do</h2>
          <p className="text-lg text-gray-400 mt-2">Services I provide to help your business grow.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;