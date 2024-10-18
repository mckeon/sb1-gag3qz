import React from 'react';
import { Code, Users, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CodeCraft Consultancy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We craft innovative software solutions to empower your business in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Code className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Expert Development</h2>
          <p className="text-gray-600">
            Our team of skilled developers brings your ideas to life with clean, efficient code.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Collaborative Approach</h2>
          <p className="text-gray-600">
            We work closely with you to ensure your vision is realized in every project.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Cutting-edge Solutions</h2>
          <p className="text-gray-600">
            Stay ahead with our innovative approaches to software development.
          </p>
        </div>
      </div>

      <div className="bg-indigo-700 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
        <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals.</p>
        <a href="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-indigo-100 transition duration-300">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Home;