import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'United International University',
      year: '2024',
      description: 'Focused on software engineering, web development, and algorithms.',
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'ABC College',
      year: '2017',
      description: 'Majored in Science.',
    },
    {
        degree: 'Higher Secondary Certificate',
        institution: 'ABC College',
        year: '2017',
        description: 'Majored in Science.',
      },
      {
        degree: 'Higher Secondary Certificate',
        institution: 'ABC College',
        year: '2017',
        description: 'Majored in Science.',
      },
 
  ];

  return (
    <section className="bg-transparent py-10 mt-24" id="education" >
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {educationDetails.map((edu, index) => (
            <div key={index} className="bg-transparent p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <span className="block text-gray-500 mb-2">{edu.year}</span>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;