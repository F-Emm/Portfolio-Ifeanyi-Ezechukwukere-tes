
import React from 'react';

interface PlaceholderSectionProps {
  title: string;
  message: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ title, message }) => {
  return (
    <section className="py-20 bg-gray-800 odd:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">{title}</h2>
          <p className="text-lg text-gray-400 mt-2">{message}</p>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-8 text-gray-500 italic">Content for this section is coming soon.</p>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;
