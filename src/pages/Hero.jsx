import React, { useState } from 'react';
import { FaGraduationCap, FaGlobe, FaUserGraduate } from 'react-icons/fa';
import FormComponent from './form';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-blue-800 sm:text-6xl">
              <span className="block">Aarush International Education</span>
              <span className="block">Private Limited</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your Gateway to Global Education Opportunities
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <FaGraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                <p className="text-gray-700">Personalized Guidance for Academic Success</p>
              </div>
              <div className="flex items-center">
                <FaGlobe className="w-6 h-6 text-blue-600 mr-2" />
                <p className="text-gray-700">Connecting Students with Top Universities Worldwide</p>
              </div>
              <div className="flex items-center">
                <FaUserGraduate className="w-6 h-6 text-blue-600 mr-2" />
                <p className="text-gray-700">Empowering Students to Achieve Their Dreams</p>
              </div>
            </div>
            <div className="mt-8">
              {/* <button
                onClick={handleFormOpen}
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Schedule a Consultation
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button> */}
            </div>
          </div>
          <div>
            <img
              src="/arushHero.jpeg"
              alt="Graduation Illustration"
              className="w-full h-auto rounded-lg border-red-300 border-4"
            />
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-4xl mx-auto bg-white rounded-lg">
            <div className="px-6 py-4">
              <button
                onClick={handleFormClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-8 py-6">
              <FormComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;