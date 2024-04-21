import React from 'react';
import { Link } from 'react-router-dom';

const serviceList = [
  'University Selection',
  'Scholarship Guidance',
  'Visa Application Support',
];

const aboutList = ['About Us', 'Our Team', 'History'];

const supportList = ['FAQs', 'Contact', 'Live Chat'];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest educational opportunities?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {' '}
                Email{' '}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@example.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
            Aarush International Education Private Limited is an educational consultancy located in Kathmandu, Nepal. We
              provide comprehensive guidance and support to students aspiring to study abroad in countries.
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {/* Social media links */}
              <Link to="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Facebook SVG code */}
                </svg>
              </Link>
              {/* Other social media links */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>
              <ul className="mt-6 space-y-1">
                {serviceList.map((item, index) => (
                  <li key={index}>
                    <Link to="#" className="text-gray-700 transition hover:text-gray-700/75">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>
              <ul className="mt-6 space-y-1">
                {aboutList.map((item, index) => (
                  <li key={index}>
                    <Link to="#" className="text-gray-700 transition hover:text-gray-700/75">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>
              <ul className="mt-6 space-y-1">
                {supportList.map((item, index) => (
                  <li key={index}>
                    <Link to="#" className="text-gray-700 transition hover:text-gray-700/75">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Aarush International Education Private Limited 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;