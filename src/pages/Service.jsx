import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobe, FaUserGraduate, FaBookReader, FaFileAlt, FaPlaneDeparture } from 'react-icons/fa';

const services = [
  {
    icon: <FaGraduationCap className="text-blue-600" />,
    title: 'Study Abroad',
    description: 'Assist with university selection, application process, and admission guidance.',
  },
  {
    icon: <FaGlobe className="text-blue-600" />,
    title: 'Visa Assistance',
    description: 'Provide support with visa application process and documentation.',
  },
  {
    icon: <FaUserGraduate className="text-blue-600" />,
    title: 'Career Counseling',
    description: 'Offer personalized guidance for academic and career path planning.',
  },
  {
    icon: <FaBookReader className="text-blue-600" />,
    title: 'Test Preparation',
    description: 'Offer classes for TOEFL, IELTS, SAT, GRE, and GMAT exams.',
  },
  {
    icon: <FaFileAlt className="text-blue-600" />,
    title: 'Financial Documentation',
    description: 'Assist with financial documentation and scholarship guidance.',
  },
  {
    icon: <FaPlaneDeparture className="text-blue-600" />,
    title: 'Travel Assistance',
    description: 'Provide guidance for travel arrangements and accommodation.',
  },
];

const ServicesSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 sm:text-4xl">Our Services</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
        Aarush International Education Private Limited provides a comprehensive range of services to assist students in their
          academic journey.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;