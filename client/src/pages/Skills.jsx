// src/pages/Skills.jsx

import React from 'react';
import { FaShoppingCart, FaCogs, FaPaintBrush, FaHeadset, FaChartLine } from 'react-icons/fa';
import FAQ from '../components/FAQ';

// A reusable SkillCard component to keep the code clean
const SkillCard = ({ icon, title, percentage, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="flex items-center gap-4">
      <div className="text-3xl text-blue-600">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="mt-4 text-gray-600">{description}</p>
    <div className="mt-5">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">Proficiency</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gray-800 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  </div>
);


const Skills = () => {
  const skillsData = [
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Management",
      percentage: 95,
      description: "Expertise in product sourcing, inventory management, and ensuring fast, reliable delivery for all orders."
    },
    {
      icon: <FaCogs />,
      title: "Technology & Security",
      percentage: 98,
      description: "Building a scalable and secure platform with encrypted payments and robust data protection."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      percentage: 92,
      description: "Creating an intuitive, beautiful, and easy-to-use interface for a seamless user journey with pleasure."
    },
    {
      icon: <FaHeadset />,
      title: "Customer Service",
      percentage: 96,
      description: "Providing 24/7 dedicated support and a hassle-free returns policy to ensure customer satisfaction."
    },
    {
      icon: <FaChartLine />,
      title: "Marketing & Growth",
      percentage: 88,
      description: "Implementing effective SEO and marketing strategies to maximize product visibility for our sellers."
    }
  ];

  return (
    <div className="bg-gray-50 font-sans">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Heading & Intro Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Skills & Expertise
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            We combine technology, design, and customer-centric approaches to deliver the best online shopping experience.
          </p>
        </div>

        {/* Skills Grid Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We map over the skills data to avoid repetition */}
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              percentage={skill.percentage}
              description={skill.description}
            />
          ))}
          {/* An extra empty grid item for alignment on lg screens if you have 5 items */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto mb-20">
          <p className="text-xl italic text-gray-700">
            "Our diverse skills ensure a seamless, secure, and satisfying experience for buyers and sellers alike."
          </p>
        </div>
        <FAQ/>
      </div>
    </div>
  );
};

export default Skills;